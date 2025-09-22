// utils/supabase/server.ts
import { createClient as createServerClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const createClient = () => {
  // For server components / API routes
  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    global: {
      fetch,
    },
  });

  return supabase;
};
