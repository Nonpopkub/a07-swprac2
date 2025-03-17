'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Banner () {
    const cover = ['/images/cover.jpg', '/images/cover2.jpg', '/images/cover3.jpg', '/images/cover4.jpg'];
    const [index, setIndex] = useState(0);
    const router = useRouter();

    return (
        <div className="block p-[5px] m-0 w-full h-[50vh] relative">
            <Image
                src={cover[index%4]}
                alt='cover'
                fill={true}
                objectFit='cover'
                onClick={() => {setIndex(index+1);}}
            />
            <div className="m-5 top-1/3 z-20 relative" onClick={() => {setIndex(index+1);}}>
                <div className=" text-center text-white items-center bg-black/40 p-4"> 
                    <h1 className="text-4xl font-medium">where every event finds its venue</h1>
                    <h3 className="text-xl font-serif"> สถานที่จัดเลี้ยงที่ดีที่สุด พร้อมบริการระดับมืออาชีพ ที่จะทำให้งานของคุณสมบูรณ์แบบ</h3>
                </div>
            </div>
            <button 
                className="bg-primary-500 text-white border border-primary-500 
                        font-semibold py-2 px-2 m-2 rounded z-30 absolute 
                        bottom-0 right-0 hover:bg-white hover:text-primary-500 hover:border border-primary-500 font-medium rounded-md transition duration-200 shadow-sm "
                onClick={(e) => {e.stopPropagation(); router.push('/venue');}}
                >
                Select Venue
            </button>
        </div>
    );
}