import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated, config } from 'react-spring'

const SpringTransition = React.forwardRef(function SpringTransitionFowardRef(
  { children, delay, preset, x, y },
  ref
) {
  const transitionWrapperProps = useSpring({
    ref,
    to: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    from: {
      opacity: 0,
      x,
      y,
    },
    config: config[preset],
    delay,
  })

  return (
    <animated.div ref={ref} style={transitionWrapperProps}>
      {children}
    </animated.div>
  )
})

SpringTransition.propTypes = {
  children: PropTypes.node.isRequired,
  preset: PropTypes.oneOf([
    'default',
    'gentle',
    'wobbly',
    'stiff',
    'slow',
    'molasses',
  ]),
  x: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  y: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  delay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
SpringTransition.defaultProps = {
  ref: null,
  preset: 'gentle',
  x: 0,
  y: 100,
  delay: 0,
}

export default SpringTransition
