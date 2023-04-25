export async function getLatestTweet() {
  if (!process.env.BEARER_TOKEN) {
    return 0;
  }

  const response = await fetch(
    `https://api.twitter.com/2/users/by/username/vitoroliviana/tweets?max_results=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    }
  );
  const { data } = await response.json();
  const latestTweet = data[0];
  return data;
}
