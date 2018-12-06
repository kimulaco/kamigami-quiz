<template>
  <div
    :class="typeClassName"
    class="c-box"
  >
    <slot/>
  </div><!-- /.c-box -->
</template>

<script>
export default {
  name: 'Box',
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  computed: {
    typeClassName() {
      if (!this.type) {
        return ''
      }

      return `c-box--${this.type}`
    }
  }
}
</script>

<style lang="scss" scoped>
.c-box {
  padding: 10px;
  margin: 0 0 32px;
  border: 1px solid #999;
  border-radius: 2px;

  @include reset-child-margin();

  &.c-box--correct {
    background: #e6f5e6;
    border-color: #35c135;
  }

  &.c-box--not-correct {
    background: #ffe5e1;
    border-color: #d85138;
  }
}
</style>
