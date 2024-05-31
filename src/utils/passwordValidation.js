export function passwordValidation(password) {
  const upperCase = /[A-Z]/.test(password);
  const lowerCase = /[a-z]/.test(password);
  const passLength = password.length >= 6;

  return upperCase && lowerCase && passLength;
}
