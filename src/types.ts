export interface Listener {
  id: string;
  name: string;
  avatar: string;
  languages: string[];
  speciality: string;
  rating: number;
  reviewsCount: number;
  minutesListened: number;
  ratePerMin: number;
  isOnline: boolean;
  tags: string[];
  quote: string;
}

export interface Moment {
  id: string;
  city: string;
  timeAgo: string;
  category: string;
  text: string;
  hugs: number;
  responses: number;
}

