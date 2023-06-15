import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseUrl = 'https://kbwanqaegzunyhtgjtdm.supabase.co';
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtid2FucWFlZ3p1bnlodGdqdGRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY3NzQ1MzUsImV4cCI6MjAwMjM1MDUzNX0.bXaRkmgj3qa1o-252bx2RHhKrOM_s0Elr6GIOVM0GV8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
