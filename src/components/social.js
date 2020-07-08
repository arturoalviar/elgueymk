import React from 'react'
import PropTypes from 'prop-types'
import { FiInstagram, FiTwitter } from 'react-icons/fi'

import { SocialIcons } from '@styles/components/social'

const DropLogo = () => {
  return (
    <svg
      height="1em"
      width="1em"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" strokeWidth="1" fill="currentColor" fillRule="evenodd">
        <path d="M31.9996863,14.5081957 C32,27.6392065 17.4133333,29 17.4133333,29 L9.32580392,20.9219239 L14.7501176,20.9030109 C22.8486275,20.9033261 22.5640784,14.5 22.5640784,14.5 C22.5640784,14.5 22.8489412,8.09667391 14.7507451,8.09667391 L9.32643137,8.07776087 L9.32643137,20.9219239 L0,11.6069348 L0,0 L14.7563922,2.04233813e-10 C14.7563922,2.04233813e-10 32,-0.00220652153 32,14.4987391 L32,14.5081957 L31.9996863,14.5081957 Z" />
      </g>
    </svg>
  )
}

export const socialLinks = [
  {
    name: 'instagram',
    href: 'https://www.instagram.com/elguey.mk/',
    renderIcon: () => <FiInstagram />,
  },
  {
    name: 'drop',
    href: 'https://drop.com/profile/elguey',
    renderIcon: () => <DropLogo />,
  },
  {
    name: 'twitter',
    href: 'https://twitter.com/elgueymk',
    renderIcon: () => <FiTwitter />,
  },
]

const Social = ({ size }) => (
  <SocialIcons size={size}>
    {socialLinks.map((icon, index) => (
      <li key={`icon-${index}`}>
        <a
          href={icon.href}
          aria-label={icon.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {icon.renderIcon()}
        </a>
      </li>
    ))}
  </SocialIcons>
)

Social.defaultProps = {
  size: 'default',
}

Social.propTypes = {
  size: PropTypes.oneOf(['default', 'large']),
}

export default Social
