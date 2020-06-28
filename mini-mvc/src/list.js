// 引入 model, view
const model = require('./model')
const view = require('./view')


function ListController() {
  const _init = function() {
    view.render(getListTpl());
    bindEvent();
  }

  const bindEvent = function() {
    // 绑定点击更多事件等
    document.querySelector('.add-authors').onclick = () => {
      fetch('./api/authors.json')
        .then(res => res.json())
        .then(res => {
          console.log('fetch res', res);
          // 改变model，重新渲染
          if (res.data) {
            model.appendData(res.data);
            view.render(getListTpl());
          }
        })
    }
  }

  const getListTpl = function() {
    return `
        {{#each data}}
          <li class="list-item">
          <section class="author">
            <img class="author_img" src="{{author_img}}" alt="">
            <section class="author_name">
              <p>{{ name }}</p>
              <p>{{ birth_year }} ~ {{ death_year }}</p>
            </section>
          </section>
          <section class="desc">
            <h4>简介</h4>
            <p>{{ brief_introduction }}</p>
          </section>
          </li>
        {{/each}}
      `
  }

  return {
    init: _init
  }
}

ListController().init();