"use client";

import { Form, Formik, Field, ErrorMessage } from "formik";
import { loginSchema } from "./schema";

interface LoginFormProps {
  onSubmit: (values: { email: string; password: string }) => Promise<void>;
  externalError?: string;
}

export const LoginForm = ({ onSubmit, externalError }: LoginFormProps) => {
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
        <Form className="flex flex-col gap-4 p-8 rounded shadow-md">
          {externalError && (
            <div className="text-red-500 text-sm mb-2">{externalError}</div>
          )}

          <div className="flex flex-col">
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div className="flex flex-col">
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
