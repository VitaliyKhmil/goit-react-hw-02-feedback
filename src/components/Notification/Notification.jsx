import PropTypes from 'prop-types';
import { NotificationMessage, NotificationText } from './Notification.styled';


export const Notification = ({ message }) => {
  return (
    <NotificationMessage>
      <NotificationText>{message}</NotificationText>     
    </NotificationMessage>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
