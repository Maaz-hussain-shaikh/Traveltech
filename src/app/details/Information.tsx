import React from 'react'
import Intro from './Intro'
import ItineraryDay from './ItineraryDay'
import Thingstoknow from './Thingstoknow'
import Faq from './Faq'
import Pricedetails from './Pricedetails'
import { TripData  } from '../Data/dataType/Types'

interface TripProps {
  data: TripData; // Use the TripData type for props
}

 const Information: React.FC<TripProps> = ({data}) => {
  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-0">
        <div className="flex relative flex-col pt-2 sm:flex-row">
          {/* Left Section */}
          <div className="flex-shrink-0 w-full sm:w-2/3  sm:mb-4">
            <Intro brief={data.brief} title={data.title}  />

            <ItineraryDay it={data.it}/>

            <Thingstoknow inclution={data.inclusion} thingsToTake={data.thingstotake} exclution={data.exclusion} />
            
            <Faq Booking={data.Booking} Faq={data.FAQ}/>
           
          </div>
          {/*  mobile Section */}
          <Pricedetails Quadprice={data.Quadprice} Doubleprice={data.Doubleprice} Tripleprice={data.Tripleprice} Batchdata={data.Batches} Drop={data.Droppoint} Pickup={data.Picuppoint}/>


        </div>
      </div>
    </>
  )
}

export default Information
