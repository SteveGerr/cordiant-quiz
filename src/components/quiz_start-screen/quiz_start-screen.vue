<template>
  <div
    class="quiz__start-streen"
    :style="
        `background: url(${bg});
         background-position: center;
         background-repeat: no-repeat;
         background-size: cover;
        `
    "
    >
    <img class="quiz__start-streen-img_mob" src="../../assets/quiz__main-bg.png" alt="">
    <main>
        <div class="quiz__start-streen-text">
            <p>Узнаете ли вы Россию</p>
            <p>По дорогам?</p>
            <div class="quiz__start-streen-hr"></div>
            <div class="quiz__start-streen-hr"></div>
            <p class="quiz__start-streen-description" v-html="text"></p>
            <button class="quiz__start-streen-btn" @click="startQuiz">Пройти тест!</button>
        </div>
    </main>
  </div>
</template>

<script>
export default {
    name: "QuizStartScreen",

    components: {
    },

    computed: {
        bg() {
            return this.$store.state.questions[0].questionBackground
        },
        text() {
            return this.$store.state.questions[0].text
        }
    },

    methods: {
        startQuiz() {
            this.$store.state.isShowQuestion = true
            this.$store.state.isShowStartScreen = false
        }
    }
}
</script>

<style lang="scss">

    main {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        margin-top: 75px;
    }
    .quiz__start-streen {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 100vh;
        max-height: 655px;
    }

    .quiz__start-streen-hr {
        width: 100%;
        min-height: 2px;
        margin: 2px 0;
        background: #fff;
    }
    .quiz__start-streen-text {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        max-width: 632px;
        height: 100vh;
        max-height: 480px;
        border: 2px solid #fff;
        background: #004373;

        p, button {
            margin-left: 100px;
        }

        p {
            color: #fff;
        }

        p:first-child {
            margin-top: 33px;
            font-size: 34px;
            font-family: 'Play', sans-serif;

            @media(max-width: 767px) {
                font-size: 28px;
            }
        }

        p:nth-child(2) {
            margin-bottom: 30px;
            font-size: 50px;
            font-family: 'Play', sans-serif;
            font-weight: 700;
            text-transform: uppercase;

            @media(max-width: 767px) {
                font-size: 40px;
            }

        }

        a {
            font-size: 16px;
            font-weight: 700;
            color: #7DBFFF;
            cursor: pointer;
        }
        .quiz__start-streen-description {
            max-width: 430px;
            margin: 40px 0 40px 100px;

            @media(max-width: 767px) {
                padding: 0 15px;
            }
        }
        .quiz__start-streen-btn {
            width: 250px;
            height: 55px;
            min-height: 55px;
            margin-bottom: 70px;
            border: none;
            border-radius: 3px;
            background: #7DBFFF;
            font-family: 'Open Sans', sans-serif;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            color: #004373;

            &:hover {
                background: #fff;
            }
        }
    }
    .quiz__start-streen-co {
        color: #7DBFFF;
        a {
            font-size: 12px;
            font-weight: 700;
            color: #7DBFFF;
            cursor: pointer;
        }
        span {
            font-size: 12px;
            color: #fff;
        }
    }
    .quiz__start-streen-img_mob {
        display: none;
    }
    // Mobile
    @media (max-width: 767px) {
        .quiz__start-streen-img_mob {
            display: flex;
            width: 100%;
        }
        .quiz__start-streen-text,
        .quiz__start-streen {
            max-height: 100%;
        }
        .quiz__start-streen {
            height: auto;
        }
        .quiz__start-streen-text {
            max-width: 100%;
            height: auto;
            align-items: center;

            p, button {
                margin-left: 0;
            }

            .quiz__start-streen-description {
                margin: 40px 0;
            }
        }
        main {
            margin-top: 0;
        }
        footer {
            background: #00508A;
        }
    }
</style>