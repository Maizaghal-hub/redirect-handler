const express = require('express');
const app = express();

app.get('/redirect-handler', (req, res) => {
    const custom5 = req.query.custom5;

    let redirectUrl = 'https://xxar1z-kh.myshopify.com/collections'; // Default URL
    if (custom5 === 'extraverted') {
        redirectUrl = 'https://xxar1z-kh.myshopify.com/collections/extraverted';
    } else if (custom5 === 'introverted') {
        redirectUrl = 'https://xxar1z-kh.myshopify.com/collections/introverted';
    }

    res.redirect(redirectUrl);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
