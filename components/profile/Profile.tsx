import { useQuery } from "@tanstack/react-query";
import type { patient } from "../../types/patients";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["patientData"],
    queryFn: async () => {
      const response = await fetch(
        "https://fedskillstest.coalitiontechnologies.workers.dev",
        {
          headers: {
            Authorization: "Basic " + btoa("coalition:skills-test"),
          },
        },
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    },
  });

  const location = useLocation();

  if (isPending) {
    return <span className="bg-white w-full rounded-2xl">Loading...</span>;
  }

  if (error) {
    return (
      <span className="bg-white w-full rounded-2xl">
        An error has occurred: {error.message}
      </span>
    );
  }

  const searchParams = new URLSearchParams(location.search);
  const selectedPatient = searchParams.get("patient") || data[0].name;

  const patient = data?.find((p: patient) => p.name === selectedPatient);

  if (!patient) {
    return (
      <div className="p-4 text-gray-500">Select a patient to view details</div>
    );
  }

  const infoData = [
    {
      label: "Date Of Birth",
      value: patient.date_of_birth,
      icon: "/profile/BirthIcon.png",
    },
    { label: "Gender", value: patient.gender, icon: "/profile/FemaleIcon.png" },
    {
      label: "Contact Info.",
      value: patient.phone_number,
      icon: "/profile/PhoneIcon.png",
    },
    {
      label: "Emergency Contacts",
      value: patient.emergency_contact,
      icon: "/profile/PhoneIcon.png",
    },
    {
      label: "Insurance Provider",
      value: patient.insurance_type,
      icon: "/profile/InsuranceIcon.png",
    },
  ];

  return (
    <div className="flex flex-col p-4 items-center w-full h-full">
      <img
        src={patient.profile_picture}
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
