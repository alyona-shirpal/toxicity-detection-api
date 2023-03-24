const router = require('express').Router();
const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');
const toxicity = require('@tensorflow-models/toxicity');

router.post('/toxicity', async (req, res, next) => {
  const threshold = 0.9;

  const labelsToInclude = ['identity_attack',
    'insult',
    'obscene',
    'severe_toxicity',
    'sexual_explicit',
    'threat',
    'toxicity'
  ];

  const model = await toxicity.load(threshold, labelsToInclude);

  const input = req.body.text;
  const predictions = await model.classify(input);

  res.json(predictions);
});

module.exports = router;
