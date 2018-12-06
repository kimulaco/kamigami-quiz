const request = require('request')

class Crawler {
  constructor(option) {
    this.url = option.url || ''
    this.fn = option.fn || false
    this.max = 0
    this.current = 0
  }

  start() {
    return this._scrapng().then(body => {
      if (!this.fn) {
        throw new Error('error')
      }

      return this.fn(body)
    })
  }

  _scrapng() {
    return new Promise((resolve, reject) => {
      request(this.url, (error, response, body) => {
        if (error) {
          reject(error)
        }

        resolve(body)
      })
    })
  }

  _parseGod(elementString) {
    const staus = elementString.split(' - ')
    const name = this._parseName(staus[0])

    if (!name) {
      return
    }

    return {
      name: name,
      description: staus[1] || ''
    }
  }

  _parseName(name) {
    if (typeof name !== 'string' || ['(', '（'].indexOf(name[0]) < 0) {
      return name
    }

    if ([')', '）'].indexOf(name[name.length - 1]) < 0) {
      return name
    }

    return name.slice(1).slice(0, -1)
  }
}

module.exports = Crawler
