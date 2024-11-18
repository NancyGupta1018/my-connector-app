import { createApiRoot } from '../clients/create.client.js';

async function postDeploy(properties) {
  const apiRoot = createApiRoot();
  
}

async function run() {
  try {
    const properties = new Map(Object.entries(process.env));
    await postDeploy(properties);
  } catch (error) {
    process.stderr.write(`Post-deploy failed: ${error.message}\n`);
    process.exitCode = 1;
  }
}

run();
