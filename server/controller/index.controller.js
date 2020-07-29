const express = require('express');
const Restaurant = require('../data/restaurants');
const app = express();
const listRestaurants = [];


app.post('/create', (req, res) => {
    try {
        if (Restaurant.put(req.body)) {
            return res.status(201).json({
                ok: true
            })
        }
        return res.status(400).json({
            ok: false,
            message: `${req.body.name} exists`
        });
    } catch (exc) {
        return res.status(500).json({
            ok: false,
            message: exc
        });
    }
});

app.get('/getRestaurants/:kindOfRestaurant?', (req, res) => {
    try {

        if (req.params.kindOfRestaurant) {
            return res.status(200).json({
                ok: true,
                result: Restaurant.get(req.params.kindOfRestaurant)
            })
        } else {
            return res.status(200).json({
                ok: true,
                result: Restaurant.get()
            })
        }
    } catch (exc) {
        return res.status(500).json({
            ok: false,
            message: exc
        });
    }
})


module.exports = app;