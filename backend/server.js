import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
const port = process.env.PORT || 5000
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import path from 'path';
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
    connectDB();
    console.log("Connected to DB")
}catch (e) {
    console.log("Error connecting", e.message)
}

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, 'client/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}else{
    app.get('/', (req, res) => {
        res.send('Development Server is ready!');
    });
}



app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});