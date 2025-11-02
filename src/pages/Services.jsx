import { Link } from 'react-router-dom'
import { Card, CardContent, CardTitle, CardDescription } from '../design-system'
import { Button } from '../design-system'
import { services, serviceTypes } from '../data/services'

/**
 * Services Page - Display all service types
 */
export const Services = () => {
  return (
    <div className="min-h-screen bg-[#FFFEF6] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <h1
          className="text-4xl md:text-5xl font-bold text-[#459361] mb-6"
          style={{ fontFamily: 'Petrona, serif' }}
        >
          Our Services
        </h1>
        <p
          className="text-lg text-[rgba(69,147,97,0.75)] mb-12"
          style={{ fontFamily: 'Archivo, sans-serif' }}
        >
          Professional plant care services to help your plants thrive
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceTypes.map((type) => {
            const typeServices = services.filter(s => s.type === type.id)

            return (
              <div key={type.id}>
                <h2
                  className="text-2xl font-bold text-[#459361] mb-6"
                  style={{ fontFamily: 'Petrona, serif' }}
                >
                  {type.name}
                </h2>
                <div className="space-y-4">
                  {typeServices.map((service) => (
                    <Link key={service.id} to={`/services/${service.type}/${service.id}`}>
                      <Card variant="info" padding="md" className="h-full hover:scale-105 transition-transform">
                        <CardContent>
                          <CardTitle variant="info">{service.title}</CardTitle>
                          <CardDescription className="mb-4">{service.description}</CardDescription>
                          <div className="flex justify-between items-center">
                            <span
                              className="text-[#459361] font-bold"
                              style={{ fontFamily: 'Petrona, serif' }}
                            >
                              ${service.price.toFixed(2)}
                            </span>
                            <span
                              className="text-sm text-[rgba(69,147,97,0.75)]"
                              style={{ fontFamily: 'Archivo, sans-serif' }}
                            >
                              {service.duration}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

