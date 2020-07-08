import React from 'react'

import { PostPanel } from '@styles/templates/post'
import { KeyboardFeaturesList } from '@styles/components/postContentList'

const KeyboardFeatures = ({ features, plate }) => {
  const {
    angle,
    hotswap,
    interface: usbInterface,
    layout,
    layoutVariant,
    material,
    rgb,
    weight,
  } = features

  return (
    <PostPanel>
      <h4>Keyboard Features</h4>
      <KeyboardFeaturesList>
        <li>
          <h5>material</h5>
          <p>{material}</p>
        </li>
        <li>
          <h5>plate</h5>
          <p>
            {plate.thickness}mm {plate.material}{' '}
          </p>
        </li>
        <li>
          <h5>pcb</h5>
          <p>{hotswap ? 'hotswap' : 'soldered'}</p>
        </li>
        <li>
          <h5>typing angle</h5>
          <p>{angle} degree</p>
        </li>
        <li>
          <h5>interface</h5>
          <p>{usbInterface}</p>
        </li>
        <li>
          <h5>layout</h5>
          <p>
            {layout} {layoutVariant !== 'none' ? `- ${layoutVariant}` : ''}
          </p>
        </li>
        <li>
          <h5>rgb</h5>
          <p>{rgb}</p>
        </li>
        <li>
          <h5>weight</h5>
          <p>{weight}</p>
        </li>
      </KeyboardFeaturesList>
    </PostPanel>
  )
}

export default KeyboardFeatures
