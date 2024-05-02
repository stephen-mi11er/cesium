const RootResolver = {
    Image: {
        url: (parent: any, _args: any, context: any, _info: any) => {
            return parent.url ?? parent.image;
        },
        alt: (parent: any, _args: any, context: any, _info: any) => {
            return parent.alt ?? parent.altText;
        }
    }
};

export default RootResolver;
