<template>
    <div class="quiz__counter-questions">
        <span class="quiz__counter-questions-current">{{currentQuestionIndex}}</span>
        /
        <span class="quiz__counter-questions-total">{{totalQuestions}}</span>

    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "QuizCounterQuestions",

    computed: {
        ...mapState(["totalQuestions", "currentQuestionIndex"])
    }
}
</script>

<style lang="scss" scoped>
    .quiz__counter-questions {
        width: 100%;
        max-width: 456px;
        font-size: 16px;
        color: #fff;
    }

</style>