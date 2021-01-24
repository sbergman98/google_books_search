import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&key=AIzaSyD0GZIbIGI9JHBAzbxIVOaUydfhZt6oby8";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};
