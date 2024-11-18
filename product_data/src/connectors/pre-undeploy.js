import { createApiRoot } from '../clients/create.client.js';

async function preUndeploy() {
  const apiRoot = createApiRoot();
}

async function run() {
  try {
    await preUndeploy();
  } catch (error) {
    process.stderr.write(`Pre-undeploy failed: ${error.message}\n`);
    process.exitCode = 1;
  }
}

run();
