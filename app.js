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

    var listItem = '<li class="list__item js-todo-list_item" data-text="' + text +  '">' + '<i class="far fa-circle icon-check js-click-done" aria-hidden="true"></i>' + '<span class="js-todo_list-text">' + text + '</span>' + '<input type="text" class="editText js-todo_list-editForm">' + '<i class="fas fa-trash-alt icon-trash js-click-remove" aria-hidden="true"></i>' + '</li>';

    $('.js-todo-list').prepend(listItem);
  });

  // タスクをDONEにする
  $(document).on('click', '.js-click-done', function() {
    $(this).removeClass('js-click-done').addClass('js-click-todo')
    .removeClass('fa-circle').addClass('fa-check-circle')
    .closest('.js-todo-list_item').addClass('list__item--done');
  });

  // タスクを未完了にする
  $(document).on('click', '.js-click-todo', function() {
    $(this).removeClass('js-click-todo').addClass('js-click-done')
    .removeClass('fa-check-circle').addClass('fa-circle')
    .closest('.js-todo-list_item').removeClass('list__item--done');
  });

  // ゴミ箱ボタンを押してタスクを削除
  $(document).on('click', '.js-click-remove', function() {
    $(this).closest('.js-todo-list_item').fadeOut('slow', function() {
      $(this).remove();
    });
  });

  // クリックで編集状態にする
  $(document).on('click', '.js-todo_list-text', function() {
    $(this).hide().siblings('.js-todo_list-editForm').show();
  });

  // shift + Enterで編集状態を解除する
  $(document).on('keyup', '.js-todo_list-editForm', function(e) {
    if (e.keyCode === 13 && e.shiftKey === true) {
      var $this = $(this);
      $this.hide().siblings('.js-todo_list-text').text($this.val()).show().closest('.js-todo-list_item').attr('data-text', $this.val());
    }
  });

  // 検索
  $('.js-search').on('keyup', function() {
    var searchText = $(this).val();
    $('.js-todo-list_item').show().each(function(i, element) {
      var text = $(element).data('text');
      if (text && text.match(new RegExp('^' + searchText))) {
        return true;
      }
      $(element).hide();
    });
  });
});