import React, { FC, useEffect } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { SubscriptionFormValidation } from "@/FormValidations/SubscriptionFormValidation";
import TextField from "@/@shared/ui-components/Input/TextField";
import Button from "@/@shared/ui-components/Button";
import { useSubscribeMutation } from "@/api-services/news-insight.service";
import { toast } from "react-toastify";

const initialValues = {
  email: "",
};

const SubscriptionCard: FC = () => {
  const [subscribe, { isSuccess }] = useSubscribeMutation();

  const formik = useFormik({
    initialValues,
    validationSchema: SubscriptionFormValidation,
    onSubmit: (values) => {
      subscribe(values);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("You have successfully subscribed to the news letter!");
      formik.resetForm();
    }
  }, [isSuccess]);

  return (
    <div className="w-full h-fit rounded-xl max-w-[350px] bg-[#020228] flex flex-col py-10 px-[75px] gap-3">
      <h4 className="text-white text-center text-lg font-semibold">
        Stay in the loop
      </h4>
      <p className="text-white text-center text-base">
        Get notified on new insights
      </p>

      <div>
        <FormikProvider value={formik}>
          <Form>
            <TextField
              label="Email address"
              {...formik.getFieldProps("email")}
              placeholder="Email address"
              error={formik.touched.email ? formik.errors.email : undefined}
            />

            <Button
              title="Subscribe"
              type="submit"
              fullWidth
              className="mt-4"
            />
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default SubscriptionCard;
