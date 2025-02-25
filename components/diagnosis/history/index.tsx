import { useQuery } from "@tanstack/react-query";
import BloodPressureChart from "./BloodPressureChart";
import GeneralHistory from "./GeneralHistory";
import type { patient } from "../../../types/patients";
import { useLocation } from "react-router-dom";

const History = () => {
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
    <article className="p-5 rounded-[16px] bg-white">
      <h2 className="text-2xl leading-[33px] font-extrabold">
        Diagnosis History
      </h2>

      <BloodPressureChart data={patient.diagnosis_history} />

      <GeneralHistory data={patient.diagnosis_history[0]} />
    </article>
  );
};

export default History;
