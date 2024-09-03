export default function Navbar() {
    return (
      <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20l9-12H3l9 12z"
              />
            </svg>
            <span className="font-bold text-lg">Logo</span>
          </div>
  
          {/* Middle: Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:underline">
              Home
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>
  
          {/* Right: Login/Signup */}
          <div className="flex space-x-4">
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
              Login
            </button>
            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
              Signup
            </button>
          </div>
        </div>
      </nav>
    );
  }
  