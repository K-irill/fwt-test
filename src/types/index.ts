export interface IPaintig {
  authorId: string;
  created: string;
  id: number;
  imageUrl: string;
  locationId: string;
  name: string;
}

export interface IItem {
  id: string;
  name: string;
  location: string;
}

export interface ISelect {
  name: string;
  items: IItem[];
  onChange: (name: string) => void;
}

export interface IRange {
  name: string;
}

export interface IQuery {
  q?: string;
  author?: string;
  location?: string;
  _gte?: string;
  _lte?: string;
}
