import React, { useEffect, useState } from "react";
import { countries, getResults } from "../misc";

const Sports = () => {
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
        getResults(query, country, "sports").then(item => setArticles(item.articles)).catch(() => {
            setArticles(null)
        });
    }, [query, country])

    if(! articles){
        return(
            <div>No data can be loaded</div>
        )
    }

    let iter= 0;
    return(
        <div>
            <div className="w-full text-center my-3">
                <input className="w-1/2 p-2 border-turquoise border-2" type="text" onChange={onInputChanged} placeholder="Search Here"/>
            </div>

            <div className="w-full text-center my-3">
                <select className="w-1/5 p-2 bg-turquoise" onChange={selectionMade} defaultValue={"us"}>
                    {countries.map(({value, text, key})=> {
                        return(
                            <option key={key} value={value}>{text}</option>
                        );
                    })}
                </select>
            </div>
        
            <div>
            {articles.map(({source, author, title, description, url, urlToImage, publishedAt}) => {
                    return(
                        <a key={iter++} href={url}>
                            <div>
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
                        </a>
                    )
                })}
            </div>
        </div>
    );
}

export default Sports;