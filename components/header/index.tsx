import {  Button, useTheme } from '@geist-ui/react';
import * as Icons from 'react-feather';
import { usePrefers } from '../../libs/use-prefers';
import style from './header.module.css';
import Link from 'next/link';
import { useState } from 'react'
import { useRouter } from 'next/router'
import Logo from '../logo';
import Sticky from '../../libs/sticky';

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
      <header className={style.header}>
        <Link href="/">
          <a className={style.logo} aria-label="Hyper logo">
            <Logo fill={`${theme.palette.foreground}`} height={31} width={32} />
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
            <div>
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
          <Icons.Menu />
        </span>
      </header>

      <nav
        className={`${style.mobileNav} ${mobileNavShown ? style.active : ''}`}
      >
        <Link href="/plugins">
          <a>Plugins</a>
        </Link>
        <Link href="/themes">
          <a>Themes</a>
        </Link>
        <Link href="/store/submit">
          <a>Submit</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        
      </nav>
    </Sticky>
  )
}

export default Header;
