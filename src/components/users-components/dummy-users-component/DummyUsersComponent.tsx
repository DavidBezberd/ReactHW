import { useEffect, useState } from "react"
import {  dummyUserService } from "../../../service/api-service";
import { DummyUserComponent } from "./DummyUserComponent";
import type { IUsersDummy } from "../../../models/UsersModel/IUsersDummy";


export const DummyUsersComponent = () =>{
    const [usersDummy, setDummyUsers] = useState<IUsersDummy[]>([]);
    useEffect(() =>{
        dummyUserService().then((allUsers) => {
            setDummyUsers(allUsers);
    });
}, []);
    return(
        <div>
        {
            usersDummy.map(user => <DummyUserComponent key={user.id} item={user}/>)
        }
        </div>
    )
}