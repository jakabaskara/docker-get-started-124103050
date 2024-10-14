const GREETING = 'Halo! Saya Jaka';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
