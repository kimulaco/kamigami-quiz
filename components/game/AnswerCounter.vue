<template>
  <div
    :class="{
      'c-answer-counter--answerd': isAnswerd
    }"
    class="c-answer-counter"
  >
    <h2
      v-if="title"
      class="c-answer-counter__heading"
    >{{ title }}</h2>
    <p class="c-answer-counter__counter">
      <span class="c-answer-counter__current">{{ current }}</span>
      <span class="c-answer-counter__mark">/</span>
      <span class="c-answer-counter__max">{{ max }}</span>
    </p><!-- /.c-answer-counter__counter -->
  </div><!-- /.c-answer-counter -->
</template>

<script>
export default {
  name: 'AnswerCounter',
  props: {
    title: {
      type: String,
      default: ''
    },
    current: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 0
    },
    isAnswerd: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.c-answer-counter {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(#fff, 0.95);
  width: 100%;
  padding: 16px 0;
  position: fixed;
  right: 0;
  bottom: 0;
  box-shadow: -2px 0 5px rgba(#000, 0.2);

  &__counter {
    margin: 0;
  }

  &__heading {
    font-weight: normal;
    font-size: 16px;
    margin: 0 16px 0 0;
  }

  &.c-answer-counter--answerd {
    font-weight: bold;
    background: rgba(#e6f5e6, 0.95);
  }
}
</style>
