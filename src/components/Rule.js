import React from 'react'
import { Modal } from 'react-bootstrap'

function ModalDialog(props) {
  return (
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='text-center'>
        <Modal.Title id="contained-modal-title-vcenter" >
          Rule
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>It's a mathematics game.</h4>
        <p>
        The player is given 4 numbers which are from 1 to 9 (not 0, but 10, 20 etc.) and must be added, subtracted, multiplied or divided to get the value 24 
        <br/>i.e. 1.3. 5.7 can be done as follows (7-3=4)(5+1=6)(6×4=24) or 5.5.5.5(5×5=25)(5÷5=1)(25-1=24).
        </p>
      </Modal.Body>
    </Modal>
  )
}
export default ModalDialog