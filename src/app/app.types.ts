export interface Owner {
  name: string;
  gender: 'Male' | 'Female';
  age: number;
  pets: Pet[] | null;
}

export interface Pet {
  name: string;
  type: 'Cat' | 'Dog' | 'Fish';
}

export interface CatsByOwnerGender {
  male: Pet[];
  female: Pet[];
}
