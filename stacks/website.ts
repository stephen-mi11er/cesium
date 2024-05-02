import {StackContext, AstroSite, use} from "sst/constructs";
import {RetentionDays} from 'aws-cdk-lib/aws-logs';
import {GraphqlStack} from "./GraphqlStack";

export function website({ stack }: StackContext) {
    const { graphqlApiUrl } = use(GraphqlStack);
    const site = new AstroSite(stack, 'website', {
        cdk: {
            server: {
                logRetention: RetentionDays.FOUR_MONTHS
            }
        },
        environment: {
            PUBLIC_CESIUM_ACCESS_TOKEN: process.env.PUBLIC_CESIUM_ACCESS_TOKEN!,
            GRAPHQL_API_URL: graphqlApiUrl!,
            GRAPHQL_API_KEY: process.env.GRAPHQL_API_KEY!
        },
        path: 'packages/web/website',
    });

    stack.addOutputs({
        SiteUrl: site.url ?? 'http://127.0.0.1:3000/',
        CustomDomainUrl: site.customDomainUrl
    });
}

export default website;