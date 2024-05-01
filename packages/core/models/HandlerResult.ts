export default interface HandlerResult {
    statusCode?: number;
    response: any | null;
    error: Error | null;
}
