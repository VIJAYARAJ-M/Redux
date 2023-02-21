import logo from './logo.svg';
import './App.css';
import Movie from './Component/Movie';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore,applyMiddleware } from 'redux';

import { MovieReducer } from './Component/Reducer/Reducer';
import thunk from 'redux-thunk';


function App() {

  const store=createStore(MovieReducer, applyMiddleware(thunk))
  return (
    <div className="App">
     <Provider store={store}>
        <Movie/>
      </Provider>
     
     
    </div>
  );
}

export default App;
