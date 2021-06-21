// import logo from './logo.svg';
// import './App.css';
// import React, { useEffect } from 'react'; 
// // import {Router,Route} from 'react-router-dom';
// // import {Profile} from './component/Profile'
// import {Banner} from './component/Banner'
// // import Counter from './component/Counter'
// // import MyComponent from './component/MyComponent'
// import Home from './component/Home'
// import Login from './component/Login'

// function App() {
//     return (
//         // <Router>
//         //         <Route path="/" render={Home} />
//         //         <Route path="/login" render={Login} />
//         // </Router>
//         <Banner/>
//     );
// }

// export default App;

import React from 'react;
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
 return (<div>App</div>)
}

const Dashboard = () => {
 return (<div>Dashboard</div>)
}

const Profile = () => {
 return (<div>Profile</div>)
}

const Router = () => {
 return (
    <BrowserRouter>
        <Route path='/' component={App}></Route>
        <Route path='/dashboard/profile' component={Profile}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
    </BrowserRouter>
 )
}


