import React from 'react';
import ReactDOM from 'react-dom';
import { validateEmail } from '../csv-parser/validators/validators';
import Modal from 'react-modal';
import './modal.scss'
const customStyles = {
    content : {
        background: 'lightgray',
        width:'300px',
        top                   : '158px',
        left                  : '70%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
    },

    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
};

function ModalView(props){
    var subtitle;

    const { setModal, setEmail } = props;


    const closeModal = () => {
        setModal(false);
    };

    const getEvent = ( event ) => {

        if(event.code ==='Enter'){
            const email = event.target.value;
            if(validateEmail(email)){
                setEmail(email)
            }else {
                alert("not valid email")
            }
        }
    };

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    return (
        <div className="modal">
            <Modal
                isOpen={props.modal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button
                    onClick={closeModal}
                >
                    &#x2715;
                </button>
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Update email</h2>
                <hr/>
                <div>
                    <div>type valid email</div>
                    <input
                        type="email"
                        name="email"
                        pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                        required
                        onChange={getEvent}
                        onKeyDown={getEvent}
                    />
                    <button>
                        Confirm
                    </button>
                </div>

            </Modal>
        </div>
    );
}

export default ModalView;