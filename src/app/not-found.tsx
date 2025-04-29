"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      data-testid="not-found-page"
    >
      <h1 className="text-4xl font-bold mb-4" data-testid="not-found-title">
        404 - Page not found
      </h1>
      <p
        className="mb-8 text-lg text-center"
        data-testid="not-found-description"
      >
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-primary text-white rounded"
        data-testid="not-found-home-link"
      >
        Go back to home
      </Link>
    </div>
  );
}
