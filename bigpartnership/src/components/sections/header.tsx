"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X, Search } from 'lucide-react'
import SearchModal from "../ui/search-modal"

const navItems = [
  { name: "Home", href: "/", hasDropdown: false },
  { name: "About us", href: "/aboutus", hasDropdown: false },
  {
    name: "Destinations",
    href: "/destinations",
    hasDropdown: true,
    dropdownItems: [
      { name: "Australia", href: "/destinations/australia" },
      { name: "Canada", href: "/destinations/canada" },
      { name: "Germany", href: "/destinations/germany" },
      { name: "Indonesia", href: "/destinations/indonesia" },
      { name: "Netherlands", href: "/destinations/netherlands" },
      { name: "New Zealand", href: "/destinations/new-zealand" },
      { name: "Singapore", href: "/destinations/singapore" },
      { name: "Sri Lanka", href: "/destinations/sri-lanka" },
      { name: "UAE", href: "/destinations/uae" },
      { name: "UK", href: "/destinations/uk" },
      { name: "USA", href: "/destinations/usa" },
    ],
  },
  {
    name: "Partners",
    href: "/partners",
    hasDropdown: true,
    dropdownItems: [
      { name: "Universities", href: "/partners/universities" },
      { name: "Governments", href: "/partners/governments" },
      { name: "Industry partners", href: "/partners/industry-partners" },
      { name: "School counsellors", href: "/partners/school-counsellors" },
    ],
  },
  {
    name: "Impact",
    href: "/impact",
    hasDropdown: true,
    dropdownItems: [
      { name: "bigPartnership education trust", href: "/impact/navitas-education-trust" },
      { name: "Modern slavery", href: "/impact/modern-slavery" },
      { name: "Climate change", href: "/impact/climate-change" },
    ],
  },
  { name: "News", href: "/news", hasDropdown: false },
]

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [expandedSubItem, setExpandedSubItem] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 bg-white border-b border-gray-100 z-50 shadow-xs" style={{ fontFamily: 'moderat-reg, sans-serif, Arial, "Helvetica Neue", Helvetica' }}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Desktop Layout */}
          <div className="hidden xl:flex items-center justify-between w-full">
            <div className="flex items-center gap-16">
              <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
                <Image
                  src="/images/logo.png"
                  alt="bigPartnership"
                  width={180}
                  height={46}
                  priority
                />
              </Link>
              <nav>
                <ul className="flex items-center gap-10">
                  {navItems.map((item) => (
                    <li key={item.name} className="group relative">
                      <Link
                        href={item.href}
                        className="flex items-center gap-1.5 text-base font-medium text-black hover:text-teal-700 transition-colors duration-200 py-2"
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-700 group-hover:rotate-180 transition-all duration-200" />
                        )}
                      </Link>
                      {item.hasDropdown && item.dropdownItems && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                          <ul className="space-y-0">
                            {item.dropdownItems.map((dropdownItem) => (
                              <li key={dropdownItem.name} className="group/sub relative">
                                <Link
                                  href={dropdownItem.href}
                                  className="block px-5 py-3 text-base text-black hover:bg-teal-50 hover:text-teal-700 transition-colors duration-150"
                                >
                                  {dropdownItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/apply-to-study"
                className="bg-teal-700 text-white px-6 py-2.5 rounded-md font-semibold text-base hover:bg-teal-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Apply to study
              </Link>
              <Link
                href="/contact-us"
                className="bg-teal-700 text-white px-6 py-2.5 rounded-md font-semibold text-base hover:bg-teal-800 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Contact us
              </Link>
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="p-2.5 text-gray-600 hover:text-teal-700 hover:bg-gray-100 rounded-md transition-all duration-200 ml-2"
              >
                <Search size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex xl:hidden items-center justify-between w-full">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="bigPartnership"
                width={140}
                height={37}
              />
            </Link>
            <div className="flex items-center gap-2">
              <button onClick={() => setIsSearchOpen(true)} aria-label="Search" className="p-2.5 text-gray-700 hover:text-teal-700 hover:bg-gray-100 rounded-md transition-colors">
                <Search size={22} />
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="p-2.5 text-gray-700 hover:text-teal-700 hover:bg-gray-100 rounded-md transition-colors z-50"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ease-in-out xl:hidden ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="container mx-auto px-6 h-full flex flex-col pt-24">
          <nav className="flex-grow mt-6">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.name} className="border-b border-gray-100">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className="flex justify-between items-center w-full py-4 text-black font-medium text-lg hover:text-teal-700 transition-colors"
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 text-gray-500 ${openDropdown === item.name ? "rotate-180 text-teal-700" : ""}`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center w-full py-4 text-black font-medium text-lg hover:text-teal-700 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.hasDropdown && item.dropdownItems && openDropdown === item.name && (
                    <ul className="pl-4 pb-2 space-y-1 bg-gray-50">
                      {item.dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.name}>
                          <Link
                            href={dropdownItem.href}
                            className="block py-3 text-black font-medium text-base hover:text-teal-700 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="py-8 mt-auto flex flex-col gap-3 border-t border-gray-100">
            <Link
              href="/apply-to-study"
              className="w-full text-center bg-teal-700 text-white px-4 py-3 rounded-md font-semibold text-sm hover:bg-teal-800 transition-all duration-200 shadow-sm"
            >
              Apply to study
            </Link>
            <Link
              href="/contact-us"
              className="w-full text-center bg-teal-700 text-white px-4 py-3 rounded-md font-semibold text-sm hover:bg-teal-800 transition-all duration-200 shadow-sm"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Search Modal Component */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  )
}
