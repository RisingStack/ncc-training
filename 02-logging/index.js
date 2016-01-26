'use strict'

const logger = require('winston')
logger.level = process.env.LOG_LEVEL

logger.silly('hellooooo')
logger.debug('value of something = ')
logger.info('printing something')
