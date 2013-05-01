$(function(){
  $('body').append("<div class='github_review'><form><input class='filename' type='text'  placeholder='Pull up some more diffs.' size='50' /></form><div id='files' class='files'></div></div>");

  $('.github_review input.filename').on('keyup', function(){
    $file_container = $('.github_review .files');
    $file_container.empty();
    filename = $('.github_review input.filename').val();
    files = $('#files .file .meta[data-path*="' + filename + '"]').parent().clone();

    if(files.length > 0){
      console.log(files);
      files.appendTo($file_container)
    }
  });
});