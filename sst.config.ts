import { SSTConfig } from "sst";
import { RemovalPolicy } from 'aws-cdk-lib';
import { website, GraphqlStack } from "./stacks";

export default {
  config(_input) {
    return {
      name: "cesium",
      region: "us-east-1",
    };
  },
  stacks(app) {
    const protectedStacks = ['prod', 'dev'];

    if (!protectedStacks.includes(app.stage)) {
      app.setDefaultRemovalPolicy(RemovalPolicy.DESTROY);
    }

    app.setDefaultFunctionProps({
      runtime: 'nodejs18.x',
      architecture: 'arm_64',
      environment: {
        IS_PROD: (app.stage === 'prod').toString(),
        GRAPHQL_API_KEY: process.env.GRAPHQL_API_KEY!
      }
    });

    app.stack(GraphqlStack, {
      terminationProtection: protectedStacks.includes(app.stage)
    });

    app.stack(website, {
      terminationProtection: protectedStacks.includes(app.stage)
    });
  }
} satisfies SSTConfig;
