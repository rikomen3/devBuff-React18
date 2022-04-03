


export default function IdeaTech ({item}) {
    return (
        <ul className={'ideas__card__list'}>
            {
                item.map((item,idx)=>{
                        return (
                            !item.languages
                            ? null
                            :item.languages.map((lang,idx)=>{
                                return (
                                    !lang.technologies
                                    ? null
                                    : lang.technologies.map((tech,idx)=>{
                                        return(
                                            <li className={'ideas__card__item'} key={idx}>
                                                <div className={'ideas__card__wrapper'}>
                                                    <span className={'ideas__card__text'}>{tech.name} developer</span>
                                                </div>
                                            </li>
                                        )
                                        })
                                )
                                })
                        )
                    })
            }
        </ul>
    )
}