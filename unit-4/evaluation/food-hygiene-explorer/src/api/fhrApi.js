import axios from "axios";

export const fetchBusinessData = async () => {
  try {
    const response = await axios.get(
      "https://ratings.food.gov.uk/OpenDataFiles/FHRS529en-GB.json"
    );
    return response.data.FHRSEstablishment.EstablishmentCollection;
  } catch (error) {
    console.error("Error fetching business data:", error);
    return [];
  }
};
