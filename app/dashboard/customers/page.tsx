'use client';
import { useState } from 'react';
import { Task } from '@/app/lib/definitions';


export default function PostLoader() {
  // FIX 1: Renamed state variable from 'members' to 'tasks'
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMorePosts = async () => {
    setIsLoading(true);
    const response = await fetch('/api/task?take=3');
    const newTasks = await response.json();
    
    setTasks(newTasks);
    setIsLoading(false);
  };

  return (
    <div>
      {/* FIX 3: Uncommented the button to make it usable */}
      <button onClick={fetchMorePosts} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Load 3 Tasks'}
      </button>

      <ul>
        {/* FIX 2: This now correctly maps over the 'tasks' state variable */}
        {tasks.map((task) => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
}