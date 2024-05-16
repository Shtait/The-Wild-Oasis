import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bnhvcfkxefyutyngeolc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuaHZjZmt4ZWZ5dXR5bmdlb2xjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNzg0NjAsImV4cCI6MjAzMDc1NDQ2MH0.X5WbZxIo9yaJ61rKMT5FX3TQcYfJcgUhtNMDcgZqCuU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
