

export default class IdeaService {
    async getAll() {
        const res = await fetch(`${process.env.REACT_APP_API}/idea/?page=1&sortBy=LAST_UPDATE&specialists=&languages= `)
        const ideas = await res.json()
        return ideas.ideas
    }
}