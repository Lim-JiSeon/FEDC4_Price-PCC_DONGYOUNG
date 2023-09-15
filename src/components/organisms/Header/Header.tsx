'use client'

import { useState } from 'react'
import Link from 'next/link'
import Avatar from '@/components/atoms/Avatar'
import DarkModeButton from '@/components/atoms/DarkModeButton'
import ImageButton from '@/components/atoms/ImageButton'
import NotificationButton from '@/components/atoms/NotificationButton'
import SearchBar from '@/components/atoms/SearchBar'
import { Text } from '@/components/atoms/Text'
import ModalDropdownList from '@/components/molcules/ModalDropdownList'
import Assets from '@/config/assets'
import APP_PATH from '@/config/paths'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import './index.scss'

export default function Header() {
  const isLogin = useCurrentUser().isLoggedIn
  const [dropdownClick, setDropdownClick] = useState(false)
  const user = useCurrentUser().currentUser

  console.log(user)

  const handleDropdown = () => {
    setDropdownClick(!dropdownClick)
  }

  return (
    <div className="header-container color-bg--bg-1">
      <SearchBar />
      <div className="header-button-container">
        <NotificationButton />
        <DarkModeButton />
      </div>
      {isLogin ? (
        <div className="header-user-container">
          <Avatar
            src={user ? user.image : Assets.PCCImage}
            size={3}
            text={user ? user.fullName : '포청천'}
            textStyle={{
              fontWeight: 'bold',
              paddingLeft: '0.5rem',
            }}
          />
          <ImageButton
            size={1.5}
            src={Assets.ArrowBottomIcon}
            shape="square"
            onClick={handleDropdown}
          />
          {dropdownClick && <ModalDropdownList userId={user ? user._id : ''} />}
        </div>
      ) : (
        <div className="sign-container">
          <Link href={APP_PATH.login()} style={{ padding: '0 2rem' }}>
            <Text textStyle="subtitle1-bold" color="gray-3">
              로그인
            </Text>
          </Link>
          <Link href={APP_PATH.register()} style={{ padding: '0 0.5rem' }}>
            <Text textStyle="subtitle1-bold" color="gray-3">
              회원가입
            </Text>
          </Link>
        </div>
      )}
    </div>
  )
}
