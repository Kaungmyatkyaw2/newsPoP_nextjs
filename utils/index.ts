const options: RequestInit = {
  cache: "no-store",
  headers: {
    "X-Api-Key": process.env.API_TOKEN_NEWS || "",
  },
};

const URL = "https://newsapi.org/v2";

export const fetchNews = async (q: string) => {
  try {
    const newsData = await fetch(
      `${URL}/everything?q=${q}&pageSize=10`,
      options
    );
    return newsData.json();
  } catch (error) {
    return error;
  }
};

export const fetchTopHeadlines = async () => {
  try {
    const newsData = await fetch(`${URL}/top-headlines?country=us`, options);
    return newsData.json();
  } catch (error) {}
};
