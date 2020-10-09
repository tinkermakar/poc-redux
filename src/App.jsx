import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Container from './components/Container/Container';
import Wrapper from './components/Wrapper/Wrapper';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => (
  <Provider store={store}>
    <Wrapper>
      <Container />
    </Wrapper>
    <Sidebar />
  </Provider>
);

export default App;
