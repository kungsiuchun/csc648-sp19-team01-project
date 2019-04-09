const db = require('../config/database');

// controller for route; GET `/listings`
module.exports.list = (req, res) => {
    // express populates value in req.query from URL; `/listings?type=TYPE&query=SEARCH_QUERY`
    let type = req.query.type;
    let query = req.query.query;
    let q = `SELECT * FROM listings`;
    if (type && query) {
        q = `SELECT * FROM listings WHERE type = '${type}' AND (title LIKE '%${query}%' OR address LIKE '%${query}%')`;
    } else if (!type && query) {
        q = `SELECT * FROM listings WHERE title LIKE '%${query}%' OR address LIKE '%${query}%'`;
    } else if (type && !query) {
        q = `SELECT * FROM listings WHERE type = '${type}'`;
    }
    db.any(q)
        .then(data => {
            res.render('listings', {
                listings: data
            });
        })
        .catch(err => res.send(`Error retrieving listings; ${err}`));
};

// controller for route; GET `/listings/add`
module.exports.add = (req, res) => {
    res.render('add', {});
};

// controller for route; POST `/listings/add`
// thumbnail upload is stored locally in /public/thumbnails/
// faster than BLOB and much smaller size
module.exports.addNew = (req, res) => {
    db.one(`INSERT INTO listings(title, address, beds, baths, rent, distance, type, created, thumbnail) 
            VALUES($1, $2, $3, $4, $5, $6, $7, now(), $8) RETURNING id`,
        [req.body.title, req.body.address, req.body.beds, req.body.baths,
            req.body.rent, req.body.distance, req.body.type, req.file.filename])
        .then(() => {
            res.redirect('/listings');
        })
        .catch(err => res.send(`Error creating listing; ${err}`));
};