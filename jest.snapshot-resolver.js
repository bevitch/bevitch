module.exports = {
  testPathForConsistencyCheck: 'some/example.spec.ts',
  resolveSnapshotPath: (testPath) => testPath.replace(/\.spec\.([tj]sx?)/, '.snap.js'),
  resolveTestPath: (filePath) => filePath.replace('.snap.js', '.spec.ts')
};