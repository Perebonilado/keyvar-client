import Container from "@/@shared/ui-components/Container";
import React, { FC } from "react";
const initialValues = {
  email: "",
};

import { useFormik, FormikProvider, Form } from "formik";
import { SubscriptionFormValidation } from "@/FormValidations/SubscriptionFormValidation";
import TextField from "@/@shared/ui-components/Input/TextField";
import Button from "@/@shared/ui-components/Button";
import ArrowRight from "@/icons/ArrowRight";
import ErrorMessage from "@/@shared/ui-components/ErrorMessage/ErrorMessage";

const NotificationBar: FC = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: SubscriptionFormValidation,
    onSubmit: (values) => {},
  });

  return (
    <section className="bg-[#020228] py-24">
      <Container>
        <div className="flex items-center max-md:flex-col">
          <div
            style={{ flex: 1 }}
            className="text-white font-semibold w-full max-md:mb-5"
          >
            <h2 className="text-2xl">Keyvar Blog</h2>
            <p className="text-sm mt-3">
              Get notified when we share new insights
            </p>
          </div>
          <div
            style={{ flex: 1 }}
            className="flex items-center justify-end max-md:justify-start w-full max-w-[350px]"
          >
            <div className="w-full">
              <FormikProvider value={formik}>
                <Form>
                  <label className={`text-white text-sm font-semibold mb-2`}>
                    Email
                  </label>
                  <div>
                    <div className="flex items-center mt-2">
                      <TextField
                        {...formik.getFieldProps("email")}
                        placeholder="Email address"
                        className="min-h-[20px] text-black flex m-0 placeholder:text-gray-400 placeholder:text-sm px-4 py-1 outline-none bg-white border-none"
                      />
                      <Button
                        title=""
                        starticon={<ArrowRight />}
                        className="!rounded-none h-[33px]"
                      />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <ErrorMessage message={formik.errors.email} />
                    )}
                  </div>
                </Form>
              </FormikProvider>
              <p className="text-[#7D7D7D] text-xs mt-4">
                You may opt out of these communications at any time. For more
                information, check out our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotificationBar;
