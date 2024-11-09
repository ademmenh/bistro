
import express from 'express'

declare namespace Express {
    interface Request {
        body?: Filter,
    }   
}
