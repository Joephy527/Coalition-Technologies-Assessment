import HistoryCard from "./HistoryCard";
import type { diagnosisHistory } from "../../../types/diagnosis";

const GeneralHistory = ({ data }: { data: diagnosisHistory }) => {
  const generalHistory = [
    {
      imageSrc: "/diagnosis/respiratory-rate.svg",
      name: "Respiratory Rate",
      value: `${data.respiratory_rate.value} bpm`,
      state: data.respiratory_rate.levels,
    },
    {
      imageSrc: "/diagnosis/temperature.svg",
      name: "Temperature",
      value: `${data.temperature.value}°F`,
      state: data.temperature.levels,
    },
    {
      imageSrc: "/diagnosis/HeartBPM.svg",
      name: "Heart Rate",
      value: `${data.heart_rate.value} bpm`,
      state: data.heart_rate.levels,
    },
  ];

  return (
    <div className="flex items-stretch gap-[21px]">
      {generalHistory.map((history, index) => (
        <div
          className={`p-4 rounded-xl basis-[calc((100%-42px)/3)] ${index === 2 ? "bg-[#FFE6F1]" : index === 0 ? "bg-[#E0F3FA]" : "bg-[#FFE6E9]"}`}
          key={index}
        >
          <HistoryCard {...history} />
        </div>
      ))}
    </div>
  );
};

export default GeneralHistory;
