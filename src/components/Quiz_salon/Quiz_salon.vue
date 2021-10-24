<template>
  <div class="quiz-salon">
        <div class="quiz-salon__mirror">
            <img :src="`${emotionMirror}`" alt="mirror">
        </div>
        <div
            class="quiz-salon__front-panel"
            :style="
            `background: url(${imgSalonPanel});
            background-position: 0% center;
            background-repeat: no-repeat;
            background-size: cover;
            `
            "
        >
        </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "QuizSalon",

    data() {
        return {

        }
    },

    methods: {
    },

    computed: {
        ...mapState(["answerStatus", "imgSalonPanel"]),
        // Меняем эмоцию водителя в зависимости от правильности ответа
        answStatus() {
            return this.answerStatus
        },
        emotionMirror() {
            switch (this.answStatus) {
                case 0:
                    return this.$store.state.imgWrong
                case 1:
                    return this.$store.state.imgNormal
                case 2:
                    return this.$store.state.imgRight
                default:
                    break;
            }
            return ""
        }
    }

}
</script>

<style lang="scss" scope>
    .quiz-salon {
        width: 100%;
        max-width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 11;
    }
    .quiz-salon__front-panel {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        max-width: 640px;
        height: 425px;

        @media (max-width: 768px) {
            display: none;
        }
    }
    .quiz-salon__front-panel-img {
        width: 100%;
        object-fit: contain;
    }
    .quiz-salon__mirror {
        display: flex;
        justify-content: flex-end;
        margin-right: 10%;

        @media (max-width: 768px) {
            position: absolute;
            top: 0;
            margin-right: 0;
        }
        @media (max-width: 768px) and (min-width: 401px) {
            left: calc(50% - 115px);
        }

        @media (max-width: 400px) {
            left: calc(50% - 80px);;
        }

    }
    .quiz-salon__mirror img {
        @media (max-width: 768px) and (min-width: 401px) {
            max-width: 230px;
        }

        @media (max-width: 400px) {
            max-width: 160px;
        }
    }
</style>