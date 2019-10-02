export const select = (key) => (callback) => (dataIn) => callback(dataIn[key])
