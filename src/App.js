import React from 'react';
import './App.css';
import Link from './router';
import { Provider } from 'react-redux';
import store from './redux';

function App() {

  return (
    <>
      <Provider store={store}>
          <Link />
      </Provider>
    </>
  );
}

export default App;
