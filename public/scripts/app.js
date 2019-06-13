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


  // loop in to the object and append into the main
  function renderTweets(tweets) {
      tweets.forEach(posts => {
          let element = createTweetElement(posts);
        $('main .tweets-container').prepend(element);
      });
  }




  // create html elements
  function createTweetElement(tweet) {
    // tweet content 
    let name = tweet.user.name;
    let imgValue = tweet.user.avatars.small;
    let usename = tweet.user.handle;
    let content = tweet.content.text;
    let date = new Date(tweet.created_at);

    // create main all elements
    let $tweet = $('<article>');
    let header = $('<header>');
    let tweetTextContent = $('<p>').text(content);
    let tweetFooter = $('<footer>');
    let footerTextContent = $('<p>').text(date);
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
    function loadTweets(){
      $.ajax('/tweets',{method:'GET'})
      .then(result => renderTweets(result))
    };




    $('form').on('submit', function(e){
      e.preventDefault();
      let formData = $(e.target).find('textarea').val()
      if(formData === '' || formData === null){
        alert('please enter something');
        return
      }
      if(formData.length > 140){
        alert('your tweet is greater then 140')
        return
      }else{
          $.ajax({ method: 'POST', url: '/tweets', data:{text:formData}})
            .done(data => loadTweets());
          document.querySelector('form').reset();
          
      }
    });
    loadTweets();
    });