import type { BookUserStamp, Stamp } from "@/types/types";

export const calculateStats = (bookUserStamps: BookUserStamp[], stamps: Stamp[]) => {
  const stampObject = stamps.reduce((acc, stamp) => {
    acc[stamp.id] = stamp;
    return acc;
  }, {} as Record<string, Stamp>);
  const stampCountObject: { [key: string]: number } = {};
  stamps.forEach((stamp) => {
    stampCountObject[stamp.id] = 0;
  });
  bookUserStamps.forEach((bookUserStamp) => {
    stampCountObject[bookUserStamp.stampId] += 1;
  });
  const stampArray = Object.entries(stampCountObject).map(([stampId, count]: [string, number]) => ({
    stampId,
    count,
  }));
  const array = stampArray.sort(function (a, b) {
    if (a.count > b.count) return 1;
    if (b.count > a.count) return -1;
    return 0;
  });
  const result = [
    stampObject[array[0].stampId],
    stampObject[array[1].stampId],
    stampObject[array[2].stampId],
  ];
  return result;
};
