import Header from "../components/header";
import Patients from "../components/patients";
import Diagnosis from "../components/diagnosis";
import PatientDetail from "../components/patient-detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="bg-[#F6F7F8] min-h-screen p-[18px] flex flex-col gap-8">
        <Header />

        <section className="grid grid-cols-4 gap-8 flex-1">
          <Patients />

          <Diagnosis />

          <PatientDetail />
        </section>
      </main>
    </QueryClientProvider>
  );
}

export default App;
