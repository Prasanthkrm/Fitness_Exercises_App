export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_YT_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options, retries = 3, delay = 2000) => {
  try {
    
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      
      if (errorData.message === "Too many requests" && retries > 0) {
        console.warn(`Rate limit hit. Retrying in ${delay / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchData(url, options, retries - 1, delay * 2);
      }
      
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
};
