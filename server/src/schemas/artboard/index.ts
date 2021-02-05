import { GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import { Artboard } from '../../models/artboard';
import { PageId } from '../page/index';

export const ArtboardType = new GraphQLObjectType({
    name: 'Artboard',
    fields: {
        id: {
            type: GraphQLID,
        },
        title: {
            type: GraphQLString,
        },
        pageId: {
            type: PageId,
        },
    },
});

const Query = new GraphQLObjectType({
    name: 'ArtboardQuery',
    fields: {
        artboard: {
            type: ArtboardType,
            args: {
                id: {
                    type: GraphQLID,
                },
            },
            resolve(parent, { id }) {
                return Artboard.findById(id);
            },
        },
        artboards: {
            type: new GraphQLList(ArtboardType),
            args: {
                pageId: {
                    type: PageId,
                },
            },
            resolve(parent, { pageId }) {
                return Artboard.find({ pageId });
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: 'ArtboardMutation',
    fields: {
        addArtboard: {
            type: ArtboardType,
            args: {
                title: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                pageId: {
                    type: new GraphQLNonNull(PageId),
                },
            },
            resolve(parent, args) {
                const artboard = new Artboard({ ...args });
                return artboard.save();
            },
        },
    },
});

export const ArtboardSchema = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
