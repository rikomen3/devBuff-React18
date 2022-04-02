import sharp from '../../img/userPanel/sharp.svg'
import '../../styles/userPanel.css'
export default function UserPanel () {
    return (
        <ul className={'panel__list'}>
            <li className={'panel__item'}>
                <div className={'panel__bg'}><img className={'panel__image'} src={sharp} /></div>
                <span className={'panel__content'}>Обзор идей</span>
            </li>
        </ul>
    )
}