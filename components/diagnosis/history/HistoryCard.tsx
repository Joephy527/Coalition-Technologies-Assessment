import { TiArrowSortedDown } from "react-icons/ti";

const HistoryCard = ({
  imageSrc,
  name,
  value,
  state,
  index,
}: {
  imageSrc: string;
  name: string;
  value: string;
  state: string;
  index: number;
}) => {
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
        {index === 2 && <TiArrowSortedDown size={20} />}
        <span className="text-sm leading-[19px]">{state}</span>
      </div>
    </div>
  );
};

export default HistoryCard;
