import { Search, Hammer, TrendingUp } from 'lucide-react'

const services = [
  {
    name: 'BMV Sourcing',
    description: 'Using local East Anglia knowledge, we identify below-market value opportunities across Suffolk, Norfolk, Cambridgeshire and North Essex — with auctions being a core acquisition route.',
    icon: Search,
  },
  {
    name: 'Refurb & Uplift',
    description: "We add value through targeted refurbishments — kitchens, bathrooms, layout improvements, energy upgrades — depending on the property's needs and ROI.",
    icon: Hammer,
  },
  {
    name: 'BRR & Exit Strategies',
    description: 'Recycle capital through refinance, or exit via an AST rental, Serviced Accommodation, or a resale flip depending on what produces the strongest return.',
    icon: TrendingUp,
  },
]

export default function Services() {
  return (
    <div className="bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-subheadline">Our Focus Areas</h2>
          <p className="section-headline">
          How We Deliver Value
          </p>
          <p className="section-description mt-6">
          We specialise in three high-growth strategies across East Anglia, supported by strong investor partnerships
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-4 gap-y-8 lg:max-w-none lg:grid-cols-3 lg:gap-x-6 lg:gap-y-12">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col px-4 sm:px-8 text-center">
                <dt className="flex items-center justify-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                      <service.icon className="h-5 w-5 flex-none text-secondary-500" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-3 flex flex-col text-sm leading-6 text-gray-600">
                  <p>{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
