import Image from 'next/image'; 
import { useState } from 'react';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import Link from "next/link";


export default function Card({ venueName, imgSrc, onCompare } : { venueName:string, imgSrc:string, onCompare: Function }) {
    
    const [rating, setRating] = useState<number | null>(0);

    return (
        <InteractiveCard venueName={venueName}>
                <div className='w-full h-[70%] relative rounded-t-lg'>
                    <Image 
                        src={imgSrc}
                        alt='Event Image'
                        fill={true}
                        className='object-cover rounded-t-lg'
                    />
                </div>            
                <div className='w-full h-[10%] p-[10px]'>
                    <p className='font-bold underline'>{venueName}</p>
                    <Rating
                        name={venueName + ' Rating'}
                        id={venueName + ' Rating'}
                        data-testid={venueName + ' Rating'}
                        value={rating}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e, newVal) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setRating(newVal);
                            onCompare(venueName, newVal);
                            console.log(venueName, newVal);
                        }}
                    /><br></br>
        <Link 
          href="/booking" 
          className="inline-block px-4 py-2 border border-primary-500 text-primary-600 font-medium rounded hover:bg-primary-500 hover:text-white transition duration-200"
        >
          Learn More
        </Link>
                </div>
        </InteractiveCard>
    );
}