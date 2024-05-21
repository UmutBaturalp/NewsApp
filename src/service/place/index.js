import {getNews, TodosPost} from '../NetworkUrl';
import {get, post} from '../main';

const getNewsApi = body => {
  const TodosUrl = getNews + body;
  return get(TodosUrl);
};
const TodosListApi = () => {
  return get(Todos);
};
const PlaceApi = body => {
  return post(TodosPost, body);
};

export default {getNewsApi, PlaceApi};
