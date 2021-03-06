// 1 - Ajude a Trybe a escolher um filme para a próxima noite! Baseado em uma pesquisa,
// decidimos que os filmes em potencial devem atender alguns critérios, vejamos:

db.movies.aggregate(
  [
    {
      $match: {
        "imdb.rating": {
          $gte: 7,
        },
        genres: {
          $nin: ["Crime", "Horror"],
        },
        rated: {
          $in: ["PG", "G"],
        },
        $and: [
          { languages: "English" },
          { languages: "Spanish" },
        ],
      },
    },
  ],
);
