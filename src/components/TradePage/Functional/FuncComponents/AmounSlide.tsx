import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const marks = [
  {
    value: 0,
  },
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
  {
    value: 40,
  },
  {
    value: 50,
  },
  {
    value: 60,
  },
  {
    value: 70,
  },
  {
    value: 80,
  },
  {
    value: 90,
  },
  {
    value: 100,
  },
];

function valuetext(value: number) {
  return `${value}°%`;
}
const AmounSlide: React.FC = () => {
  return (
    <Box>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={100}
        marks={marks}
      />
    </Box>
  );
};

export default AmounSlide;
