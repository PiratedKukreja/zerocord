import * as dotenv from 'dotenv'
dotenv.config()

interface ConfigInterface {
    port?: number
}

const Config = {
    port: process.env.PORT
}

export default Config as ConfigInterface