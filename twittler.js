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
      let userButton = `<button class="userButton">@${tweet.user}</button>`;
      $tweet.html(`${userButton}: ${tweet.message} ${tweet.created_at}`);
      $tweet.appendTo($tweetList);
      index -= 1;
    }
  };

   const redirect = (x) => {
    // for (var key in streams.users) {
    // if (userbuttonname === streams.users[key])
    //   return streams.users[key]
    // }
    // let index = streams.users.shawndrost.length - 1;
    // $tweetList.html('');
    // while(index >= 0){
    //   let tweet = streams.users.shawndrost[index];
    //   let $tweet = $(`<div class="tweets"></div>`);
    //   let userButton = `<button class="userButton">@${tweet.user}</button>`;
    //   $tweet.html(`${userButton}: ${tweet.message} ${tweet.created_at}`);
    //   $tweet.appendTo($tweetList);
    //   index -= 1;
    // }

    
    //return alert('this button works');
   }
  //$(event.target)
  //$(
 

  jQuery("#newTweets").on('click', tweetRefresh); //number.toString()
  //setInterval(tweetRefresh, 3000);

  jQuery("body").on('click', '.userButton', redirect);

});