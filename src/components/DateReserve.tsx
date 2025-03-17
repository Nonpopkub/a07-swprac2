
'use client'
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"

export default function DateReserve() {

    const [date, setDate] = useState<any>(null);
    const [location, setLocation] = useState("Bloom");

    return (
        <div className="bg-[#ffd2bc] rounded-lg space-x-5 space-y-2 w-fit px-10 py-2 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={date} onChange={(e) => {setDate(e); alert(e)}}/>
            </LocalizationProvider>

           
        </div>
    )
}
