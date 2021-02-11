export type Maybe<T> = T | null;
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

export type Query = {
    __typename?: 'Query';
    page?: Maybe<Page>;
    pages?: Maybe<Array<Maybe<Page>>>;
    artboard?: Maybe<Artboard>;
    artboards?: Maybe<Array<Maybe<Artboard>>>;
};

export type QueryPageArgs = {
    id?: Maybe<Scalars['ID']>;
};

export type QueryArtboardArgs = {
    id?: Maybe<Scalars['ID']>;
};

export type QueryArtboardsArgs = {
    pageId?: Maybe<Scalars['Int']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    addPage?: Maybe<Page>;
    addArtboard?: Maybe<Artboard>;
};

export type MutationAddPageArgs = {
    title: Scalars['String'];
    test: Scalars['String'];
};

export type MutationAddArtboardArgs = {
    title: Scalars['String'];
    pageId: Scalars['Int'];
};

export type Page = {
    __typename?: 'Page';
    id?: string | undefined;
    title?: Maybe<Scalars['String']>;
};

export type Artboard = {
    __typename?: 'Artboard';
    id?: Maybe<Scalars['ID']>;
    title?: Maybe<Scalars['String']>;
    pageId?: Maybe<Scalars['Int']>;
};
