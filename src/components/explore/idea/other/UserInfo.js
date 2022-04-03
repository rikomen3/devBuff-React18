

export default function UserInfo ({user}) {
    return (
        <div className={'userinfo__wrapper'}>
            <img className={'userinfo__image'} src={`https://api-staging.devbuff.com/photo/profile/${user.ownerIdea.id}`} />
            <span className={'userinfo__name'}>{user.ownerIdea.firstName}</span>
            <span className={'userinfo__nick'}>{user.ownerIdea.userName}</span>
        </div>
    )
}