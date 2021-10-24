<template>
  <div class="quiz-total-result">
    <section class="quiz-total-result__img">
        <img :src="`${resultImage}`" alt="result image">
        <img :src="`${resultImageMob}`" alt="result image">
    </section>
    <section class="quiz-total-result__right-block">
        <h2>{{ heading }}</h2>
        <p class="quiz-total-result__characteristic">{{ characteristic }}</p>
        <div class="quiz-total-result__social">
            <button
                @click="quizRepeat"
                class="quiz-total-result__restart">
                <img src="../../assets/quiz__repeat-btn.svg" alt="repeat button">
                <span>Пройти еще раз</span>
            </button>
            <!-- Social -->
            <QuizSocial />
        </div>
        <div class="quiz-total-result__hr"></div>
        <p>
            <b>Чтобы любая дорога была для вас безопасной</b> — следите за качеством резины и переобувайтесь вовремя.
            С зимними шинами <b>Cordiant</b> ваша машина будет уверенно выезжать из снежных заносов и стабильно вести
            себя на обледенелых трассах. Прямо сейчас комплект зимних шин <b>Cordiant</b> можно купить со скидкой 15%!
            Просто введите промокод <span class="quiz-total-result__CORDIHACKER">CORDIHACKER</span> при покупке шин на <a href="http://koleso.ru" target="_blank" rel="noopener noreferrer"></a>.
        </p>

        <p class="quiz-total-result__promocode-date">Срок действия промокода до <span>{{ quiz_promocode_date }}</span></p>
        <button class="quiz-total-result__btn-buy">
            Купить шины со скидкой
        </button>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import QuizSocial from '../Quiz_social/Quiz_social.vue'
export default {
    name: "QuizTotalRezult",

    components: {
        QuizSocial
    },

    computed: {
        ...mapState(["quiz_promocode_date"]),

        resultImage() {
            if (this.$store.state.totalRightAnswers > 3) {
                return this.$store.state.firstResultImg
            }
            if (this.$store.state.totalRightAnswers >= 3 && this.$store.state.totalRightAnswers <= 4) {
                return this.$store.state.secondResultImg
            }
            if (this.$store.state.totalRightAnswers < 3) {
                return this.$store.state.thirdResultImg
            }

            return ""
        },

        resultImageMob() {
            if (this.$store.state.totalRightAnswers > 3) {
                return this.$store.state.firstResultImgMob
            }
            if (this.$store.state.totalRightAnswers >= 3 && this.$store.state.totalRightAnswers <= 4) {
                return this.$store.state.secondResultImgMob
            }
            if (this.$store.state.totalRightAnswers < 3) {
                return this.$store.state.thirdResultImgMob
            }

            return ""
        },

        heading() {
            if (this.$store.state.totalRightAnswers > 5) {
                return this.$store.state.firstResultHeading
            }
            if (this.$store.state.totalRightAnswers >= 3 && this.$store.state.totalRightAnswers <= 4) {
                return this.$store.state.secondResultHeading
            }
            if (this.$store.state.totalRightAnswers < 3) {
                return this.$store.state.thirdResultHeading
            }

            return ""
        },

        characteristic() {
            if (this.$store.state.totalRightAnswers > 3) {
                return this.$store.state.firstResultCharacteristic
            }
            if (this.$store.state.totalRightAnswers >= 3 && this.$store.state.totalRightAnswers <= 4) {
                return this.$store.state.secondResultCharacteristic
            }
            if (this.$store.state.totalRightAnswers < 3) {
                return this.$store.state.thirdResultCharacteristic
            }

            return ""
        },

    },

    methods: {
        quizRepeat() {
            this.$store.state.totalRightAnswers = 0
            this.$store.state.currentQuestionIndex = 1
            this.$store.state.isShowTotalResult = false
            this.$store.state.isShowQuestion = true
        }

    }

}
</script>

<style lang="scss" scoped>
    .quiz-total-result {
        display: flex;
        width: 100%;

        h2 {
            color: #fff;
            padding: 0 10px;
            margin-top: 100px;

            @media(max-width: 768px) {
                margin-top: 55px;
            }
        }

        &__characteristic {
            margin-bottom: 25px;
            padding: 0 10px;
            font-weight: 700;
        }
        @media(max-width: 768px) {
            flex-direction: column;
        }
    }
    .quiz-total-result__img {
        display: flex;
        width: 100%;
        max-width: 645px;

        img {
            width: 100%;
            object-fit: cover;

            @media(max-width: 768px) {
                min-width: 100%;
            }
        }

        img:nth-child(2) {
            display: none;
        }

        @media(max-width: 768px) {
            img:first-child {
                display: none;
            }
            img:nth-child(2) {
                display: block;
            }
            max-width: 100%;
        }
    }
    .quiz-total-result__hr {
        width: 100%;
        height: 2px;
        background: #fff;
    }
    .quiz-total-result__CORDIHACKER {
        padding: 2px;
        font-size: 16px;
        font-weight: 700;
        color: #A4EFEC;
        text-transform: uppercase;
        background: #002B57;
        border-radius: 3px;
    }
    .quiz-total-result__right-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 100px;

        p {
            width: 100%;
            max-width: 430px;
            font-size: 18px;
            line-height: 26px;
            color: #fff;
            padding: 0 10px;
        }

        @media(max-width: 768px) {
            padding: 0 18px;
            margin-bottom: 0;
        }
    }
    .quiz-total-result__hr {
        margin: 25px 0;
    }
    .quiz-total-result__restart {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        margin-right: 50px;
        background: transparent;
        border: none;
        cursor: pointer;

        img {
            width: 40px;
            height: 40px;
            margin-right: 16px;
        }
        span {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: 700;
            color: #7DBFFF;
        }

        @media(max-width: 768px) {
            flex-wrap: wrap-reverse;
            margin-right: 0;
        }
    }
    .quiz-total-result__btn-buy {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 282px;
        height: 56px;
        margin: 8px;
        background:#7DBFFF;
        font-size: 16px;
        font-weight: 700;
        color: #00508A;
        border: none;
        border-radius: 3px;
        box-shadow: 0px 4px 52px rgba(0, 39, 66, 0.9);
        cursor: pointer;
    }
    .quiz-total-result__promocode-date {
        margin: 28px 0 43px 0;
    }
</style>