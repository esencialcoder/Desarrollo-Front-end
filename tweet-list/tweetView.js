export function buildTweetView(tweet) {
  const newTweetElement = document.createElement("article");
  newTweetElement.classList.add("tweet");
  const tweetDate = new Date(tweet.date);
  newTweetElement.innerHTML = `
        <div class = "user-info">
        <span>${tweet.handle}</span>
        <img src ="${tweet.avatar}"/>
        </div>
        <p>${tweet.content} - ${tweetDate.toISOString}<p>
        <span>${tweet.retweets} retweets <span>${tweet.likes} likes <span>${tweet.replies} replies
        `;

  return newTweetElement;
}

export function buildSpinnerView() {
  return `<div class="spinner"><div></div><div></div><div></div>`;
}
