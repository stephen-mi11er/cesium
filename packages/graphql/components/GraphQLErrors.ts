import {GraphQLError as _GraphQLError } from "graphql/error";

export namespace GraphQLErrors{
    export class ForbiddenError extends _GraphQLError{
        constructor(message: string) {
            super(message, {
                extensions: {
                    code: 'FORBIDDEN'
                }
            });
        }
    }

    export class InternalError extends _GraphQLError{
        constructor(message: string) {
            super(message, {
                extensions: {
                    code: 'INTERNAL_ERROR'
                }
            });
        }
    }
    export class NotFound extends _GraphQLError{
        constructor(message: string) {
            super(message, {
                extensions: {
                    code: 'NOT_FOUND'
                }
            });
        }
    }

    export class InitError extends _GraphQLError{
        constructor() {
            super('INIT_ERROR', {
                extensions: {
                    code: 'INIT_ERROR'
                }
            });
        }
    }

    export type GraphQLError = _GraphQLError;
}
