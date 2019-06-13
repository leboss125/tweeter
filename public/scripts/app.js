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
          const element = createTweetElement(posts);
        $('main .tweets-container').prepend(element);
      });
  }




  // create html elements
  function createTweetElement(tweet) {
    // tweet content 
    const name = tweet.user.name;
    const imgValue = tweet.user.avatars.small;
    const usename = tweet.user.handle;
    const content = tweet.content.text;
    const date = new Date(tweet.created_at);

    // create main all elements
    const $tweet = $('<article>');
    const header = $('<header>');
    const tweetTextContent = $('<p>').text(content);
    const tweetFooter = $('<footer>');
    const footerTextContent = $('<p>').text(date);
    const imgContainer = $('<div>').addClass('img-tweet-container');
    const img = $('<img>').attr('src',imgValue);
    const headerTitleContainer =  $('<div>').addClass('text-header-content');
    const headerTitleTextContent = $('<h2>').text(name);
    const avatarContainer = $('<div>').addClass('avatar-name');
    const avatarTextContent = $('<strong>').text(usename);
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

    // nav button on click handler
    $('#compose').on('click', function(){
      $('.new-tweet').slideToggle(500);
      const input = document.querySelector('textarea');
      input.select();
    })




    $('form').on('submit', function(e){
      e.preventDefault();
      const formData = $(e.target).find('textarea').val();
      if(formData === '' || formData === null){
        $('#showerror').text('please enter something in the form');
        return
      }
      if(formData.length > 140){
        $('#showerror').text('your tweet is greater then 140');
        return
      }else{
          $.ajax({ method: 'POST', url: '/tweets', data:{text:formData}})
            .done(data => loadTweets());
          document.querySelector('form').reset();
          $('#showerror').text('');
      }
    });
    loadTweets();
    });