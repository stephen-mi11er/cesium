import type {
    RadarPoints,
} from '@cesium/core/models';
import {FlightQueries} from '@cesium/core/queries';
import {ObjectUtils, FetchHandler} from '@cesium/core/components';

export default class DataQueries {
    private readonly graphqlApiUrl;
    private readonly graphqlApiKey;
    private readonly fetchHandler;

    constructor() {
        this.graphqlApiUrl = ObjectUtils.InitEnv(import.meta.env.GRAPHQL_API_URL, 'GRAPHQL_API_URL');
        this.graphqlApiKey = ObjectUtils.InitEnv(import.meta.env.GRAPHQL_API_KEY, 'GRAPHQL_API_KEY');
        this.fetchHandler = new FetchHandler(this.graphqlApiUrl, this.graphqlApiKey);
    }

    public async FlightPath(): Promise<RadarPoints[]>{
        const json = await this.fetchHandler.fetchData(FlightQueries.FlightPath());
        return json.data.flightPath;
    }
}
