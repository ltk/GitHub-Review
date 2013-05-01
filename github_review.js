$(function(){
  $('body').append("<div class='github_review'><form><input class='filename' type='text'  placeholder='Pull up some more diffs.' size='50' /></form><div id='files' class='files'></div></div>");

  $filename_input = $('.github_review input.filename');
  $file_container = $('.github_review .files');

  $filename_input.on('keyup', function(){
    $file_container.empty();
    filename = $filename_input.val();
    files = $('#files .file .meta[data-path*="' + filename + '"]').parent().clone();

    if(files.length > 0){
      files.appendTo($file_container)
    }
  });
});