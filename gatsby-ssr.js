/*eslint-disable react/prop-types*/
import React, { createElement } from 'react'
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

const noflash = `(function() { try {
  var mode = localStorage.getItem('elgueymk-theme-mode');
  if (!mode) return;
  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.add('is-light');
    return;
  }
  document.body.classList.add('is-' + mode);
} catch (e) {} })();`

export const onRenderBody = ({ setPreBodyComponents }) => {
  const script = createElement('script', {
    dangerouslySetInnerHTML: {
      __html: noflash,
    },
  })
  setPreBodyComponents([script])
}
