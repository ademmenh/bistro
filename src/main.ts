
import express from 'express'
import {initServer} from './config/init'

export const app = express()

initServer()