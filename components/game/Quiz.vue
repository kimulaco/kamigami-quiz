<template>
  <section
    :id="id"
    :class="{
      'c-quiz--correct': state === 'correct',
      'c-quiz--not-correct': state === 'not-correct'
    }"
    class="c-quiz"
  >
    <h2 class="c-quiz__title">
      <span class="c-quiz__title-index">【問{{ index }}】</span>
      <span class="c-quiz__title-inner">{{ title }}</span>
    </h2><!-- /.c-quiz__title -->

    <ul class="c-quiz__list">
      <li
        v-for="item in quiz"
        :key="item.id"
        class="c-quiz__item"
      >
        <radio
          :value="item.name"
          :name="name"
          :disabled="isAnswered"
          class="c-quiz__radio"
          @change="changeRadio"
        >{{ item.name }}</radio>
      </li><!-- /.c-quiz__item -->
    </ul><!-- /.c-quiz__list -->


    <box
      v-if="isAnswered"
      :type="state"
      class="c-quiz__answer"
    >
      <p class="c-quiz__answer-text"><strong>A. {{ answer }}</strong></p>
    </box>
  </section><!-- /.c-quiz -->
</template>

<script>
import Box from '@/components/common/Box.vue'
import Radio from '@/components/game/Radio.vue'

export default {
  name: 'Quiz',
  components: {
    Box,
    Radio
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    quiz: {
      type: Array,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    isAnswered: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedAnswer: ''
    }
  },
  computed: {
    state() {
      if (!this.isAnswered) {
        return
      }

      if (this.selectedAnswer === this.answer) {
        return 'correct'
      } else {
        return 'not-correct'
      }
    },
    stateText() {
      if (!this.isAnswered) {
        return
      }

      if (this.selectedAnswer === this.answer) {
        return '正解'
      } else {
        return '不正解'
      }
    }
  },
  methods: {
    changeRadio(event) {
      this.selectedAnswer = event.target.value

      this.$emit('answer', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-quiz {
  $space-radio: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 32px;
  border-bottom: 1px solid #ccc;
  margin: 0;

  @include media() {
    padding: 0 0 64px;
  }

  &__title {
    display: flex;
    font-size: 1.8rem;
    font-weight: normal;
    margin: 0 0 24px;
    line-height: 1.5;

    @include media() {
      font-size: 2rem;
    }

    &-index {
      width: 80px;
      min-width: 80px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: -#{$space-radio} 0 0 -#{$space-radio};
    list-style: none;
  }

  &__item {
    display: flex;
    flex: 0 1 calc(100% - #{$space-radio});
    width: calc(100% - #{$space-radio});
    max-width: calc(100% - #{$space-radio});
    margin: #{$space-radio} 0 0 #{$space-radio};

    @include media() {
      flex: 0 1 calc(50% - #{$space-radio});
      width: calc(50% - #{$space-radio});
      max-width: calc(50% - #{$space-radio});
      margin: #{$space-radio} 0 0 #{$space-radio};
    }
  }

  &__answer {
    margin: 24px 0 0;
  }

  &__answer-text {
    margin: 0;
  }

  + .c-quiz {
    margin: 32px 0 0;

    @include media() {
      margin: 64px 0 0;
    }
  }
}
</style>
