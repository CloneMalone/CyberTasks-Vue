import { createClient } from "@supabase/supabase-js";
import { AppError } from "../errors/AppError";
import { CONFIG } from "../config/settings";

// Create database client
const supabaseUrl = CONFIG.SUPABASE_URL;
const supabaseKey = CONFIG.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
	throw new AppError('Error configuring Database client', 500);
}

export const supabase = createClient(supabaseUrl, supabaseKey);
