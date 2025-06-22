import { useEffect, useState } from "react"
import {  jsonUserService } from "../../../service/api-service";
import { JsonUserComponent } from "./JsonUserComponent";
import type { IUserJson } from "../../../models/UsersModel/IUsersJson";


export const JsonUsersComponent = () =>{
    const [usersJson, setJsonUsers] = useState<IUserJson[]>([]);
    useEffect(() =>{
         jsonUserService.GetJsonUsers().then((allUsers) => {
             setJsonUsers(allUsers);
    });
}, [usersJson]);
    return(
        <div>
        {
            usersJson.map(user => <JsonUserComponent key={user.id} item={user}/>)
        }
        </div>
    )
}