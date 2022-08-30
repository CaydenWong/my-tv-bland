import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  name: Scalars['String'];
  timezone: Scalars['String'];
};

export type DvdCountry = {
  __typename?: 'DvdCountry';
  code: Scalars['String'];
  name: Scalars['String'];
  timezone: Scalars['String'];
};

export type HyperLink = {
  __typename?: 'HyperLink';
  href: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  medium: Scalars['String'];
  original: Scalars['String'];
};

export type Links = {
  __typename?: 'Links';
  nextepisode?: Maybe<HyperLink>;
  previousepisode?: Maybe<HyperLink>;
  self?: Maybe<HyperLink>;
};

export type Network = {
  __typename?: 'Network';
  country: Country;
  id: Scalars['ID'];
  name: Scalars['String'];
  officialSite?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  schedules: Array<Schedule>;
};

export type Rating = {
  __typename?: 'Rating';
  average?: Maybe<Scalars['Float']>;
};

export type Schedule = {
  __typename?: 'Schedule';
  _links: Links;
  airdate: Scalars['String'];
  airstamp: Scalars['String'];
  airtime: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Image>;
  name: Scalars['String'];
  number: Scalars['Float'];
  rating: Rating;
  runtime: Scalars['Float'];
  season: Scalars['Float'];
  show: Show;
  summary?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  url: Scalars['String'];
};

export type Show = {
  __typename?: 'Show';
  _links: Links;
  averageRuntime: Scalars['Float'];
  dvdCountry?: Maybe<DvdCountry>;
  ended?: Maybe<Scalars['String']>;
  externals: Scalars['String'];
  genres: Array<Scalars['String']>;
  id: Scalars['ID'];
  image: Image;
  language: Scalars['String'];
  name: Scalars['String'];
  network?: Maybe<Network>;
  officialSite?: Maybe<Scalars['String']>;
  premiered: Scalars['String'];
  rating: Rating;
  runtime: Scalars['Float'];
  schedule: ShowSchedule;
  status: Scalars['String'];
  summary?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  updated: Scalars['Float'];
  url: Scalars['String'];
  webChannel?: Maybe<Network>;
  weight: Scalars['Float'];
};

export type ShowSchedule = {
  __typename?: 'ShowSchedule';
  days: Array<Scalars['String']>;
  time: Scalars['String'];
};

export type GetSchedulesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSchedulesQuery = { __typename?: 'Query', schedules: Array<{ __typename?: 'Schedule', id: string, name: string, show: { __typename?: 'Show', name: string, network?: { __typename?: 'Network', name: string } | null } }> };


export const GetSchedulesDocument = gql`
    query getSchedules {
  schedules {
    id
    name
    show {
      name
      network {
        name
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getSchedules(variables?: GetSchedulesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSchedulesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSchedulesQuery>(GetSchedulesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getSchedules', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;