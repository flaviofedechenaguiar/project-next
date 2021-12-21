export const dateToAge = function (birth: Date) {
  let today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  let month = today.getMonth() - birth.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};
