const db = require('../data/dbConfig');

module.exports = {
    getFullMenu,
    getTodaysMenu
}

function getFullMenu() {
    return db('menu_items')
}

function getTodaysMenu() {
    return db('menu_items')
        .where('available_today', 1)
}