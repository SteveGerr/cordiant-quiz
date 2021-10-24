<template>
      <footer :class="{'mobile-question': !isShowStartScreen, 'isShowTeam': isShowTotalResult}">
        <div>
            <QuizSocial v-if="isShowStartScreen" />
        </div>
        <div
            class="quiz__team"
            :class="{'isShowTeam': isShowTotalResult}"
        >
        <span>Команда проекта</span>
        <div class="quiz__team-tooltip">
            <div class="row">
                <div class="col">Креатив</div>
                <div class="col">Сергей Габер</div>
            </div>
            <div class="row">
                <div class="col">Редактор</div>
                <div class="col">Маша Пчёлкина</div>
            </div>
            <div class="row">
                <div class="col">Автор</div>
                <div class="col">Тоня Рубцова</div>
            </div>
            <div class="row">
                <div class="col">Дизайнер</div>
                <div class="col">Таня Репина</div>
            </div>
            <div class="row">
                <div class="col">Разработчик</div>
                <div class="col">Иван Шуняев</div>
            </div>
            <div class="row">
                <div class="col">Тестировщик</div>
                <div class="col">Ксения Старостина</div>
            </div>
            <div class="row">
                <div class="col">Аналитик</div>
                <div class="col">Виктория Нечаева</div>
            </div>
            <div class="row">
                <div class="col">Менеджер проекта</div>
                <div class="col">Яна Скрипичникова</div>
            </div>
            <div class="row">
                <div class="col">Менеджер по продажам</div>
                <div class="col">Галина Корецкая</div>
            </div>
        </div>
        </div>
        <div class="quiz__start-streen-co">
            <a href="http://lifehacker.ru" target="_blank" rel="noopener noreferrer">Лайфхакер</a> |
            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Сordiant</a>
            <span>© 2020</span>
        </div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'
import QuizSocial from '../Quiz_social/Quiz_social.vue'

export default {
    name: "QuizFooter",

    components: {
        QuizSocial
    },

    computed: {
        ...mapState(["isShowStartScreen", "isShowTotalResult"])
    }
}
</script>

<style lang="scss">
    footer {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
    min-height: 85px;
    padding: 0 123px 15px;
    z-index: 12;

    &.mobile-question {
        min-height: 85px;
    }

    &.isShowTeam {
        display: flex;
        justify-content: flex-end;

        .quiz__team {
            display: flex;
        }
    }

    @media (max-width: 768px) {
        position: static;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        min-height: 165px;
        padding: 0 18px 15px;
    }
    .quiz__team {
        position: relative;
        display: none;
        margin-right: 110px;
        width: 100%;
        max-width: 170px;
        font-size: 12px;
        font-weight: 700;
        color: #7DBFFF;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            color: #fff;
            .quiz__team-tooltip {
                display: flex;
            }
        }

        @media(max-width: 768px) {
            margin: 0 auto;
            justify-content: center;
            margin: 40px 0;
        }
    }
    .quiz__team-tooltip {
        display: none;
        flex-direction: column;
        width: 262px;
        padding: 12px;
        border-radius: 5px;
        font-family: 'Roboto', sans-serif;
        position: absolute;
        top: -215px;
        background: #fff;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.23);
        z-index: 20;

        .row {
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
        .col {
            display: flex;
            width: 50%;
            margin: 1px 10px;
            color:#979797;
        }
        .col:first-child {
            justify-content: flex-end;
            font-size: 12px;
            font-weight: 700;
            text-align: right;
            line-height: 15px;
        }
        .col:last-child {
            width: 100%;
            max-width: 115px;
            font-size: 12px;
            font-weight: 400;
            white-space: nowrap;
            line-height: 15px;
        }
    }
    .quiz__start-streen-co {
        span {
            margin-left: 5px;
        }
    }
}
</style>