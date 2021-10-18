db.trips.aggregate(
  [
    {
      $addFields: {
        dia_da_semana: {
          $dayOfWeek: "$startTime",
        },
      },
    },
    {
      $match: {
        dia_da_semana: 5,
      },
    },
    {
      $group: {
        _id: "$startStationName",
        total: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        nomeEstacao: "$_id",
        total: "$total",
      },
    },
    {
      $sort: {
        total: -1,
      },
    },
    {
      $limit: 1,
    },
  ],
);
