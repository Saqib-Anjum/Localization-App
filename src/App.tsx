import React from 'react';
import { useTranslation } from 'react-i18next';
import DataComponent from './components/DataComponent';

const App: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
      <div>
        <main>
          <DataComponent />
        </main>
      </div>
  );
};

export default App;
