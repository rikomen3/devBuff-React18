import {List} from 'react-content-loader';

import Idea from "./Idea";
import '../../../styles/ideas.css'
import {useEffect, useState} from "react";
import IdeaService from "../../../service/fetch_data/idea/IdeaService";

export default function Ideas () {
    const [idea,setIdea] = useState()

    useEffect( ()=>{
        const data = new IdeaService()
        data.getAll()
            .then(result => setIdea(result))
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