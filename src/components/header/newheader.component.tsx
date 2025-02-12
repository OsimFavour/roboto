import type React from "react"
import { useState } from "react"
import { Menu, X, ChevronDown, Twitter, Github } from "lucide-react"
import { Link } from "react-router-dom"

const NewHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleTemplates = () => setIsTemplatesOpen(!isTemplatesOpen)

  const menuItems = [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Careers", href: "#" },
  ]

 

  return (
    <header className="top-0 w-full clearNav text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-2xl font-bold">
              ROBOTO
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="text-base font-medium text-gray-300 hover:text-white">
                {item.name}
              </a>
            ))}
            <div className="relative">
              {/* <button
                type="button"
                className="text-gray-300 group bg-gray-900 rounded-md inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                onClick={toggleTemplates}
              >
                <span>Templates</span>
                <ChevronDown
                  className={`ml-2 h-5 w-5 group-hover:text-gray-400 ${isTemplatesOpen ? "transform rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button> */}
              {/* {isTemplatesOpen && (
                <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-gray-800 px-5 py-6 sm:gap-8 sm:p-8">
                      {templateItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-700"
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-white">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 text-gray-400 hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              {item.name}
            </a>
          ))}
          {/* <button
            className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            onClick={toggleTemplates}
          >
            Templates
            <ChevronDown className={`ml-2 h-5 w-5 inline ${isTemplatesOpen ? "transform rotate-180" : ""}`} />
          </button>
          {isTemplatesOpen && (
            <div className="pl-4">
              {templateItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )} */}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 text-gray-400 hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NewHeader