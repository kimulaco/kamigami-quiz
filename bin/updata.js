/* eslint strict: 0 */
const cheerio = require('cheerio')
const fs = require('fs')
const KamigamiCrawler = require('../lib/KamigamiCrawler.js')
const config = {
  url: 'https://ja.wikipedia.org/wiki/%E7%A5%9E%E3%81%AE%E4%B8%80%E8%A6%A7',
  data: 'assets/json/god.json'
}

const crawler = new KamigamiCrawler({
  url: config.url,
  fn: (body) => {
    return new Promise((resolve, reject) => {
      const $ = cheerio.load(body)
      let data = []
      let i = 0

      $('.mw-parser-output > ul > li').each((idx, element) => {
        const god = crawler._parseGod($(element).text());

        if (!god) {
          reject()
        }

        if (!god.description) {
          return
        }

        i++
        god.id = i

        data.push(god)
      })

      resolve(data)
    })
  }
})

crawler.start().then((data) => {
  write(config.data, data)
}).catch((error) => {
  console.log(error)
})

function write(url, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(url, JSON.stringify(data, null, '    '), (error) => {
      if (error) {
        reject(error)
      }

      resolve()
    })
  })
}
