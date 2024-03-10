import React, { useState } from "react";
import { StylesFor3rdDiv } from "./StyledComponents";
interface ContentProps {
  valueFromParent: string;
  optionalProp?: string;
}
const Content = ({ valueFromParent, optionalProp }: ContentProps) => {
  const [letter, setLetter] = useState("a");
  const handleChangeLetter = () => {
    setLetter("b");
  };

  return (
    <>
      <div>a</div>
      <div>{valueFromParent}</div>

      <StylesFor3rdDiv>{letter}</StylesFor3rdDiv>
      <div>{letter}</div>
      <div>
        <span>hello</span>
      </div>
      <div>{letter}</div>
      <div onMouseEnter={handleChangeLetter} style={{ backgroundColor: "red" }}>
        aa
      </div>
      <button onClick={handleChangeLetter}>change Letter</button>
    </>
  );
};
export default Content;
