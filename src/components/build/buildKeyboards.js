import React from 'react'

import Card from '@components/card'

const BuildKeyboards = ({ keyboard }) => {
  const {
    images: keyboardImage,
    title: keyboardTitle,
    _meta: keyboardMeta,
  } = keyboard

  return (
    <div className="emk-post-section">
      <h3>Keyboard</h3>
      <Card
        title={keyboardTitle[0]}
        customType={keyboardMeta.type}
        image={keyboardImage[0].imageSharp.childImageSharp.fluid}
        uid={keyboardMeta.uid}
      />
    </div>
  )
}

export default BuildKeyboards
