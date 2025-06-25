import type { FC } from "react"
import type { IUser } from "../../models/IUser"



type UserType = {
    user: IUser
}

export const UserComponent:FC<UserType> = ({user}) => {
    return (
     <div>
        {
            user.firstName
        } {user.lastName}
        {user.age}
     </div>
    )
}