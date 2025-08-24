export async function randomManga(): Promise<any> {
  while (true) {
    const response = await fetch(`https://api.jikan.moe/v4/manga/`);
    const data = await response.json();

    if (response.ok && data?.data) {
      return data;
    }
  }
}
