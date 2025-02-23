import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import type { chartDatas } from "../../../types/diagnosis";

const Chart = ({ data }: chartDatas) => {
  const CustomTooltip = ({
    active,
    payload,
  }: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    active?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-600 text-white rounded-sm py-2 px-2.5">
          <p className="text-xs font-medium">{`${payload[0].payload.date}`}</p>
          <p className="text-xs font-light">{`${payload[0].value} systolic blood pressure`}</p>
          <p className="text-xs font-light">{`${payload[1].value} diastolic blood pressure`}</p>
        </div>
      );
    }
  };

  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart
        // width={450}
        height={214}
        data={data}
        margin={{
          top: 0,
          right: 0,
          bottom: 0,
          left: -30,
        }}
        className="w-full"
      >
        <CartesianGrid
          stroke="#CBC8D4"
          vertical={false}
          fillOpacity={0.6}
          className="w-full"
        />

        <Tooltip
          cursor={{ stroke: "#E66FD2", strokeDasharray: "5 5" }}
          content={<CustomTooltip />}
        />

        <YAxis
          type="number"
          domain={[
            (dataMin: number) => Math.floor(dataMin / 10) * 10 - 10, // Round down to nearest 10
            (dataMax: number) => Math.ceil(dataMax / 10) * 10 + 10, // Round up to nearest 10
          ]}
          axisLine={{ stroke: "#CBC8D4" }}
          className="text-xs -z-10 text-center leading-[17px]"
          tick={{ fill: "#072635" }}
          tickLine={{ stroke: "#CBC8D4" }}
        />

        <Line
          type="monotone"
          dataKey="systolic"
          stroke="#C26EB4"
          strokeWidth={2}
          strokeLinejoin="round"
          fillOpacity={0.6}
          fill="#C26EB4"
          // dot={false}
          dot={{
            stroke: "#FFFFFF",
            fill: "#E66FD2",
            strokeWidth: 1,
            r: 7,
            fillOpacity: 1,
          }}
          activeDot={{
            stroke: "#FFFFFF",
            fill: "#E66FD2",
            strokeWidth: 1,
            r: 7,
            fillOpacity: 1,
          }}
        />

        <Line
          type="monotone"
          dataKey="diastolic"
          stroke="#7E6CAB"
          strokeWidth={2}
          strokeLinejoin="round"
          fillOpacity={0.6}
          fill="#7E6CAB"
          // dot={false}
          dot={{
            stroke: "#FFFFFF",
            fill: "#8C6FE6",
            strokeWidth: 1,
            r: 7,
            fillOpacity: 1,
          }}
          activeDot={{
            stroke: "#FFFFFF",
            fill: "#8C6FE6",
            strokeWidth: 1,
            r: 7,
            fillOpacity: 1,
          }}
          className="z-20"
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          className="text-xs text-center leading-[17px]"
          padding={{ right: 10 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
