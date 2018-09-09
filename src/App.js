import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import NavigatorScreen from './components/Screens/NavigatorScreen';
import reducers from './reducers';
import * as firebase from 'firebase';


class App extends Component {
   
    componentWillMount(){

      const config = {
        apiKey: "AIzaSyAeW2bqHeSiHWl4PWxzHEdnaOQCa0L_uVs",
        authDomain: "my-data-base-bfa6f.firebaseapp.com",
        databaseURL: "https://my-data-base-bfa6f.firebaseio.com",
        projectId: "my-data-base-bfa6f",
        storageBucket: "my-data-base-bfa6f.appspot.com",
        messagingSenderId: "611937865347"
      };
      firebase.initializeApp(config);

  }

  
  render() {
    return (
      <Provider store ={createStore(reducers, {} , applyMiddleware(ReduxThunk))}>
        <NavigatorScreen />
     </Provider>
    );
  }
}

export default App;