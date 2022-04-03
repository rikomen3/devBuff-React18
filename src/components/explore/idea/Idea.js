import UserInfo from "./other/UserInfo";
import IdeaContent from "./other/IdeaContent";
import IdeaSpecialists from "./other/IdeaSpecialists";
import IdeaTech from "./other/IdeaTech";
import IdeasLanguages from "./other/IdeasLanguages";


export default function Idea (props) {
    return (
        <li className={'idea__wrapper'}>
            <UserInfo user={props.ideas} />
            <IdeaContent content={props.ideas} />
            <span className={'ideas__subtitle'}>Специалисты</span>
            <IdeaSpecialists item={props.ideas.requirements} />
            <span className={'ideas__subtitle'}>Технологии в проекте</span>
            <IdeaTech item={props.ideas.requirements} />
            <span className={'ideas__subtitle'}>Языки программирования</span>
            <IdeasLanguages item={props.ideas.requirements}/>
        </li>
    )
}