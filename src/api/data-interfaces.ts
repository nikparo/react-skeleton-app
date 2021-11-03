export interface Post {
  created_time: string;
  from_id: string;
  from_name: string;
  id: string;
  message: string;
  type: string; // Only ever 'status'?;
}

export interface Author {
  id: string;
  name: string;
  postCount: number;
  posts: Post[];
}
