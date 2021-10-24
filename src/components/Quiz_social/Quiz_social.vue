<template>
    <div class="quiz-total-result__social-icons">
        <a class="quiz__social-icon" href="/" target="_blank" rel="noopener noreferrer">
            <img src="../../assets/social/twitter-icon.svg" alt="twitter">
        </a>
        <a class="quiz__social-icon" href="/" target="_blank" rel="noopener noreferrer">
            <img src="../../assets/social/vk-icon.svg" alt="vk">
        </a>
        <a class="quiz__social-icon" href="/" target="_blank" rel="noopener noreferrer">
            <img src="../../assets/social/fb-icon.svg" alt="fb">
        </a>
    </div>
</template>

<script>
export default {
    name: "QuizSocial",
}
</script>

<style lang="scss">
    .quiz-total-result__social {
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }
    .quiz-total-result__social-icons {
        display: flex;
    }
    .quiz__social-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        margin: 5px;
        border-radius: 50%;
        background: #7DBFFF;

        &:hover {
            background: #fff;
        }
    }
</style>