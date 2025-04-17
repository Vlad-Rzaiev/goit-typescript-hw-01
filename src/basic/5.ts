console.log("Task 5");
console.log("------------------------------------------------");

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

console.log(isWeekend(DayOfWeek.Friday));
console.log(isWeekend(DayOfWeek.Saturday));

console.log("------------------------------------------------");
