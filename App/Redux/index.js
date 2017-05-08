import { combineReducers, applyMiddleware, createStore } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import {createEpicMiddleware} from 'redux-observable';
import rootEpic from '../Epics';

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    github: require('./GithubRedux').reducer,
    login: require('./LoginRedux').reducer,
    search: require('./SearchRedux').reducer
  })

  const epicMiddleware = createEpicMiddleware(rootEpic);

console.log(epicMiddleware);
  return configureStore(rootReducer, rootSaga, applyMiddleware(epicMiddleware))
  // return createStore(rootReducer, applyMiddleware(epicMiddleware))
}
