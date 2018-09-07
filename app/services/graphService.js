const fs = require('fs');
const { exec } = require('child_process');

const GRAPH_RENDER_COMMAND = 'dot app/data/graph -o app/data/diagram.png -T png -v';

const writeFile = (graphString) => {
  fs.writeFile('app/data/graph', graphString.join('\n'), (err) => {
    if (err) throw err;
  });
};

const renderPng = () => {
  exec(GRAPH_RENDER_COMMAND, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      console.log(err);
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
};

const generateGraph = (nodes) => {
  const graphString = ['digraph project {', 'node [shape=record];'];
  nodes.forEach((node) => {
    graphString.push(
      `node${node.id} [${node.isCritical ? 'color=red' : ''} label="{Id: ${node.id} | Duration: ${
        node.duration
      }} | {ES: ${node.earlyStart} | EE: ${node.earlyEnd}}|{LS: ${node.lateStart} | LE: ${
        node.lateEnd
      }}"];`,
    );
  });
  nodes.forEach((node) => {
    node.nextNodes.forEach((nextNodeId) => {
      graphString.push(`node${node.id} -> node${nextNodeId};`);
    });
  });
  graphString.push('}');
  writeFile(graphString);
  renderPng();
  return graphString;
};

module.exports = generateGraph;
