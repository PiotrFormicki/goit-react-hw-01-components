import PropTypes from 'prop-types';
import css from './FriendsList.module.css'

const FriendsList = ({
    friends
}) => {
    return (
        <ul className={css.friendsList}>
            {friends.map(({ id, isOnline, avatar, name }) => {
                return <li key={id} className={css.item}>
                    <span className={isOnline ? css.status__true : css.status__false}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            })}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            isOnline: PropTypes.bool,
            avatar: PropTypes.string,
            name: PropTypes.string,
        })
    ).isRequired,
}

export default FriendsList;
