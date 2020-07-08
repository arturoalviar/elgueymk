import React from 'react'
import { render } from 'testing-library-react-utils'

import Social from '../social'

describe('Social', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Social />)
    expect(asFragment()).toMatchSnapshot()
  })
})
