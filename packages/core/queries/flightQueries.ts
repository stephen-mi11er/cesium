export default class FlightQueries{
    static FlightPath(): { query: string } {
        return {
            query: `#graphql
            query FlightPath {
                flightPath {
                    longitude
                    latitude
                    height
                }
            }
            `
        };
    }
}
