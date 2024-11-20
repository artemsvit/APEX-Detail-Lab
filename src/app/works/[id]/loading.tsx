export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8 animate-pulse">
      {/* Category and Title */}
      <div className="space-y-4">
        <div className="h-6 w-24 bg-violet-400/20 rounded" />
        <div className="h-10 w-3/4 bg-gray-700 rounded" />
        <div className="h-4 w-48 bg-gray-600 rounded" />
      </div>

      {/* Main Image */}
      <div className="relative h-96 bg-gray-700 rounded-lg" />

      {/* Project Overview */}
      <div className="space-y-4">
        <div className="h-8 w-48 bg-gray-700 rounded" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-600 rounded" />
          <div className="h-4 w-5/6 bg-gray-600 rounded" />
          <div className="h-4 w-4/6 bg-gray-600 rounded" />
        </div>
      </div>

      {/* Before & After Section */}
      <div className="space-y-8">
        <div className="h-8 w-48 bg-gray-700 rounded" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Before Images */}
          <div className="space-y-4">
            <div className="h-6 w-24 bg-gray-700 rounded" />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-gray-700 rounded-lg" />
              <div className="h-48 bg-gray-700 rounded-lg" />
            </div>
          </div>
          {/* After Images */}
          <div className="space-y-4">
            <div className="h-6 w-24 bg-gray-700 rounded" />
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-gray-700 rounded-lg" />
              <div className="h-48 bg-gray-700 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
