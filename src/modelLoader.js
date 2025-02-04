const tf = require('@tensorflow/tfjs-node');

let model;

const options = { 
  modelPath: './model/default-f16/model.json',
};
async function loadModel() {
  await tf.ready();
  model = await tf.loadGraphModel(options.modelPath);
  return model;
}

function getModel() {
  if (!model) {
    throw new Error('Model has not been loaded yet. Call loadModel() first.');
  }
  return model;
}

module.exports = {
  loadModel,
  getModel,
};