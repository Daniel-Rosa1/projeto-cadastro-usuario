export const convertPtBrDateToDateObj = (date: string): Date | null =>{
  if(!date)return null;
  const [day, month, year] = date.split('/').map(Number);

  console.log("data ", day, month, year)

  if(isValedDate(day, month, year)){
    return new Date(year, month - 1, day);
  }

  return null;
}

const isValedDate=(day: number, month: number, year: number): boolean =>{
  const date = new Date(year, month -1, day);

  return(
    date.getDate() === day &&
    date.getMonth() === month -1 &&
    date.getFullYear() === year
  );
}
