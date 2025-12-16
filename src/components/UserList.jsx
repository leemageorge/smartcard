
import UserCard from './UserCard'
import ArrowRight from "../assets/ArrowRight.svg"

const UserList = ({users,rightIcon }) => {
 
  return (
        <div className='divide-y divide-gray-200 mt-10 '>
            {users.map((user)=>(
                <UserCard key={user.number} user={user} rightIcon={rightIcon}/>
            ))}
        </div>
   
  )
}

export default UserList     