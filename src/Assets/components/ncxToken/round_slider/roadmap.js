import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
    label:
    <div>
        <h1>Jan - Apr 2023</h1>
    </div>
  },
  {
    value: 40,
    label:
    <div>
        <h1>Jul - Aug 2023</h1>
    </div>
  },
  {
    value: 60,
    label:
    <div>
        <h1>Q3 2023</h1>
    </div>
  },
  {
    value: 80,
    label:
    <div>
        <h1>Q4 2023</h1>
    </div>
  },
  {
    value: 100,
  },
];

// function valuetext(value: number) {
//   return `${value}°C`;
// }

// function valueLabelFormat(value: number) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }

export default function DiscreteSliderValues() {
  return (
    <div className="roadmap_sect">
        <div className="container">
            <h1 className="roadmm">RoadMap</h1>
            <Box id="roadmap_slide">
                <Slider
                    aria-label="Restricted values"
                    defaultValue={40}
                    // valueLabelFormat={valueLabelFormat}
                    // getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Box>
        </div>
    </div>
  );
}
