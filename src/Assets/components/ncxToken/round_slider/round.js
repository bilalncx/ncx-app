import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useTranslation } from "react-i18next";

const marks = [
  {
    value: 0,
  },
  {
    value: 0,
    label: "0%"
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
  
  const { t } = useTranslation();
  
  return (
    <Box sx={{ width: 400 }}>
        <h1>{t("round_1")}</h1>
        <Slider
            aria-label="Restricted values"
            defaultValue={0}
            // valueLabelFormat={valueLabelFormat}
            // getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
        />
    </Box>
  );
}
