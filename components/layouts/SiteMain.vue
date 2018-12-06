<template>
  <main class="c-site-main">
    <div class="c-site-main__inner">
      <slot/>
    </div><!-- /.c-site-main__inner -->
  </main><!-- /.c-site-main -->
</template>

<script>
export default {
  name: 'SiteMain'
}
</script>

<style lang="scss" scoped>
.c-site-main {
  padding: 60px 0 30px;

  &__inner {
    max-width: $CONTENT_MAX_WIDTH;
    padding: 0 10px;
    margin: 0 auto;
  }
}
</style>
