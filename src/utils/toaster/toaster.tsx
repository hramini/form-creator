import { toast, ToastOptions } from 'react-toastify';
import { IToasterParam } from './toaster-interface';

// const { error, success } = theme.palette;
const commonToastOptions: ToastOptions = {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export const successToast = ({ message }: IToasterParam) => {
  return toast.success(message, {
    ...commonToastOptions,
    style: {
      backgroundColor: 'green',
    },
  });
};

export const errorToast = ({ message }: IToasterParam) => {
  return toast.error(message, {
    ...commonToastOptions,
    style: {
      backgroundColor: 'darkred',
    },
  });
};

export const warningToast = ({ message }: IToasterParam) => {
  return toast.warning(message, {
    ...commonToastOptions,
  });
};

export const darkToast = ({ message }: IToasterParam) => {
  return toast.dark(message, {
    ...commonToastOptions,
  });
};

export const infoToast = ({ message }: IToasterParam) => {
  return toast.info(message, {
    ...commonToastOptions,
  });
};
