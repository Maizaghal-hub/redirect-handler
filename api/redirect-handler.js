module.exports = (req, res) => {
    const custom5 = req.query.custom5;

    // Default Shopify URL
    let redirectUrl = 'https://xxar1z-kh.myshopify.com/collections';
    if (custom5 === 'extraverted') {
        redirectUrl = 'https://xxar1z-kh.myshopify.com/collections/extraverted';
    } else if (custom5 === 'introverted') {
        redirectUrl = 'https://xxar1z-kh.myshopify.com/collections/introverted';
    }

    // Redirect the user
    res.redirect(redirectUrl);
};
