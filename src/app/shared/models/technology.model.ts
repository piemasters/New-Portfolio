export class Technology {
  public id: string;
  public name: string;
  public img: string;
  public link: string;
  public description: string;

  constructor(id: string, name: string, img: string, link: string, description: string) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.link = link;
    this.description = description;
  }
}
