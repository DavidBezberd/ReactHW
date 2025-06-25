import { useEffect, useState } from "react"
import type { IUser } from "../../models/IUser"
import { getAll } from "../../services/general.api.service"
import type { IBaseResponseModel } from "../../models/IBaseResponseModel"
import { UserComponent } from "./UserComponent"


export const UsersComponent = () =>{
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
     getAll<IBaseResponseModel & {users: IUser[]}>('/users')
     .then(({users}) =>{
        setUsers(users);
     })
    }, [users])
    return (
        <div>
            {
                users.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    )
}