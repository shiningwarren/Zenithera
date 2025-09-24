import { Building, MapPin, Users } from 'lucide-react'

const services = [
  {
    name: 'Commercial Deals',
    description: 'Acquisition and conversion of pubs, mixed-use and retail properties that unlock new value and deliver strong investor returns.',
    icon: Building,
  },
  {
    name: 'Land Planning',
    description: 'Planning applications, development opportunities and strategic land acquisition that secure long-term growth.',
    icon: MapPin,
  },
  {
    name: 'Partnership Opportunities',
    description: 'Collaborative investment structures developed to create shared success and lasting wealth opportunities for all.',
    icon: Users,
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
          We specialise in three high-growth strategies across Suffolk & Norfolk, supported by strong investor partnerships
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
