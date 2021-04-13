function allFinally(promises: Promise<any>[]) {
  return new Promise(resolve => {
    const tempPromises = promises.map(item => item.catch(() => Promise.resolve(null)))
    Promise.all(tempPromises).then(resolve)
  })
}