'use client'

import { notFound } from "next/navigation"
import Image from "next/image"

// Mock data with venue details
const venueDetails = new Map([
  ['001', {
    title: 'The Bloom Pavilion',
    description: 'Our stunning pavilion offers a perfect balance of indoor elegance and outdoor beauty, ideal for weddings and special celebrations with up to 200 guests.',
    imageUrl: '/images/bloom.jpg',
  }],
  ['002', {
    title: 'Spark Space',
    description: 'A modern, versatile venue with cutting-edge technology and customizable layouts, perfect for corporate events, product launches, and creative gatherings.',
    imageUrl: '/images/sparkspace.jpg',
  }],
  ['003', {
    title: 'The Grand Table',
    description: 'An intimate dining venue with exquisite decor and world-class catering options, ideal for private dinners, anniversaries, and exclusive celebrations.',
    imageUrl: '/images/grandtable.jpg',
  }],
])

export default function VenueDetails({ params }: { params: { vid: string } }) {
  const venue = venueDetails.get(params.vid)

  if (!venue) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative h-[400px] mb-6">
          <Image
            src={venue.imageUrl}
            alt={venue.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">{venue.title}</h1>
        <p className="text-gray-600">{venue.description}</p>
      </div>
    </div>
  )
}