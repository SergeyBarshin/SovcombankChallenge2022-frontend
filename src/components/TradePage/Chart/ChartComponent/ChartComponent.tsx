import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import { withAlphaHex } from "with-alpha-hex";

interface ChartComponentProps {
  data?: any;
}
export const ChartComponent: React.FC<ChartComponentProps> = (props) => {
  const theme = useTheme();

  const { data } = props;

  const backgroundColor = withAlphaHex(theme.palette.background.default, 0);
  const lineColor = theme.palette.primary.dark;
  const textColor = theme.palette.text.secondary;
  const areaTopColor = theme.palette.primary.dark;
  const areaBottomColor = withAlphaHex(theme.palette.primary.dark, 0.28);

  const chartContainerRef = useRef<any | null>();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 350,
    });
    chart.timeScale().fitContent();
    chart.applyOptions({
      rightPriceScale: {
        scaleMargins: {
          top: 0.4, // leave some space for the legend
          bottom: 0.15,
        },
      },
      crosshair: {
        // hide the horizontal crosshair line
        horzLine: {
          visible: false,
          labelVisible: false,
        },
      },
      // hide the grid lines
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
    });

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(data);
    let minimumPrice = data[0].value;
    let maximumPrice = minimumPrice;
    for (let i = 1; i < data.length; i++) {
      const price = data[i].value;
      if (price > maximumPrice) {
        maximumPrice = price;
      }
      if (price < minimumPrice) {
        minimumPrice = price;
      }
    }

    const lineWidth = 2;
    /* const minPriceLine: any = {
      price: minimumPrice,
      color: theme.palette.error.main,
      lineWidth: lineWidth,
      lineStyle: 2, // LineStyle.Dashed
      axisLabelVisible: true,
      title: "sell",
    };*/
    const maxPriceLine: any = {
      price: maximumPrice,
      color: theme.palette.secondary.main,
      lineWidth: lineWidth,
      lineStyle: 2, // LineStyle.Dashed
      axisLabelVisible: true,
      title: "All time hight",
    };
    newSeries.createPriceLine(maxPriceLine);
    //newSeries.createPriceLine(minPriceLine);

    /*const symbolName = "USD & RUB:";
    const container = chartContainerRef.current;
    const legend = document.createElement("div");
    console.log(legend);
    legend.setAttribute("style", `float: right: 12px; top: 12px; `);
    container.appendChild(legend);

    const firstRow = document.createElement("div");

    firstRow.innerHTML = symbolName;
    firstRow.style.color = "white";
    legend.appendChild(firstRow);

    chart.subscribeCrosshairMove((param) => {
      let priceFormatted = "";
      if (param.time) {
        const price: any = param.seriesPrices.get(newSeries);
        priceFormatted = price.toFixed(2);
      }
      firstRow.innerHTML = `${symbolName} <strong>${priceFormatted}</strong>`;
    });*/

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div ref={chartContainerRef} />;
};
