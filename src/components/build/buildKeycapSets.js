import React from 'react'

import Card from '@components/card'

import { KeycapSetsGrid } from '@styles/templates/build'

const BuildKeycapSets = ({ keycapSets, artisanKeycaps }) => {
  const artisanLength =
    artisanKeycaps[0].artisanKeycap !== null ? artisanKeycaps.length : 0

  return (
    <div className="emk-post-section">
      <h3>Keycap Sets</h3>
      <KeycapSetsGrid cols={keycapSets.length + artisanLength}>
        {keycapSets.map((item, index) => {
          const { kit } = item
          const { title, _meta } = item.keycapSet
          const keycapSetData = item.keycapSet[kit]
          const image = keycapSetData[0].imageSharp.childImageSharp.fluid

          return (
            <Card
              key={`build-keycap-set-${index}`}
              title={title[0]}
              customType={_meta.type}
              image={image}
              uid={_meta.uid}
              variant="standard"
            />
          )
        })}
        {artisanLength > 0 &&
          artisanKeycaps.map((item, index) => {
            const { title, _meta, imageSharp } = item.artisanKeycap

            return (
              <Card
                key={`build-keycap-set-${index}`}
                title={title[0]}
                customType={_meta.type}
                image={imageSharp.childImageSharp.fluid}
                uid={_meta.uid}
                variant="no-link"
              />
            )
          })}
      </KeycapSetsGrid>
    </div>
  )
}

export default BuildKeycapSets
