import mongoose from 'mongoose'
import config from '../config'

mongoose.connection.on('connected', () => {
  console.log('db is connected')
}) // покажет подключили или нет

mongoose.connection.on('error', (err) => {
  console.log('db is error', err)
  process.exit(1) // самы полохой исход
}) // покажет ошибку

exports.connect = async (mongoURL = config.mongoURL) => {
  mongoose.connect(mongoURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  return mongoose.connect
}

