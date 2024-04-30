import { StackContext, AstroSite } from "sst/constructs";
import {RetentionDays} from 'aws-cdk-lib/aws-logs';

export function website({ stack }: StackContext) {
    const site = new AstroSite(stack, 'website', {
        cdk: {
            server: {
                logRetention: RetentionDays.FOUR_MONTHS
            }
        },
        path: 'packages/web/website',
    });

    stack.addOutputs({
        SiteUrl: site.url ?? 'http://127.0.0.1:3000/',
        CustomDomainUrl: site.customDomainUrl
    });
}
