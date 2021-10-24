<template>
  <div class="quiz_question">
    <QuizCounterQuestions />
    <h2>Где эта дорога?</h2>
    <QuizBtn
        v-for="(q, i) in questions[currentQuestionIndex].responses"
        :answerIdx="i"
        :correct="q.correct"
        :response_txt="q.text"
        :key="i"
        :feedback="q.feedback"
        :feedback_ad="q.feedback_ad"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import QuizBtn from '../Quiz_btn/Quiz_btn.vue'
import QuizCounterQuestions from '../Quiz_counter-questions/Quiz_counter-questions'

export default {
    name: "QuizQuestion",

    components: {
        QuizBtn,
        QuizCounterQuestions
    },

    methods: {
        ...mapActions(["changeAnswer"]),

        changeAnswer(e) {
            this.$store.dispatch("changeAnswer", e)
        }
    },

    computed: {
        ...mapState(["questions", "currentQuestionIndex", "isShowQuestion", "totalRightAnswers"])
    }

}
</script>

<style lang="scss" scoped>
    .quiz_question {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 640px;
        padding: 0 10px;
        background:#004373;
        z-index: 11;

        h2 {
            color: aliceblue;
        }

        @media(max-width: 768px) {
            max-width: 100%;
            padding: 0 18px;

            h2 {
                font-size: 37px;
            }

            &~footer {
                background: #004373;
            }
        }
    }
    .quiz__counter-questions {
        margin-bottom: 40px;

        @media(max-width: 768px) {
            margin-top: 25px;
            margin-bottom: 15px;
            padding-left: 0;
        }
    }
</style>