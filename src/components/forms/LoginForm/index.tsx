"use client";

import { Form, Formik, Field, ErrorMessage } from "formik";
import { loginSchema } from "./schema";
import { Button } from "@/components/ui/Button/Button";

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => Promise<void>;
  externalError?: string;
  testIds?: {
    form?: string;
    emailInput?: string;
    emailError?: string;
    passwordInput?: string;
    passwordError?: string;
    submitButton?: string;
    externalError?: string;
  };
}

export const LoginForm = ({
  onSubmit,
  externalError,
  testIds = {},
}: LoginFormProps) => {
  const {
    form = "login-form",
    emailInput = "email-input",
    emailError = "email-error",
    passwordInput = "password-input",
    passwordError = "password-error",
    submitButton = "submit-button",
    externalError: externalErrorTestId = "external-error",
  } = testIds;

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-4 p-8 rounded" data-testid={form}>
          {externalError && (
            <div
              className="text-red-500 text-sm mb-2"
              data-testid={externalErrorTestId}
            >
              {externalError}
            </div>
          )}

          <div className="flex flex-col">
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
              data-testid={emailInput}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
              data-testid={emailError}
            />
          </div>

          <div className="flex flex-col">
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
              data-testid={passwordInput}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
              data-testid={passwordError}
            />
          </div>

          <Button
            type="submit"
            isLoading={isSubmitting}
            data-testid={submitButton}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
