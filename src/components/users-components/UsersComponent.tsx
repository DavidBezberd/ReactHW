import { useEffect, useState } from "react"
import { UserComponent } from "./UserComponent"
import type { IUser } from "../../model/IUser"
import { getAllUsers } from "../../services/api.service"
import type { IUserResponse } from "../../model/IUserResponse"
import { useSearchParams } from "react-router-dom"


export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'})
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getAllUsers(currentPage).then(({users}:IUserResponse) => {
            setUsers(users);
        });
    },[searchParams])
    return(
        <div>
            {users.map((user:IUser) => (<UserComponent key={user.id} item={user}/>))}
        </div>
    )
}