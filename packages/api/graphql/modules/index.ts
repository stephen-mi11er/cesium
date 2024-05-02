import { Root, RootResolver } from './root/index';
import { Flight, FlightResolver } from './flight';
import { typeDefs as scalarTypeDefs } from 'graphql-scalars';

const resolvers = [
    RootResolver,
    FlightResolver
];

const typeDefs = [
    Root,
    Flight,
    scalarTypeDefs
];

export {resolvers, typeDefs};
