import type { FC } from "react"
import type { IUser } from "../../model/IUser"


type UserType = {
    item: IUser
}

export const UserComponent:FC<UserType> = ({item}) => {
    return(
        <div>
            {item.id} {item.firstName}
        </div>
    )
}