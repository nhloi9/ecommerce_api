import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin/auth.js';

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

//routes

// mongodb connection
//mongodb+srv://root:<password>@cluster0.8pl1w.mongodb.net/<dbname>?retryWrites=true&w=majority

app.use('/api', authRoutes);
app.use('/api', adminRoutes);

app.listen(process.env.PORT, async () => {
	await mongoose
		.connect(
			`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@ccluster0.zlc7gwi.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				// useCreateIndex: true,
			}
		)
		.then(() => {
			console.log('Database connected');
		});

	console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
