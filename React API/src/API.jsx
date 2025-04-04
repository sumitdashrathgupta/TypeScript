import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.css"

const API = () => {
    const [data, setData] = useState(null);
    const [search, setsearch] = useState('')

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.post(`https://porn-xnxx-api.p.rapidapi.com/${search} `, {
                    headers: {
                        'x-rapidapi-key': '7186c28d08mshc13bbd0c6be03c5p1b5d5fjsndd07a17dc0be',
                        'x-rapidapi-host': `https://porn-xnxx-api.p.rapidapi.com/${search}`,
                        'Content-Type': 'application/json'
                    },
                    data: { q: 'Sister hot' }
                });

               console.log(response)

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchNews();
    }, []);

    console.log(data)

    return (
        <div className="contenar">
            <h2>Cryptocurrency News</h2>
            <input type="text" placeholder="Search" onChange={(e) => setsearch(e.target.value)} />
            {data ? (
                <div className="tata">
                    {data.data.map((news, index) => (
                        <ul key={index} className="all">
                            <img src={news.thumbnail
                            } alt="" />
                            {/* <li>{news.title}</li> */}
                        </ul>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default API;
