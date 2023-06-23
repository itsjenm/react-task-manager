import Styled from "./Button.module.css";

export const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button type={type} {...otherProps} className={Styled.btn}>
      {children}
    </button>
  );
};
