const walkForward = (currentActivity, currentTime, activities) => {
  const currentEnd = currentTime + currentActivity.duration;
  const prevActivities = activities.filter(activity => {
    return activity.nextActivities.indexOf(currentActivity.id) != -1;
  }).map(activity => activity.id);
  const newNode = {
    id: currentActivity.id,
    duration: currentActivity.duration,
    earlyStart: currentTime,
    earlyEnd: currentEnd,
    nextNodes: currentActivity.nextActivities,
    prevNodes: prevActivities,
  };
  let nodes = [ newNode ];
  currentActivity.nextActivities.forEach(activityId => {
    const nextActivity = activities.find(activity =>  activity.id === activityId);
    const nextNodes = walkForward(nextActivity, currentEnd, activities);
    nodes = nodes.concat(nextNodes);
  });
  return nodes;
}

const walkBackwards = (currentNode, currentTime, nodes) => {
  const delay = currentTime - currentNode.earlyEnd;
  const node = {
    ...currentNode,
    lateStart: currentNode.earlyStart + delay,
    lateEnd: currentNode.earlyEnd + delay,
    isCritical: delay === 0 ? true : false,
  }
  let updatedNodes = [node];
  currentNode.prevNodes.forEach(nodeId => {
    const prevNode = nodes.find(node =>  node.id === nodeId);
    const prevNodes = walkBackwards(prevNode, node.lateStart, nodes);
    updatedNodes = updatedNodes.concat(prevNodes);
  });
  return updatedNodes;
}

const filterDuplicateForward = (activities, originalNodes) => { 
  const newNodes = [];
  activities.forEach((activity) => { 
    const correspondingNodes = originalNodes.filter(node => node.id === activity.id);
    const sortedNodes = correspondingNodes.sort((a, b) =>  b.earlyEnd - a.earlyEnd );
    newNodes.push(sortedNodes[0]);
  });
  return newNodes;
}

const filterDuplicateBackwards = (activities, originalNodes) => { 
  const newNodes = [];
  activities.forEach((activity) => { 
    const correspondingNodes = originalNodes.filter(node => node.id === activity.id);
    const sortedNodes = correspondingNodes.sort((a, b) =>  b.earlyEnd - a.earlyEnd );
    const criticalNodes = sortedNodes.filter(node => node.isCritical);
    if (criticalNodes.length > 0) {
      newNodes.push(criticalNodes[0]);
    } else {
      newNodes.push(sortedNodes[0]);
    }
  });
  return newNodes;
}

const generateProject = (input) => {
  console.log(input.activities);
  const firstActivity = input.activities.find(activity =>  activity.id === input.startActivity);
  const forwardNodes = walkForward(firstActivity, 0, input.activities);
  const filteredForwardNodes = filterDuplicateForward(input.activities, forwardNodes);

  const lastNode = filteredForwardNodes.find(node => node.nextNodes.length === 0);
  const projectEnd = lastNode.earlyEnd;
  const backwardNodes = walkBackwards(lastNode, projectEnd, filteredForwardNodes);
  const filteredBackwardNodes = filterDuplicateBackwards(input.activities, backwardNodes);

  console.log(filteredBackwardNodes);
  // console.log(backwardNodes);
}

module.exports = generateProject;
