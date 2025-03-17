'use client'
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel() {

    const cardReducer = (venueList: Map<string, number>, action: { type: string; venueName: string; rating?: number }) => {
        switch (action.type) {
            case 'add': {
                return new Map([...venueList, [action.venueName, action.rating ?? 0]]);
            }
            case 'remove': {
                const newVenueList = new Map(venueList);
                newVenueList.delete(action.venueName);
                return newVenueList;
            }
            default:
                return venueList;
        }
    };


    let defaultVenue = new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ]);

    /**
     * Mock Data
     */
    const mockVenueRepo = [
        {venueId: "001", venueName: "The Bloom Pavilion", image: "/images/bloom.jpg"},
        {venueId: "002", venueName: "Spark Space", image: "/images/sparkspace.jpg"},
        {venueId: "003", venueName: "The Grand Table", image: "/images/grandtable.jpg"},
    ]

    const [ venueList, dispatchCompare ] = useReducer(cardReducer, defaultVenue);

    return (
        <div>
            <div style={{margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around"}}>
                {
                    mockVenueRepo.map((venueItem) => {
                        return (
                            <Link href={`/venue/${venueItem.venueId}`}  className="w-1/5">
                                <Card 
                                    venueName={venueItem.venueName}
                                    imgSrc={venueItem.image}
                                    onCompare={(venue: string, rating: number) => dispatchCompare({type: 'add', venueName: venue, rating: rating})}
                                />
                            </Link>
                        );
                    })
                }
            </div>
            <div className="w-fit px-2">
                <p className="px-2 text-xl font-medium">Venue List with Ratings : { venueList.size }</p>
                { Array.from(venueList).map( ([venueName, rating]: [string, number]) => 
                <div data-testid={venueName} key={venueName} onClick={() => dispatchCompare({type: 'remove', venueName: venueName, rating: rating??0})}>
                    {venueName}: {rating}
                </div> ) }
            </div>
        </div>
    );
}