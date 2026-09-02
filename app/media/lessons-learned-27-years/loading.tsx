export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12">
        <div className="h-12 bg-gray-200 rounded w-3/4 mb-6 animate-pulse" />
        <div className="h-6 bg-gray-200 rounded w-1/4 mb-8 animate-pulse" />
        <div className="aspect-video bg-gray-200 rounded-lg mb-8 animate-pulse" />
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
