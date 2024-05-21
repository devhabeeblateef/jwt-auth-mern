import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT || 5000
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use('/api/users', userRoutes);
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})