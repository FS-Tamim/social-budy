import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './components/Post/Post';
import NoMatch from './components/NoMatch/NoMatch';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/posts">
         <Post/>
       </Route>
       <Route path="/post/:id">
         <SinglePost/>
       </Route>
       <Route exact path="/">
         <Post/>
       </Route>
       <Route path="*">
         <NoMatch/>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
