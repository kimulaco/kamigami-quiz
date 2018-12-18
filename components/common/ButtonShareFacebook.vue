<template>
  <a
    :href="href"
    target="_blank"
    class="c-button-share-facebook"
  >
    <span class="c-button-share-facebook__inner">Facebookでシェアする</span>
  </a><!-- /.c-button-share-facebook -->
</template>

<script>
export default {
  name: 'ButtonShareTwitter',
  props: {
    url: {
      type: String,
      default: window.location.href
    }
  },
  computed: {
    href() {
      let url = 'https://www.facebook.com/sharer/sharer.php?u='

      if (this.url) {
        url += `url=${this.url}&`
      }

      return url
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
