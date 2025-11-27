import { createClient } from '@supabase/supabase-js';

// GANTI DENGAN URL & ANON KEY DARI DASHBOARD SUPABASE ANDA
// Settings -> API
const SUPABASE_URL = 'https://lechiyyceexvbwehgelc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlY2hpeXljZWV4dmJ3ZWhnZWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQxNjExMTIsImV4cCI6MjA3OTczNzExMn0.17D8ybxz43Xxm78s1OX3vb6fjMvWlODhyU_DzIlVsnQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
