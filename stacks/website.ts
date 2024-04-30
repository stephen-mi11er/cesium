import { StackContext, AstroSite } from "sst/constructs";
import {RetentionDays} from 'aws-cdk-lib/aws-logs';

export function website({ stack }: StackContext) {
    const site = new AstroSite(stack, 'website', {
        cdk: {
            server: {
                logRetention: RetentionDays.FOUR_MONTHS
            }
        },
        environment: {
            PUBLIC_CESIUM_ACCESS_TOKEN: process.env.PUBLIC_CESIUM_ACCESS_TOKEN!
        },
        path: 'packages/web/website',
    });

    stack.addOutputs({
        SiteUrl: site.url ?? 'http://127.0.0.1:3000/',
        CustomDomainUrl: site.customDomainUrl
    });
}
