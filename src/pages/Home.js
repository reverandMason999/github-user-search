import SearchForm from '../components/SearchForm/SearchForm'
import '../App.css';

import UserCardList from '../components/UserCardList/UserCardList';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, selectUsers } from '../store/userSlice';

function Home() {
const users = useSelector(selectUsers)
const dispatch = useDispatch()

  const searchUser = async (username) => {
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    const user = await userResponse.json('');
    dispatch(addUser(user))

  }
  return (
   <div className="container">
    <SearchForm  onHandleSubmit={searchUser}/>
    <UserCardList users={users} />
   </div>
  );
}

export default Home;