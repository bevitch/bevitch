module.exports = {
  testPathForConsistencyCheck: 'some/example.test.js',
  resolveSnapshotPath: (testPath, ext) => testPath.replace(/\.spec\.([tj]sx?)/, `${ext}.$1`),
  resolveTestPath: (filePath, ext) => filePath.replace(ext, '.spec')
};