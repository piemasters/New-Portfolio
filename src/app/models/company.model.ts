import { Role } from './role.model';

export class Company {
  public id: number;
  public name: string;
  public img: string;
  public from: number;
  public to: number;
  public roles: Role[];

  constructor(id: number, name: string, img: string, from: number, to: number, roles: Role[]) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.from = from;
    this.to = to;
    this.roles = roles;
  }
}
