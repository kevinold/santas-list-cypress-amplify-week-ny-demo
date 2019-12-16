import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { getKid } from "./graphql/queries";
import { deleteGift } from "./graphql/mutations";

const DELETE_GIFT = gql`
  ${deleteGift}
`;

const GiftItem = ({ gift, selectedKidId }) => {
  const [deleteGift] = useMutation(DELETE_GIFT, {
    variables: { input: { id: gift.id } },
    refetchQueries: [{ query: gql(getKid), variables: { id: selectedKidId } }]
  });

  return (
    <li className="flex bg-white w-full border-b border-gray-200 p-2 justify-between">
      <div className="flex h-8">
        <p className="text-lg font-semibold">
          <span className="text-gray-900">{gift.description}</span>
          <span className="text-gray-600"> </span>
          <span className="text-gray-900"></span>
        </p>
      </div>
      <div className="flex h-8 mx-auto items-center">
        <div className="text-md text-gray-700">
          <button
            data-test="delete-gift"
            className="inline-block px-2 py-1 rounded bg-red-700 hover:bg-red-500 text-white"
            onClick={() => deleteGift()}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default GiftItem;
