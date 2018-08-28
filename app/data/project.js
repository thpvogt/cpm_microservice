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
  ]
}

const DUMMY_PROJECT = {
  name: 'Prueba',
  startNode: 1,
  endNode: 5,
  nodeCount: 5,
  nodes: [
    {
      id: 1,
      duration: 20,
      isCritical: false,
      earlyStart: 0,
      earlyEnd: 20,
      lateStart: 0,
      lateEnd: 20,
      prevNodes: [],
      nextNodes: [2, 3],
    },
    {
      id: 2,
      duration: 20,
      isCritical: false,
      earlyStart: 20,
      earlyEnd: 40,
      lateStart: 20,
      lateEnd: 40,
      prevNodes: [1],
      nextNodes: [4],
    },
    {
      id: 3,
      duration: 20,
      isCritical: false,
      earlyStart: 20,
      earlyEnd: 40,
      lateStart: 20,
      lateEnd: 40,
      prevNodes: [1],
      nextNodes: [5],
    },
    {
      id: 4,
      duration: 20,
      isCritical: false,
      earlyStart: 40,
      earlyEnd: 60,
      lateStart: 40,
      lateEnd: 60,
      prevNodes: [2],
      nextNodes: [5],
    },
    {
      id: 5,
      duration: 20,
      isCritical: false,
      earlyStart: 60,
      earlyEnd: 80,
      lateStart: 60,
      lateEnd: 80,
      prevNodes: [3, 4],
      nextNodes: [5],
    },
  ],
}

module.exports = DUMMY_INPUT;