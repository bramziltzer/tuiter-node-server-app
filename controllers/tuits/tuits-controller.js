// import posts from "./tuits.js";
import * as tuitsDao from "./tuits-dao.js";
// let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    newTuit.liked = false;
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}

// const createTuit = (req, res) => {
//     const newTuit = req.body;
//     newTuit._id = (new Date()).getTime()+'';
//     newTuit.likes = 0;
//     newTuit.liked = false;
//     tuits.push(newTuit);
//     res.json(newTuit);
// }

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}
// const findTuits = (req, res) =>
//     res.json(tuits);

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitIdToUpdate,
            updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao
        .deleteTuit(tuitIdToDelete);
    res.json(status);
}

// const deleteTuit = (req, res) => {
//     const tuitdIdToDelete = req.params.tid;
//     tuits = tuits.filter((t) =>
//         t._id !== tuitdIdToDelete);
//     res.sendStatus(200);
// }


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
