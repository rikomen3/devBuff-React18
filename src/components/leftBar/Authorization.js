import '../../styles/authorization.css'
import github from '../../img/authorization/github__light.png'
import gitlab from '../../img/authorization/gitlab-icon.png'

export default function Authorization () {
    return (
        <div className={'flex'}>

            <span className={'title'}>Войти с помощью</span>
            <div className={'btn__container'}>
                <button className={'btn'}><img src={github} className={'image'} /><span className={'icons'}>GITHUB</span></button>
                <button className={'btn'}><img src={gitlab} className={'image'} /><span className={'icons'}>GITLAB</span></button>
            </div>

            <span className={'content'}>Авторизируйтесь для возможности просмотра и создания идей</span>
        </div>
    )
}