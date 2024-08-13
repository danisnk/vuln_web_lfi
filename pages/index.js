// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Secure Company Portal</h1>
      <p className="text-lg text-gray-600 mb-8">Please select an option:</p>
      <ul className="space-y-4">
        <li>
          <Link href="/user-lookup" className="block w-full max-w-md p-4 bg-blue-500 text-white text-center rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
            Employee Directory
          </Link>
        </li>
        <li>
          <Link href="/about" className="block w-full max-w-md p-4 bg-green-500 text-white text-center rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" className="block w-full max-w-md p-4 bg-red-500 text-white text-center rounded-lg shadow-lg hover:bg-red-600 transition duration-300 ease-in-out">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
