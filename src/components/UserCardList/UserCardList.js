import './UserCardList.css'
import UserCard from '../UserCard/UserCard'

const UserCardList = ({users}) => {
    
    const renderUsers = () => {
        return users.length ? (
            <div className='user-list'>
                {users.map((user) => <UserCard user={user} key={user.id} />)}
            </div>
        ) : (
            <div>no users</div>
        )
    }

    return(
        <div className='user-list-container'>
            <h1 className='user-title'>users</h1>
            <div className='user-list'>
                {renderUsers()}
            </div>
        </div>
    )
}

export default UserCardList