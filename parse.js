const rp = require('request-promise');
const cheerio = require('cheerio'); //jquery for node.js(Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure)

// const url = 'https://id.wikipedia.org/wiki/Soekarno';



//parse html with cheerio

// rp(url)
//     .then(function (html) {
//         // console.log(html);
//         console.log(cheerio('.firstHeading', html).text());
//         console.log(cheerio('.nickname',html).text())
//         console.log(cheerio('.bday', html).text());
//       

//     })
//     .catch(function (err) {
//         console.log(err)
//         //handle error
//     });


const parse = function (url) {
    return rp(url)
        .then(function (html) {
            return {
                nama: cheerio('.firstHeading', html).text(),
                nickname: cheerio('.nickname', html).text(),
                tanggal_lahir: cheerio('.bday', html).text()


            };
        })
        .catch(function (err) {
            console.log(err)
        })
}

module.exports = parse;