const dateOfBirth = new Date(1988, 10, 6);

console.log(dateOfBirth.getDate());

// console.log(dateOfBirth.addDays(2));

function calaculateRenewal(startDate: Date): Date {
  const result = new Date(startDate);
  result.setDate(result.getDate() + 30);
  return result;
}
