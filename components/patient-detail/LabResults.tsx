import { useQuery } from "@tanstack/react-query";
import { FiDownload } from "react-icons/fi";
import type { patient } from "../../types/patients";
import { useLocation } from "react-router-dom";

const LabResults = () => {
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

  return (
    <div className="p-5 flex flex-col gap-4 rounded-[16px] bg-white">
      <h2 className="text-2xl font-extrabold leading-[33px]">Lab Results</h2>
      <div className="h-56 overflow-y-auto">
        {patient.lab_results.map((result: string, index: number) => (
          <div
            key={index}
            className="flex items-center cursor-pointer justify-between py-2.5 px-4 hover:bg-[#F6F7F8]"
          >
            <span>{result}</span>

            <FiDownload size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabResults;
