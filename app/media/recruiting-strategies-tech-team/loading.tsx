export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 w-32 bg-gray-200 animate-pulse rounded" />
        </div>
      </div>
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="h-12 bg-gray-200 animate-pulse rounded mb-4" />
          <div className="h-6 w-48 bg-gray-200 animate-pulse rounded mb-6" />
          <div className="aspect-video bg-gray-200 animate-pulse rounded mb-8" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 animate-pulse rounded" />
            <div className="h-4 bg-gray-200 animate-pulse rounded" />
            <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
          </div>
        </div>
      </div>
    </div>
  )
}
