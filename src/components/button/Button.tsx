import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
//import "./button.css";

interface Props {
  label?: any;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent = (props: Props) => {
  const { label } = props;
  return (
    <Button
      onClick={(e) => {
        alert("Im a button");
      }}
    >
      {label}
    </Button>
  );
};

ButtonComponent.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonComponent.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
