import axios from 'axios';
import { useRuntimeConfig } from '#imports';

export const getBasicRepoInfo = async (repoNames) => {
  const config = useRuntimeConfig();
  const promises = repoNames.map(async (repoName) => {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repoName}`, {
        headers: {
          Authorization: `Bearer ${config.public.GITHUB_TOKEN}`,
        },
      });

      return {
        name: response.data.name,
        pushed_at: response.data.pushed_at,
        full_name: response.data.full_name,
        commitCount: null, // Устанавливаем null как плейсхолдер
        latestCommit: null, // Будет подгружено позже
      };
    } catch (error) {
      console.error(`Ошибка при загрузке данных репозитория ${repoName}:`, error.message);
      return null;
    }
  });

  const responses = await Promise.all(promises);
  return responses.filter((repo) => repo !== null);
};

export const getCommitCount = async (repoName) => {
  const config = useRuntimeConfig();
  const headers = {
    Authorization: `Bearer ${config.public.GITHUB_TOKEN}`,
  };
  const url = `https://api.github.com/repos/${repoName}/commits`;
  let commitCount = 0;
  let page = 1;
  const perPage = 100;

  while (true) {
    const response = await axios.get(url, {
      headers,
      params: {
        per_page: perPage,
        page,
      },
    });

    commitCount += response.data.length;

    if (response.data.length < perPage) break;
    page += 1;
  }

  return commitCount;
};
