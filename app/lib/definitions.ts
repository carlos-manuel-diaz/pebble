export type User ={
  id: number;
  name: string;
  email: string;
  created_at: Date;
}


export type Member = {
  id: number;
  name: string;
  role: string;
  user_id: number;
}

export type Task = {
  id: number;
  name: string;
  description: string;
  priority: number;
  status: string;
  due_date: Date;
  assigned_by: string;
  assigned_to: string;

}