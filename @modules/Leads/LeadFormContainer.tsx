import React, { FC, useEffect, useState } from "react";
import Button from "@/@shared/ui-components/Button";
import TextField from "@/@shared/ui-components/Input/TextField";
import TextArea from "@/@shared/ui-components/Input/TextArea";
import Checkbox from "@/@shared/ui-components/Input/Checkbox/Checkbox";
import { toast } from "react-toastify";
import { Form, FormikProvider, useFormik } from "formik";
import { LeadsFormValidation } from "@/FormValidations/LeadsFormValidation";
import { useMakeBusinessEnquiryMutation } from "@/api-services/business-enquiry.service";
import { ServicesEnum } from "@/models/business-enquiry";
import { useRouter } from "next/router";
import { NavLinks } from "@/@shared/constants";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  description: "",
};

const LeadFormContainer: FC = () => {
  const [service, setService] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [makeEnquiry, { isLoading, isSuccess, error }] =
    useMakeBusinessEnquiryMutation();
  const router = useRouter();

  const servicesMapping = {
    "Data & Analytics": ServicesEnum.Data_Analytics,
    "UX/SEO": ServicesEnum.UX_SEO,
    "Social Media Management": ServicesEnum.SOCIAL_MEDIA_MANAGEMENT,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LeadsFormValidation,
    onSubmit: (values) => {
      const extrValidationChecks = [
        { value: service, message: "Please select a service" },
        { value: termsAccepted, message: "Please accept terms to proceed" },
      ];

      const invalidField = extrValidationChecks.find(
        (validation) => !Boolean(validation.value)
      );

      if (invalidField) {
        toast.error(invalidField.message);

        return;
      }

      // submit form here
      makeEnquiry({
        email: values.email,
        enquiry: values.description,
        firstName: values.firstName,
        lastName: values.lastName,
        phone: values.phone || "",
        service: servicesMapping[service as keyof typeof servicesMapping],
      });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
      router.push(NavLinks.salesDiscoveryCall.subLinks.submitSuccess.link);
    }
  }, [isSuccess]);

  return (
    <FormikProvider value={formik}>
      <Form>
        <div>
          <section className="bg-[#020228] mx-auto w-full max-w-[900px] rounded-xl p-8 max-md:px-4 max-sm:px-3 mb-20 text-white">
            <p className="font-semibold mb-8">
              Tell us what service you're looking into{" "}
              <span className="!text-red-700">*</span>
            </p>

            <div className="flex flex-col gap-6 mt-8">
              {Object.keys(servicesMapping).map((item, idx) => {
                return (
                  <Checkbox
                    onChange={() => {
                      setService(item);
                    }}
                    checked={service === item}
                    label={item}
                    key={idx}
                  />
                );
              })}
            </div>

            <p className="font-semibold mt-16">
              Tell us about yourself and your business
            </p>

            <div className="py-4 mb-4 grid grid-cols-2 gap-6 gap-x-16 max-md:grid-cols-1">
              <TextField
                label="First Name"
                isRequired
                {...formik.getFieldProps("firstName")}
                error={
                  formik.touched.firstName ? formik.errors.firstName : undefined
                }
              />
              <TextField
                label="Last Name"
                isRequired
                {...formik.getFieldProps("lastName")}
                error={
                  formik.touched.lastName ? formik.errors.lastName : undefined
                }
              />
              <TextField
                label="Business Email"
                isRequired
                {...formik.getFieldProps("email")}
                error={formik.touched.email ? formik.errors.email : undefined}
              />
              <TextField
                label="Phone number"
                isRequired
                {...formik.getFieldProps("phone")}
                error={formik.touched.phone ? formik.errors.phone : undefined}
              />
            </div>
            <TextArea
              label="What else should we know"
              isRequired
              placeholder="Please briefly describe your project or ask us anything"
              rows={12}
              {...formik.getFieldProps("description")}
              error={
                formik.touched.description
                  ? formik.errors.description
                  : undefined
              }
            />

            <div className="mb-8 mt-10 w-full mx-auto max-w-[280px] max-sm:max-w-[100%]">
              <Checkbox
                label="I agree with Keyvar Privacy & Policy"
                checked={termsAccepted === true}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
            </div>
          </section>

          <div className="w-full mx-auto max-w-[300px]">
            <Button
              title="Send Application"
              type="submit"
              disabled={isLoading}
              fullWidth
            />
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default LeadFormContainer;
