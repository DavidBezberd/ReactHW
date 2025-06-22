import type { FC } from "react";
import type { IUserJson } from "../../../models/UsersModel/IUsersJson";

type JsonUserType = {
    item: IUserJson
}

export const JsonUserComponent:FC<JsonUserType> = ({item}) =>{
return (
        <div>
            {
                item.username
            }
        </div>
)
}