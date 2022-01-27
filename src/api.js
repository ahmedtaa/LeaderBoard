const apiKey = 'wvi4wi5ISYPZMV37duUV';

const setScore = async (score) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(score),
    },
  );

  const { result } = await response.json();

  return result;
};

const getScores = async () => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${apiKey}/scores`,
  );

  const { result } = await response.json();

  return result;
};

export { getScores, setScore };
