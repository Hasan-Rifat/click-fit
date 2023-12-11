/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';
import { Stripe } from 'stripe';
dotenv.config({ path: path.join(process.cwd(), '.env') });
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
