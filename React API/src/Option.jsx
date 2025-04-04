import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.css"

const Option = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily', {
                    headers: {
                        'x-rapidapi-key': '7186c28d08mshc13bbd0c6be03c5p1b5d5fjsndd07a17dc0be',
                        'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
                    }
                });

                setData(response.data);

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

export default Option;
