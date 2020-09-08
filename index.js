const express = require("express");

const app = express();

const request = require("request-promise");
const cheerio = require("cheerio");


// const fs = require(fs);


const info = "https://www.imdb.com/title/tt7286456/?ref_=hm_fanfav_tt_4_pd_fp1";




(async() => {
let Data =[];
const response = await request({
    uri: info,
    headers : {
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
"accept-encoding": "gzip, deflate, br",
"accept-language": "en-GB,en-US;q=0.9,en;q=0.8"
    },
    gzip : true,

});
let $ = cheerio.load(response);

let title = $('div[class="title_wrapper"] >h1').text().trim()

let rating = $('div[class="ratingValue"] > strong > span').text()

let date = $('span[id="titleYear"] > a').text();


Data.push({
    title, rating, date
});

app.listen(3000, () =>{console.log("port running on 3000")});

app.get("/", (req, res) => {

    res.send(Data);
})
// console.log(imdbData);

}
)();