const rp = require('request-promise'); //simplified HTTP request client 'request' with Promise support
const cheerio = require('cheerio');
const url = 'https://id.wikipedia.org/wiki/Daftar_Presiden_Indonesia';

const parse = require('./parse');



//scrapp
rp(url)
    .then(function (html) {
        //if scrapp success!
        // console.log($('b > a', html).length);
        // console.log($('b > a', html));

        //extract all of wiki url presindent to array
        const wikiurl = [];
        for (let i = 0; i < 12; i++) {
            wikiurl.push(cheerio('b > a', html)[i].attribs.href);
        }
        // console.log(wikiurls)
        return Promise.all(
            wikiurl.map(function (url) {
                return parse('https://en.wikipedia.org' + url)
            })
        );

    })
    .then(function (president) {
        console.log(president)
    })
    .catch(function (err) {
        console.log(err) //if err
    });
