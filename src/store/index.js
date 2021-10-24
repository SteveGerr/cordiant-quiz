import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bgLink: require('../assets/quiz__main-bg.png'),

    url: '../assets/quiz__main-bg.png',
    /** Нормальное состояние в зеркале */
    imgNormal: require("../assets/quiz__mirror_normal.png"),
    /** Состояние - правильно, в зеркале */
    imgRight: require("../assets/quiz__mirror_right.png"),
    /** Состояние - неверно, в зеркале */
    imgWrong: require("../assets/quiz__mirror_wrong.png"),

    imgSalonPanel: require("../assets/quiz__salon.png"),

    /**  */
    firstResultImg: require("../assets/quiz__bg-results/quiz__bg-result-1.png"),
    secondResultImg: require("../assets/quiz__bg-results/quiz__bg-result-2.png"),
    thirdResultImg: require("../assets/quiz__bg-results/quiz__bg-result-3.png"),

    firstResultImgMob: require("../assets/quiz__bg-results/quiz__bg-result-1_mob.png"),
    secondResultImgMob: require("../assets/quiz__bg-results/quiz__bg-result-2_mob.png"),
    thirdResultImgMob: require("../assets/quiz__bg-results/quiz__bg-result-3_mob.png"),


    /** Вопросы */
    questions: [
      /** 0 */
      {
        text: `Мы составили этот тест вместе с производителем шин
        <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant</a>,
        чтобы вы проверили, сможете ли отличить российские дороги от остальных.
        Активируйте внутреннего Шерлока и вперёд! Пройдёте тест до конца —
        получите скидку 15% на зимнюю резину.
        `,
        questionBackground: require('../assets/quiz__main-bg.png')
      },
      /** 1 */
      {
        responses: [
          {
            text: 'В Москве! Коммунальные службы, как всегда, тормозят',
            correct: false,
            feedback: `Не в этот раз! На фото — Нью-Йорк.`,
          },
          {
            text: 'Судя по снегопаду, где-то в центре Хельсинки',
            correct: false,
            feedback: `Хорошая попытка. Но нет, это заметает Нью-Йорк.`
          },
          {
            text: ' Улицы зимнего Нью-Йорка я всегда узнаю',
            correct: true,
            feedback: `В яблочко!`
          },
        ],
        questionBackground: require('../assets/quiz__bg-questions/quiz__question-bg-1.jpg')

      },
      /** 2 */
      {
        responses: [
          {
            text: 'Это же Русский мост во Владивостоке!',
            correct: true,
            feedback: `Дело говорите! Он и есть`,
            feedback_ad: `Безопасно ездить по зимним дорогам в городе помогут шины <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant Winter Drive 2</a>.
            Они идеальны, когда на поверхности улиц то снег, то каша, то мокрый лёд. Ловите
            шанс: сейчас эти шины можно купить со скидкой 15%. Ищите промокод в конце теста.`
          },
          {
            text: 'Судя по снегопаду, где-то в центре Хельсинки',
            correct: false,
            feedback: `Хорошая попытка. Но нет, это заметает Нью-Йорк.`,
            feedback_ad: `Безопасно ездить по зимним дорогам в городе помогут шины <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant Winter Drive 2</a>.
            Они идеальны, когда на поверхности улиц то снег, то каша, то мокрый лёд. Ловите
            шанс: сейчас эти шины можно купить со скидкой 15%. Ищите промокод в конце теста.`
          },
          {
            text: 'Это мост через Иртыш в городе Семей. Фото сделано в Казахстане!',
            correct: false,
            feedback: `Похоже! Но нет — это Владивосток`,
            feedback_ad: `Безопасно ездить по зимним дорогам в городе помогут шины <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant Winter Drive 2</a>.
            Они идеальны, когда на поверхности улиц то снег, то каша, то мокрый лёд. Ловите
            шанс: сейчас эти шины можно купить со скидкой 15%. Ищите промокод в конце теста.`
          },
        ],
        questionBackground: require('../assets/quiz__bg-questions/quiz__question-bg-2.jpg')
      },
      /** 3 */
      {
        responses: [
          {
            text: 'Типичная Сибирь. Дорога где-нибудь в Алтайском крае',
            correct: true,
            feedback: `Было сложно, но вы угадали!`,
            feedback_ad: `Чтобы маневрировать по снежным заносам за городом, выбирайте резину
            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant
            Snow Cross</a>. Эти шины легко выедут из утрамбованной колеи и подарят вам ощущение
            полного контроля`
          },
          {
            text: 'Это итальянские Апеннины зимой',
            correct: false,
            feedback: `Далеко! На фото — Алтай.`,
            feedback_ad: `Чтобы маневрировать по снежным заносам за городом, выбирайте резину
            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant
            Snow Cross</a>. Эти шины легко выедут из утрамбованной колеи и подарят вам ощущение
            полного контроля`
          },
          {
            text: 'Так выглядит ландшафт Аляски. Мой ответ — США',
            correct: false,
            feedback: `Эх, не угадали. Это Алтай.`,
            feedback_ad: `Чтобы маневрировать по снежным заносам за городом, выбирайте резину
            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant
            Snow Cross</a>. Эти шины легко выедут из утрамбованной колеи и подарят вам ощущение
            полного контроля`
          },
        ],
        questionBackground: require('../assets/quiz__bg-questions/quiz__question-bg-3.jpg')
      },
      /** 4 */
      {
        responses: [
          {
            text: 'В Карачаево-Черкесии! Это точно зимний Домбай',
            correct: false,
            feedback: `Домбай чудесен, но это Австрия`,
            feedback_ad: ``
          },
          {
            text: 'Кажется, это панорамная дорога Гросглоккнер в Австрии',
            correct: true,
            feedback: `Вы угадали`,
            feedback_ad: ``
          },
          {
            text: 'В швейцарских Альпах! Это дорога из Сент-Морица в Базель',
            correct: false,
            feedback: `Там тоже красиво, но это Австрия.`,
            feedback_ad: ``
          },
        ],
        questionBackground: require('../assets/quiz__bg-questions/quiz__question-bg-4.jpg')
      },
      /** 5 */
      {
        responses: [
          {
            text: 'В Стране Великих озёр — Канаде. Фото явно сделано на водах Гурона',
            correct: false,
            feedback: `Мимо! Это воды Байкала.`,
            feedback_ad: `Чтобы чувствовать себя уверенно даже на голом льду, используйте шины
            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant
            Snow Cross 2</a>. Благодаря COR-технологиям шипы проникают глубоко в лёд и
            увеличивают сцепление на 10%, а динамику разгона — на 20%!`
          },
          {
            text: 'Сердцем чувствую, что это Байкал',
            correct: true,
            feedback: `Браво! Интуиция вас не подвела.`,
            feedback_ad: `Чтобы чувствовать себя уверенно даже на голом льду, используйте шины
            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant
            Snow Cross</a>. Благодаря COR-технологиям шипы проникают глубоко в лёд и
            увеличивают сцепление на 10%, а динамику разгона — на 20%!`
          },
          {
            text: 'Нордический пейзаж подсказывает, что это река Гломма в Норвегии',
            correct: false,
            feedback: `Промахнулись, это в России.`,
            feedback_ad: `Чтобы чувствовать себя уверенно даже на голом льду, используйте шины
            <a href="http://cordiant.ru" target="_blank" rel="noopener noreferrer">Cordiant
            Snow Cross</a>. Благодаря COR-технологиям шипы проникают глубоко в лёд и
            увеличивают сцепление на 10%, а динамику разгона — на 20%!`
          },
        ],
        questionBackground: require('../assets/quiz__bg-questions/quiz__question-bg-5.jpg')
      },
      /** 6 */
      {
        responses: [
          {
            text: 'Да что дорога! Такое небо только в Исландии',
            correct: true,
            feedback: `И добавить нечего! Да`,
            feedback_ad: ``
          },
          {
            text: 'Это пустырь на окраинах Костромы… Романтика!',
            correct: false,
            feedback: `Романтика, но, увы, исландская.`,
            feedback_ad: ``
          },
          {
            text: 'Асфальт что надо! Это Германия, перед съездом на автобан',
            correct: false,
            feedback: `Да, он хорош! Но сделан в Исландии.`,
            feedback_ad: ``
          },
        ],
        questionBackground: require('../assets/quiz__bg-questions/quiz__question-bg-6.jpg')
      }
    ],

    answerStatus: 1, // 0 - НЕправильно, 1 - нейтрально, 2 - верно
    currentQuestionIndex: 1, // Индекс текущего вопроса
    answerIdx: 0, // индекс вопроса
    totalQuestions: 6, // Всего вопросов
    totalRightAnswers: 0, // всего правильных ответов

    isShowStartScreen: true,
    isShowQuestion: true, // Показываем блок с вопросом
    isShowResultCurrentAnswer: false, // Показать/скрыть результат текущего ответа
    isShowTotalResult: false,  // показать результат теста

    firstResultHeading: "Я — географ-экстрасенс",
    secondResultHeading: "Я — дорожный романтик",
    thirdResultHeading: "Я — начинающий топограф",
    firstResultCharacteristic: "Узнать российские дороги? Несите задачку посложнее! Если нужно, я вам по фото и географические координаты назову.",
    secondResultCharacteristic: "Да кто вообще смотрит под ноги! Я считаю звёзды и ловлю снежинки, а не изучаю асфальт. Ой, смотрите — облако похоже на слоника!",
    thirdResultCharacteristic: "Узнаю российские дороги без регистрации и СМС. Но иногда всё же путаюсь — эти зимние трассы так похожи.",

    quiz_promocode_date: "31.11.2021"


  },
  mutations: {
    SET_ANSWER_STATUS(state, answ) {
      state.answerStatus = answ
    },
    SET_CURRENT_QUESTION(state) {
      state.currentQuestionIndex++
    },
    SET_TOTAL_RIGHT_ANSWERS(state) {
      state.totalRightAnswers++
    }
  },
  actions: {
    changeAnswer({commit}, answ) {
      commit('SET_ANSWER_STATUS', answ);
    },

    nextQuestion({commit}) {
      commit('SET_CURRENT_QUESTION');
    },

    countRightAnswers({commit}) {
      commit('SET_TOTAL_RIGHT_ANSWERS')
    }
  },
  modules: {
  }
})
