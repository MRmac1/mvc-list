// 拿到 model data 值进行渲染 使用 handlerbars
// import handlebars from 'handlebars';
// import model from './model'
const handlebars = require('handlebars');
const model = require('./model');

module.exports = {
  render: function(tpl) {
    const template = handlebars.compile(tpl);
    const data = model.getData();
    // 添加到 list-container ul 后面
    document.querySelector('#list-container ul').innerHTML = template({data: data});
    return;
  }
}