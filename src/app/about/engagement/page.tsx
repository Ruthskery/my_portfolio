import React from 'react'
import Link from 'next/link'

function Engagement() {
  return (
    <div className="flex items-center justify-center min-h-screen px-8">
      <div className="flex flex-row items-center justify-center text-center space-x-6">
        <h1 className="text-5xl md:text-9xl font-black text-black dark:text-white">
          Engagement
        </h1>
        <h1 className="text-5xl md:text-9xl font-black text-black dark:text-white">
          <Link href="/about">
            Back
          </Link>
        </h1>
      </div>
  </div>
  )
}

export default Engagement