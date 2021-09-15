const MODERN_ACTIVITY = 15;
const k = 0.000120942408;
export default function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && Number(sampleActivity) && Number(sampleActivity) < MODERN_ACTIVITY && Number(sampleActivity) > 0) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  } else return false;
}