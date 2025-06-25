import { useState, useEffect } from "react"
import type { IUser } from "../../models/IUser"
import type { IUserResponseModel } from "../../models/IUserResponseModel"
import {UserComponent} from "./UserComponent"
import { userService } from "../../service/api-service"


export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() =>{
       userService.getAllUsers()
        .then(({users}: IUserResponseModel) => {
             setUsers(users);
        })
    })

    return(
       users.map(user => <UserComponent item={user} key={user.id}/>)
    )
}