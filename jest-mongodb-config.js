module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '4.3.2',
      skipMD5: true
    },
    autoStart: false
  }
}