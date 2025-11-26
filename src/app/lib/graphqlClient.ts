import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.CMS_URL || ''

export const client = new GraphQLClient(endpoint, {
  headers: {
  },
});
