export function dateIsAfter(dateA: string | number | Date, dateB: string | number | Date) {
  const firstDate = new Date(dateA);
  const secondDate = new Date(dateB);

  if (isNaN(firstDate.getTime()) || isNaN(secondDate.getTime())) {
    throw new Error("Invalid date passed to isAfter()");
  }

  return firstDate > secondDate;
}