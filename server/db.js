const mongoose = require('mongoose');
// const mongoURI =  "mongodb://root:xwlbEADhMbQlBPP91Egz0Ysu@127.0.0.1:27017";
const mongoURI =  "mongodb://root:xwlbEADhMbQlBPP91Egz0Ysu@172.21.1.48:27017";

const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 3;
    const count = retryCount ?? 0;
    mongoose.set("strictQuery", true);
    try {
        await mongoose.connect(mongoURI, { dbName: 'stayhealthybeta1'});
        console.info('Connected to Mongo Successfully')

        return;
    } catch (error) {
        console.error(error);

        const nextRetryCount = count + 1;

        if (nextRetryCount >= MAX_RETRIES) {
            throw new Error('Unable to connect to Mongo!');
        }

        console.info(`Retrying, retry count: ${nextRetryCount}`)

        return await connectToMongo(nextRetryCount);

    }
};

module.exports = connectToMongo;