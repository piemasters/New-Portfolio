export class Technology {
  public id: string;
  public name: string;
  public link: string;
  public description: string;
  public to: number;

  constructor(id: string, name: string, link: string, description: string) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.description = description;
  }
}
