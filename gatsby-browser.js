/*eslint-disable react/prop-types*/
import React from 'react'
import { Location } from '@reach/router'
import ThemeContext from '@components/themeContext'
import Wrapper from '@components/wrapper'

export const wrapPageElement = ({ element, props }) => {
  return (
    <Location>
      {({ location }) => (
        <Wrapper location={location} {...props}>
          {element}
        </Wrapper>
      )}
    </Location>
  )
}

export const wrapRootElement = ({ element }) => {
  return <ThemeContext>{element}</ThemeContext>
}

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Would you like to reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
