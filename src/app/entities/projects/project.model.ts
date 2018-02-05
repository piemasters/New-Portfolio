export class Project {
  public id: number;
  public title: string;
  public img: string;
  public body: any;

  constructor(id: number, title: string, img: string, body: any) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.body = body;
  }
}
