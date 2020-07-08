import './matchMedia.mock'
import React from 'react'
import { Location } from '@reach/router'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'emotion-theming'
import ThemeContext from '../../src/components/themeContext'
import theme from '../../src/styles/theme'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeContext>
      <Location>
        {({ location }) => (
          <ThemeProvider location={location} theme={theme}>
            <>{children}</>
          </ThemeProvider>
        )}
      </Location>
    </ThemeContext>
  )
}

const customRender = (ui, options) => {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react'

export { customRender as render }
