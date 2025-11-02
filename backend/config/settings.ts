import 'dotenv/config';

export const CONFIG = {
    "PORT": process.env.PORT,
    "SUPABASE_URL": process.env.SUPABASE_URL,
    "SUPABASE_KEY": process.env.SUPABASE_KEY,
    "SUPABASE_TASKS_TABLE": process.env.SUPABASE_TASKS_TABLE
}