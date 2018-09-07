const DUMMY_INPUT = {
  startActivity: 1,
  activities: [
    {
      id: 1,
      duration: 20,
      nextActivities: [2, 3],
    },
    {
      id: 2,
      duration: 10,
      nextActivities: [4],
    },
    {
      id: 3,
      duration: 20,
      nextActivities: [5],
    },
    {
      id: 4,
      duration: 10,
      nextActivities: [6],
    },
    {
      id: 5,
      duration: 20,
      nextActivities: [6],
    },
    {
      id: 6,
      duration: 20,
      nextActivities: [],
    },
  ],
};

const LOOPED_INPUT = {
  startActivity: 1,
  activities: [
    {
      id: 1,
      duration: 20,
      nextActivities: [2, 3],
    },
    {
      id: 2,
      duration: 10,
      nextActivities: [4],
    },
    {
      id: 3,
      duration: 20,
      nextActivities: [5],
    },
    {
      id: 4,
      duration: 10,
      nextActivities: [2],
    },
    {
      id: 5,
      duration: 20,
      nextActivities: [6],
    },
    {
      id: 6,
      duration: 20,
      nextActivities: [],
    },
  ],
};

module.exports = {
  DUMMY_INPUT,
  LOOPED_INPUT,
};
