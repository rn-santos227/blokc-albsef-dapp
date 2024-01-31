import "./Button.css";

interface ButtonProps {
  label: string | number;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick, className = ""}) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {label}
    </button>
  )
}

export default Button;