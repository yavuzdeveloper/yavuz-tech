export function getExperienceYears(startYear: number = 2018): number {
  return new Date().getFullYear() - startYear;
}
