import React, {useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function ModalPractical() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal
                isOpen={isOpen}
                style={
                    {
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(240, 240, 240, 0.75)'
                        },
                        content: {
                            color: 'pink'
                        }
                    }
                }
            >
                <h2>Title</h2>
                <p>
                    Body
                </p>
                <div>
                    <button onClick={() =>setIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalPractical
