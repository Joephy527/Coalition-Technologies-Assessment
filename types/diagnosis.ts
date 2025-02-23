export type diagnosisHistory = {
  month: string;
  year: number;
  blood_pressure: {
    systolic: {
      value: number;
      levels: string;
    };
    diastolic: {
      value: number;
      levels: string;
    };
  };
  heart_rate: {
    value: number;
    levels: string;
  };
  respiratory_rate: {
    value: number;
    levels: string;
  };
  temperature: {
    value: number;
    levels: string;
  };
};

export type diagnosisHistorys = diagnosisHistory[];

export type chartDatas = { data: chartData[] };

export type chartData = {
  date: string;
  systolic: number;
  diastolic: number;
};
