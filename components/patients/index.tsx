import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router-dom";
import type { patient, patientData } from "../../types/patients";
import { BsThreeDots } from "react-icons/bs";

const Patients = () => {
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

  const navigate = useNavigate();
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

  const patientsData: patientData[] = data?.map((patient: patient) => ({
    name: patient.name,
    gender: patient.gender,
    age: patient.age,
    image: patient.profile_picture,
  }));

  const searchParams = new URLSearchParams(location.search);
  const selectedPatient = searchParams.get("patient") || patientsData[0].name;

  const handlePatientSelect = (name: string) => {
    const params = new URLSearchParams(location.search);
    params.set("patient", name);
    navigate(`?${params.toString()}`, { replace: true });
  };

  return (
    <div className="bg-white rounded-[16px] shadow-md w-full max-h-fit max-w-md mx-auto flex flex-col pl-0">
      <div className="flex justify-between items-center pl-4 pr-4">
        <h1 className="text-3xl p-5 font-bold">Patients</h1>
        <img src="/patients/Search.png" alt="Search" className="w-6 h-6" />
      </div>

      <div className="h-[1040px] pr-[6px] overflow-y-auto px-0">
        <div className="flex flex-col space-y-1">
          {patientsData.map((patient) => (
            <div
              key={patient.name}
              className={`flex items-center justify-between w-full p-3 py-5 cursor-pointer ${
                selectedPatient === patient.name ? "bg-[#D8FCF7]" : ""
              }`}
              onClick={() => handlePatientSelect(patient.name)}
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
              <BsThreeDots size={18} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patients;
