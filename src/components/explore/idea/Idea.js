import UserInfo from "./other/UserInfo";
import IdeaContent from "./other/IdeaContent";

export default function Idea (props) {
    return (
        <li>
            <UserInfo user={props.ideas} />
            <IdeaContent conten={props.ideas} />
        </li>
    )
}