import PropTypes from "prop-types";
import css from './UserData.module.css'

const UserData = ({ username, tag, location }) => {
    return <>
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
    </>
}

UserData.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}

export default UserData;