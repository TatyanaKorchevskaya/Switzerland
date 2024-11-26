import * as styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  elementClasses?: string;
};

export const Button = ({ text, onClick, type, elementClasses}: ButtonProps) => {
  return <button type={type} className={elementClasses} onClick={onClick}>{text}</button>;
};
