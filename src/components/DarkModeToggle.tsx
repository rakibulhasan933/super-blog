"use client"
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <select value={theme} className='px-2 font-semibold bg-transparent rounded-md ' onChange={e => setTheme(e.target.value)}>
      <option className='font-medium rounded-md' value="system">System</option>
      <option className='font-medium rounded-md' value="dark">Dark</option>
      <option className='font-medium rounded-md' value="light">Light</option>
    </select>
  )
}

export default DarkModeToggle