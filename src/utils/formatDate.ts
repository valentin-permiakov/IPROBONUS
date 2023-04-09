export const formatDate = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month.toString().padStart(2, "0")}.${day
    .toString()
    .padStart(2, "0")}`;
};
