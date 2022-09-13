function getAge(birthdate) {
  let now = new Date(),
      age = now.getFullYear() - birthdate.getFullYear();
  if (now.getMonth() < birthdate.getMonth()) {
      age--;
  } else if (now.getMonth() === birthdate.getMonth() && now.getDate() < birthdate.getDate()) {
      age--;
  }
  return age;
}
