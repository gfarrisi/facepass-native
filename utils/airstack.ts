import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const AIRSTACK_URL = 'https://api.airstack.xyz/gql';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: AIRSTACK_URL,
  cache: new InMemoryCache(),
});

// Your query
const BULK_FETCH_QUERY = gql`
  query BulkFetchPrimaryENSandXMTP($address: [Identity!]) {
    XMTPs(input: { blockchain: ALL, filter: { owner: { _in: $address } } }) {
      XMTP {
        isXMTPEnabled
        owner {
          addresses
          primaryDomain {
            name
          }
        }
      }
    }
  }
`;

export const fetchPrimaryENSandXMTP = async (
  addresses: string[],
): Promise<string[]> => {
  const { data, errors } = await client.query({
    query: BULK_FETCH_QUERY,
    variables: {
      address: addresses,
    },
  });

  if (errors) {
    console.error(errors);
    throw new Error('Error fetching data');
  }

  const hasXMTP = data?.XMTPs?.XMTP?.map((x: any) =>
    x.isXMTPEnabled === true ? x.owner?.addresses : false,
  ).filter((x: any) => x !== false);
  const flatArray: string[] = hasXMTP.flat();
  return flatArray;
};
