import React from "react";
import gql from "graphql-tag";
import { listKids } from "./graphql/queries";
import { useQuery } from "@apollo/react-hooks";
import KidCard from "./KidCard";

const KidList = ({ selectedKidId, setSelectedKid }) => {
  const { loading, error, data } = useQuery(gql(listKids));
  return (
    <div className="max-w-sm mx-auto">
      <div className="w-full mx-auto">
        <h2
          data-test="kid-list-header"
          className="w-full mx-auto text-gray-800 text-lg font-semibold"
        >
          Kids
        </h2>
        {loading && (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
        <div data-test="kid-list">
          {data &&
            data.listKids.items.map((kid, i) => (
              <KidCard
                key={i}
                kid={kid}
                setSelectedKid={setSelectedKid}
                isSelected={kid.id === selectedKidId}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default KidList;
