// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { FC, memo } from "react";

type Props = JSX.IntrinsicElements["button"];

const Button: FC<Props> = (props) => {
  const { children, ...buttonProps } = props;

  return <button {...buttonProps}>{children}</button>;
};

export default memo(Button);
