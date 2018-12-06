<template>
  <button
    :type="type"
    :disabled="disabled"
    class="c-button-submit"
    @click="clickButton"
  >
    <span class="c-button-submit__inner"><slot/></span>
  </button><!-- /.c-button-submit -->
</template>

<script>
export default {
  name: 'ButtonSubmit',
  props: {
    type: {
      type: String,
      default: 'submit'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickButton(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-button-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8b026;
  font-weight: bold;
  font-size: 1.8rem;
  color: #fff;
  width: 100%;
  padding: 10px;
  border: 2px solid #e8b026;
  text-align: center;
  border-radius: 4px;
  transition: opacity 0.3s;

  @include hover() {
    opacity: 0.7;
  }
}
</style>
