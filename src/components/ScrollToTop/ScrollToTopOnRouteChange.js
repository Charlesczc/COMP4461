// src/components/ScrollToTop/ScrollToTopOnRouteChange.js
import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

const ScrollToTopOnRouteChange = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0) // scrolls to top on every route change
    })
    return () => unlisten()
  }, [history])

  return null
}

export default withRouter(ScrollToTopOnRouteChange)
