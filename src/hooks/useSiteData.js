import { useState, useEffect, useCallback } from 'react'
import { supabase, isSupabaseConfigured } from '../config/supabase'
import { defaultStats } from '../data/siteConfig'

// Hook que obtiene las métricas y contacto desde Supabase.
// Si Supabase no está configurado o falla, usa los valores por defecto.
export function useSiteData() {
  const [stats, setStats] = useState(defaultStats)
  const [contact, setContact] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async () => {
    if (!isSupabaseConfigured) {
      setLoading(false)
      return
    }

    try {
      const { data: statsData, error: statsError } = await supabase
        .from('site_stats')
        .select('*')
        .eq('active', true)

      if (!statsError && statsData && statsData.length > 0) {
        const mapped = { ...defaultStats }
        statsData.forEach(row => {
          mapped[row.key] = { value: row.value, label: row.label }
        })
        setStats(mapped)
      }

      const { data: contactData, error: contactError } = await supabase
        .from('site_contact')
        .select('*')
        .limit(1)
        .single()

      if (!contactError && contactData) {
        setContact(contactData)
      }
    } catch (err) {
      console.warn('Supabase fetch failed, using defaults:', err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { stats, contact, loading, refetch: fetchData }
}

// Hook para la página de admin: obtiene y actualiza stats/contact en Supabase
export function useAdminData() {
  const [stats, setStats] = useState(defaultStats)
  const [contactRaw, setContactRaw] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false)
      return
    }
    loadAll()
  }, [])

  const loadAll = async () => {
    setLoading(true)
    try {
      const { data: statsData } = await supabase.from('site_stats').select('*')
      if (statsData) {
        const mapped = { ...defaultStats }
        statsData.forEach(row => {
          mapped[row.key] = { value: row.value, label: row.label }
        })
        setStats(mapped)
      }

      const { data: contactData } = await supabase.from('site_contact').select('*').limit(1).single()
      if (contactData) setContactRaw(contactData)
    } catch (err) {
      console.warn('Load failed:', err.message)
    } finally {
      setLoading(false)
    }
  }

  const saveStats = async (newStats) => {
    if (!isSupabaseConfigured) {
      setStats(newStats)
      setMessage({ type: 'info', text: 'Supabase no configurado. Cambios aplicados localmente.' })
      setTimeout(() => setMessage(null), 3000)
      return
    }
    setSaving(true)
    try {
      for (const [key, val] of Object.entries(newStats)) {
        const { error } = await supabase
          .from('site_stats')
          .upsert({ key, value: val.value, label: val.label, active: true }, { onConflict: 'key' })
        if (error) throw error
      }
      setStats(newStats)
      setMessage({ type: 'success', text: 'Métricas guardadas correctamente.' })
    } catch (err) {
      setMessage({ type: 'error', text: `Error: ${err.message}` })
    } finally {
      setSaving(false)
      setTimeout(() => setMessage(null), 4000)
    }
  }

  const saveContact = async (newContact) => {
    if (!isSupabaseConfigured) {
      setContactRaw(newContact)
      setMessage({ type: 'info', text: 'Supabase no configurado. Cambios aplicados localmente.' })
      setTimeout(() => setMessage(null), 3000)
      return
    }
    setSaving(true)
    try {
      if (newContact.id) {
        const { error } = await supabase.from('site_contact').update({
          phone: newContact.phone,
          phone_raw: newContact.phone_raw,
          email: newContact.email,
          address_street: newContact.address_street,
          address_city: newContact.address_city,
          hours_days: newContact.hours_days,
          hours_time: newContact.hours_time,
          whatsapp: newContact.whatsapp,
        }).eq('id', newContact.id)
        if (error) throw error
      } else {
        const { error } = await supabase.from('site_contact').insert({
          phone: newContact.phone,
          phone_raw: newContact.phone_raw,
          email: newContact.email,
          address_street: newContact.address_street,
          address_city: newContact.address_city,
          hours_days: newContact.hours_days,
          hours_time: newContact.hours_time,
          whatsapp: newContact.whatsapp,
        })
        if (error) throw error
      }
      setContactRaw(newContact)
      setMessage({ type: 'success', text: 'Contacto guardado correctamente.' })
    } catch (err) {
      setMessage({ type: 'error', text: `Error: ${err.message}` })
    } finally {
      setSaving(false)
      setTimeout(() => setMessage(null), 4000)
    }
  }

  return { stats, contactRaw, loading, saving, message, saveStats, saveContact, refetch: loadAll }
}
