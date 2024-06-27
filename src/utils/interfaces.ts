export interface Task {
  id: number;
  taskInfo: string;
  completed: boolean;
}

export interface TaskCreatorProps {
  setToDoArr: React.Dispatch<React.SetStateAction<Task[]>>;
  toDoArr: Task[];
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  title: string;
  taskId: number;
  onTaskCompleted: (taskId: number) => void;
  completed: boolean;
}

export interface FooterProps {
  toDoArr: Task[];
}
