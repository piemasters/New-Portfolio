export class Role {
  public id: number;
  public headline: string;
  public description: string;
  public from: number;
  public to: number;
  public location: string;

  constructor(id: number, headline: string, description: string, from: number, to: number, location: string) {
    this.id = id;
    this.headline = headline;
    this.description = description;
    this.from = from;
    this.to = to;
    this.location = location;
  }
}
