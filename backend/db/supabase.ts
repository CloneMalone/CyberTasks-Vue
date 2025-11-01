import { createClient } from "@supabase/supabase-js";
import { AppError } from "../errors/AppError";

// Create database client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new AppError('Missing Supabase environment variables', 500);
}

export const supabase = createClient(supabaseUrl, supabaseKey);
