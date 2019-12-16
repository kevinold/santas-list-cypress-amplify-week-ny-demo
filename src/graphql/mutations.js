/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createKid = `mutation CreateKid(
  $input: CreateKidInput!
  $condition: ModelKidConditionInput
) {
  createKid(input: $input, condition: $condition) {
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
export const updateKid = `mutation UpdateKid(
  $input: UpdateKidInput!
  $condition: ModelKidConditionInput
) {
  updateKid(input: $input, condition: $condition) {
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
export const deleteKid = `mutation DeleteKid(
  $input: DeleteKidInput!
  $condition: ModelKidConditionInput
) {
  deleteKid(input: $input, condition: $condition) {
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
export const createGift = `mutation CreateGift(
  $input: CreateGiftInput!
  $condition: ModelGiftConditionInput
) {
  createGift(input: $input, condition: $condition) {
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
export const updateGift = `mutation UpdateGift(
  $input: UpdateGiftInput!
  $condition: ModelGiftConditionInput
) {
  updateGift(input: $input, condition: $condition) {
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
export const deleteGift = `mutation DeleteGift(
  $input: DeleteGiftInput!
  $condition: ModelGiftConditionInput
) {
  deleteGift(input: $input, condition: $condition) {
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
