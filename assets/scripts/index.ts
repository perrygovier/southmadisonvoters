import { watchFile } from "fs";

async function run() {
  await wait();
  console.log('hi');
}

async function wait() {
  return new Promise(async resolve => {
    await setTimeout(null, 100);
    resolve();
  });
}
