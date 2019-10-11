// Modern JS test
(async (a=1, ...b) => ({ ...b, a, [a]: `${a}` })) ()

// New promise APIs
util.promisify
require('fs').promises
