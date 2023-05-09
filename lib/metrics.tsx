import { cache } from "react";

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

export const getYearContributions = async () => {
  const headers = {
    Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
  };

  const body = {
    query: `query {
      user(login: "viana-vitor") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }`,
  };

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });
  const { data } = await response.json();

  return data.user.contributionsCollection.contributionCalendar
    .totalContributions;
};
