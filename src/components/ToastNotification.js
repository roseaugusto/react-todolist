import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

const notify = () => {
    toast("Basic Notification", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const ToastNotification = () => {
    return (
        <div>
            <button onClick={notify}>Notify Me</button>
        </div>
    )
}

export default ToastNotification;
