'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/ui/Button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'unset'
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.documentElement.style.overflow = 'unset'
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setMobileMenuOpen(false)
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      const headerHeight = 80
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setMobileMenuOpen(false)
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      const headerHeight = 80
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setMobileMenuOpen(false)
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const headerHeight = -50  // Adjust this value to fine-tune contact form scroll position
      const targetPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg' : 'bg-transparent'}`}>
        <nav className="flex items-center justify-between py-3 px-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <button onClick={() => scrollToSection('hero')} className="-m-1.5 p-1.5 lg:ml-4">
              <span className="sr-only">Zenithera Property Investments</span>
              <img
                className="h-16 w-auto"
                src="https://res.cloudinary.com/dcm0m5nrt/image/upload/v1757667991/Zenithera-Logo-black_endi3o.svg"
                alt="Zenithera Property Investments"
              />
            </button>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <div className="flex lg:gap-x-12">
              <button onClick={scrollToServices} className="text-sm font-semibold leading-6 text-gray-900">
                Services
              </button>
              <button onClick={scrollToAbout} className="text-sm font-semibold leading-6 text-gray-900">
                About
              </button>
              <button onClick={scrollToContact} className="text-sm font-semibold leading-6 text-gray-900">
                Contact
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-4">
            <Button 
              variant="primary" 
              size="md"
              onClick={scrollToContact}
            >
              Get started
              <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </nav>
      </header>
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-[#F1F6F7] px-6 py-3 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button onClick={() => scrollToSection('hero')} className="-m-1.5 p-1.5">
                <span className="sr-only">Zenithera Property Investments</span>
                <img
                  className="h-16 w-auto"
                  src="https://res.cloudinary.com/dcm0m5nrt/image/upload/v1757667991/Zenithera-Logo-black_endi3o.svg"
                  alt="Zenithera Property Investments"
                />
              </button>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-16 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6 text-center">
                      <button
                        onClick={scrollToServices}
                        className="block w-full rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center"
                      >
                        Services
                      </button>
                      <button
                        onClick={scrollToAbout}
                        className="block w-full rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center"
                      >
                        About
                      </button>
                      <button
                        onClick={scrollToContact}
                        className="block w-full rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 text-center"
                      >
                        Contact
                      </button>
                    </div>
                <div className="py-6">
                  <Button 
                    variant="primary" 
                    size="md"
                    onClick={scrollToContact}
                    className="w-full"
                  >
                    Get started
                    <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
