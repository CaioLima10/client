import { api_endpoint } from "../constants/index";
import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient(api_endpoint);

export const postsSection = async () => {
  const query = gql`
    query Posts {
      reactnowones {
        introduction
        image {
          url
        }
        description
      }
    }
  `;

  const response = await graphQLClient.request(query);

  return response;
};
