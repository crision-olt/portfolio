import { differenceInYears } from "../util/differenceInYears";
import globalData from "../data/global.json";

export function yearsInIndustry() {
  return differenceInYears(new Date(globalData.careerStartDate), new Date());
} 