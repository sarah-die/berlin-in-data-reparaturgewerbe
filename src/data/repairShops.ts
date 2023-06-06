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

async function FetchShopData() {
  const response = await fetch(url);
  const shopData: Shop[] = (await response.json()).index;
  return shopData;
}
