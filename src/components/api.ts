import axios from 'axios';

const getComments = async () => {
  const baseUrl = `https://jsonplaceholder.typicode.com/comments?postId=1`;
  return await axios.get<Result>(baseUrl);
};

export interface Result {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
