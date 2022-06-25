import React, { useEffect, useState } from "react";
import { getResults } from "../misc";

const Sports = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getResults(null, "us", "sports").then(item => setArticles(item.articles));
    }, [])

    let iter= 0;
    return(
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
    );
}

export default Sports;