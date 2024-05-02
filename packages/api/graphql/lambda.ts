import { ApolloServer } from '@apollo/server';
import {
    startServerAndCreateLambdaHandler,
    handlers
} from '@as-integrations/aws-lambda';
import {typeDefs, resolvers} from './modules';
import {GraphQLErrors} from './components';
import {ObjectUtils} from '@cesium/core/components';
import {type GraphqlContext} from './models';

// Set up Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const graphApiKey = ObjectUtils.InitEnv(process.env.GRAPHQL_API_KEY, 'GRAPHQL_API_KEY');

export const handler = startServerAndCreateLambdaHandler(server, handlers.createAPIGatewayProxyEventV2RequestHandler(), {
    context: async ({ event, context }) => {
        const {'api-key': apiKey} = event.headers;

        if (graphApiKey !== apiKey){
            throw new GraphQLErrors.ForbiddenError('Unauthorized');
        }

        return {
            sentBody: event.body,
            lambdaContext: context,
            dataSources: {
            }
        } satisfies GraphqlContext;
    }
});
