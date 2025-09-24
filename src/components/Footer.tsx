'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                className="h-16 w-auto brightness-0 invert"
                src="https://res.cloudinary.com/dcm0m5nrt/image/upload/v1757667991/Zenithera-Logo-black_endi3o.svg"
                alt="Zenithera Property Investments"
              />
            </div>
            <p className="text-sm leading-6 text-gray-300">
            Professional property investments specializing in commercial conversions, strategic land planning, and high ROI deals across Suffolk and Norfolk.
            </p>
          </div>
          <div className="mt-16 xl:col-start-3 xl:mt-0 xl:flex xl:items-center">
            <div className="max-w-md">
              <h3 className="text-sm font-semibold leading-6 text-white">Regulatory & Compliance</h3>
              <div className="mt-4 space-y-1">
                <div className="text-sm leading-6 text-gray-300">AML - XQML00000202542</div>
                <div className="text-sm leading-6 text-gray-300">PRS - PRS048153</div>
                <div className="text-sm leading-6 text-gray-300">ICO - ZB735527</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="text-center">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2025 Zenithera Ltd. All rights reserved.
            </p>
            <p className="text-xs leading-5 text-gray-400 mt-1">
              Company No. 15876999
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
