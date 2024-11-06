import axios from 'axios';
import { useRuntimeConfig } from '#imports';

const LOCAL_STORAGE_KEY = 'github_repo_cache';

// Получение данных из кэша
const getCacheData = (repoName) => {
  const cache = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
  return cache[repoName];
};

// Обновление данных в кэше
const setCacheData = (repoName, data) => {
  const cache = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
  cache[repoName] = { ...(cache[repoName] || {}), ...data };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cache));
};

export const getBasicRepoInfo = async (repoNames) => {
  const config = useRuntimeConfig();

  const promises = repoNames.map(async (repoName) => {
    try {
      // Получение базовой информации о репозитории
      const response = await axios.get(`https://api.github.com/repos/${repoName}`, {
        headers: { Authorization: `Bearer ${config.public.GITHUB_TOKEN}` },
      });

      const basicInfo = {
        name: response.data.name,
        description: response.data.description,
        pushed_at: response.data.pushed_at,
        full_name: response.data.full_name,
        commitCount: null,
        latestCommit: null,
      };

      // Асинхронно обновляем данные о коммитах
      updateCommitData(repoName).then((commitData) => {
        // Обновляем данные в объекте basicInfo
        Object.assign(basicInfo, commitData);

        // Здесь вы можете обновить состояние приложения, чтобы интерфейс обновился
        // Например, используя реактивные свойства или Vuex
      });

      return basicInfo;
    } catch (error) {
      console.error(`Ошибка при загрузке данных репозитория ${repoName}:`, error.message);
      return null;
    }
  });

  const responses = await Promise.all(promises);
  return responses.filter((repo) => repo !== null);
};


export const updateCommitData = async (repoName) => {
  const config = useRuntimeConfig();
  const headers = { Authorization: `Bearer ${config.public.GITHUB_TOKEN}` };
  const perPage = 100;

  try {
    // Запрашиваем первую страницу коммитов
    const commitsResponse = await axios.get(`https://api.github.com/repos/${repoName}/commits`, {
      headers,
      params: { per_page: perPage, page: 1 },
    });

    const commits = commitsResponse.data;
    const latestCommit = commits[0]?.commit || null;

    // Получаем общее количество коммитов из заголовка Link
    let totalCommits = commits.length;

    if (commitsResponse.headers.link) {
      const linkHeader = commitsResponse.headers.link;
      const links = linkHeader.split(',');

      let lastPageNumber = 1;

      links.forEach((link) => {
        const [urlPart, relPart] = link.split(';');
        const rel = relPart.trim();
        if (rel === 'rel="last"') {
          const url = urlPart.trim().slice(1, -1); // Убираем < и >
          const urlObj = new URL(url);
          lastPageNumber = parseInt(urlObj.searchParams.get('page'), 10);
        }
      });

      // Запрашиваем последнюю страницу коммитов
      const lastPageResponse = await axios.get(`https://api.github.com/repos/${repoName}/commits`, {
        headers,
        params: { per_page: perPage, page: lastPageNumber },
      });

      const lastPageCommits = lastPageResponse.data;
      totalCommits = (lastPageNumber - 1) * perPage + lastPageCommits.length;
    }

    return {
      commitCount: totalCommits,
      latestCommit,
    };
  } catch (error) {
    console.error(`Ошибка при обновлении данных репозитория ${repoName}:`, error.message);

    // В случае ошибки возвращаем null значения
    return {
      commitCount: null,
      latestCommit: null,
    };
  }
};
