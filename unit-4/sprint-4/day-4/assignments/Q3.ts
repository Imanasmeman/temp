
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function isWeekend(day: Weekday): boolean {
    return day === Weekday.Saturday || day === Weekday.Sunday;
  }
  
  console.log(isWeekend(Weekday.Saturday)); 
  console.log(isWeekend(Weekday.Tuesday));  
  