/* ===================================================================
   CONFIGURAÇÃO DO SUPABASE — Shinobi no Sho
   Usado por index.html, ficha.html e home.html.
   NÃO tem segredo aqui: a "anon key" é feita pra ficar pública no
   navegador — quem protege os dados de verdade é o RLS (Row Level
   Security) configurado no banco.
   =================================================================== */
const SUPABASE_URL = "https://mtwxvapyeuosaqkicifw.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Mt4QRjaIlqWNSIuYk-Vxpg_UMHE5NiW";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
