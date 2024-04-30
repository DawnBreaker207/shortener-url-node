import express from 'express';

import Url from '../models/Url.js';
const indexRouter = express.Router();

indexRouter.get('/:urlId', async (req, res) => {
  try {
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      await Url.updateOne(
        {
          urlId: req.params.urlId,
        },
        {
          $inc: { clicks: 1 },
        }
      );
    } else res.status(404).json('Not Found');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});
export default indexRouter;
