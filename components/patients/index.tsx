import React from "react";

interface Patient {
  name: string;
  gender: string;
  age: number;
  image: string;
}

interface PatientsProps {
  patients: Patient[];
  onPatientSelect: (name: string) => void;
  selectedPatient: string | null;
}

const Patients: React.FC<PatientsProps> = ({
  patients,
  onPatientSelect,
  selectedPatient,
}) => {
  return (
    <div className="bg-gray rounded-[16px] shadow-md w-full max-w-md mx-auto h-screen flex flex-col pl-0">
      <div className="flex justify-between items-center pl-4 pr-4">
        <h1 className="text-3xl p-5 font-bold">Patients</h1>
        <img src="/patients/Search.png" alt="Search" className="w-6 h-6" />
      </div>

      <div
        style={{
          height: "calc(100% - 80px)",
          overflowY: "auto",
          paddingRight: "6px",
        }}
        className="flex-1 px-0"
      >
        <div className="flex flex-col space-y-1">
          {patients.map((patient) => (
            <div
              key={patient.name}
              className={`flex items-center justify-between w-full p-3 py-5 cursor-pointer ${
                selectedPatient === patient.name ? "bg-[#D8FCF7]" : ""
              }`}
              onClick={() => onPatientSelect(patient.name)}
            >
              <div className="flex items-center space-x-4 pl-4">
                <img
                  src={patient.image}
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="text-base font-semibold mb-1">
                    {patient.name}
                  </h1>
                  <p className="text-sm text-[#707070]">
                    {patient.gender}, {patient.age}
                  </p>
                </div>
              </div>
              <img
                src="/patients/horizontal.svg"
                alt="Toggle"
                className="w-6 h-6 ml-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
