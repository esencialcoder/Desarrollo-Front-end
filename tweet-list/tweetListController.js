import { getTweets } from "./tweets.js";
import {
  buildTweetView,
  buildSpinnerView,
  buildErrorLoadingTweets,
  buildEmpyTweetList,
} from "./tweetView.js";

export async function tweetListController(tweetListElement, showMessage) {
  tweetListElement.innerHTML = buildSpinnerView();

  let tweets = [];

  try {
    tweets = await getTweets();
    showMessage('Los tweets se cargaron correctamente')
    
    if (tweets.length > 0) {
      drawTweets(tweets, tweetListElement);
    } else {
      showEmptyMessage(tweetListElement);
    }
  } catch (error) {
    // tweetListElement.innerHTML = buildErrorLoadingTweets();
    showMessage('No hemos podido cargar los tweets');
    
  } finally {
    hideSpinner(tweetListElement);
  }
}

function hideSpinner(tweetListElement) {
  const spinnerElement = tweetListElement.querySelector(".spinner");
  spinnerElement.classList.add("hide");
}

function drawTweets(tweets, tweetListElement) {
  for (const tweet of tweets) {
    const newTweetElement = buildTweetView(tweet);
    tweetListElement.appendChild(newTweetElement);
  }
}

function showEmptyMessage(tweetListElement) {
  tweetListElement.innerHTML = buildEmpyTweetList();
}
