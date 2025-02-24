import React from "react";
import Detail from "./Detail";
import LabResult from "./LabResults";

interface Patient {
  name: string;
  gender: string;
  age: number;
  image: string;
}

interface PatientDetailProps {
  patients: Patient[];
  selectedPatient: string | null;
}

const PatientDetail: React.FC<PatientDetailProps> = ({
  patients,
  selectedPatient,
}) => {
  return (
    <aside className="bg-gray flex flex-col gap-8">
      <Detail patients={patients} selectedPatient={selectedPatient} />
      <LabResult />
    </aside>
  );
};

export default PatientDetail;
