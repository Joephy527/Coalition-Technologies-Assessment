import History from "./history";
import List from "./List";

const Diagnosis = () => {
  return (
    <div className="flex col-span-2 flex-col gap-8">
      <History />

      <List />
    </div>
  );
};

export default Diagnosis;
