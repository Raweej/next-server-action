import { supabaseKey, supabaseUrl } from "@/config/supabase";
import { createBrowserClient } from "@supabase/ssr";

export const createSupabaseClient = () => {
  return createBrowserClient(supabaseUrl, supabaseKey);
};
