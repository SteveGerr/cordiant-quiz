<template>
    <div class="quiz__feedback">
        <QuizCounterQuestions />
        <h3>{{ feedback }}</h3>
        <p class="quiz__feedback-ad" v-if="feedback_ad" v-html="feedback_ad"></p>
        <button
            class="quiz__feedback-btn"
            @click="nextQuestion"
        >
        Далее
        </button>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import QuizCounterQuestions from '../Quiz_counter-questions/Quiz_counter-questions'

export default {
    name: "QuizFeedback",

    components: {
        QuizCounterQuestions
    },

    computed: {
        ...mapState(["questions", "currentQuestionIndex", "answerIdx"]),

        feedback() {
            return this.questions[this.currentQuestionIndex].responses[this.answerIdx].feedback
        },
        feedback_ad() {
            return this.questions[this.currentQuestionIndex].responses[this.answerIdx].feedback_ad
        }
    },

    methods: {
        // Показываем окно с вопросом
        nextQuestion() {
            if (this.currentQuestionIndex < this.questions.length) {
                // Устанавливаем эмоцию в нейтраль
                this.$store.dispatch("changeAnswer", 1)
                // увеличиваем индекс текущего вопроса на 1
                this.$store.dispatch("nextQuestion")
                // открываем окно с вопросом
                this.$store.state.isShowQuestion = true
                this.$store.state.isShowResultCurrentAnswer = false
            }
            if (this.currentQuestionIndex === 7) {
                // Скрываем компонент feedback
                this.$store.state.isShowResultCurrentAnswer = false
                this.$store.state.isShowTotalResult = true
            }
        }
    }


}
</script>

<style lang="scss" scoped>
    .quiz__feedback {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        max-width: 640px;
        background:#004373;
        z-index: 11;

        h3 {
            margin-bottom: 25px;
            margin-left: 95px;
            font-size: 18px;
            color: #fff;
        }

        p {
            width: 100%;
            max-width: 370px;
            margin-left: 95px;
            font-size: 16px;
            font-weight: 600;
            color: #fff;
            line-height: 24px;
        }

        @media(max-width: 768px) {
            align-items: center;
            max-width: 100%;
            padding: 32px 35px;

            h3, p {
                margin-left: 0;
            }
            p {
                max-width: 100%;
            }
        }
    }
    .quiz__feedback-btn {
        width: 100%;
        max-width: 250px;
        height: 56px;
        margin-left: 95px;
        background: #7DBFFF;
        font-size: 16px;
        font-weight: 700;
        color: #00508A;
        border: none;
        border-radius: 3px;
        appearance: none;

        @media(max-width: 768px) {
            margin-left: 0;
        }
    }
    .quiz__feedback-btn:active {
        transform: scale(.9);
    }
    .quiz__feedback-ad {
        margin-bottom: 40px;
        margin-left: 95px;
        a {
            font-size: 16px;
            font-weight: 600;
            color: #7DBFFF;
            cursor: pointer;
        }

        @media(max-width: 768px) {
            margin-left: 0;
        }
    }
    .quiz__counter-questions {
        margin-bottom: 40px;
        max-width: 456px;
        margin-left: 95px;
    }

</style>