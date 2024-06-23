import axios from "axios";

const url: string = `https://jsonplaceholder.typicode.com/comments`;

export interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export const getComments = async (): Promise<Comment> => {
  const { data } = await axios.get(url);
  return data.slice(0, 5);
};
