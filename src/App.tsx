import React from 'react';
import { useTranslation } from 'react-i18next';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';
import DataComponent from './components/DataComponent';

const App: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <ApolloProvider client={client}>
      <div>
        <main>
          <DataComponent />
        </main>
      </div>
    </ApolloProvider>
  );
};

export default App;
