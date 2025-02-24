import { useQuery } from "@tanstack/react-query";
import type { list } from "../../types/diagnosis";

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

  return (
    <article className="p-5 rounded-[16px] bg-white flex flex-col gap-10">
      <h2 className="text-2xl font-extrabold leading-[33px]">Diagnosis List</h2>

      {error ? (
        <span>An error has occurred: {error.message}</span>
      ) : isPending ? (
        <span>Loading...</span>
      ) : (
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
            <div>
              {data[0].diagnostic_list.map((diagnosis: list, index: number) => (
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
      )}
    </article>
  );
};

export default HistoryList;
