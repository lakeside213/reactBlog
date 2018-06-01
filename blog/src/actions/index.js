import axios from 'axios';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const FETCH_DETAIL = 'fetch_detail';
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
export const DELETE_POST= 'delete';
const API_KEY = '?key=feliciaIsaGoat';


export function fetchPosts(){

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return{
    type: FETCH_POST,
    payload: request
  };
}

export function createPost(values,redirect){

  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values).then(()=>redirect());

  return{
    type: CREATE_POST,
    payload: request
  };
}

export function deletePost(id,redirect){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then(()=>redirect());
  return{
    type: DELETE_POST,
    payload: id
  }
}
export function fetchDetail(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  console.log(request);
  return{
    type: FETCH_DETAIL,
    payload: request
  };
}
