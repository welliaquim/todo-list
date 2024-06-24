interface ButtonProps {
  title: string;
  checkedTask: boolean;
  setCheckedTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const CheckButton: React.FC<ButtonProps> = ({ title, checkedTask, setCheckedTask }) => {
  const handleButtonBg = () => {
    if (checkedTask) return "bg-gradient-to-br from-blue-600/70 to-purple-600/60";
  };
  return (
    <button
      className={` flex justify-center items-center h-6 w-6 rounded-full border ${handleButtonBg()} hover:border-t-blue-600/[.70] hover:border-l-blue-600/[.70] hover:border-r-purple-600/[.60] hover:border-b-purple-600/[.60]`}
      title={title}
      onClick={() => {
        setCheckedTask(!checkedTask);
      }}
    >
      {checkedTask && (
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
        </svg>
      )}
    </button>
  );
};

export default CheckButton;
