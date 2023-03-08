import { getTweets } from "./tweets.js";
import { buildTweetView, buildSpinnerView, buildErrorLoadingTweets } from "./tweetView.js";

export async function tweetListController(tweetListElement) {
  // mostrar ruleta de carga
  tweetListElement.innerHTML = buildSpinnerView();

  let tweets = [];

  try {
    tweets = await getTweets();
    // ocultar ruleta de carga
    hideSpinner(tweetListElement);
    for (const tweet of tweets) {
      const newTweetElement = buildTweetView(tweet);
      tweetListElement.appendChild(newTweetElement);
    }
  } catch (error) {
    // gestión del error
    tweetListElement.innerHTML = buildErrorLoadingTweets();
  }


}

function hideSpinner(tweetListElement) {
  const spinnerElement = tweetListElement.querySelector(".spinner");
  spinnerElement.classList.add("hide");
}
