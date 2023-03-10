// export const tweets = [{
//     date: '2022-09-19',
//     body:'ejemplo de cuerpo de tweet',
//     handler:'@usuario1',
//     image:'https://11111.jpeg'
// },
// {
//     date: '2022-09-19',
//     body:'ejemplo de cuerpo de otro tweet',
//     handler:'@usuario1',
//     image:'https://11111.jpeg'
    
// },
// {
//     date: '2022-09-19',
//     body:'ejemplo de cuerpo de tweet mucho, mucho más largo',
//     handler:'@usuario1',
//     image:'https://11111.jpeg'
// }];

export async function getTweets() {
    const tweetsUrlOk = 'http://localhost:8000/api/tweets';
    
    const response = await fetch(tweetsUrlOk);
    const tweets = await response.json();

    return tweets;
};
    
