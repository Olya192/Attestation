export async function getCards(login, page, sort, order) {
  let url = new URL("https://api.github.com/search/users");
  url.searchParams.append("q", login);
  url.searchParams.append("per_page", 10);
  url.searchParams.append("page", page);
  if (sort) {
    url.searchParams.append("sort", "repositories");
    url.searchParams.append("order", order);
  }

  const response = await fetch(url);
  if (!response.ok) {
    const error = await response.json();
    if (response.status === 403) {
      throw new Error("Превышено количество запросов, попробуйте позже");
    } else {
      throw new Error("Ошибка сервера, попробуйте позже");
    }
  }
  const cards = await response.json();
  console.log(cards);
  return cards;
}

export async function getInfo(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const info = await response.json();
  console.log(info);
  return info;
}
