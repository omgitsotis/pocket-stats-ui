import moment from 'moment'
import {
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryLine,
  VictoryTheme,
  VictoryScatter
} from 'victory';

const Theme = {
  parent:       "#f9dce1",
  background:   "#f1f3f8",
  text:         "#0c2231",
  border:       "#c8cde5",
  borderLight:  "#e0e3f0",
  green:        "#46a46c",
  red:          "#da304c"
};

const axisStyle = {
  tickLabels: {fontSize: 7, fill: Theme.text},
  axis:       {stroke: Theme.border},
  grid:       {stroke: Theme.borderLight},
};

const itemisedStatsToGraph = (itemised) => {
  let readData = []
  let addData = []
  for (let [day, entry] of Object.entries(itemised)) {
    var dayStr = moment.unix(day).utc().format("Do MMM");
    readData.push({x: dayStr, y: entry.articles_read});
    addData.push({x: dayStr, y: entry.articles_added});
  }

  return {read: readData, added: addData}
}

const Graph = ({itemised}) => {
  const graphData = itemisedStatsToGraph(itemised);

  return(
    <VictoryChart theme={VictoryTheme.material} height={170}>
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
      <VictoryLine data={graphData.read} style={{ data: { stroke: Theme.green } }} />
      <VictoryScatter
        data={graphData.read}
        size={3}
        style={{data: { fill: Theme.green }, labels: { fill: Theme.text, fontSize: 4}}}
        labels={({ datum }) => datum.y}
        labelComponent={<VictoryLabel dy={2}/>}
      />
      <VictoryLine data={graphData.added} style={{ data: { stroke: Theme.red }}}/>
      <VictoryScatter
        data={graphData.added}
        size={3}
        style={{data: { fill: Theme.red }, labels: { fill: "white", fontSize: 4}}}
        labels={({ datum }) => datum.y}
        labelComponent={<VictoryLabel dy={2}/>}
        />
    </VictoryChart>
  )
}

export default Graph;
