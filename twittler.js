$(document).ready(function(){
  let $body = $('body');
  let $tweetList = $('#tweetList');
  //$body.html('');

  //console.log(streams.home);

  const tweetRefresh = () => {
    let index = streams.home.length - 1;
    $tweetList.html('');
    while(index >= 0){
      let tweet = streams.home[index];
      let $tweet = $(`<div class="tweets"></div>`);
      $tweet.text(`@${tweet.user}: ${tweet.message} ${tweet.created_at}`);
      $tweet.appendTo($tweetList);
      index -= 1;
    }
  };


  //$(event.target)
  //$(
 

  $("#newTweets").on('click', tweetRefresh);
  //setInterval(tweetRefresh, 3000);

});