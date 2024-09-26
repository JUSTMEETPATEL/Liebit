'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

const products = [
  { id: 1, image: '/passInk.jpeg?height=400&width=300', name: 'Vending Machine 1' },
  { id: 2, image: '/passInk.jpeg?height=400&width=300', name: 'Vending Machine 2' },
  { id: 3, image: '/passInk.jpeg?height=400&width=300', name: 'Vending Machine 3' },
]

export function ProductShowcaseComponent() {
  const showcaseRef = useRef(null)
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // const showcase = showcaseRef.current
    const images = imagesRef.current

    gsap.set(images, { opacity: 0, scale: 0.8 })

    const tl = gsap.timeline({ repeat: -1 })

    images.forEach((image) => {
      tl.to(image, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
      })
      .to(image, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power2.in',
        delay: 2,
      })
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={showcaseRef} className="relative w-full h-[500px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-64 h-64 rounded-full bg-white shadow-lg">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={el => { imagesRef.current[index] = el }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}