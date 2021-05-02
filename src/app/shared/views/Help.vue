<template>
<div class="help with-nav">
<question-item :text="el.text" :title="el.title" v-for="el in questions" :key="el"></question-item>
  </div>
</template>

<script>
import QuestionItem from './../components/questions/QuestionItem.vue'
    export default {
      setup(){
        const questions = [
          {title: 'Идея этого проекта' , text: 'В целом идея заключается в том чтобы показать инструменты которыми я владею. '},
          {title: 'Что используется в качестве backenda?' , text: 'В этом проекте используется firebase , благодаря своей простоте выбор пал именно на него '},
          {title: 'Сколько ушло времени?' , text: 'На все что есть в этом проекте я потратил 3 дня'},
          {title: 'Какие следующие цели?' , text: 'В планах сделать что-то более масштабное и сложное'},
          {title: 'Чем планирую заниматся в будущем?' , text: 'Найти работу на Vue , где смогу узнавать что-то новое для себя и получу опыт работы в большом проекте'},
          ]
        return {questions}
      },
      components: {QuestionItem}
    }
</script>

<style lang="scss" scoped>

</style>