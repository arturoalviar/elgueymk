const remCalc = (value, base = 16) => {
  const sanitizedValue = parseInt(value)
  return `${sanitizedValue / base}rem`
}

export { remCalc }
