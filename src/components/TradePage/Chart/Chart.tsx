import { ChartComponent } from "./ChartComponent/ChartComponent";
import { useState } from "react";

interface prop {
  data: {};
}

const Chart: React.FC<prop> = (props: prop) => {
  const { data } = props;

  return <ChartComponent data={data}></ChartComponent>;
};

export default Chart;
