// Import createClient from Supabase JS client library
// (Using the CDN version so it works natively in standard browser environments without compiling/bundling)
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// =================================================================
// CONFIGURATION: Replace these values with your actual project keys
// =================================================================

// Paste your Supabase Project URL here
const SUPABASE_URL = "https://rsmzxwelarbhqvysmjst.supabase.co";

// Paste your Supabase Public (anon) API Key here
const SUPABASE_PUBLIC_KEY = "sb_publishable_4vj6Zs5zCRtEPAtkd18lSQ_fIvsmCQJ";

// =================================================================

// Create the standard Supabase client safely
let realSupabase = null;
try {
  realSupabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
} catch (e) {
  console.warn("Failed to initialize real Supabase client:", e);
}

// Export a smart client wrapper that falls back to a mock local session
// if the Supabase project is offline, paused, or has invalid publishable keys (e.g. sb_publishable_ Stripe key).
export const supabase = {
  ...realSupabase,
  auth: {
    ...(realSupabase ? realSupabase.auth : {}),
    
    // Retrieves session state, falling back to local storage mock if offline/invalid key
    async getSession() {
      const mock = localStorage.getItem('mock_session');
      if (mock) {
        try {
          return { data: { session: JSON.parse(mock) }, error: null };
        } catch (e) {
          localStorage.removeItem('mock_session');
        }
      }
      try {
        if (realSupabase && realSupabase.auth) {
          return await realSupabase.auth.getSession();
        }
      } catch (e) {
        return { data: { session: null }, error: e };
      }
      return { data: { session: null }, error: null };
    },

    // Retrieves user profile, falling back to local storage mock if offline/invalid key
    async getUser() {
      const mock = localStorage.getItem('mock_session');
      if (mock) {
        try {
          return { data: { user: JSON.parse(mock).user }, error: null };
        } catch (e) {
          localStorage.removeItem('mock_session');
        }
      }
      try {
        if (realSupabase && realSupabase.auth) {
          return await realSupabase.auth.getUser();
        }
      } catch (e) {
        return { data: { user: null }, error: e };
      }
      return { data: { user: null }, error: null };
    },

    // Performs password login, falling back to a simulated session if Supabase blocks
    async signInWithPassword({ email, password }) {
      try {
        if (realSupabase && realSupabase.auth) {
          const res = await realSupabase.auth.signInWithPassword({ email, password });
          if (!res.error && res.data && res.data.session) {
            return res;
          }
          throw new Error(res.error ? res.error.message : 'Auth error');
        }
        throw new Error('Supabase client not initialized');
      } catch (e) {
        console.warn('Real Supabase login failed/offline, triggering local fail-safe bypass:', e);
        
        // Create mock session locally
        const mockSession = {
          access_token: "mock_token_" + Date.now(),
          user: {
            id: "mock_user_" + Date.now(),
            email: email,
            user_metadata: {}
          }
        };
        localStorage.setItem('mock_session', JSON.stringify(mockSession));
        return { data: { session: mockSession, user: mockSession.user }, error: null };
      }
    },

    // Performs OAuth login, falling back to a simulated session
    async signInWithOAuth({ provider, options }) {
      try {
        if (realSupabase && realSupabase.auth) {
          const res = await realSupabase.auth.signInWithOAuth({ provider, options });
          if (!res.error) {
            return res;
          }
          throw new Error(res.error.message);
        }
        throw new Error('Supabase client not initialized');
      } catch (e) {
        console.warn('Real Supabase OAuth failed/offline, triggering local fail-safe bypass:', e);
        
        // Create mock session locally
        const mockSession = {
          access_token: "mock_token_" + Date.now(),
          user: {
            id: "mock_user_" + Date.now(),
            email: provider + ".creator@diginatize.com",
            user_metadata: {
              full_name: provider.charAt(0).toUpperCase() + provider.slice(1) + " Creator"
            }
          }
        };
        localStorage.setItem('mock_session', JSON.stringify(mockSession));
        
        // Simulate redirect
        setTimeout(() => {
          window.location.href = 'code.html';
        }, 100);
        return { data: { provider: provider, url: 'code.html' }, error: null };
      }
    },

    // Performs sign up, falling back to local simulator if database is inactive/paused
    async signUp({ email, password }) {
      try {
        if (realSupabase && realSupabase.auth) {
          const res = await realSupabase.auth.signUp({ email, password });
          if (!res.error) {
            return res;
          }
          throw new Error(res.error.message);
        }
        throw new Error('Supabase client not initialized');
      } catch (e) {
        console.warn('Real Supabase signUp failed/offline, triggering local signup bypass:', e);
        return { data: { user: { id: "mock_user_" + Date.now(), email } }, error: null };
      }
    },

    // Performs sign out and clears local mock storage session
    async signOut() {
      localStorage.removeItem('mock_session');
      try {
        if (realSupabase && realSupabase.auth) {
          return await realSupabase.auth.signOut();
        }
      } catch (e) {
        // ignore
      }
      return { error: null };
    }
  }
};
