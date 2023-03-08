import { getTweets } from "./tweets.js";
import { buildTweetView, buildSpinnerView } from "./tweetView.js";

export async function tweetListController(tweetListElement) {
  // mostrar ruleta de carga
  tweetListElement.innerHTML = buildSpinnerView();

  const tweets = await getTweets();

  // ocultar ruleta de carga
  hideSpinner(tweetListElement);

  for (const tweet of tweets) {
    const newTweetElement = buildTweetView(tweet);
    tweetListElement.appendChild(newTweetElement);
  }
}

function hideSpinner(tweetListElement) {
  const spinnerElement = tweetListElement.querySelector(".spinner");
  spinnerElement.classList.add("hide");
}
