import axios from 'axios';
import { useRuntimeConfig } from '#imports';

const getRepositoriesData = async (repoNames) => {
  const config = useRuntimeConfig();
  const promises = repoNames.map(async (repoName) => {
    // Получаем данные о репозитории
    const response = await axios.get(`https://api.github.com/repos/${repoName}`, {
      headers: {
        Authorization: `Bearer ${config.public.GITHUB_TOKEN}`, // Используйте ваш токен
      },
    });

    // Получаем данные о последних коммитах
    const commitsResponse = await axios.get(`https://api.github.com/repos/${repoName}/commits`, {
      headers: {
        Authorization: `Bearer ${config.public.GITHUB_TOKEN}`,
      },
    });

    // Извлекаем информацию о последнем коммите
    const latestCommit = commitsResponse.data[0]; // Первый элемент - последний коммит
    const latestCommitData = latestCommit ? {
      message: latestCommit.commit.message,
      date: latestCommit.commit.author.date,
    } : {};

    return {
      name: response.data.name,
      pushed_at: response.data.pushed_at,
      full_name: response.data.full_name,
      commitCount: response.data.open_issues_count,
      latestCommit: latestCommitData, // Добавляем данные о последнем коммите
    };
  });

  const responses = await Promise.all(promises);
  return responses;
};

export default {
  getRepositoriesData,
};
