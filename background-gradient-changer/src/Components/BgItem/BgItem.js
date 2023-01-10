import React, {useState} from "react";

// https://sinyakov.com/frontend/react/hw/jb.pdf
// скачать json, положить в src и импортировать в файл с компонентом
// https://www.figma.com/file/L97JMoveX2scWgtX5UeIH8 макет в фигме

export function BgItem() {
  // const [firstColor, setfirstColor] = useState(" #4880EC");
  // function changeFirstColor(event) {
  //   setfirstColor(event.target.value);
  // }
  // const [secondColor, setSecondColor] = useState("#019CAD");
  // function changeSecondColor(event) {
  //   setSecondColor(event.target.value);
  // }

  const [values, setValues] = useState({
    firstColor: "#4880EC",
    secondColor: "#4880EC",
    // ... more colors
  });

  function changeColor(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const [colors, setColors] = useState([]);

  function handleResult() {
    setColors(Object.values(values));
  }
  function handleClear() {
    // let copyValues = {...values};
    // Object.keys(copyValues).forEach((key) => copyValues[key] = '');
     let valuesPairs = Object.keys(values).map((key) => [key, '']);
    setValues(Object.fromEntries(valuesPairs));
  }

  return (
    <div
      style={{
        height: "400px",
        background: `linear-gradient(to bottom, ${colors.join(", ")})`,
      }}
    >
      {Object.keys(values).map((input) => {
        return (
          <input name={input} value={values[input]} onChange={changeColor} />
        );
      })}

      <button
        onClick={handleResult}
        style={{
          margin: "5px",
        }}
      >
        Go
      </button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
