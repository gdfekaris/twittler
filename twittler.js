$(document).ready(function(){
  let $tweetList = $('#tweetList');
  jQuery("time.timeago").timeago();

  const feed = (input) => {
    let index = input.length - 1;
    $tweetList.html('');
    while(index >= 0){
      let tweet = input[index];
      let $tweet = $(`<div class="tweets"></div>`);
      let userButton = `<button class="userButton" id=${tweet.user}>@${tweet.user}</button>`;
      let timeStamp = `<div class="timeStamp">${jQuery.timeago(tweet.created_at)}</button>`;
      $tweet.html(`${userButton} ${tweet.message} ${timeStamp}`);
      $tweet.appendTo($tweetList);
      index -= 1;
    }
  };
  const mainFeed = () => { 
    feed(streams.home);
  };
  const userFeed = () => {
    let $target = (event.target).id;
    feed(streams.users[$target]);
  };
  const myFunction = () => {
    let $text = $(".textArea").val();
    //console.log(writeTweet())
  };

  mainFeed(); //adds tweets on launch;

  jQuery("#newTweets").on('click', mainFeed);
  jQuery("body").on('click', '.userButton', userFeed);
  jQuery(".guestTweetButton").on('click', myFunction);

});