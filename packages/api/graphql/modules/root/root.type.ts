const Root = `#graphql
    scalar JSON

    type Response{
        success: String
        error: String
    }

    type Image{
        url: String!
        alt: String!
    }
`;

export default Root;