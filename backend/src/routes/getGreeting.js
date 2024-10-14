const GREETING = 'Halo! Saya Jaka Adi Baskara';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
