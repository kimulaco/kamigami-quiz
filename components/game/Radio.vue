<template>
  <label class="c-radio">
    <input
      :name="name"
      :value="value"
      :disabled="disabled"
      type="radio"
      class="c-radio__input"
      @change="changeValueEvent"
    ><span class="c-radio__label"><slot/></span>
  </label><!-- /.c-radio -->
</template>

<script>
export default {
  name: 'Radio',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeValueEvent(event) {
      this.$emit('change', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-radio {
  display: flex;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s;

  &__label {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    background: url('../../assets/img/bg-body.png');
    padding: 10px;
    border: 1px solid #999;
    border-radius: 2px;
    cursor: pointer;

    @include media() {
      padding: 16px 10px;
    }

    @include hover() {
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    }
  }

  &__input {
    opacity: 0;
    position: absolute;
    left: -100vw;

    &[disabled] + .c-radio__label {
      cursor: default;

      @include hover() {
        box-shadow: none;
      }
    }

    &:focus + .c-radio__label {
      background: #fcfcfc;
    }

    &:checked + .c-radio__label {
      background: #bccfe8;
    }
  }
}
</style>
