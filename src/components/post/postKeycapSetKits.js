import React from 'react'
import PropTypes from 'prop-types'
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'

import { PostPanel } from '@styles/templates/post'
import { PostContentList } from '@styles/components/postContentList'

const renderIcon = isSold => {
  return isSold ? <FiXCircle /> : <FiCheckCircle />
}

const PostKeycapSetKits = ({ list }) => {
  return (
    <PostPanel>
      <h4>Kits I own(ed)</h4>
      <PostContentList>
        {list.map((item, index) => {
          const { sold } = item
          return (
            <li className={sold ? 'is-sold' : ''} key={`${index}`}>
              <span>{renderIcon(sold)}</span>
              {item.kit}
            </li>
          )
        })}
      </PostContentList>
    </PostPanel>
  )
}

PostKeycapSetKits.propTypes = {
  list: PropTypes.array.isRequired,
}

export default PostKeycapSetKits
