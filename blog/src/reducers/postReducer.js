import _ from 'lodash';
import {FETCH_POST,FETCH_DETAIL,DELETE_POST} from '../actions';

export default function(state={},action){
  switch(action.type){
    case DELETE_POST:
     return _.omit(state,action.payload);
    case FETCH_DETAIL:
     return {...state,[action.payload.data.id]:action.payload.data};
    case FETCH_POST:
        return _.mapKeys(action.payload.data,'id');
    default:
      return state
  }
}
