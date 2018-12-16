<template>
  <div
    id="game"
    class="c-game"
  >
    <box>
      <paragraph><a
        href="https://ja.wikipedia.org/wiki/%E7%A5%9E%E3%81%AE%E4%B8%80%E8%A6%A7"
        target="_blank"
      >神の一覧 - Wikipedia</a>の情報を元に作成した<strong>ジョーククイズサイト</strong>。</paragraph>
    </box>

    <form
      class="c-game__form"
      @submit="submitForm"
    >
      <p class="c-game__lead"><b>各問の説明文がどの神のものか答えるのです。</b></p>

      <quiz
        v-for="(selfQuiz, i) in quiz"
        v-show="i <= answeredLeng"
        :id="`quiz-${indexToSerialNumber(i + 1)}`"
        :name="`quiz-${indexToSerialNumber(i + 1)}`"
        :index="i + 1"
        :title="selfQuiz.quiz"
        :quiz="selfQuiz.gods"
        :answer="selfQuiz.answer"
        :is-answered="isSubmited"
        :key="i"
        @answer="answer($event, i, `quiz-${indexToSerialNumber(i + 2)}`)"
      />

      <answer-counter
        :title="isSubmited ? '正解' : '問'"
        :current="isSubmited ? correctLeng : currentAnswerIndex"
        :max="quizLeng"
      />

      <div
        v-if="isAllAnswered"
        id="submit"
        class="c-game__submit"
      >
        <button-submit>回答する</button-submit>
      </div><!-- /.c-game__submit -->
    </form><!-- /.c-game__form -->

    <button-share-twitter/>
  </div><!-- /.c-game -->
</template>

<script>
import Paragraph from '@/components/common/Paragraph.vue'
import Box from '@/components/common/Box.vue'
import ButtonShareTwitter from '@/components/common/ButtonShareTwitter.vue'
import ButtonSubmit from '@/components/game/ButtonSubmit.vue'
import Quiz from '@/components/game/Quiz.vue'
import AnswerCounter from '@/components/game/AnswerCounter.vue'
import smoothScroll from '@/assets/js/SmoothScroll.js'
import util from '@/assets/js/Utility.js'
import gods from '@/assets/json/god.json'

export default {
  name: 'PageGame',
  components: {
    Paragraph,
    ButtonShareTwitter,
    Box,
    ButtonSubmit,
    Quiz,
    AnswerCounter
  },
  data() {
    return {
      quiz: [],
      quizLeng: 10,
      answerLeng: 4,
      answeredLeng: 0,
      correctLeng: 0,
      gods: gods,
      godsLeng: gods.length,
      isSubmited: false
    }
  },
  computed: {
    isAllAnswered() {
      return this.answeredLeng >= this.quizLeng
    },
    currentAnswerIndex() {
      let index = this.answeredLeng + 1

      if (index > this.quizLeng) {
        return this.quizLeng
      }

      return index
    }
  },
  created() {
    this.initializeQuiz()
  },
  methods: {
    initializeQuiz() {
      this.quiz = []

      for (let i = 0; i < this.quizLeng; i++) {
        let selfQuiz = this.selectGod(this.answerLeng)
        let selfAnswer = selfQuiz[util.random(0, this.answerLeng - 1)]

        this.quiz.push({
          quiz: selfAnswer.description,
          answer: selfAnswer.name,
          gods: selfQuiz,
          isCorrect: false
        })
      }
    },
    selectGod(leng) {
      let selectedGods = []

      for (let i = 0; i < leng; i++) {
        let godIndex = util.random(0, this.godsLeng - 1)

        selectedGods.push(this.gods[godIndex])
        this.gods.splice(godIndex, 1)

        this.godsLeng = this.gods.length
      }

      return selectedGods
    },
    indexToSerialNumber(index) {
      return util.paddingZero(index, 2)
    },
    answer(event, index, target) {
      let selfQuiz = this.quiz[index]

      if (selfQuiz.answer === event.target.value) {
        if (!selfQuiz.isCorrect) {
          this.correctLeng++
        }

        selfQuiz.isCorrect = true
      } else {
        if (selfQuiz.isCorrect) {
          this.correctLeng--
        }

        selfQuiz.isCorrect = false
      }

      if (this.answeredLeng <= index) {
        this.answeredLeng = index + 1
      }

      if (target) {
        let targetId = '#' + target

        if (target === 'quiz-11') {
          targetId = '#submit'
        }

        setTimeout(() => {
          smoothScroll.scrollTo(targetId)
        }, 100)
      }
    },
    rendorIsCorrect(selfQuiz) {
      if (selfQuiz.isCorrect) {
        return '正解'
      }

      return '不正解'
    },
    submitForm(event) {
      event.preventDefault()

      this.isSubmited = true

      smoothScroll.scrollTop()
    }
  }
}
</script>

<style lang="scss">
.c-game {
  &__form {
    margin-top: 48px;
    border-top: 1px solid #999;
  }

  &__lead {
    font-size: 2rem;
    margin: 48px 0;

    b {
      font-weight: normal;
    }
  }

  &__submit {
    margin: 40px 0 0;
  }
}
</style>
