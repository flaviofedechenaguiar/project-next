export interface Bio {
  id: string;
  name: string;
  birthDate: Date;
  birthPlace: string;
  miniBios: MiniBio[];
  image: Image;
}

export interface Filmography {
  filmography: Film[];
}

export interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface Images {
  images: Image[];
}

export interface MiniBio {
  text: string;
}

export interface Film {
  id: string;
  image: Image;
  title: string;
  year: number;
}

export interface Detail {
  id: string;
  image: Image;
  title: string;
  year: number;
  banner?: Image;
  summary?: Summary;
  ratings?: Ratings;
}

export interface Synopses {
  text: string;
}

export interface OverviewDetail {
  title: Detail;
  ratings: Ratings;
  plotSummary: Summary;
}

export interface Ratings {
  rating: number;
}

export interface Summary {
  text: string;
}

export interface ComingSoonMovies {
  id: string;
}

export interface Find {
  results: Film[];
}
