

export default function UserInfo ({user}) {
    return (
        <div className={'userinfo__wrapper'}>
            <img className={'userinfo__image'} src={`https://api-staging.devbuff.com/photo/profile/${user.ownerIdea.id}`} />
            <span className={'userinfo__name'}></span>
            <span className={'userinfo__nick'}>@NickName</span>
        </div>
    )
}