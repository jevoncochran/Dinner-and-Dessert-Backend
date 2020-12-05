const db = require('../data/dbConfig');

module.exports = {
    addInquiry,
    getInquiries,
    findInquiryById
}

function addInquiry(inquiry) {
    return db('inquiries')
        .insert(inquiry)
        .then(ids => {
            const [id] = ids;
            return findInquiryById(id);
        })
}

function getInquiries() {
    return db('inquiries')
}

function findInquiryById(id) {
    return db('inquiries')
        .where({ id })
        .first()
}