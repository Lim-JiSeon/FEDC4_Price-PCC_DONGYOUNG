'use client'

import { useState } from 'react'
import Cookies from 'js-cookie'
import Assets from '@/config/assets'
import { useDarkmode } from '@/hooks/useDarkmode'
import ImageButton from '../ImageButton'

export default function DarkModeButton() {
  const { darkMode } = useDarkmode()
  const [isDark, setIsDark] = useState(darkMode)
  const handleDarkmodeClick = () => {
    document.body.classList.toggle('pcc-theme--light')
    document.body.classList.toggle('pcc-theme--dark')
    Cookies.set('pcc-darkmode', JSON.stringify(!isDark))
    setIsDark(!isDark)
  }
  return (
    <ImageButton
      size={3}
      src={isDark ? Assets.LIGHTMODE_SVG_PATH : Assets.DARKMODE_SVG_PATH}
      alt={`${isDark ? 'dark' : 'light'} mode button`}
      onClick={handleDarkmodeClick}
    />
  )
}
