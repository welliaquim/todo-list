import { ButtonProps } from "../utils/interfaces";

const CheckButton: React.FC<ButtonProps> = ({ title, onTaskCompleted, taskId, completed }) => {
  const handleButtonBg = () => {
    if (completed) return "bg-gradient-to-br from-blue-600/70 to-purple-600/60";
  };
  return (
    <button
      className={` flex justify-center items-center h-6 w-7 rounded-full border ${handleButtonBg()} hover:border-t-blue-600/[.70] hover:border-l-blue-600/[.70] hover:border-r-purple-600/[.60] hover:border-b-purple-600/[.60]`}
      title={title}
      onClick={() => {
        onTaskCompleted(taskId);
      }}
    >
      {completed && (
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
        </svg>
      )}
    </button>
  );
};

export default CheckButton;
