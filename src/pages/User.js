import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"


const User = () => {
    const { userId } = useParams();

    const selectedUser = useSelector((state) =>
        state.users.value.find((user) => user.id === Number(userId))  
    );
    
    return (
<div className="user">
    <h1 className="username">{selectedUser.login}</h1>
    <img className="user-avatar" src={selectedUser.avatar_url} alt="user avatar"/>
    <h2 className="username">{selectedUser.name}</h2>
    <p>{selectedUser.location || 'The Moon'}</p>
</div>    );
};

export default User