"use client";
import Link from "next/link";

export default function Breadcrumb() {
  return (
    <nav
      className="flex text-gray-600 text-sm mb-4"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {/* Home */}
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>
        </li>

        {/* Courses */}
        <li>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-gray-400 mx-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Courses
            </Link>
          </div>
        </li>

        {/* Course details */}
        <li>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-gray-400 mx-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-gray-500 capitalize">
              Course details
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
