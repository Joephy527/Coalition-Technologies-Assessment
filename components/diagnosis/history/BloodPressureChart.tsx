import { MdKeyboardArrowDown } from "react-icons/md";
import { diagnosisHistorys } from "../../../types/diagnosis";
import Chart from "./Chart";
import { chartData } from "../../../types/diagnosis";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const BloodPressureChart = ({ data }: { data: diagnosisHistorys }) => {
  const chartData: chartData[] = data
    .slice()
    .reverse()
    .map((history) => ({
      date: `${history.month.slice(0, 3)}, ${history.year}`,
      systolic: history.blood_pressure.systolic.value,
      diastolic: history.blood_pressure.diastolic.value,
    }));

  return (
    <div className="mt-10 mb-5 flex gap-10 rounded-xl p-4 bg-[#F4F0FE]">
      {/* Graph */}
      <div className="flex flex-col gap-5 basis-2/3 shrink-0">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-bold">Blood Pressure</h3>

          <div className="flex items-center gap-4">
            <span className="text-sm leading-[19px]">Last 6 months</span>

            <MdKeyboardArrowDown size={10} />
          </div>
        </div>

        <Chart data={chartData} />
      </div>

      {/* Numeric */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <div className="bg-[#E66FD2] size-[12px] rounded-full" />

          <h4 className="text-sm font-bold leading-[19px] mt-0.5">Systolic</h4>
        </div>

        <span className="text-[22px] min-w-fit leading-[30px] font-bold">
          {data[0].blood_pressure.systolic.value}
        </span>

        <div className="flex items-center gap-1">
          {data[0].blood_pressure.systolic.levels === "Lower than Average" ? (
            <TiArrowSortedDown />
          ) : (
            <TiArrowSortedUp />
          )}

          <span className="text-sm min-w-fit leading-[19px]">
            {data[0].blood_pressure.systolic.levels}
          </span>
        </div>

        <hr className="w-full border-[1px] border-gray-300" />

        <div className="flex items-center gap-1">
          <div className="bg-[#8C6FE6] size-[12px] rounded-full" />

          <h4 className="text-sm font-bold leading-[19px] mt-0.5">Diastolic</h4>
        </div>

        <span className="text-[22px] min-w-fit leading-[30px] font-bold">
          {data[0].blood_pressure.diastolic.value}
        </span>

        <div className="flex items-center gap-1">
          {data[0].blood_pressure.diastolic.levels !== "Normal" &&
            (data[0].blood_pressure.diastolic.levels ===
            "Lower than Average" ? (
              <TiArrowSortedDown />
            ) : (
              <TiArrowSortedUp />
            ))}

          <span className="text-sm min-w-fit leading-[19px]">
            {data[0].blood_pressure.diastolic.levels}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BloodPressureChart;
