import { Role } from './role.model';

export class Company {
  public id: number;
  public name: string;
  public img: string;
  public from: string;
  public to: string;
  public roles: Role[];

  constructor(id: number, name: string, img: string, from: string, to: string, roles: Role[]) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.from = from;
    this.to = to;
    this.roles = roles;
  }
}
