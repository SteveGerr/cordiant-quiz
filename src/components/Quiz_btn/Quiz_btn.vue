<template>
    <button @click="changeAnswer" class="quiz_btn">
        {{response_txt}}
    </button>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: "QuizBtn",
    props: ["response_txt", "correct", "answerIdx", "feedback", "feedback_ad"],

    computed: {
        ...mapState(["currentQuestionIndex", "questions"])
    },

    methods: {
        ...mapActions(["changeAnswer", "nextQuestion"]),
        changeAnswer() {
            // Отображаем окно с результатом по текущему вопросу
            // Ежели, ответ верный(содержит correct: true),
            if (this.correct) {
                // устанавливаем статус ответа на верный
                this.$store.dispatch("changeAnswer", 2)
                this.$store.dispatch("countRightAnswers")
            } else {
                this.$store.dispatch("changeAnswer", 0)
            }
            // Записываем индекс выбранного вопроса,
            // чтобы использовать его для отрисовки нужного окна результата по текущему вопросу
            this.$store.state.answerIdx = this.answerIdx

            // Скрываем компонент с вопросом
            this.$store.state.isShowQuestion = false
            // Открываем фидбек
            this.$store.state.isShowResultCurrentAnswer = true
        }
    }


}
</script>

<style lang="scss" scoped>
    .quiz_btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 456px;
        height: 82px;
        margin: 8px;
        background: #396b92;
        border: none;
        border-radius: 3px;
        font-size: 16px;
        font-weight: 700;
        color: #fff;

        &:hover {
            background:#7DBFFF;
            color: #004373;
        }
        &:active {
            color: #004373;
            background: #fff;
        }

        @media(max-width: 767px) {
            font-size: 14px;
        }
    }
</style>