const express = require('express');
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser');
const fs = require('fs')
const app = express();
const port = 9001;

app.use('/static', express.static('static'))
app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(bodyParser.json())
app.post('/download', async (req, res) => {
    const { link } = req.body
    if (!link || link === undefined) return res.end()
    const imageResponse = await axios.get(link, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(imageResponse.data, 'binary');
    res.setHeader('Content-Disposition', `attachment; filename="dw-image.jpg"`);
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
});

app.listen(port, () => console.log(`Express app running on port ${port}!`));