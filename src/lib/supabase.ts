import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Clés Supabase manquantes dans les variables d\'environnement')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types pour les tables Supabase
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      transactions: {
        Row: {
          id: string
          created_at: string
          user_id: string
          amount: number
          from_currency: string
          to_currency: string
          status: 'pending' | 'completed' | 'failed'
          payment_method: string | null
          payment_details: Json | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          amount: number
          from_currency: string
          to_currency: string
          status?: 'pending' | 'completed' | 'failed'
          payment_method?: string | null
          payment_details?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          amount?: number
          from_currency?: string
          to_currency?: string
          status?: 'pending' | 'completed' | 'failed'
          payment_method?: string | null
          payment_details?: Json | null
        }
      }
      users: {
        Row: {
          id: string
          email: string
          created_at: string
          updated_at: string
          full_name: string | null
          avatar_url: string | null
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
          updated_at?: string
          full_name?: string | null
          avatar_url?: string | null
        }
      }
    }
  }
}