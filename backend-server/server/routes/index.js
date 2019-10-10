const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/cursos', async (req, res) => {
    try{
        let results = await db.allCourses();
        res.json(results);

    }catch(e){
        console.log(e);
        res.sendStatus(500);

    }
});


module.exports = router;