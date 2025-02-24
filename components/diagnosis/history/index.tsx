import { useQuery } from "@tanstack/react-query";
import BloodPressureChart from "./BloodPressureChart";
import GeneralHistory from "./GeneralHistory";

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

  return (
    <article className="p-5 rounded-[16px] bg-white">
      <h2 className="text-2xl leading-[33px] font-extrabold">
        Diagnosis History
      </h2>

      {error ? (
        <span>An error has occurred: {error.message}</span>
      ) : isPending ? (
        <span>Loading...</span>
      ) : (
        <>
          <BloodPressureChart data={data[0].diagnosis_history} />

          <GeneralHistory data={data[0].diagnosis_history[0]} />
        </>
      )}
    </article>
  );
};

export default History;
