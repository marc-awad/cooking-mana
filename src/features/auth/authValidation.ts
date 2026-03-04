export const requiredFieldMessage = "Ce champ est requis."
export const invalidEmailMessage = "Veuillez saisir une adresse email valide."
export const minimumPasswordLength = 8

export function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function isPasswordLengthValid(password: string) {
  return password.length >= minimumPasswordLength
}
