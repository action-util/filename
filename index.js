const core = require('@actions/core');
const github = require('@actions/github');

try {
  const dirty = core.getInput('dirty');
  console.log(`dirty: “${dirty}”`);
  const clean = dirty.replace(/[\\\/':<>|*?]/g, '_');
  core.setOutput("clean", clean);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
