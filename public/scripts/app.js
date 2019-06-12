/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];


  
  function renderTweets(tweets) {
      tweets.forEach(posts => {
          let element = createTweetElement(posts);
        $('main .tweets-container').append(element);
      });
  }



//   <article>
//   <header >
//       <div class="img-tweet-container">
//           <img src="" alt="">
//         </div>
//         <div class="text-header-content">
//             <h2>Lorem, ipsum.</h2>
//         </div>
//         <div class="avatar-name">
//           <strong>@Avatar name</strong>
//         </div>
//   </header>
//   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sapiente sint veniam consequuntur, adipisci at, reprehenderit nesciunt temporibus ullam non, nobis porro.</p>
//   <footer>
//       <p>10 days ago</p>
//   </footer>
// </article>





  function createTweetElement(tweet) {

    // tweet content 
    let name = tweet.user.name;
    let imgValue = tweet.user.avatars.small;
    let usename = tweet.user.handle;
    let content = tweet.content.text;


    // create main all elements
    let $tweet = $('<article>');
    let header = $('<header>');
    let tweetTextContent = $('<p>').text(content);
    let tweetFooter = $('<footer>');
    let footerTextContent = $('<p>');
    let imgContainer = $('<div>').addClass('img-tweet-container');
    let img = $('<img>').attr('src',imgValue);
    let headerTitleContainer =  $('<div>').addClass('text-header-content');
    let headerTitleTextContent = $('<h2>').text(name);
    let avatarContainer = $('<div>').addClass('avatar-name');
    let avatarTextContent = $('<strong>').text(usename);

    // append all elements and return value 
   
    imgContainer
        .append(img);

    headerTitleContainer
        .append(headerTitleTextContent);

    avatarContainer
        .append(avatarTextContent)
    
    // append elements to header 
    header
        .append(imgContainer)
        .append(headerTitleContainer)
        .append(avatarContainer);

    // append element in footer 
    tweetFooter
        .append(footerTextContent)
    

    // append all element in tweet container
    $tweet
        .append(header)
        .append(tweetTextContent)
        .append(tweetFooter);

    return $tweet ;
  }



  $(document).ready(function(){
    renderTweets(data);
    });
  
  
  