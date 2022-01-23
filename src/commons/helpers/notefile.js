import { toast } from 'react-toastify';

const Message = (message, icon) => {
  return (
    <div>
      <span className={icon} style={{ color: 'white' }} />
      {'        '}
      {message}
    </div>
  );
};
export const errorNote = message => {
  const icon = 'fa fa-exclamation-triangle';
  toast.error(Message(message, icon));
};
export const warningNote = message => {
  const icon = 'fa fa-flash';
  toast.warn(Message(message, icon));
};
export const infoNote = message => {
  const icon = 'fa fa-headphones';
  toast.info(Message(message, icon), {
    autoClose: 5000,
  });
};
export const successNote = message => {
  const icon = 'fa fa-check-circle';
  toast.success(Message(message, icon), {
    autoClose: 5000,
  });
};
