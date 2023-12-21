export interface Character {
  name: string;
  created: string;
  id: number;
  episode: string[];
  gender: 'Male' | 'Female' | any;
  image: string;
  location: { name: string; url: string };
  origin: { name: string; url: string };
  species: string;
  status: string;
  string: string;
  url: string;
}

interface PaginationResponse {
  count: number;
  next: string;
  pages: string;
  prev: string;
}

export interface SearchCharactersResponse {
  info: PaginationResponse;
  results: Character[];
}
