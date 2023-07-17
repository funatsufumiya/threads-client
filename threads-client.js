#!/usr/bin/env node
const { ThreadsAPI } = require('threads-api');
// read dotenv from script dir
require('dotenv').config({ path: __dirname + '/.env' });

const main = async () => {
  // if args are not provided or -h or --help is provided, print help
  // also show env information help
  if (process.argv.length < 3 || process.argv.includes('-h') || process.argv.includes('--help')) {
    console.log('Usage: threads-client.js <text>');
    console.log('');
    console.log('Environment variables:');
    console.log(`  THREADS_DEVICE_ID (optional): device id, ex: android-1234`);
    console.log(`  THREADS_USERNAME: Threads username`);
    console.log(`  THREADS_PASSWORD: Threads password`);
    return;
  }

  // const threadsAPI = new ThreadsAPI()
  // const token = (await threadsAPI.login()).token
  const threadsAPI = new ThreadsAPI({
    username: process.env.THREADS_USERNAME, // Your username
    password: process.env.THREADS_PASSWORD, // Your password
  });

  await threadsAPI.publish({
    // read from arg 0
    text: process.argv[2],
  });
};

main();