export interface Task {
  id: number;
  taskInfo: string;
  completed: boolean;
}

export interface TaskCreatorProps {
  setToDoArr: React.Dispatch<React.SetStateAction<Task[]>>;
  toDoArr: Task[];
  darkTheme: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  darkTheme: boolean;
}

export interface ButtonProps {
  title: string;
  taskId: number;
  onTaskCompleted: (taskId: number) => void;
  completed: boolean;
  darkTheme: boolean;
}

export interface FooterProps {
  toDoArr: Task[];
  darkTheme: boolean;
}

export interface DarkTheme {
  darkTheme: boolean;
  setDarkTheme?: React.Dispatch<React.SetStateAction<boolean>>;
}
