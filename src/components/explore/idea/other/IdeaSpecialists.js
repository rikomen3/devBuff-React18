

export default function IdeaSpecialists ({item}) {
    return (
        <ul className={'ideas__card__list'}>
            {
                   item.map((item,idx)=>{
                       return <li className={'ideas__card__item'} key={idx}>
                           <div className={'ideas__card__wrapper'}>
                               <span className={'ideas__card__text'}>{item.name} developer</span>
                           </div>
                       </li>
                   })
            }
        </ul>
    )
}