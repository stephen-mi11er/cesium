import {Api, type StackContext} from 'sst/constructs';


export function GraphqlStack({ stack }: StackContext): { graphqlApiUrl: string } {

    const api = new Api(stack, 'Graphql', {
        defaults: {
            function: {
                logRetention: 'four_months',
                environment: {
                },
            }
        },
        routes: {
            'POST /': {
                type: 'graphql',
                function: 'packages/api/graphql/lambda.handler'
            },
            'GET /': {
                type: 'graphql',
                function: 'packages/api/graphql/lambda.handler'
            }
        },
    });

    stack.addOutputs({
        GraphCustomDomainUrl: api.customDomainUrl,
        GraphApiEndpoint: api.url
    });

    return {
        graphqlApiUrl: api.customDomainUrl ?? api.url
    };
}

export default GraphqlStack;
