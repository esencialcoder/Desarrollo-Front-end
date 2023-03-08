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
    const tweetsUrlOk = 'https://gist.githubusercontent.com/edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json'
    //const tweetsUrlKo = 'https://gist.githubusercontent./edu-aguilar/8c9a509ec582d04da0640be2b0ede8d5/raw/f75c68645821f3c33d82d9c2c048215584d1d332/tweets.json'

    
    const response = await fetch(tweetsUrlOk);
    const tweets = await response.json();

    return tweets;
};
    
