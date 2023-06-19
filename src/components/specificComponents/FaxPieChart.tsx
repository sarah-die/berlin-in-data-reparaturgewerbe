import { useEffect, useMemo, useState } from "react";
import { getRepairshopData, Shop } from "@/data/repairShopData";
import { ChartData } from "chart.js";
import PieChartWithCustomLegend from "@/components/basicCharts/PieChartWithCustomLegend";

/** This component renders a chart that display the amount of shops that are available via fax. */

export default function FaxPieChart() {
  const [repairShopData, setRepairShopData] = useState<Shop[]>([]);

  // get raw data from the API
  useEffect(() => {
    const fetch = async () => {
      try {
        const data: Shop[] = await getRepairshopData();
        setRepairShopData(data);
      } catch (err: any) {
        console.error(err.message);
      }
    };
    fetch();
  }, []);

  // process the data to see the amount of shops that still offer fax
  // first entry: has fax, second entry: does not have fax
  const numberOfFaxgeraete: { condition: string; numb: number }[] =
    useMemo(() => {
      const hasAndHasNot = [
        { condition: "hat Fax", numb: 0 },
        { condition: "hat kein Fax", numb: 0 },
      ];
      const faxData: string[] = repairShopData.map((shop) => shop.fax);
      faxData.forEach((f) => {
        if (f === "") {
          hasAndHasNot[1].numb++;
        } else {
          hasAndHasNot[0].numb++;
        }
      });
      // ToDo: (given/possible) * 100 = percent
      return hasAndHasNot;
    }, [repairShopData]);

  // process the data the way they are needed to be displayed in the charts
  const chartData = useMemo<ChartData<"pie">>(
    () => ({
      labels: numberOfFaxgeraete.map((data) => data.condition),
      datasets: [
        {
          label: "Anzahl Shops",
          data: numberOfFaxgeraete.map((data) => data.numb),
          backgroundColor: ["#77DD76", "#FF6962"],
          borderColor: "black",
          borderWidth: 0.5,
        },
      ],
    }),
    [numberOfFaxgeraete]
  );

  return (
    <PieChartWithCustomLegend
      chartData={chartData}
      legendTitle={"Anzahl der Shops mit Faxgeräten"}
    />
  );
}
