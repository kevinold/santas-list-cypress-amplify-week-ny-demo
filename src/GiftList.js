import React from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import GiftForm from "./GiftForm";
import GiftItem from "./GiftItem";
import { getKid, listKids } from "./graphql/queries";
import { deleteKid } from "./graphql/mutations";

const DELETE_KID = gql`
  ${deleteKid}
`;

const GiftList = ({ selectedKidId, setSelectedKid }) => {
  const { loading, data } = useQuery(gql(getKid), {
    variables: { id: selectedKidId }
  });

  const [deleteKid] = useMutation(DELETE_KID, {
    variables: { input: { id: selectedKidId } },
    refetchQueries: [{ query: gql(listKids) }],
    onCompleted: () => setSelectedKid(undefined)
  });

  return (
    <div className="w-3/4 mx-auto">
      <h2
        data-test="gift-list-header"
        className="w-full mx-auto text-gray-800 text-lg font-semibold"
      >
        Gift List
      </h2>
      {!selectedKidId && (
        <div data-test="choose-kid" className="mt-8 px-6 w-full mx-auto">
          Choose Kid
        </div>
      )}
      {selectedKidId && <GiftForm selectedKidId={selectedKidId} />}
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {selectedKidId && (
        <div>
          <h2 className="w-full mx-auto text-gray-800 text-lg mt-8 font-semibold">
            List of Toys
          </h2>
          <div data-test="gift-list" className="px-2 py-4 mt-2">
            {data &&
              data.getKid.gifts.items.map((gift, i) => (
                <GiftItem key={i} gift={gift} selectedKidId={selectedKidId} />
              ))}
          </div>
          <button
            data-test="delete-kid"
            className="inline-block px-5 py-3 rounded bg-red-700 hover:bg-red-500 text-white"
            onClick={() => {
              deleteKid();
            }}
          >
            Delete Kid
          </button>
        </div>
      )}
    </div>
  );
};

export default GiftList;
