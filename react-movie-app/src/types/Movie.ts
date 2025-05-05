class Movie {
  public readonly id: number;
  public readonly name: string;
  public readonly poster: string;
  public readonly realeaseDate: Date;

  constructor(id: number, name: string, poster: string, realeaseDate: Date) {
    this.id = id;
    this.name = name;
    this.poster = poster;
    this.realeaseDate = realeaseDate;
  }
}

export default Movie;
