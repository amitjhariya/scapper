const express = require('express')
const app = express()
const port = 5555
const $ = require('cheerio');

const rp = require('request-promise');
const url = 'https://www.zaubacorp.com/company-trademark/TATA-CONSULTANCY-SERVICES-LIMITED/L22210MH1995PLC084781';

data =null
rp(url)
  .then(function(html){
    //success!
    // console.log();
    data =$('.wordMark', html).text()
    
  })
  .catch(function(err){
    return 'error'
  });

app.get('/', (req, res) => res.send(data))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))




