<template>
<!--  :style="{background: `url(${require('../../assets/quiz__main-bg.png')})` }" -->
  <div
    class="quiz-container"

  >
  <QuizHeader />
  <QuizStartScreen v-if="isShowStartScreen" />
  <img v-if="!isShowTotalResult && !isShowStartScreen" class="quiz-container__bg" :src="`${bgl}`" alt="">
  <QuizSalon v-if="!isShowTotalResult && ! isShowStartScreen" />
  <QuizQuestion v-if="isShowQuestion && !isShowTotalResult && !isShowStartScreen" />
  <QuizFeedback v-if="isShowResultCurrentAnswer" />
  <QuizTotalRezult v-if="isShowTotalResult" />
  <QuizFooter />
  </div>
</template>

<script>
import QuizSalon from '../Quiz_salon/Quiz_salon.vue';
import QuizQuestion from '../Quiz_question/Quiz_question.vue'
import QuizFeedback from '../Quiz_feedback/Quiz_feedback.vue'
import QuizTotalRezult from '../Quiz_total_result/Quiz_total_result.vue'
import QuizHeader from '../Quiz_header/Quiz_header.vue'
import QuizFooter from '../Quiz_footer/Quiz_footer.vue'
import { mapState } from 'vuex';
import QuizStartScreen from '../quiz_start-screen/quiz_start-screen.vue';

export default {
  name: "QuizContainer",

  components: {
    QuizSalon,
    QuizQuestion,
    QuizFeedback,
    QuizTotalRezult,
    QuizStartScreen,
    QuizHeader,
    QuizFooter
  },

  computed: {
    ...mapState(["questions", "currentQuestionIndex", "isShowStartScreen", "isShowQuestion", "isShowResultCurrentAnswer","isShowTotalResult"]),
    bgl() {
      switch (this.$store.state.currentQuestionIndex) {

        case 0:
          return this.$store.state.questions[0].questionBackground

        // Ежели, индекс текущего вопроса 1
        case 1:
          // вернуть фоновую картинку первого вопроса
          return this.$store.state.questions[1].questionBackground

        case 2:
          return this.$store.state.questions[2].questionBackground

        case 3:
          return this.$store.state.questions[3].questionBackground

        case 4:
          return this.$store.state.questions[4].questionBackground

        case 5:
          return this.$store.state.questions[5].questionBackground

        case 6:
          return this.$store.state.questions[6].questionBackground

        default:
          break;

      }
      return ""
    },
    url() {
      return require(`'${this.$store.state.url}'`)
    },
    questions() {
      return this.$store.state.questions
    },

  },

  methods: {
    // Go to next question
    next() {
      this.$store.state.currentQuestionIndex++
      // this.questionIndex++;
    },
    // Go to previous question
    prev() {
      this.$store.state.currentQuestionIndex--;
    },
    // Return "true" count in userResponses
    score() {
      return this.$store.state.answers.filter((val) => val).length;
    }
  }

}
</script>

<style lang="scss">
  .quiz-container {
    position: relative;
    display: flex;
    width: 100%;
    max-width: 1280px;
    /* min-width: 992px; */
    min-height: 655px;
    margin: 0 auto;
    overflow: hidden;
    -webkit-box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.16);
    box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.16);

    @media(max-width: 768px) {
      position: static;
      flex-direction: column;
      overflow: auto;

      background: #004373!important;
      box-shadow: none;
    }
  }
  .quiz-container__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: -20%;
    width: 100%;
    max-height: 640px;
    object-fit: cover;
    z-index: 10;

    @media(max-width: 768px) {
      position: static;
    }
  }
</style>