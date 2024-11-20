'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-violet-400">Something went wrong!</h1>
        <p className="text-gray-400 text-lg">
          We apologize for the inconvenience. Please try again later.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-violet-500 hover:bg-violet-600 rounded-lg transition-colors"
          >
            Try again
          </button>
          <a
            href="/works"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
          >
            Back to Gallery
          </a>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 p-4 bg-gray-800 rounded-lg text-left">
            <p className="text-red-400 font-mono text-sm">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
