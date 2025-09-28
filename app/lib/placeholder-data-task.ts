// Task management placeholder data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const teamMembers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Sarah Johnson',
    email: 'sarah@company.com',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Mike Chen',
    email: 'mike@company.com',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Emily Davis',
    email: 'emily@company.com',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Alex Rodriguez',
    email: 'alex@company.com',
  },
];

const tasks = [
  {
    id: 'a1b2c3d4-e5f6-4a5b-8c9d-1e2f3a4b5c6d',
    name: 'Design new landing page',
    description: 'Create mockups for the new product landing page',
    priority: 'high',
    status: 'in-progress',
    due_date: '2025-10-15',
    assigned_by: users[0].id,
    assigned_to: teamMembers[0].id,
  },
  {
    id: 'b2c3d4e5-f6a7-4b5c-9d1e-2f3a4b5c6d7e',
    name: 'Fix login bug',
    description: 'Users cannot login with special characters in password',
    priority: 'urgent',
    status: 'pending',
    due_date: '2025-09-30',
    assigned_by: users[0].id,
    assigned_to: teamMembers[1].id,
  },
  {
    id: 'c3d4e5f6-a7b8-4c5d-1e2f-3a4b5c6d7e8f',
    name: 'Update documentation',
    description: 'Add API documentation for new endpoints',
    priority: 'medium',
    status: 'completed',
    due_date: '2025-09-25',
    assigned_by: users[0].id,
    assigned_to: teamMembers[2].id,
  },
  {
    id: 'd4e5f6a7-b8c9-4d5e-2f3a-4b5c6d7e8f9a',
    name: 'Database optimization',
    description: 'Optimize slow queries in production database',
    priority: 'high',
    status: 'in-progress',
    due_date: '2025-10-05',
    assigned_by: users[0].id,
    assigned_to: teamMembers[3].id,
  },
  {
    id: 'e5f6a7b8-c9d1-4e5f-3a4b-5c6d7e8f9a0b',
    name: 'Code review',
    description: 'Review pull request #234',
    priority: 'low',
    status: 'pending',
    due_date: '2025-09-28',
    assigned_by: users[0].id,
    assigned_to: teamMembers[1].id,
  },
];

// // You can keep revenue or replace with task metrics
// const taskMetrics = [
//   { month: 'Jan', completed: 12 },
//   { month: 'Feb', completed: 15 },
//   { month: 'Mar', completed: 18 },
//   { month: 'Apr', completed: 22 },
//   { month: 'May', completed: 19 },
//   { month: 'Jun', completed: 25 },
//   { month: 'Jul', completed: 28 },
//   { month: 'Aug', completed: 24 },
//   { month: 'Sep', completed: 20 },
//   { month: 'Oct', completed: 23 },
//   { month: 'Nov', completed: 26 },
//   { month: 'Dec', completed: 30 },
// ];

export { users, teamMembers, tasks};