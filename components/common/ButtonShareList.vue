<template>
  <div class="c-button-share-list">
    <div class="c-button-share-list__inner">
      <slot/>
    </div><!-- /.c-button-share-list__inner -->
  </div><!-- /.c-button-share-list -->
</template>

<script>
export default {
  name: 'ButtonShareList'
}
</script>

<style lang="scss" scoped>
.c-button-share-list {
  margin: 32px 0;

  &__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -24px 0 0 -24px;

    > * {
      margin: 24px 0 0 24px;
    }
  }
}
</style>
