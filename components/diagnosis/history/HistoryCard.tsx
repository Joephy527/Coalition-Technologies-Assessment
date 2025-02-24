import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import type { historyCard } from "../../../types/diagnosis";

const HistoryCard = ({ imageSrc, name, value, state }: historyCard) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={imageSrc}
        className="object-cover size-24"
        alt={`${name}-image`}
      />

      <div>
        <span className="font-medium block">{name}</span>
        <span className="text-3xl font-extrabold leading-[41px]">{value}</span>
      </div>

      <div className="flex items-center gap-2">
        {state !== "Normal" &&
          (state === "Lower than Average" ? (
            <TiArrowSortedDown size={20} />
          ) : (
            <TiArrowSortedUp />
          ))}
        <span className="text-sm leading-[19px]">{state}</span>
      </div>
    </div>
  );
};

export default HistoryCard;
