import 'rxjs';
import {combineEpics} from 'redux-observable';
import {Observable} from 'rxjs/Observable';
import GithubActions from '../Redux/GithubRedux';
import {GithubTypes as Types} from '../Redux/GithubRedux'

const API_URL_BASE = 'https://api.github.com/';

const incrementByEpic = (action$, store) => action$.ofType("INCREMENT_BY_ASYNC")
// .filter(() => true)
    .switchMap(action => Observable.ajax("https://api.github.com/users/defunkt").map((result) => {
    // const data = JSON.parse(result.response);
    console.log(result);
    return {type: "INCREMENT_BY", amount: action.amount};
}))

const getUserAvatar = (action$, store) => action$
    .ofType(Types.GET_USER_AVATAR)
    .switchMap(action => Observable.post(API_URL_BASE + `search/users`, {q: action$.username}).map((result) => {
        console.log(result);
        return {type: 'INCREMENT_BY', amount: result};
    }));

export const githubEpics = combineEpics(incrementByEpic,
//   getUserAvatar
);
