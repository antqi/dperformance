new Vue({
  el: '#app',
  template: '<div class=""><news-list></news-list></div>',
  components: {
    NewsList: window['NewsListCase']['components'].NewList
  }
})