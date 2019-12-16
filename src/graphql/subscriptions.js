/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateKid = `subscription OnCreateKid {
  onCreateKid {
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
export const onUpdateKid = `subscription OnUpdateKid {
  onUpdateKid {
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
export const onDeleteKid = `subscription OnDeleteKid {
  onDeleteKid {
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
export const onCreateGift = `subscription OnCreateGift {
  onCreateGift {
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
export const onUpdateGift = `subscription OnUpdateGift {
  onUpdateGift {
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
export const onDeleteGift = `subscription OnDeleteGift {
  onDeleteGift {
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
