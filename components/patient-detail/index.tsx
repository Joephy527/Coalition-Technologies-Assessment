import Detail from "./Detail";
import LabResult from "./LabResults";

const PatientDetail = () => {
  return (
    <aside className="bg-wihte flex flex-col gap-8">
      <Detail />

      <LabResult />
    </aside>
  );
};

export default PatientDetail;
