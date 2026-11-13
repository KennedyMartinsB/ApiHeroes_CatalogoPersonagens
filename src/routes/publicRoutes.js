import {Router} from "express";

const publicRouter =Router();

publicRouter.get('/', (req, res) => {
    res.send('Hello, this server is working!!!\n');
})

export default publicRouter