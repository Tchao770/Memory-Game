import axios from 'axios';

/* 
    "Re:Zero": 31240
    "SAO": 11757
    "Overlord": 29803
    "Konosuba": 30831
    "Shield Hero": 35790
    "Slime anime": 37430
    "Devil's a Part-Timer!": 15809
    "No Game No Life": 19815
    "Mondaiji-tach": 15315
*/

function delay(ms = 1000) {
    new Promise((resolve) => setTimeout(resolve, ms));
}

function animeObj(anime, imgUrl, id) {
    this.anime = anime;
    this.imgUrl = imgUrl;
    this.id = id;
}
function appendAnimeObj(anime, imgUrl, id) {
    animeArr.push(new animeObj(anime, imgUrl, id));
}
const animeArr = [];

const animeIds = [31240, 11757, 29803, 30831, 35790, 37430, 15809, 19815, 15315];
async function Jikan() {
    for (const id of animeIds) {
        await delay(1000);
        let url = `https://api.jikan.moe/v3/anime/${id}`
        await axios.get(url)
            .then(response => {
                const { title_english, image_url, mal_id } = response.data;
                appendAnimeObj(title_english, image_url, mal_id);
            })

            .catch(error => {
                console.log(error);
            })
    }
}



export default function exportArr() {
    Jikan();
    return animeArr;
}


// response.data.image_url
// response.data.mal_id
// response.data.title_english