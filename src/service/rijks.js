import { RIJKS_API_URL, RIJKS_API_KEY } from '../helpers/config';

const apiSettings = {
  fetchSearchTerm: async (term, page, resultsPerPage = 20) => {
    const endpoint = `${RIJKS_API_URL}?key=${RIJKS_API_KEY}&q=${term}&p=${page}&ps=${resultsPerPage}`;
    return fetch(endpoint);
  },
};

export default apiSettings;
