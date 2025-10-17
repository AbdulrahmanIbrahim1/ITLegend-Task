"use client";
export default function Breadcrumb() {
  return (
    <nav className="flex text-gray-600 text-sm mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="inline-flex items-center text-gray-700 hover:text-blue-600"
          >
            
              <path d="M10 3.172l6 6V17a1 1 0 01-1 1H5a1 1 0 01-1-1v-7.828l6-6z" />
            Home
          </a>
        </li>

        <li>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-gray-400 mx-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <a href="/" className="text-gray-700 hover:text-blue-600">
              Courses
            </a>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-gray-400 mx-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-500 capitalize ">Course details</span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
