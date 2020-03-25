import React from 'react';
import {
  VictoryTooltip,
  VictoryPie,
  VictoryTheme
} from 'victory';

export const TagPie = ({data}) => (
  <VictoryPie
    data={data}
    height={225}
    origin={{ y: 75 }}
    style={{ labels: { fill: "black", fontSize: 5} }}
    labels={({ datum }) => `${datum.x}: ${datum.y}` }
    labelComponent={
      <VictoryTooltip
        dy={({y}) => y > 0 ? -12 : 6}
        dx={-6}
        flyoutHeight={10}
        pointerLength={0}
        pointerWidth={0}
      />
    }
    theme={VictoryTheme.material}
  />
);
