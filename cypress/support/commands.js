const compareColor = (color, property) => targetElement => {
  const tempElement = document.createElement('div')
  tempElement.style.color = color
  tempElement.style.display = 'none'
  document.body.appendChild(tempElement)

  const tempColor = getComputedStyle(tempElement).color
  const targetColor = getComputedStyle(targetElement[0])[property]

  document.body.removeChild(tempElement)

  expect(tempColor).to.equal(targetColor)
}

// allow use of hex colors when asseting background color and color

Cypress.Commands.overwrite(
  'should',
  (originalFn, subject, expectation, ...args) => {
    const customMatchers = {
      'have.backgroundColor': compareColor(args[0], 'backgroundColor'),
      'have.color': compareColor(args[0], 'color'),
    }

    // See if the expectation is a string and if it is a member of Jest's expect
    if (typeof expectation === 'string' && customMatchers[expectation]) {
      return originalFn(subject, customMatchers[expectation])
    }
    return originalFn(subject, expectation, ...args)
  }
)
