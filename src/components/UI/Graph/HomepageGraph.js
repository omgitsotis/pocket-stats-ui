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

const axisStyle = {
  tickLabels: {fontSize: 7, fill: "#cb868b"},
  axis:       {stroke: "#ffb6bb"},
  grid:       {stroke: "#ffe9ed"},
  axisLabel:  {fill: "#cb868b"}
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
          style={{ data: { stroke: "#d27271" } }}
        />
        <VictoryScatter
          data={read}
          size={2}
          style={{
            data: { fill: "#d27271" },
            labels: { fill: "black", fontSize: 4}
          }}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel dy={2}/>}
        />
        <VictoryLine
          data={added}
          style={{ data: { stroke: "#6b151f" }}}
        />
        <VictoryScatter
          data={added}
          size={3}
          style={{
            data: { fill: "#6b151f" },
            labels: { fill: "white", fontSize: 4}
          }}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryLabel dy={2}/>}
        />
    </VictoryChart>
)

export default HomepageGraph;
