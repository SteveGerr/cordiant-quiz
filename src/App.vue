<template>
  <div id="app">
    <QuizContainer />
  </div>
</template>

<script>
import QuizContainer from "./components/Quiz_container/QuizContainer.vue"

export default {
  name: 'App',
  components: {
    QuizContainer
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Play:wght@700&&family=Play&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  margin: 0;
  box-sizing: border-box;
  cursor: url("./assets/Cursor.png"), auto;
}
a {
    font-weight: 700;
    color: #7DBFFF;
    cursor: pointer;
}

body {
  display: flex;
  background: #004373;

}

h2 {
  margin-bottom: 12px;
  font-size: 45px;
  font-family: 'Play', sans-serif;

  @media(max-width: 768px) {
    font-size: 35px;
  }
}

h3,
.quiz_btn,
.quiz__team,
.quiz__feedback p,
.quiz__feedback-ad a,
.quiz-total-result p,
.quiz__start-streen-btn,
.quiz__start-streen-co a,
.quiz__start-streen-co span,
.quiz__counter-questions span,
.quiz__start-streen-description {
  font-family: 'Open Sans', sans-serif;
}
header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 12;

  img {
    cursor: pointer;
  }
}

header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 75px;
  padding: 15px 123px;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 80, 138, 0) 100%);

  @media (max-width: 768px) {
    padding: 15px 40px;

    a:first-child img {
      width: 85px;
    }
    a:nth-child(2) img {
      width: 116px;
    }
  }
}

#app {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5% auto;

  @media(max-width: 768px) {
    align-items: flex-start;
    margin: 0;
  }
}
</style>
