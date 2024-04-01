import React, { FC, useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import Button from "@/@shared/ui-components/Button";
import TextField from "@/@shared/ui-components/Input/TextField";
import TextArea from "@/@shared/ui-components/Input/TextArea";
import FileAttachmentInput from "@/@shared/ui-components/Input/FileAttachmentInput";
import DropDown from "@/@shared/ui-components/Input/DropDown";
import Checkbox from "@/@shared/ui-components/Input/Checkbox/Checkbox";
import { toast } from "react-toastify";
import { JobApplicationFormValidation } from "@/FormValidations/JobApplicationFormValidation";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  experience: "",
  isAuthorized: "",
};

const workAuthorizationOptions = [
  { label: "Yes", value: "1" },
  { label: "No", value: "0" },
];

const JobApplicationForm: FC = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [role, setRole] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema: JobApplicationFormValidation,
    onSubmit: (values) => {
      const extrValidationChecks = [
        { value: role, message: "Select a valid role" },
        { value: resume, message: "Please upload a resume" },
        { value: termsAccepted, message: "Please accept terms to proceed" },
      ];

      const invalidField = extrValidationChecks.find(
        (validation) => !Boolean(validation.value)
      );

      if (invalidField) {
        console.log(invalidField.message);
        toast.error(invalidField.message);

        return;
      }

      // send value to parent component and handle submission there
      console.log(values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <div>
          <section className="bg-[#020228] mx-auto w-full max-w-[900px] rounded-xl p-8 max-md:px-4 mb-20 text-white">
            <p className="font-semibold mb-8">
              Tell us what role you're looking into{" "}
              <span className="!text-red-700">*</span>
            </p>
            <div className="flex flex-col gap-6 mt-8">
              {[
                "Digital Marketing Strategist",
                "Content Marketing Specialist",
                "Marketing Data Scientist",
                "Graphic Designer",
              ].map((item, idx) => {
                return (
                  <Checkbox
                    onChange={() => {
                      setRole(item);
                    }}
                    checked={role === item}
                    label={item}
                    key={idx}
                  />
                );
              })}
            </div>

            <p className="font-semibold mt-16">Tell us about yourself</p>

            <div className="py-4 grid grid-cols-2 gap-6 gap-x-16 max-md:grid-cols-1">
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
                label="Email"
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
              label="Experience"
              isRequired
              placeholder="Please briefly describe your project or ask us anything"
              rows={12}
              {...formik.getFieldProps("experience")}
              error={
                formik.touched.experience ? formik.errors.experience : undefined
              }
            />

            <div className="my-8 w-full max-w-[280px] max-sm:max-w-[100%]">
              <FileAttachmentInput
                attachedFile={resume}
                label="Resume/CV"
                isRequired
                handleSelectFile={(file) => {
                  setResume(() => file);
                }}
                handleDeleteFile={() => {
                  setResume(() => null);
                }}
              />
            </div>

            <div className="my-8 w-full max-w-[280px] max-sm:max-w-[100%]">
              <DropDown
                label="Are you legally eligible/authorized to work in the country?"
                isRequired
                options={workAuthorizationOptions}
                {...formik.getFieldProps("isAuthorized")}
              />
            </div>

            <div className="mb-8 mt-24 w-full mx-auto max-w-[280px] max-sm:max-w-[100%]">
              <Checkbox
                label="I agree with Keyvar Privacy & Policy"
                checked={termsAccepted === true}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
            </div>
          </section>

          <div className="w-full mx-auto max-w-[300px]">
            <Button title="Send Application" type="submit" fullWidth />
          </div>
        </div>
      </Form>
    </FormikProvider>
  );
};

export default JobApplicationForm;
