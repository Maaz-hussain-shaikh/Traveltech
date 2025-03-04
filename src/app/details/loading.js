import React from 'react'

const loading = () => {
  return (
    <>
     
  
     <section className="p-4 w-full mx-auto">
  {/* Desktop Skeleton */}
  <div className="hidden sm:block relative w-full aspect-[2.3/1] animate-pulse">
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1">
      {/* Main Image */}
      <div className="relative row-span-3 col-span-2 bg-gray-300 rounded-lg" />
      
      {/* Side Images */}
      <div className="relative row-span-1 col-span-1 bg-gray-300 rounded-lg" />
      <div className="relative row-span-1 col-span-1 bg-gray-300 rounded-xl" />
      <div className="relative row-span-1 col-span-1 bg-gray-300 rounded-lg" />
    </div>
  </div>

  {/* Mobile Skeleton */}
  <div className="sm:hidden relative w-full aspect-square animate-pulse">
    <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
      <div className="relative col-span-2 bg-gray-300 rounded-lg" />
      <div className="relative bg-gray-300 rounded-lg" />
      <div className="relative bg-gray-300 rounded-lg" />
    </div>
  </div>
</section>

<div className="max-w-screen-xl p-4 w-full mx-auto px-4 sm:px-0 animate-pulse">
 
  <div className="flex relative flex-col p-4 sm:flex-row">
    {/* Left Content Skeleton */}
    <div className="flex-shrink-0 w-full sm:w-2/3 sm:mb-4 space-y-6">
      {/* Title & Brief */}
      <div className="space-y-3">
        <div className="h-8 bg-gray-300 rounded w-3/4" />
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-5/6" />
      </div>

      {/* Itinerary */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded w-1/4" />
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-300 rounded-lg" />
        ))}
      </div>

      {/* Things to Know */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded w-1/3" />
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-16 bg-gray-300 rounded-lg" />
        ))}
      </div>

      {/* FAQ */}
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded w-1/4" />
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-12 bg-gray-300 rounded-lg" />
        ))}
      </div>
    </div>

    {/* Price Details Skeleton (Mobile) */}
    <div className="sm:hidden mt-4 bg-white p-4 rounded-lg shadow">
      <div className="space-y-4">
        <div className="h-6 bg-gray-300 rounded w-1/2" />
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-300 rounded w-3/4" />
        ))}
        <div className="h-10 bg-gray-300 rounded-lg w-full mt-4" />
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default loading
