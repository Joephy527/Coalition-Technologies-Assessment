import { useQuery } from "@tanstack/react-query";
import type { list } from "../../types/diagnosis";
import { useLocation } from "react-router-dom";
import type { patient } from "../../types/patients";

const HistoryList = () => {
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
    <article className="p-5 rounded-[16px] bg-white flex flex-col gap-10">
      <h2 className="text-2xl font-extrabold leading-[33px]">Diagnosis List</h2>

      <div>
        <div className="w-full border-collapse">
          {/* Table Head */}
          <div className="bg-[#F6F7F8] w-full  rounded-3xl overflow-hidden">
            <div className="text-sm font-bold grid grid-cols-5 leading-[19px]">
              <span className="text-left p-4">Problem/Diagnosis</span>
              <span className="text-left p-4 col-span-3">Description</span>
              <span className="text-left p-4">Status</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="h-[245px] overflow-y-auto">
            {patient.diagnostic_list.map((diagnosis: list, index: number) => (
              <div
                key={index}
                className="border-b grid grid-cols-5 border-gray-200 last:border-b-0"
              >
                <span className="text-left p-4 min-w-fit">
                  {diagnosis.name}
                </span>
                <span className="text-left p-4 col-span-3">
                  {diagnosis.description}
                </span>
                <span className="text-left p-4 min-w-fit">
                  {diagnosis.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default HistoryList;
