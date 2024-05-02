const Flight = `#graphql
    type RadarPoints{
        longitude: String
        latitude: String
        height: String
    }

    type Query{
        flightPath: [RadarPoints!]
    }
`;

export default Flight;
