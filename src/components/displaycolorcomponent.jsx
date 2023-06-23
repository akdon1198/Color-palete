import { useState } from "react";
import colordata from "../colordata.js";
function Displaycolorcomponent() {
  const [selected, setselected] = useState("");
  const var1 = "2";
  const colordataobj = {
    width: "100px",
    height: "60px",
    backgroundColor: "red",
    borderRadius: "30px",
  };
  const colorborder = {
        border: "2px solid red",
        boxShadow: "0 0 5px red",
        borderRadius: "30px"
  };
  function handlecolor(color) {
    setselected(color);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {colordata.map((color) => {
          return (
            <div
              style={
                selected == color
                  ? colorborder
                  : {}
              }
            >
              <div
                style={{...colordataobj, backgroundColor:color}}
                onClick={() => handlecolor(color)}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Displaycolorcomponent;
