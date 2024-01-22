import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ecommerceToaster = () => {
  const tDefault = (message = 'Default Notification !') => toast(message)
  const tSuccess = (message) => {
    return toast.success(message)
  }

  const tError = (message) => {
    return toast.error(message)
  }


  return {
    autoClose: '5000',
    ToastContainer,
    toast,
  
    tDefault,
    tSuccess,
    tError,
  
  }
}

export default ecommerceToaster
