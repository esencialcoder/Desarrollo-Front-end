import { getTweets } from "./tweets.js";
import {
  buildTweetView,
  buildSpinnerView,
  buildErrorLoadingTweets,
  buildEmpyTweetList
} from "./tweetView.js";

export async function tweetListController(tweetListElement) {
  tweetListElement.innerHTML = buildSpinnerView();

  let tweets = [];

  try {
    tweets = await getTweets();

    hideSpinner(tweetListElement);

    if (tweets.length > 0) {
      drawTweets(tweets, tweetListElement);
    } else {
      showEmptyMessage(tweetListElement);
    }
  } catch (error) {
    tweetListElement.innerHTML = buildErrorLoadingTweets();
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
