export class UXMethod {
  public id: string;
  public name: string;
  public banner: string;
  public step: string;
  public type: string;
  public properties: any;
  public links: string[];
  public description: any[];

  constructor(id: string, name: string, banner: string, step: string, type: string, properties: any, links: string[], description: any[]) {
    this.id = id;
    this.name = name;
    this.banner = banner;
    this.step = step;
    this.type = type;
    this.properties = properties;
    this.links = links;
    this.description = description;
  }
}
