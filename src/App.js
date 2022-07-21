import logo from './logo.svg';
import './App.css';
import Layout from './componets/Layout/Layout';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Medicine from './container/Medicine';
import Doctors from './container/Doctors';
import Form from './componets/Form';
import Counter from './container/counter/Counter'
import { ConfigStore } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import Promisise from './container/promises/Promisise';
import Hookexample from './HookExample/Hookexample';

function App() {
  const {store , persistor} = ConfigStore();
  return (
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Layout>
      <Switch>
        <Route exact path={"/Medicine"} component={Medicine}></Route>
        <Route exact path={"/Doctors"} component={Doctors}></Route>
        <Route exact path={"/Btn"} component={Form}></Route>
        <Route exact path={"/counter"} component={Counter} ></Route>
        <Route exact path={"/Promisis"} component={Promisise}></Route>
        <Route exact path={"/HookExample"} component={Hookexample}></Route>
      </Switch>

    </Layout>
    </PersistGate>
    </Provider>
    
    
    </>
  );
}

export default App;
