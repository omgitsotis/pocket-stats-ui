import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryLine,
  VictoryTheme,
  VictoryScatter
} from 'victory';

import Theme from '../../theme'

const axisStyle = {
  tickLabels: {fontSize: 7, fill: Theme.text},
  axis:       {stroke: Theme.border},
  grid:       {stroke: Theme.borderLight},
};

const HomepageGraph = ({read, added}) => (
    <VictoryChart
      theme={VictoryTheme.material}
      height={170}
    >
      <VictoryAxis style={axisStyle}/>
      <VictoryAxis dependentAxis orientation="left" style={axisStyle}/>
      <VictoryLegend
        x={125} y={0}
        title="Read vs Added articles"
        orientation="horizontal"
        gutter={10}
        style={{
          border: { stroke: Theme.border },
          title: {fontSize: 7, fill: Theme.text},
          labels: {fontSize: 7, fill: Theme.text}
        }}
        data={[
          { name: "Read", symbol: { fill: Theme.green } },
          { name: "Added", symbol: { fill: Theme.red } },
        ]}
      />
        <VictoryLine
          data={read}
          style={{ data: { stroke: Theme.green } }}
        />
        <VictoryScatter
          data={read}
          size={3}
          style={{
            data: { fill: Theme.green },
            labels: { fill: Theme.text, fontSize: 4}
          }}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel dy={2}/>}
        />
        <VictoryLine
          data={added}
          style={{ data: { stroke: Theme.red }}}
        />
        <VictoryScatter
          data={added}
          size={3}
          style={{
            data: { fill: Theme.red },
            labels: { fill: "white", fontSize: 4}
          }}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel dy={2}/>}
        />
    </VictoryChart>
)

export default HomepageGraph;
