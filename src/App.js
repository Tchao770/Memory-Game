import './App.css';
import { useEffect, useState, useRef } from 'react';
import GameField from './components/Gamefield.js';
import axios from 'axios';

function animeTitles(animeList) {
    let arr = [];
    animeList.forEach(title => {
        arr.push({
            "title": title.anime,
            "url": title.imgUrl
        });
    })
    return arr;
};

function animeObjs(animeList) {
    let arrObj = {};
    animeList.forEach(obj => {
        arrObj[obj.anime] = false;
    })
    return arrObj;
}

function animeObj(anime, imgUrl, id) {
    this.anime = anime;
    this.imgUrl = imgUrl;
    this.id = id;
}

const animeIds = [31240, 11757, 29803, 30831, 35790, 37430, 15809, 19815, 15315];

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const titles = useRef();
    const titleClicked = useRef();

    // Responseible for API call
    useEffect(() => {
        const animeList = [], promises = [];
        
        // Put all requests into a promise array
        for (let i = 0; i < animeIds.length; i++) {
            let url = `https://api.jikan.moe/v3/anime/${animeIds[i]}`
            promises.push(axios.get(url));
        }

        // All called and then pushed into anime list array
        axios.all(promises)
            .then(response => {
                response.forEach((fetched) => {
                    const { title_english, image_url, mal_id } = fetched.data;
                    animeList.push(new animeObj(title_english, image_url, mal_id, animeList));
                })

                // Refactor data into necessary format for card display and click logic
                titles.current = animeTitles(animeList);
                titleClicked.current = animeObjs(animeList);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    if (isLoading) {
        return (
            <h1 style={{ backgroundColor: "white", textAlign: "center" }}>Loading...</h1>
        )
    }
    else {
        return (
            <div className="container">
                <GameField animeTitles={titles.current} animeObj={titleClicked.current} />
            </div>
        );
    }
}

export default App;
