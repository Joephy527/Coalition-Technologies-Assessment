import { useQuery } from "@tanstack/react-query";
import { FiDownload } from "react-icons/fi";

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
  return (
    <div className="p-5 flex flex-col gap-4 rounded-[16px] bg-white">
      <h2 className="text-2xl font-extrabold leading-[33px]">Diagnosis List</h2>

      {error ? (
        <span>An error has occurred: {error.message}</span>
      ) : isPending ? (
        <span>Loading...</span>
      ) : (
        <div>
          {data[0].lab_results.map((result: string, index: number) => (
            <div
              key={index}
              className="flex items-center cursor-pointer justify-between py-2.5 px-4 hover:bg-[#F6F7F8]"
            >
              <span>{result}</span>

              <FiDownload size={20} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LabResults;
