import React from 'react'

const Modal = ({active, setActive, imageModal=false, children}) => {

  const classNameAddition = imageModal ? ' modal-img' : ''

  return (
    <div className={active ? 'modal active' + classNameAddition : 'modal' + classNameAddition} onClick={() => setActive(false)}>
        <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
          {children}
        </div>
    </div>
  )
}

export default Modal