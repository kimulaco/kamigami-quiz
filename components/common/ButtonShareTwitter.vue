<template>
  <a
    :href="href"
    target="_blank"
    class="c-button-share-twitter"
  >
    <span class="c-button-share-twitter__inner">ツイートする</span>
  </a><!-- /.c-button-share-twitter -->
</template>

<script>
const pkg = require('../../package.json')

export default {
  name: 'ButtonShareTwitter',
  props: {
    url: {
      type: String,
      default: window.location.href
    },
    text: {
      type: String,
      default: pkg.description
    }
  },
  computed: {
    href() {
      let url = 'https://twitter.com/share?'

      if (this.url) {
        url += `url=${this.url}&`
      }

      if (this.text) {
        url += `text=${this.text}&`
      }

      return url
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
