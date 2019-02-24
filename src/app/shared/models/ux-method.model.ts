export class UXMethod {
  public id: string;
  public name: string;
  public type: string;
  public backgroundColor: string;
  public links: string[];
  public description: any[];

  constructor(id: string, name: string, type: string, backgroundColor: string, links: string[], description: any[]) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.backgroundColor = backgroundColor;
    this.links = links;
    this.description = description;
  }
}
