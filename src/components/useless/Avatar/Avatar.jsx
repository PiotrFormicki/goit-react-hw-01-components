import PropTypes from 'prop-types';
import css from './Avatar.module.css';

const Avatar = ({
  avatar, username
}) => {
  return (<img
    className={css.avatar}
    src={avatar}
    alt={username}
  />)
}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

export default Avatar;
