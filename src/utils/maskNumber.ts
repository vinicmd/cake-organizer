export function maskNumber (number: string) {
  const [, ddd, first, second] = /^([0-9]{2})([0-9]{5})([0-9]{4})/.exec(number) || ['', '', '','', ]
  return `(${ddd}) ${first}-${second}`
}
