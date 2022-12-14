import React from 'react';
import { StatusBar } from 'react-native';
import GlobalProvider from './src/context/GlobalProvider';
import Root from './src/navigation/NavigationConfig';


const App = () => {

  return (
    <GlobalProvider>
      <>
        <StatusBar />
        <Root />
      </>
    </GlobalProvider>
  );
};

export default App;
