import React, { useEffect, useState } from "react";
import { countries, getResults } from "../misc";

const Health = () => {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState(null);
    const [country, setCountry] = useState("us");

    const onInputChanged = (ev) => {
        setQuery(ev.target.value);
    }

    const selectionMade = (ev) => {
        setCountry(ev.target.value);
    }

    useEffect(() => {
        getResults(query, country, "health").then(item => setArticles(item.articles)).catch(() => {
            setArticles(null)
        });
    }, [query, country])

    if(! articles){
        return(
            <div>No data can be loaded</div>
        )
    }

    let iter = 0;
    return(
        <div>
            <input type="text" onChange={onInputChanged} placeholder="Search Here"/>

            <select onChange={selectionMade} defaultValue={"us"}>
                {countries.map(({value, text, key})=> {
                    return(
                        <option key={key} value={value}>{text}</option>
                    );
                })}
            </select>
        
            <div>
                {articles.map(({source, author, title, description, url, urlToImage, publishedAt}) => {
                    return(
                        <div key={iter++}>
                            <h2>{title}</h2>
                            <div>
                                {source.name}
                                {publishedAt}
                            </div>
                            <img src={urlToImage} alt={title}/>
                            <div>
                                <p>{author}</p>
                                <p>{description}</p>
                            </div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Health;