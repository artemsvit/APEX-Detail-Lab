import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-violet-400">Work Not Found</h1>
        <p className="text-gray-400 text-lg">
          Sorry, we couldn't find the work item you're looking for.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/works"
            className="px-6 py-3 bg-violet-500 hover:bg-violet-600 rounded-lg transition-colors"
          >
            Back to Gallery
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
