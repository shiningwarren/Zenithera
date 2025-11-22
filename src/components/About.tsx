import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const features = [
  'Local Market Expertise',
  'Targeted Refurbishment Uplift',
  'Flexible Exit Planning'
]

const stats = [
  { number: '3+ Years', label: 'Hands-on Project Experience' },
  { number: 'Power Team', label: 'in Finance, Planning, Legal & Build' },
  { number: '£30k+', label: 'Invested in Advanced Property Training' }
]

export default function About() {
  return (
    <div className="bg-gray-50 pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="section-headline">
            Built on Education, Experience and Expertise
            </h2>
            <p className="section-description mt-6">
            Zenithera combines hands-on project delivery with advanced training and a trusted professional network<br />
            to create secure property investment opportunities across East Anglia.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse text-center">
                <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-secondary-500">{stat.number}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-8 lg:items-center">
            <div className="border-r border-gray-200 pr-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Zenithera?</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Zenithera combines disciplined deal analysis with practical refurbishment experience to identify strong below-market opportunities. Each project is assessed for risk, uplift potential, and realistic long-term performance.
              </p>
            </div>
            <div className="pl-12 lg:pl-16">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
