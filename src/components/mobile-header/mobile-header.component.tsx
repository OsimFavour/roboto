import { MenuContext } from '@/contexts/menu.context'
import { Github, Twitter } from 'lucide-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { menuItems } from '@/menu-data'

const MobileHeader = () => {


    const { isMenuOpen } = useContext(MenuContext)
        

  return (
    <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              {item.name}
            </Link>
          ))}
         
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
  )
}

export default MobileHeader