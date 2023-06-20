// energy data from the given url
// codebook: https://github.com/owid/energy-data/blob/master/owid-energy-codebook.csv

const energyUrl =
  "https://nyc3.digitaloceanspaces.com/owid-public/data/energy/owid-energy-data.json";

export type EnergyData = {
  year: number;
  population: number;
  biofuel_elec_per_capita: number;
  biofuel_electricity: number;
  biofuel_share_elec: number;
  carbon_intensity_elec: number;
  coal_elec_per_capita: number;
  coal_electricity: number;
  coal_share_elec: number;
  electricity_demand: number;
  electricity_generation: number;
  fossil_elec_per_capita: number;
  fossil_electricity: number;
  fossil_share_elec: number;
  gas_elec_per_capita: number;
  gas_electricity: number;
  gas_share_elec: number;
  greenhouse_gas_emissions: number;
  hydro_elec_per_capita: number;
  hydro_electricity: number;
  hydro_share_elec: number;
  low_carbon_elec_per_capita: number;
  low_carbon_electricity: number;
  low_carbon_share_elec: number;
  net_elec_imports: number;
  net_elec_imports_share_demand: number;
  nuclear_elec_per_capita: number;
  nuclear_electricity: number;
  nuclear_share_elec: number;
  oil_elec_per_capita: number;
  oil_electricity: number;
  oil_share_elec: number;
  other_renewable_electricity: number;
  other_renewable_exc_biofuel_electricity: number;
  other_renewables_elec_per_capita: number;
  other_renewables_elec_per_capita_exc_biofuel: number;
  other_renewables_share_elec: number;
  other_renewables_share_elec_exc_biofuel: number;
  per_capita_electricity: number;
  primary_energy_consumption: number;
  renewables_elec_per_capita: number;
  renewables_electricity: number;
  renewables_share_elec: number;
  solar_elec_per_capita: number;
  solar_electricity: number;
  solar_share_elec: number;
  wind_elec_per_capita: number;
  wind_electricity: number;
  wind_share_elec: number;
};

export type Country = {
  iso_code: string;
  data: EnergyData[];
};

/** This function fetches the energydata from ourworldindata.org and returns them. */
// variable country to only get data from one country at a time
// square brackets are used here to enclose the variables name
// which is then evaluated at runtime to get the actual key name
export const getEnergyData = async (country: string) => {
  const response = await fetch(energyUrl);
  if (!response.ok) {
    throw new Error("Cannot fetch the data.");
  }
  const data: Country = (await response.json())[country];
  return data;
};
