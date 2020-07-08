import { useEffect } from 'react'

const useDisableScroll = shouldDisable => {
  useEffect(() => {
    if (shouldDisable) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [shouldDisable])
}

export default useDisableScroll
