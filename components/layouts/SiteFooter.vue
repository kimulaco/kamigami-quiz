<template>
  <footer class="c-site-footer">
    <div class="c-site-footer__inner">
      <p class="c-site-footer__copyright"><small>&copy; 2018 神々のクイズ.</small></p>
    </div><!-- /.c-site-footer__inner -->
  </footer><!-- /.c-site-footer -->
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style lang="scss" scoped>
.c-site-footer {
  &__inner {
    max-width: $CONTENT_MAX_WIDTH;
    padding: 0 10px;
    margin: 0 auto;
  }

  &__copyright {
    font-size: 1.4rem;
    text-align: center;
  }
}
</style>
