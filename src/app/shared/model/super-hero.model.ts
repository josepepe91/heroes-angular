export interface ISuperHero {
  id?: number;
  name?: string;
}

export class SuperHero implements ISuperHero {
  constructor(public id?: number, public name?: string) {
  }
}
