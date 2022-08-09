/* eslint-disable consistent-return */
import axios from 'axios';

export default class PostService {
  static async getPosts(limit = 1, page = 1) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }
}
