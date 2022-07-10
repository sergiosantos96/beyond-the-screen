const movies = async () => {
  const response = await fetch(
    "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "34295a1ce2mshe4252c556ad6c13p17f725jsn7a6f51251807",
        "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
      },
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP Error! Status:${response.status}`);
  }

  const data = await response.json();
  console.log(data);
};

module.exports = movies;
