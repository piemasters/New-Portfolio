import { Technology } from './technology.model';

export class Project {
  public id: number;
  public title: string;
  public img: string;
  public introduction: string;
  public technologies: Technology[];
  public setup: any[];

  constructor(id: number, title: string, img: string, introduction: string, technologies: Technology[], setup: any[]) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.introduction = introduction;
    this.technologies = technologies;
    this.setup = setup;
  }
}
