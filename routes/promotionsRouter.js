const express = require('express');
const promotionsRouter = express.Router();

promotionsRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next()
})
.get((req, res) => {
    res.end('Will send all promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotion: ${req.body.name} with the description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

promotionsRouter.route('/:promotionsId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the promotion: ${req.params.promotionsId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation is not suppored on promotions/${req.params.promotionsId}`);
})
.put((req, res) => {
    res.write(`Updating the promotion: ${req.params.promotionsId}\n`);
    res.end(`Will update the promotion: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting promotion: ${req.params.promotionsId}`)
})

module.exports = promotionsRouter;