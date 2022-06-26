import img_not_found from "./assets/no-image-icon-23485.png"
import error_404 from "./assets/error-404.png"
import img_sad from "./assets/sad.png"

export const countries = [
    {value: "ae", text: "The United Arab Emirates", key: 1},
    {value: "ar", text: "Argentina", key: 2},
    {value: "at", text: "Austria", key: 3},
    {value: "au", text: "Australia", key: 4},
    {value: "be", text: "Belgium", key: 5},
    {value: "bg", text: "Bulgaria", key: 6},
    {value: "br", text: "Brazil", key: 7},
    {value: "ca", text: "Canada", key: 8},
    {value: "ch", text: "Switzerland", key: 9},
    {value: "cn", text: "China", key: 10},
    {value: "co", text: "Colombia", key: 11},
    {value: "cu", text: "Cuba", key: 12},
    {value: "cz", text: "Czechia", key: 13},
    {value: "de", text: "Germany", key: 14},
    {value: "eg", text: "Egypt", key: 15},
    {value: "fr", text: "France", key: 16},
    {value: "gb", text: "Great Britain", key: 17},
    {value: "gr", text: "Greece", key: 18},
    {value: "hk", text: "Hong Kong", key: 19},
    {value: "hu", text: "Hungary", key: 20},
    {value: "id", text: "Indonesia", key: 21},
    {value: "ie", text: "Ireland", key: 22},
    {value: "il", text: "Israel", key: 23},
    {value: "in", text: "India", key: 24},
    {value: "it", text: "Italy", key: 25},
    {value: "jp", text: "Japan", key: 26},
    {value: "kr", text: "The Republic of Korea", key: 27},
    {value: "lt", text: "Lithuania", key: 28},
    {value: "lv", text: "Latvia", key: 29},
    {value: "ma", text: "Morocco", key: 30},
    {value: "mx", text: "Mexico", key: 31},
    {value: "my", text: "Malaysia", key: 32},
    {value: "ng", text: "Nigeria", key: 33},
    {value: "nl", text: "Netherlands", key: 34},
    {value: "no", text: "Norway", key: 35},
    {value: "nz", text: "New Zealand", key: 36},
    {value: "ph", text: "Philippines", key: 37},
    {value: "pl", text: "Poland", key: 38},
    {value: "pt", text: "Portugal", key: 39},
    {value: "ro", text: "Romania", key: 40},
    {value: "rs", text: "Serbia", key: 41},
    {value: "ru", text: "Russian Federation", key: 42},
    {value: "sa", text: "Saudi Arabia", key: 43},
    {value: "se", text: "Sweden", key: 44},
    {value: "sg", text: "Singapore", key: 45},
    {value: "si", text: "Slovenia", key: 46},
    {value: "sk", text: "Slovakia", key: 47},
    {value: "th", text: "Thailand", key: 48},
    {value: "tr", text: "Turkey", key: 49},
    {value: "tw", text: "Taiwan", key: 50},
    {value: "ua", text: "Ukraine", key: 51},
    {value: "us", text: "United States of America", key: 52},
    {value: "ve", text: "Venezuela", key: 53},
    {value: "za", text: "South Africa", key: 54}
]

export const getResults = (q = null, country = "us", category = "general") => {
    const apiKey = process.env.REACT_APP_API_KEY;

    if(q){
        return fetch(`https://newsapi.org/v2/top-headlines?pageSize=100&q=${q}&category=${category}&country=${country}&apiKey=${apiKey}`).then(response => response.json())
    }

    return fetch(`https://newsapi.org/v2/top-headlines?pageSize=100&category=${category}&country=${country}&apiKey=${apiKey}`).then(response => response.json())
}

export const noDataFoundPage = () => {
    return(
        <div className="w-full grid justify-items-center my-4">
            <img className="w-40 h-40" src={error_404} alt="404 Error"/>
            <p>Data cannot be loaded</p>
        </div>
    )
}

export const displayResults = (articles) => {
    let iter = 0;

    if(articles.length === 0){
        return(
            <div className="w-full grid justify-items-center my-4">
                <img className="w-40 h-40" src={img_sad} alt="No data as specified"/>
                <p>Cannot find data</p>
            </div>
        )
    }

    return articles.map(({source, author, title, description, url, urlToImage, publishedAt}) => {
        return(
            <a key={iter++} href={url}>
                <div className="mx-2 my-3 space-y-1 shadow-xl bg-gray p-2 rounded border-2 border-turquoise">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <div className="space-x-3 italic">
                        <span>{source.name}</span>
                        <span>{publishedAt}</span>
                    </div>
                    <div className="flex space-x-2">
                        <span><img className="w-40 h-30 border rounded" src={urlToImage ? urlToImage : img_not_found} alt={title}/></span>
                        <div>
                            <p>{description}</p>
                        </div>
                    </div>
                    <p className="font-semibold">{author}</p>
                </div>
            </a>
        )
    })
}