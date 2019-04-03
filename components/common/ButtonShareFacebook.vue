<template>
  <a
    :href="href"
    target="_blank"
    class="c-button-share-facebook"
  >
    <span class="c-button-share-facebook__inner">
      <img
        src="@/assets/img/icon-facebook.png"
        title="Facebookでシェアする"
        alt="Facebookでシェアする"
        class="c-button-share-facebook__icon"
      ><!-- /.c-button-share-facebook__icon -->
    </span>
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
      let url = 'https://www.facebook.com/sharer/sharer.php?'

      if (this.url) {
        url += `u=${this.url}`
      }

      return url
    }
  }
}
</script>

<style lang="scss" scoped>
.c-button-share-facebook {
  display: inline-block;

  &__inner {
    display: block;
    width: 30px;
  }
}
</style>
