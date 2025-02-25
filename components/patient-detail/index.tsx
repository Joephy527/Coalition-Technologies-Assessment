import Detail from "./Detail";
import LabResult from "./LabResults";

const PatientDetail = () => {
  return (
    <aside className="rounded-2xl -mt-[14px] flex flex-col gap-8">
      <Detail />
      <LabResult />
    </aside>
  );
};

export default PatientDetail;
