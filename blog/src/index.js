import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import reducers from './reducers';
import PostsIndex from './components/postsIndex';
import PostsNew from './components/postNew';
import PostDetail from './components/postDetail';
import promise from 'redux-promise';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);




ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

     <BrowserRouter>
          <div>
            <Switch>
              <Route path="/posts/new" component={PostsNew} />
              <Route path="/post/:id" component={PostDetail}/>
              <Route path="/" component={PostsIndex} />
            </Switch>
          </div>
     </BrowserRouter>


  </Provider>
  , document.querySelector('.container'));
