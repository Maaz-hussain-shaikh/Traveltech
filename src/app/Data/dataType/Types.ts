// types.ts
export interface ImageUrls {
    imgurl1: string;
    imgurl2: string;
    imgurl3: string;
    imgurl4: string;
  }
  
  export interface Batch {
    id: number;
    date: string;
    Extraprice: number;
  }
  
  export interface PickupDropPoint {
    location: string;
    Extraprice: number;
    Time: string;
  }
  
  export interface ScheduleDetail {
    Scheduledetails: string;
  }
  
  export interface Itinerary {
    Heading: string;
    Schedule: string;
  }
  
  export interface InclusionExclusion {
    name: string;
    icon: string;
    inc: string;
  }
  
  export interface ThingsToTake {
    name: string;
    icon: string;
    inc: string;
  }
  
  export interface BookingDetail {
    key: string;
    description: string;
  }
  
  export interface CancellationPolicy {
    key: string;
    description: string;
  }
  
  export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface TripData {
    title: string;
    imgurl: ImageUrls[];
    brief: string;
    duration: string;
    note: string;
    off: string;
    Quadprice: number;
    Tripleprice: number;
    Doubleprice: number;
    Batches: Batch[];
    Picuppoint: PickupDropPoint[];
    Droppoint: PickupDropPoint[];
    it: Itinerary[];
    inclusion: InclusionExclusion[];
    exclusion: InclusionExclusion[];
    thingstotake: ThingsToTake[];
    gentem: string;
    Booking: BookingDetail[];
    Cancellation: CancellationPolicy[];
    FAQ: FAQ[];
  }