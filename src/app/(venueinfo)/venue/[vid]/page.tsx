'use client'; 

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const venueListMock = [
  { vid: '001', name: 'The Bloom Pavilion', image: '/images/bloom.jpg' },
  { vid: '002', name: 'Spark Space', image: '/images/sparkspace.jpg' },
  { vid: '003', name: 'The Grand Table', image: '/images/grandtable.jpg' }
];

const VenuePage = () => {
  const params = useParams(); // ใช้ useParams สำหรับ dynamic segment ใน App Router
  const { vid } = params as { vid: string };
  const [venue, setVenue] = useState<{ vid: string; name: string; image: string } | null>(null);

  useEffect(() => {
    if (vid) {
      const selectedVenue = venueListMock.find((v) => v.vid === vid);
      if (selectedVenue) {
        setVenue(selectedVenue);
      }
    }
  }, [vid]);

  if (!venue) return <div>Loading...</div>;

  return (
    <div style={{ padding: '100px', display: 'flex', alignItems: 'center', gap: '20px' }}>
      <img src={venue.image} alt={venue.name} style={{ width: '300px', height: '200px', borderRadius: '8px' }} />
      <div>
        <h1>{venue.name}</h1>
        <p>สถานที่จัดงาน: <strong>{venue.name}</strong></p>
      </div>
    </div>
  );
};

export default VenuePage;
