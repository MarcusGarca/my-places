export interface Activity {
  time?: string;
  title: string;
  description?: string;
  address?: string;
  visited?: boolean;
  suggestion?: string;
  price?: string;
  url?: string;
  location?: { lat: number; lng: number };
  options?: { name: string; price?: string; url?: string; location?: { lat: number; lng: number } }[];
  stops?: { name: string; location?: { lat: number; lng: number } }[];
}

export interface DayPlan {
  day: number;
  date: string;
  activities: Activity[];
}
