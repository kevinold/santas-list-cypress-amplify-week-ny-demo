import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Form, Formik, Field } from "formik";
import { v4 } from "uuid";
import { createGift } from "./graphql/mutations";
import { getKid } from "./graphql/queries";
const CREATE_GIFT = gql`
  ${createGift}
`;

const GiftForm = ({ selectedKidId }) => {
  const [createGift] = useMutation(CREATE_GIFT, {
    refetchQueries: [{ query: gql(getKid), variables: { id: selectedKidId } }]
  });
  return (
    <div className="max-w-sm mx-auto px-1 py-2 mt-6 rounded shadow-md">
      <Formik
        initialValues={{
          description: ""
        }}
        onSubmit={async (data, { setSubmitting, setFieldValue }) => {
          setSubmitting(true);

          createGift({
            variables: {
              input: {
                id: v4(),
                description: data.description,
                giftKidId: selectedKidId
              }
            }
          });

          setFieldValue("description", "");
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div className="flex items-center justify-between">
              <div className="px-2 py-6">
                <Field
                  type="input"
                  name="description"
                  data-test="add-gift"
                  autoComplete="off"
                  placeholder="Add Gift"
                />
              </div>
              <div>
                <button
                  className="inline-block px-5 py-3 rounded bg-blue-700 hover:bg-blue-500 text-white"
                  disabled={isSubmitting}
                  data-test="add-gift-btn"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GiftForm;
