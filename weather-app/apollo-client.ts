import {ApolloClient, InMemoryCache} from "@apollo/client";

export const getClient = ()=> {
    return new ApolloClient({
        uri: process.env.API_URI,
        cache: new InMemoryCache(),
        headers: {
            Authorization: `apikey ${process.env.STEPZEN_API_KEY}`
        }
    });
}