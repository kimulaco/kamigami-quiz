<template>
  <header class="c-site-header">
    <div class="c-site-header__inner">
      <h1 class="c-site-header__title">
        <router-link
          to="/"
          class="c-site-header__title-anchor"
        >神々のクイズ</router-link>
      </h1><!-- /.c-site-header__title -->
    </div><!-- /.c-site-header__inner -->
  </header><!-- /.c-site-header -->
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss" scoped>
.c-site-header {
  background: rgba(#fff, 0.95);
  width: 100%;
  box-shadow: 0 0 3px rgba(#000, 0.1);
  position: fixed;
  top: 0;
  left: 0;

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: $CONTENT_MAX_WIDTH;
    padding: 10px;
    margin: 0 auto;
  }

  &__title {
    font-size: 2.4rem;
    margin: 0;
    text-align: center;

    &-anchor {
      color: inherit;
      text-decoration: none;
      transition: opacity 0.3s;

      @include hover() {
        opacity: 0.8;
      }
    }
  }
}
</style>
