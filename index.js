import { notificationController } from "./notifications/notificationController.js";
import { tweetListController } from "./tweet-list/tweetListController.js";

const tweetListElement = document.querySelector('.tweet-list');
const notificationsElement = document.querySelector('.notifications');

const showMessage = notificationController(notificationsElement);
tweetListController(tweetListElement);

tweetListElement.addEventListener('newNotification', (event) => {
    console.log('He recibido el evento!!!!', event.detail.message);
    showMessage(event.detail.message)

})









