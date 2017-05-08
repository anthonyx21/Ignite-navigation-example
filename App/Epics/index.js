import { githubEpics } from './GithubEpics'
import { combineEpics } from 'redux-observable';

export default combineEpics(
  githubEpics
);