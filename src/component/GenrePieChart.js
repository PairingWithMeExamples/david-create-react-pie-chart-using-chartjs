import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Pie } from "react-chartjs-2";
import { ArcElement, Chart, Legend, Title, Tooltip } from "chart.js";

Chart.register(ArcElement, Title, Legend, Tooltip);

const ChartFrame = styled.div`
  width: 300px;
  height: 300px;
`;

export default function GenrePieChart(props) {
  const [labels, setLabels] = useState([]);
  const [counts, setCounts] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    const labels = [];
    const counts = [];
    const colors = [];

    props.genres.forEach(genre => {
      labels.push(genre.name);
      counts.push(genre.count);
      colors.push(genre.color);
    });

    console.log("[labels]", labels);
    console.log("[counts]", counts);
    console.log("[colors]", colors);

    setLabels(labels);
    setCounts(counts);
    setColors(colors);
  }, [props.genres]);

  return (
    <ChartFrame>
      <Pie
        options={{
          plugins: {
            title: {
              display: true,
              text: props.title
            },
            legend: {
              position: "bottom"
            }
          }
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: "Count",
              data: counts,
              backgroundColor: colors
            }
          ]
        }}
      />
    </ChartFrame>
  );
}
