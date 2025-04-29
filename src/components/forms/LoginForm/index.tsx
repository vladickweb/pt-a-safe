"use client";

import { Form, Formik, Field, ErrorMessage } from "formik";
import { loginSchema } from "./schema";
import { Button } from "@/components/ui/Button/Button";
import { useRouter } from "next/navigation";
interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => Promise<void>;
  externalError?: string;
  testId?: string;
}

export const LoginForm = ({
  onSubmit,
  externalError,
  testId,
}: LoginFormProps) => {
  const router = useRouter();

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
        <Form className="flex flex-col gap-4 p-8 rounded" data-testid={testId}>
          {externalError && (
            <div
              className="text-red-500 text-sm mb-2"
              data-testid={`${testId}-external-error`}
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
              data-testid={`${testId}-email-input`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
              data-testid={`${testId}-email-error`}
            />
          </div>

          <div className="flex flex-col">
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
              data-testid={`${testId}-password-input`}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
              data-testid={`${testId}-password-error`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Button
              type="submit"
              isLoading={isSubmitting}
              data-testid={`${testId}-submit-button`}
            >
              Login
            </Button>

            <Button
              variant="ghost"
              onClick={() => {
                router.push("/");
              }}
              type="button"
            >
              Go back to home
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
