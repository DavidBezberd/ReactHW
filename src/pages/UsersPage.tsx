import { UsersComponent } from "../components/users-component/UsersComponent"
import { Outlet } from "react-router-dom"

export const UsersPage = () =>{
    return(
        <div>
           <hr />
            <Outlet/>
            <hr />
            <UsersComponent/>
        </div>
    )
}