const url =
  "https://www.berlin.de/ba-charlottenburg-wilmersdorf/verwaltung/aemter/umwelt-und-naturschutz/umweltschutz/reparaturfuehrer/index.php/index/all.json?q=";

export type Shop = {
  id: string;
  branche: string;
  name: string;
  strasse: string;
  plz: string;
  profil: string;
  telefon: string;
  fax: string;
  mobil: string;
  e_mail: string;
  internet: string;
};

export const getRepairshopData = async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Cannot fetch the data.");
  }
  const data: Shop[] = (await response.json()).index;
  return data;
};
