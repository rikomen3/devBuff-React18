import Authorization from "./Authorization";
import  '../../styles/menu.css'
import UserPanel from "./UserPanel";

export default function Menu () {
    return (
        <div className={'main__menu__container'}>
            <Authorization />
            <UserPanel />
        </div>
    )
}