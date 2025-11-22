'use client'

import { Button } from '@/components/ui/Button'
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/20/solid'

export default function Hero() {
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
  }

  return (
    <div className="relative isolate bg-gray-50 hero-pattern">
      <div className="mx-auto max-w-7xl px-6 pt-52 pb-24 sm:px-6 sm:pt-60 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl" style={{lineHeight: '1.4'}}>
          <span className="text-gray-900">Property Investment</span>{' '}
          <span className="text-secondary-500 hero-accent">Strategies That Deliver</span>
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We secure BMV properties across East Anglia, add value through targeted refurbishments, and recycle capital through a proven buy, refurbish, and refinance approach with multiple exit strategies
          </p>
          <div className="mt-10 flex flex-row items-center justify-center gap-x-3 sm:gap-x-6">
            <Button 
              variant="primary" 
              size="md"
              onClick={() => scrollToSection('contact')}
            >
              Get started
              <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button 
              variant="secondary"
              size="md"
              onClick={() => scrollToSection('about')}
            >
              <PlayIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
