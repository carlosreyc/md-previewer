import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import styled from "styled-components";
const StyledInput = styled(Textarea)`
  &&& {
    width: 100%;
    box-sizing: border-box;
  }
`;

class Input extends Component {
  render() {
    const { value, onChange, rows } = this.props;
    return (
      <StyledInput
        id="editor"
        rows={rows ? rows : null}
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default Input;
