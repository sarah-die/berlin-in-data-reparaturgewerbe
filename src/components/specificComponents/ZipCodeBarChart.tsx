import { useEffect, useMemo, useState } from "react";
import { getRepairshopData, Shop } from "@/data/repairShopData";
import BarChart from "@/components/basicCharts/BarChart";

/** This component displays a chart that shows the number of shops per zip code listed in the dataset. */

type ZipCodeType = { zipCode: number; numb: number };

export default function ZipCodeBarChart() {
  const [repairShopData, setRepairShopData] = useState<Shop[]>([]);

  // get raw data from API
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

  // process the data
  // zipcodes are counted and sorted
  const shopsPerZipCode: ZipCodeType[] = useMemo(() => {
    const zipCodes: number[] = repairShopData.map((shop) => Number(shop.plz));
    const numberOfZipcodes: ZipCodeType[] = [];
    zipCodes.forEach((zip: number) => {
      const index: number = numberOfZipcodes.findIndex(
        (el) => el.zipCode === zip
      );
      if (index === -1) {
        numberOfZipcodes.push({ zipCode: zip, numb: 1 });
      } else {
        numberOfZipcodes[index].numb++;
      }
    });
    numberOfZipcodes.sort((a: ZipCodeType, b: ZipCodeType) => {
      return b.zipCode - a.zipCode;
    });
    return numberOfZipcodes;
  }, [repairShopData]);

  const chartData = useMemo(
    () => ({
      labels: shopsPerZipCode.map((data: ZipCodeType) => data.zipCode),
      datasets: [
        {
          label: "Anzahl Shops",
          data: shopsPerZipCode.map((data: ZipCodeType) => data.numb),
          backgroundColor: ["darkblue"],
          borderColor: "black",
          borderWidth: 0.5,
        },
      ],
    }),
    [shopsPerZipCode]
  );
  return (
    <div className="chart-container">
      <BarChart
        chartData={chartData}
        title={"Shops pro eingetragener Postleitzahl"}
      />
    </div>
  );
}
