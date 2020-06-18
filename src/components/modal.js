import React, { useRef } from 'react'

import '../styles/Modal.css'

//https://tympanus.net/Development/ModalWindowEffects/

const Modal = () => {
  const refModal = useRef(null)
  const headlerClick = e => {
    refModal.current.classList.remove('active')
  }
  return (
    <React.Fragment>
      <div className="modal active effect-scale" ref={refModal}>
        <div className="content">
          <header>Header</header>
          <article>Article</article>
          <footer>footer</footer>
        </div>
      </div>
      <div className="overlay" onClick={headlerClick} />
    </React.Fragment>
  )
}
export default Modal
