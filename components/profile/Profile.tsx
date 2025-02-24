import React from "react";

interface Patient {
  name: string;
  gender: string;
  age: number;
  image: string;
}

interface ProfileProps {
  patients: Patient[];
  selectedPatient: string | null;
}

const Profile: React.FC<ProfileProps> = ({ patients, selectedPatient }) => {
  const patient = patients.find((p) => p.name === selectedPatient);

  if (!patient) {
    return (
      <div className="p-4 text-gray-500">Select a patient to view details</div>
    );
  }

  const infoData = [
    {
      label: "Date Of Birth",
      value: "August 23, 1996",
      icon: "/profile/BirthIcon.png",
    },
    { label: "Gender", value: patient.gender, icon: "/profile/FemaleIcon.png" },
    {
      label: "Contact Info.",
      value: "(415) 555-5678",
      icon: "/profile/PhoneIcon.png",
    },
    {
      label: "Emergency Contacts",
      value: "(415) 555-5678",
      icon: "/profile/PhoneIcon.png",
    },
    {
      label: "Insurance Provider",
      value: "Sunrise Health Assurance",
      icon: "/profile/InsuranceIcon.png",
    },
  ];

  return (
    <div className="flex flex-col p-4 items-center w-full h-full">
      <img
        src={patient.image}
        alt="Profile"
        className="w-[200px] h-[200px] object-cover rounded-lg"
      />
      <h1 className="mt-6 text-3xl font-bold text-center">{patient.name}</h1>
      <div className="flex flex-col mt-8 w-full">
        {infoData.map((item, index) => (
          <div key={index} className="flex items-center space-x-4 mb-6">
            <img
              src={item.icon}
              alt={`${item.label} Icon`}
              className="w-11 h-11"
            />
            <div className="flex flex-col">
              <h1 className="text-sm font-medium">{item.label}</h1>
              <p className="text-base font-bold mt-0.5">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 mb-6 bg-[#01F0D0] px-10 py-3 rounded-4xl text-black font-semibold self-center">
        Show All Information
      </button>
    </div>
  );
};

export default Profile;
