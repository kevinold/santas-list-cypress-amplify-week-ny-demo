import React, { useState } from "react";
import ApolloClient from "apollo-client";
import { withAuthenticator } from "aws-amplify-react";
import Amplify, { Auth } from "aws-amplify";
import { ApolloProvider } from "react-apollo";
import { ApolloLink } from "apollo-link";
import { createAuthLink } from "aws-appsync-auth-link";
import { createHttpLink } from "apollo-link-http";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import { InMemoryCache } from "apollo-cache-inmemory";

import Navbar from "./Navbar";
import GiftList from "./GiftList";
import KidForm from "./KidForm";
import KidList from "./KidList";

import config from "./aws-exports";

Amplify.configure(config);

function App() {
  const [selectedKidId, setSelectedKid] = useState();
  return (
    <div className="App">
      <Navbar />
      <div className="flex mb-4 py-24 max-w-6xl mx-auto">
        <div className="w-1/3">
          <div className="w-3/4 mx-auto">
            <h2 className="w-full mx-auto text-gray-800 text-lg font-semibold">
              New Kid
            </h2>
            <KidForm />
          </div>
        </div>
        <div className="w-1/3">
          <KidList
            selectedKidId={selectedKidId}
            setSelectedKid={setSelectedKid}
          />
        </div>
        <div className="w-1/3">
          {
            <GiftList
              selectedKidId={selectedKidId}
              setSelectedKid={setSelectedKid}
            />
          }
        </div>
      </div>
    </div>
  );
}

const url = config.aws_appsync_graphqlEndpoint;
const region = config.aws_appsync_region;
const auth = {
  type: config.aws_appsync_authenticationType,
  jwtToken: async () =>
    (await Auth.currentSession()).getAccessToken().getJwtToken()
};

const httpLink = createHttpLink({ uri: url });

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink(url, httpLink)
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

const provider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default withAuthenticator(provider);
