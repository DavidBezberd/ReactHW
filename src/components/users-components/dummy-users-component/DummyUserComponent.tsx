import type { FC } from "react";
import type { IUsersDummy } from "../../../models/UsersModel/IUsersDummy";

type DummyUserType = {
    item: IUsersDummy
}
export const DummyUserComponent:FC<DummyUserType> = ({item}) =>{
    return(
        <div>
            {item.username} <br/> {item.email} <br/><br/>
        </div>
    )
}

