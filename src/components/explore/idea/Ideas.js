import {List} from 'react-content-loader';

import Idea from "./Idea";
import '../../../styles/ideas.css'
import {useEffect, useState} from "react";

export default function Ideas () {
    const [idea,setIdea] = useState()

    useEffect( ()=>{
        async function fetchData() {
            let res = await fetch('https://api-staging.devbuff.com/idea/?page=1&sortBy=LAST_UPDATE&specialists=&languages=')
            let ideas = await res.json()
            return ideas.ideas
        }
        fetchData()
            .then( result => setIdea(result))
    },[])

    return(
        <div className={'ideas'}>
            <h1 className={'ideas__title'}>Explore</h1>
            <ul className={'ideas__list'}>
                {
                    !idea
                        ? <List />
                        : idea.map((item,idx)=>{
                            return <Idea key={idx} ideas={item} />
                        })
                }
            </ul>
        </div>
    )
}