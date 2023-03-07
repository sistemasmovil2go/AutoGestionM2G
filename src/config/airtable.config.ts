import Airtable from "airtable";
import { AIRTABLE_ACCESS_TOKEN } from "../constants";

const API_KEY = AIRTABLE_ACCESS_TOKEN;

const airtable = new Airtable({
  apiKey: API_KEY,
  endpointUrl: "https://api.airtable.com",
});

export default airtable;
