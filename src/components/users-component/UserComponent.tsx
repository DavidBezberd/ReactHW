import {type FC } from "react";
import type { IUser } from "../../models/IUser"
import { useNavigate } from "react-router-dom";

type UserType = {
    item: IUser;
}

export const UserComponent:FC<UserType> = ({item}) => {
    const navigation = useNavigate();
    const onButtonClickNavigate = () =>{
      navigation('/users/' + item.id + '/carts');
    };
    return(
        <div>
             <div>
             {item.firstName} {item.lastName}
             </div>
             <div>
             {item.age}
             </div>
                <button onClick={onButtonClickNavigate} className="border-2">click on me</button>
        </div>
    )
}