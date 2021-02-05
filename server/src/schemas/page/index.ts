import {
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
} from 'graphql';
import { Page } from '../../models/page';

export const PageId = GraphQLInt;

export const PageType = new GraphQLObjectType({
    name: 'Page',
    fields: {
        id: {
            type: PageId,
        },
        title: {
            type: GraphQLString,
        },
    },
});

const Query = new GraphQLObjectType({
    name: 'PageQuery',
    fields: {
        page: {
            type: PageType,
            args: {
                id: {
                    type: GraphQLID,
                },
            },
            resolve(parent, args) {
                return Page.findById(args.id);
            },
        },
        pages: {
            type: new GraphQLList(PageType),
            resolve(parent, args) {
                return Page.find({});
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: 'PageMutation',
    fields: {
        addPage: {
            type: PageType,
            args: {
                title: {
                    type: new GraphQLNonNull(GraphQLString),
                },
                test: {
                    type: new GraphQLNonNull(GraphQLString),
                },
            },
            resolve(parent, args) {
                const page = new Page({ ...args });
                page.save();
                return page;
            },
        },
    },
});

export const PageSchema = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
