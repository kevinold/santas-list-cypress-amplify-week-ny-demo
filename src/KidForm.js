import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { createKid } from "./graphql/mutations";
import { Form, Formik, Field } from "formik";
import { v4 } from "uuid";

import { listKids } from "./graphql/queries";
const CREATE_KID = gql`
  ${createKid}
`;

const KidForm = () => {
  const [createKid] = useMutation(CREATE_KID, {
    refetchQueries: [{ query: gql(listKids) }]
  });
  return (
    <div className="max-w-sm mx-auto px-1 py-2 mt-2 rounded shadow-md">
      <Formik
        initialValues={{
          name: ""
        }}
        onSubmit={async (data, { setSubmitting, setFieldValue }) => {
          setSubmitting(true);
          // make async call
          createKid({
            variables: {
              input: { id: v4(), name: data.name }
            }
          });

          setFieldValue("name", "");
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div className="flex items-center justify-between">
              <div className="px-4 py-4">
                <Field
                  type="input"
                  name="name"
                  data-test="kid-name-input"
                  autoComplete="off"
                  placeholder="Kid's Name"
                />
              </div>
              <div>
                <button
                  className="inline-block px-3 py-3 rounded bg-blue-700 hover:bg-blue-500 text-white"
                  disabled={isSubmitting}
                  data-test="add-kid-btn"
                  type="submit"
                >
                  Add Kid
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default KidForm;
