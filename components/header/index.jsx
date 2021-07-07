import {  Button, useTheme, Image } from '@geist-ui/react';
import * as Icons from 'react-feather';
import { usePrefers } from '../../libs/use-prefers';
import style from './header.module.css';
import Link from 'next/link';
import { ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import Logo from '../logo';
import Sticky from 'wil-react-sticky';
import Menu from '../icons/menu';
import React from 'react';


const ActiveLink = ({ href, children}) => {
  const { pathname } = useRouter()

  return (
    <Link href={href}>
      <a
        className={`${style.link} ${
          pathname.split('/')[1] === href.split('/')[1] ? style.active : ''
        }`}
      >
        {children}
      </a>
    </Link>
  )
}

const Header = () => {
  const [mobileNavShown, setMobileNavShown] = useState(false)
  const theme = useTheme();
  const prefers = usePrefers();
  const toggle = () => setMobileNavShown(!mobileNavShown)

  return (
    <Sticky>
      <header className={style.header} style={{ backgroundColor: `${theme.palette.background}` }}>
        <Link href="/">
          <a className={style.logo} aria-label="Serum Logo">
            {/* <Logo fill={`${theme.palette.foreground}`} height={24} width={24} /> */}
            <Image src="serum.svg" width={24} />
          </a>
        </Link>

        <nav className={style.desktopNav}>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/projects">Projects</ActiveLink>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/serumstudio"
            className={style.link}
          >
            GitHub
          </a>
          <ActiveLink href="/download">Download</ActiveLink>
          <ActiveLink href="/blog">Blog</ActiveLink>
        </nav>

        <div className={style.rightNav}>
            <div className={style.btn_toggle}>
              <Button
                aria-label="Toggle Dark mode"
                auto
                type="abort"
                onClick={() => prefers.switchTheme(theme.type === 'dark' ? 'light' : 'dark')}
              >
                {theme.type === 'dark' ? <Icons.Sun size={16} /> : <Icons.Moon size={16} />}
              
              </Button>
            </div>
            
        </div>

        <span className={style.toggle} onClick={toggle}>
          <Menu fill={`${theme.palette.foreground}`} />
        </span>
      </header>

      <nav
        className={`${style.mobileNav} ${mobileNavShown ? style.active : ''}`}
      >
        <Link href="/home">
          <a>Home</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/serumstudio"
            className={style.link}
          >
            GitHub
        </a>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
    </Sticky>
  )
}

export default Header;
