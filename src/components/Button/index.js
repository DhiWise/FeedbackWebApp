import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder4: "rounded-radius4" };
const variants = { FillTeal900: "bg-teal_900 text-white_A700" };
const sizes = { sm: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf(["FillTeal900"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder4",
  variant: "FillTeal900",
  size: "sm",
};

export { Button };
