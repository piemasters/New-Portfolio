export class UXMethod {
  public id: string;
  public name: string;
  public backgroundColor: string;
  public links: string[];
  public description: any[];

  constructor(id: string, name: string, backgroundColor: string, links: string[], description: any[]) {
    this.id = id;
    this.name = name;
    this.backgroundColor = backgroundColor;
    this.links = links;
    this.description = description;
  }
}
