import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './Config/Styles/GlobalStyle';
import { Provider } from 'react-redux';
import store from './Store/index';
import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ChakraProvider>
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </>
);
