import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryLine,
  VictoryTheme,
  VictoryScatter,
  VictoryTooltip
} from 'victory';

import classes from './Graph.css';

const axisStyle = {
  tickLabels: {fontSize: 7, fill: "#cb868b"},
  axis:       {stroke: "#ffb6bb"},
  grid:       {stroke: "#ffe9ed"},
  axisLabel:  {fill: "#cb868b"}
};

const Graph = ({data}) => (
    <VictoryChart
      theme={VictoryTheme.material}
      height={170}
      scale={{x:"time", y:"linear"}}
      animate={{duration: 500}}
    >
      <VictoryAxis style={axisStyle}/>
      <VictoryAxis dependentAxis orientation="left" style={axisStyle}/>
        <VictoryLine
          data={data}
          style={{ data: { stroke: "#d27271" } }}
        />
        <VictoryScatter
          data={data}
          size={2}
          style={{
            data: { fill: "#d27271" },
            labels: { fill: "black", fontSize: 4}
          }}
          labels={({ datum }) => String(Math.round(datum.y))}
          labelComponent={<VictoryLabel dy={2}/>}
        />
    </VictoryChart>
)

export default Graph;
