const nameAbbreviation = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .filter((_n, index) => index < 2)
    .join('')
}
const emailAbbreviation = (email: string) => {
  return email
    .split('@')[0]
    .split('.')
    .map((n) => n[0])
    .filter((_n, index) => index < 2)
    .join('')
}

export { nameAbbreviation, emailAbbreviation }
