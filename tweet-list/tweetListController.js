import {getTweets} from "./tweets.js";
import { buildTweetView } from "./tweetView.js";

export async function tweetListController(tweetListElement) {
    tweetListElement.innerHTML = '';
    // mostrar ruleta de carga

    const tweets = await getTweets()
    // ocultar ruleta de carga
    
   for (const tweet of tweets) {
         const newTweetElement = buildTweetView(tweet)      
        tweetListElement.appendChild(newTweetElement);
    };
}; 