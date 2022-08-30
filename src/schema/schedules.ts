import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class Rating {
  @Field({ nullable: true })
  average?: number;
}

@ObjectType()
export class Image {
  @Field(() => String)
  medium: string;

  @Field(() => String)
  original: string;
}

@ObjectType()
class HyperLink {
  @Field(() => String)
  href: string;
}

@ObjectType()
class Links {
  @Field({ nullable: true })
  self?: HyperLink;

  @Field({ nullable: true })
  previousepisode?: HyperLink;

  @Field({ nullable: true })
  nextepisode?: HyperLink;
}

@ObjectType()
class Country {
  @Field(() => String)
  name: string;

  @Field(() => String)
  code: string;

  @Field(() => String)
  timezone: string;
}

@ObjectType()
class Network {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Country)
  country: Country;

  @Field({ nullable: true })
  officialSite?: string;
}

@ObjectType()
class DvdCountry {
  @Field(() => String)
  name: string;

  @Field(() => String)
  code: string;

  @Field(() => String)
  timezone: string;
}

@ObjectType()
class Externals {
  @Field({ nullable: true })
  tvrage?: number;

  @Field({ nullable: true })
  thetvdb?: number;

  @Field({ nullable: true })
  imdb?: string;
}

@ObjectType()
class ShowSchedule {
  @Field(() => String)
  time: string;

  @Field(() => [String])
  days: string[];
}

@ObjectType()
export class Show {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  url: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  language: string;

  @Field(() => [String])
  genres: string[];

  @Field(() => String)
  status: string;

  @Field(() => Number)
  runtime: number;

  @Field(() => Number)
  averageRuntime: number;

  @Field(() => String)
  premiered: string;

  @Field({ nullable: true })
  ended?: string;

  @Field({ nullable: true })
  officialSite?: string;

  @Field(() => ShowSchedule)
  schedule: ShowSchedule;

  @Field(() => Rating)
  rating: Rating;

  @Field(() => Number)
  weight: number;

  @Field({ nullable: true })
  network?: Network;

  @Field({ nullable: true })
  webChannel?: Network;

  @Field({ nullable: true })
  dvdCountry?: DvdCountry;

  @Field(() => String)
  externals: Externals;

  @Field(() => Image)
  image: Image;

  @Field({ nullable: true })
  summary?: string;

  @Field(() => Number)
  updated: number;

  @Field(() => Links)
  _links: Links;
}

@ObjectType()
export class Schedule {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  url: string;

  @Field(() => String)
  name: string;

  @Field(() => Number)
  season: number;

  @Field(() => Number)
  number: number;

  @Field(() => String)
  type: string;

  @Field(() => String)
  airdate: string;

  @Field(() => String)
  airtime: string;

  @Field(() => String)
  airstamp: string;

  @Field(() => Number)
  runtime: number;

  @Field(() => Rating)
  rating: Rating;

  @Field({ nullable: true })
  image?: Image;

  @Field({ nullable: true })
  summary?: string;

  @Field(() => Show)
  show: Show;

  @Field(() => Links)
  _links: Links;
}
