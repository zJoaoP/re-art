import { RIJKS_API_URL, RIJKS_API_KEY } from '../helpers/config';

const apiSettings = {
  fetchSearchTerm: async (term, page, resultsPerPage = 8) => {
    const endpoint = `${RIJKS_API_URL}?key=${RIJKS_API_KEY}&q=${term}&p=${page}&ps=${resultsPerPage}&imgonly=True`;
    return fetch(endpoint).then((response) => response.json());
  },
  fetchArtworkByNumber: async (number) => {
    const endpoint = `${RIJKS_API_URL}/${number}?key=${RIJKS_API_KEY}`;
    return fetch(endpoint).then((response) => response.json());
  },
};

export default apiSettings;
