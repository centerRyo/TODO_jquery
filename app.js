$(function() {
  // カードの追加を行う
  $('.js-add-task').on('click', function(e) {
    e.preventDefault();

    var text = $('.js-get-val').val();
    $('.js-get-val').val('');

    if (!text) {
      $('.js-toggle-error').show();
      return;
    }

    $('.js-toggle-error').hide();

    var listItem = '<li class="list__item js-todo-list_item">' + '<i class="far fa-circle icon-check" aria-hidden="true"></i>' + '<span>' + text + '</span>' + '<input type="text" class="editText js-todo_list-editForm">' + '<i class="fas fa-trash-alt icon-trash" aria-hidden="true"></i>' + '</li>';

    $('.js-todo-list').append(listItem);
  });
});