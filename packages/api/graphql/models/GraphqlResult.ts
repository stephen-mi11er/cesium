import {type GraphQLErrors} from '../components';

export default interface GraphqlResult{
    statusCode?: number
    response?: any
    error?: GraphQLErrors.GraphQLError
}
