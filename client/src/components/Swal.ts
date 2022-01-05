import Swal from 'sweetalert2';
import { ISweetAlertProps } from '../interfaces/SweetAlert';

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

export const ErrorAlert = ({ title, text }: ISweetAlertProps) => {
  Swal.fire({
    icon: 'error',
    title,
    text,
    confirmButtonColor: '#3a4750',
  });
};

export const ErrorAlertAndRedirect = ({
  title,
  text,
  onButtonText,
  onOkAction,
}: ISweetAlertProps) => {
  Swal.fire({
    icon: 'error',
    title,
    text,
    confirmButtonColor: '#3a4750',
    confirmButtonText: onButtonText,
  }).then(onOkAction);
};
