import * as dotenv from 'dotenv'
dotenv.config()

const { E2E_USER_NAME, E2E_PASSWORD, E2E_EMAIL } = process.env

export const USER_NAME: any = E2E_USER_NAME
export const PASSWORD: any = E2E_PASSWORD
export const EMAIL: any = E2E_EMAIL
