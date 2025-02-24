import {
  BrowserRouter as Router,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "../components/Header";
import Patients from "../components/Patients";
import Diagnosis from "../components/Diagnosis";
import PatientDetail from "../components/patient-detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const patientsData = [
  {
    name: "Emily Williams",
    gender: "Female",
    age: 18,
    image: "/profile/Layer8.png",
  },
  {
    name: "Ryan Johnson",
    gender: "Male",
    age: 45,
    image: "/profile/Layer1.png",
  },
  {
    name: "Brandon Mitchell",
    gender: "Male",
    age: 36,
    image: "/profile/Layer3.png",
  },
  {
    name: "Jessica Taylor",
    gender: "Female",
    age: 28,
    image: "/profile/Layer2.png",
  },
  {
    name: "Samantha Jhonson",
    gender: "Female",
    age: 56,
    image: "/profile/Layer6.png",
  },
  {
    name: "Ashley Martinez",
    gender: "Female",
    age: 54,
    image: "/profile/Layer12.png",
  },
  {
    name: "Olivia Brown",
    gender: "Female",
    age: 32,
    image: "/profile/Layer10.png",
  },
  {
    name: "Tyler Davis",
    gender: "Male",
    age: 19,
    image: "/profile/Layer9.png",
  },
  {
    name: "Kevin Anderson",
    gender: "Male",
    age: 30,
    image: "/profile/Layer4.png",
  },
  {
    name: "Dylen Thompson",
    gender: "Male",
    age: 36,
    image: "/profile/Layer5.png",
  },
  {
    name: "Nathan Evans",
    gender: "Male",
    age: 58,
    image: "/profile/Layer7.png",
  },
  {
    name: "Mike Nolan",
    gender: "Male",
    age: 31,
    image: "/profile/Layer13.png",
  },
];

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <MainApp />
      </QueryClientProvider>
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const selectedPatient = searchParams.get("patient") || patientsData[0].name;

  const handlePatientSelect = (name: string) => {
    const params = new URLSearchParams(location.search);
    params.set("patient", name);
    navigate(`?${params.toString()}`, { replace: true });
  };

  return (
    <main className="bg-[#F6F7F8] min-h-screen p-[18px] flex flex-col gap-8">
      <Header />
      <section className="grid grid-cols-4 gap-8 flex-1">
        <Patients
          patients={patientsData}
          onPatientSelect={handlePatientSelect}
          selectedPatient={selectedPatient}
        />
        <Diagnosis />
        <PatientDetail
          patients={patientsData}
          selectedPatient={selectedPatient}
        />
      </section>
    </main>
  );
}

export default App;
