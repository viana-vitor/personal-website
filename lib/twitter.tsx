export async function getTwitterMetrics() {
  if (!process.env.BEARER_TOKEN) {
    return 0;
  }

  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/vitoroliviana?user.fields=public_metrics`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    }
  );
  const { data } = await response.json();
  return Number(data.public_metrics.tweet_count);
}

// export async function getLatestTweet() {
//   if (!process.env.BEARER_TOKEN) {
//     return 0;
//   }

//    const response = await fetch(
//      `https://api.twitter.com/2/users/by/username/vitoroliviana`,
//      {
//        headers: {
//          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
//        },
//      }
//    );
// }
