const prompt = require('prompt-sync')();
const path = require('path');
const fs = require('fs');
const Assets = require('./server/models/assetModel');

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const DB = process.env.MONGODB_URI;

const inc = 500;

const upload = async (start, finish, max, asset, category, symbol) => {
  const data = asset.slice(start, finish).map(item => {
    return {
      timestamp: new Date(item.date + ' ' + item.time),
      //        symbol: symbol,
      //        category: category,
      //        source: 'metaquotes',
      metadata: { source: 'metaquotes', category: category, symbol: symbol },
      values: {
        open: item?.open,
        high: item?.high,
        low: item?.low,
        close: item?.close,
        tickvol: item?.tickvol,
        vol: item?.vol,
        spread: item?.spread
      }
    };
  });

  let increase = 0;

  try {
    await Assets.insertMany([...data]).then(
      data => {
        if (data) {
          increase = inc;

          console.clear();

          console.log('Category ', category);
          console.log('Asset ', symbol);

          console.log(
            'Percentage: ',
            Number((finish / max).toFixed(10)) * 100,
            ' % '
          );
        }
      },
      err => {
        if (err) {
          console.clear();

          console.log('Category ', category);
          console.log('Asset ', symbol);

          console.log('An error occured');

          console.log(err?.message);

          console.log('Reloading');

          console.log('Percentage: ', Number(finish / max) * 100, ' % ');
        }
      }
    );

    if (finish >= max) {
      console.log('upload complete');
      process.exit(1);
    }

    await upload(
      start + increase,
      finish + increase <= max ? finish + increase : max,
      max,
      asset,
      category,
      symbol
    );
  } catch (err) {
    //console.log(err)
  }
};

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);

  const assetType = prompt('Asset Type (Crypto | Forex | Metals):  ');
  const asset = prompt('Asset (ETHBTC | EURUSD | XAGUSD):  ');

  console.log(assetType);

  console.log(asset);

  const file = path.join(
    __dirname,
    '/sampleData/',
    assetType.toLowerCase(),
    '/',
    asset.toUpperCase() + '.json'
  );

  try {
    const data = fs.readFileSync(file, 'utf8');

    const length = data.length;

    upload(
      0,
      inc,
      length,
      JSON.parse(data),
      assetType.toLowerCase(),
      asset.toUpperCase()
    );
  } catch (err) {
    console.error(err);
  }
});

// const db = mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log('DB connection successful!');
//     console.log(
//       `Connected to MongoDB ${db.name} . ${db.collection} at ${db.host}:${db.port}`
//     );

//     const assetType = prompt('Asset Type (Crypto | Forex | Metals):  ');
//     const asset = prompt('Asset (ETHBTC | EURUSD | XAGUSD):  ');

//     console.log(assetType);

//     console.log(asset);

//     const file = path.join(
//       __dirname,
//       '/sampleData/',
//       assetType.toLowerCase(),
//       '/',
//       asset.toUpperCase() + '.json'
//     );

//     try {
//       const data = fs.readFileSync(file, 'utf8');

//       const length = data.length;

//       upload(
//         0,
//         inc,
//         length,
//         JSON.parse(data),
//         assetType.toLowerCase(),
//         asset.toUpperCase()
//       );
//     } catch (err) {
//       console.error(err);
//     }
//   });
