import React from "react"
import Ball from './Component/Ball'
import "./App.css";
import {Provider} from 'react-redux'  // import provider
import store from './store'        // import your redux store

function App() {
	return (
        // wrap your app inside the provider with passing your store as prop
        <Provider store={store}>    
            <div className='App'>
                <Ball></Ball>
            </div>
        </Provider>
	);
}

export default App;
