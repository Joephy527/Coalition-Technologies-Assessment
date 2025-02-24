import React from "react";
import Profile from "../profile/Profile";

interface Patient {
  name: string;
  gender: string;
  age: number;
  image: string;
}

interface DetailProps {
  patients: Patient[];
  selectedPatient: string | null;
}

const Detail: React.FC<DetailProps> = ({ patients, selectedPatient }) => {
  return (
    <div className="flex flex-col p-1 items-start justify-center rounded-[16px] bg-white w-full m-0">
      <Profile patients={patients} selectedPatient={selectedPatient} />
    </div>
  );
};

export default Detail;
