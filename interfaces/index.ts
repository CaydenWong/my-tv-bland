export type Schedule = {
  id: number;
  name: string;
  type: string;
  show: Show;
};

export interface Show {
  id: number;
  url: string;
  genres: string[];
  status: string;
  type: string;
  name: string;
  summary: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: { average?: number };
  network?: {
    id: number;
    name: string;
  };
  webChannel?: {
    id: number;
    name: string;
  };
  image: {
    medium?: string;
    original?: string;
  };
}

export interface Cast {
  person: {
    id: number;
    name: string;
    image: {
      medium: string;
      original: string;
    };
  };
  character: {
    id: string;
    name: string;
    image: {
      medium: string;
      original: string;
    };
  };
}
