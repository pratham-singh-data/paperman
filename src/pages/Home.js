import React, { useEffect, useState } from "react";
import { getResults } from "../misc";

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [query, setQuery] = useState(null);

    const onInputChanged = (ev) => {
        setQuery(ev.target.value);
    }

    useEffect(() => {
        getResults(query, "us", "general").then(item => setArticles(item.articles));
    }, [query]);

    let iter = 0;
    return(
        <div>
            <input type="text" onChange={onInputChanged} placeholder="Search Here"/>

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

export default Home;