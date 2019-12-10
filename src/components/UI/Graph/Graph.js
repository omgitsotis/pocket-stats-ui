import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip
} from 'victory';

import classes from './Graph.css';

const axisStyle = {
  tickLabels: {fontSize: 7, fill: "#cb868b"},
  axis:       {stroke: "#ffb6bb"},
  grid:       {stroke: "#ffe9ed"},
  axisLabel:  {fill: "#cb868b"}
};

const Graph = ({read, added}) => (
    <VictoryChart
      theme={VictoryTheme.material}
      height={170}
      domain={{ y: [0, 8] }}
    >
      <VictoryAxis style={axisStyle}/>
      <VictoryAxis dependentAxis orientation="left" style={axisStyle}/>
      <VictoryLegend
        x={125} y={0}
        title="Read vs Added articles"
        orientation="horizontal"
        gutter={10}
        style={{
          border: { stroke: "#ffb6bb" },
          title: {fontSize: 7, fill: "#cb868b"},
          labels: {fontSize: 7, fill: "#cb868b"}
        }}
        data={[
          { name: "Read", symbol: { fill: "#d27271" } },
          { name: "Added", symbol: { fill: "#6b151f" } },
        ]}
      />
        <VictoryLine
          data={read}
          labelComponent={<VictoryLabel dy={-2}/>}
          style={{
            data: { stroke: "#d27271" },
            labels: { fontSize: 7, fill: "#d27271" },
          }}
          labels={({ datum }) => datum.y}
        />
        <VictoryLine
          data={added}
          labelComponent={<VictoryLabel dy={-2}/>}
          style={{
              data: { stroke: "#6b151f" },
              labels: { fontSize: 7, fill: "#6b151f"},
          }}
          labels={({ datum }) => datum.y}
        />
    </VictoryChart>
)

export default Graph;
