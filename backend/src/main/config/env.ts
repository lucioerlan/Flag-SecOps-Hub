export default {
  logLevel: process.env.LOG_LEVEL || 'debug',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/flag-secops-hub',
  dbName: process.env.DB_NAME || 'flag-secops-hub',
  port: parseInt(process.env.PORT || '5000', 10),
  jwtSecret: process.env.JWT_SECRET || 'er123lan_local',
  cookieSecret: process.env.COOKIE_SECRET || 'lu123cio_local'
}
