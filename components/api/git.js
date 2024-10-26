import axios from 'axios';
import { useRuntimeConfig } from '#imports';

const getRepositoriesData = async (repoNames) => {
  const config = useRuntimeConfig();
  const promises = repoNames.map(repoName =>
    axios.get(`https://api.github.com/repos/${repoName}`, {
      headers: {
        Authorization: `Bearer ${config.public.GITHUB_TOKEN}`, // Используйте ваш токен
      },
    })
  );

  const responses = await Promise.all(promises);

  return responses.map(response => ({
    name: response.data.name,
    pushed_at: response.data.pushed_at,
    full_name: response.data.full_name,
    commitCount: response.data.open_issues_count,
  }));
};

export default {
  getRepositoriesData,
};
