import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors())
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send("Hello from DALL-E!");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})