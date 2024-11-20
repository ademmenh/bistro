
export {}

declare global {
  namespace Express {
    interface Request {
      language?: {name: string},
      user?: {name: string},
    }
  }
}
