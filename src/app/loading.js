import React from 'react'

const GlobalLoading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="flex flex-col items-center justify-center text-center">

        <div className="mb-5">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold">
          Loading Your Library...
        </h2>

        <p className="mt-2 text-sm sm:text-base text-base-content/60 max-w-md">
          We’re preparing your books, reading lists, and recommendations.
          Please wait a moment.
        </p>

      </div>
    </div>
  )
}

export default GlobalLoading