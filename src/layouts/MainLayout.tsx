import { Outlet } from "react-router-dom"
import { MenuComponent } from "../menu/MenuComponent"


export function MainLayout() {
    return (
        <>
        <MenuComponent/>
        <Outlet/>
        </>
    )
}