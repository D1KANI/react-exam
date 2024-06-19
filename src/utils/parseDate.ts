export const parseDate = (date: number) => {
  const localDate = new Date(date);
  return `${String(localDate.getDay()).padStart(2, "0")}.${String(
    localDate.getMonth(),
  ).padStart(2, "0")}.${localDate.getFullYear()}`;
};
