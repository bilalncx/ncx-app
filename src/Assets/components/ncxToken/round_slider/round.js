import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0
  },
  {
    value: 70,
    label: "70%"
  },
  // {
  //   value: 100,
  //   label: "70%"
  // }
];

// function valuetext(value: number) {
//   return `${value}°C`;
// }

// function valueLabelFormat(value: number) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }

export default function DiscreteSliderValues() {
  return (
    <Box sx={{ width: 300 }}>
        <h1>Round 1</h1>
        <Slider
            aria-label="Restricted values"
            defaultValue={70}
            // valueLabelFormat={valueLabelFormat}
            // getAriaValueText={valuetext}
            step={null}
            // valueLabelDisplay="auto"
            marks={marks}
        />
    </Box>
  );
}
