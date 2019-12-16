/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getKid = `query GetKid($id: ID!) {
  getKid(id: $id) {
    id
    name
    gifts {
      items {
        id
        description
      }
      nextToken
    }
  }
}
`;
export const listKids = `query ListKids($filter: ModelKidFilterInput, $limit: Int, $nextToken: String) {
  listKids(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      gifts {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getGift = `query GetGift($id: ID!) {
  getGift(id: $id) {
    id
    description
    kid {
      id
      name
      gifts {
        nextToken
      }
    }
  }
}
`;
export const listGifts = `query ListGifts(
  $filter: ModelGiftFilterInput
  $limit: Int
  $nextToken: String
) {
  listGifts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      kid {
        id
        name
      }
    }
    nextToken
  }
}
`;
