import { useEffect, useMemo, useState } from "react";
import { Country, getEnergyData } from "@/data/energyData";
import LineChart from "@/components/basicCharts/LineChart";
import { ChartData } from "chart.js";

type PrimaryConPerYear = { year: number; primaryCon: number };

export default function EnergyGermanyChart() {
  const [energyDataGermany, setEnergyDataGermany] = useState<Country>({
    iso_code: "",
    data: [],
  });

  // get raw energy data from API
  useEffect(() => {
    const fetch = async () => {
      try {
        const data: Country = await getEnergyData("Germany");
        setEnergyDataGermany(data);
      } catch (err: any) {
        console.error(err.message);
      }
    };
    fetch();
  }, []);

  // Ziel: annual primary energy consumption [TWh]
  // im Datensatz: primary_energy_consumption

  const primaryEnergyConsumption: PrimaryConPerYear[] = useMemo(() => {
    return energyDataGermany.data
      .map((d) => ({
        year: d.year,
        primaryCon: d.primary_energy_consumption,
      }))
      .filter((d) => d.primaryCon !== undefined) as PrimaryConPerYear[];
  }, [energyDataGermany]);

  const chartData = useMemo(
    () => ({
      labels: primaryEnergyConsumption.map((data) => data.year),
      datasets: [
        {
          label: "Primary Energy Consumption",
          data: primaryEnergyConsumption.map((data) => data.primaryCon),
          borderColor: "black",
          borderWidth: 0.5,
        },
      ],
    }) as ChartData<"line">,
    [primaryEnergyConsumption]
  );

  return <LineChart chartData={chartData}></LineChart>;
}
