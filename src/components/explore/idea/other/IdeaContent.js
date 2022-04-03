
export default function IdeaContent ({content}) {
    return (
        <div className={'idea__content'}>
            <span className={'idea__content_title'}>{content.name}</span>
            <p className={'idea__content__text'}>{content.description}</p>
        </div>
    )
}