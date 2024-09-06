import { FC, useMemo } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: React.ReactNode
  id: string
}

const Portal: FC<Props> = ({ children, id }) => {
  const container = useMemo(() => {
    let portalRoot = document.getElementById(id)
    if (!portalRoot) {
      portalRoot = document.createElement('div')
      portalRoot.id = id
      portalRoot.setAttribute('data-testid', id)
      document.body.appendChild(portalRoot)
    }
    return portalRoot
  }, [id])

  return createPortal(children, container)
}

export default Portal
