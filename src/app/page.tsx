import React from 'react'

function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-green-600 dark:text-yellow-600 shadow-md rounded-lg mt-10">
        <h1 className="text-4xl font-semibold text-center mb-6">
          🏡 Welcome to Next.js App Router!
        </h1>
        <p className="text-lg  text-center mb-4">
          This is the home page content.
        </p>
        <p className="text-md">
          Get started with Next.js, enjoy the modern web features, fast rendering, and a great developer experience. Our site is built with TypeScript for better type safety and maintainability.
        </p>
        <div className="mt-6">
          <p className="text-md font-semibold text-gray-800">Why Next.js?</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Fast page loading with static site generation (SSG) and server-side rendering (SSR).</li>
            <li>Built-in routing and API integration out of the box.</li>
            <li>Full support for TypeScript.</li>
            <li>Optimized performance and SEO out of the box.</li>
          </ul>
        </div>
    </div>
  )
}

export default Home