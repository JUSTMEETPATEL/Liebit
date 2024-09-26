'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ProductShowcaseComponent } from './components-product-showcase'
import { Building2, Cpu, Dumbbell, Facebook, HeadphonesIcon, Linkedin, Mail, MapPin, Phone, ShoppingBag, Star, Twitter, Users } from 'lucide-react'
import { Button } from './ui/button'

export function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
      <ProductShowcaseComponent />
      

      {/* Why Liebit Section */}
      <section className="py-20 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Why Choose Liebit?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white">
            <FeatureCard 
              icon={<Cpu className="w-12 h-12  text-orange-500" />}
              title="Cutting-Edge Technology"
              description="Experience next-gen vending machines with advanced features."
            />
            <FeatureCard 
              icon={<Users className="w-12 h-12 text-orange-500" />}
              title="Customizable Solutions"
              description="Tailored vending solutions to meet your specific business needs."
            />
            <FeatureCard 
              icon={<HeadphonesIcon className="w-12 h-12 text-orange-500" />}
              title="24/7 Support"
              description="Round-the-clock support to ensure your machines run smoothly."
            />
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gray-100 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Explore Our Machines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard 
              imageSrc="/placeholder.svg?height=400&width=300"
              price="₹50000"
              title="LiebitMax"
              description="High-capacity vending with smart inventory management."
            />
            <ProductCard 
              imageSrc="/placeholder.svg?height=400&width=300"
              price="₹30000"
              title="LiebitEco"
              description="Eco-friendly vending solution with energy-saving features."
            />
            <ProductCard 
              imageSrc="/placeholder.svg?height=400&width=300"
              price="₹20000"
              title="LiebitFlex"
              description="Customizable vending machine for diverse product ranges."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">What Our Customers Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Liebit has revolutionized our office snack game. Employees love the variety and convenience!"
              author="Jane Doe"
              company="Tech Innovators Inc."
            />
            <TestimonialCard 
              quote="The eco-friendly options align perfectly with our gym's values. A great addition to our facility!"
              author="John Smith"
              company="FitLife Gym"
            />
            <TestimonialCard 
              quote="Customer support is top-notch. Any issues are resolved quickly, ensuring our vending machines are always operational."
              author="Emily Brown"
              company="Retail Solutions Co."
            />
          </div>
        </div>
      </section>

      {/* Tailored for Your Business Section */}
      <section className="py-20 bg-gray-100 animate-on-scroll">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Tailored Solutions for Every Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BusinessSolutionCard 
              icon={<Building2 className="w-12 h-12 text-orange-500" />}
              title="Office Buildings"
              description="Boost employee satisfaction with customized snack and beverage options."
            />
            <BusinessSolutionCard 
              icon={<Dumbbell className="w-12 h-12 text-orange-500" />}
              title="Fitness Centers"
              description="Provide healthy, on-the-go options for your health-conscious clientele."
            />
            <BusinessSolutionCard 
              icon={<ShoppingBag className="w-12 h-12 text-orange-500" />}
              title="Retail Spaces"
              description="Maximize space efficiency with sleek, modern vending solutions."
            />
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500 animate-on-scroll">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Ready to Automate Your Business?</h2>
          <button className="bg-white text-orange-500 font-bold py-3 px-6 rounded-full hover:bg-orange-100 transition duration-300">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Liebit</h3>
              <p className="text-gray-300">Revolutionizing vending with cutting-edge technology and customizable solutions.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-gray-300 hover:text-orange-400 transition-colors">Products</Link></li>
                <li><Link href="/support" className="text-gray-300 hover:text-orange-400 transition-colors">Support</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail size={18} className="mr-2 text-orange-400" />
                  <a href="mailto:liebit.technologies@gmail.com" className="text-gray-300 hover:text-orange-400 transition-colors">liebit.technologies@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-2 text-orange-400" />
                  <a href="tel:+918468084797" className="text-gray-300 hover:text-orange-400 transition-colors">+91 84680 84797</a>
                </li>
                <li className="flex items-center">
                  <MapPin size={18} className="mr-2 text-orange-400" />
                  <span className="text-gray-300">Chennai, Tamil Nadu, India</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Stay updated with our latest news and offers.</p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Liebit Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, description } : { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ProductCard({ imageSrc, title, description,price } : {imageSrc:string,title:string,description:string ,price:string}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={imageSrc} alt={title} width={300} height={400} className="w-full" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <h3 className="text-xl text-orange-500 font-semibold mb-2">{price}</h3>
        <button className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300">
          View Details
        </button>
      </div>
    </div>
  )
}


function TestimonialCard({ quote, author, company } : {quote:string,author:string,company:string }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4 italic">&quot;{quote}&quot;</p>
      <div className="flex items-center mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  )
}



function BusinessSolutionCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}