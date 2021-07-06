import {  Button, useTheme } from '@geist-ui/react';
import * as Icons from 'react-feather';
import { usePrefers } from '../../libs/use-prefers';
import style from './header.module.css';
import Link from 'next/link';
import { useState } from 'react'
import { useRouter } from 'next/router'

const ActiveLink = ({ href, children }) => {
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
    <>
      <header className={style.header}>
        <Link href="/">
          <a className={style.logo} aria-label="Hyper logo">
            {/* <Logo width={31} height={23} /> */}
          </a>
        </Link>

        <nav className={style.desktopNav}>
          <ActiveLink href="/plugins">Plugins</ActiveLink>
          <ActiveLink href="/themes">Themes</ActiveLink>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/vercel/hyper"
            className={style.link}
          >
            GitHub
          </a>
          <ActiveLink href="/#installation">Download</ActiveLink>
          <ActiveLink href="/blog">Blog</ActiveLink>
        </nav>

        <div className={style.rightNav}>
            <Button
              aria-label="Toggle Dark mode"
              className={style.vercel}
              auto
              type="abort"
              onClick={() => prefers.switchTheme(theme.type === 'dark' ? 'light' : 'dark')}
            >
              {theme.type === 'dark' ? <Icons.Sun size={16} /> : <Icons.Moon size={16} />}
          </Button>
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
    </>
  )
}

export default Header;

// const Menu: React.FC = () => {
//   const theme = useTheme();
//   const prefers = usePrefers();

//   return (
//     <>
      
//       <nav className="menu-nav">
//         <h1 className="menu-nav__title">Serum Studio</h1>
//         <div>
//           <Button
//             aria-label="Toggle Dark mode"
//             className="theme-button"
//             auto
//             type="abort"
//             onClick={() => prefers.switchTheme(theme.type === 'dark' ? 'light' : 'dark')}
//           >
//             {theme.type === 'dark' ? <Icons.Sun size={16} /> : <Icons.Moon size={16} />}
//           </Button>
//         </div>
//       </nav>
//       <style jsx>{`
//         .menu-nav {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: ${theme.layout.pageWidthWithMargin};
//           max-width: 100%;
//           margin: 0 auto;
//           padding: 0 ${theme.layout.pageMargin};
//           background-color: ${theme.palette.background};
//           font-size: 16px;
//           height: 54px;
//           box-sizing: border-box;
//         }
//         .menu-nav__title {
//           font-size: 1rem;
//           font-weight: 500;
//           margin: 0;
//           letter-spacing: 0;
//         }
//         .menu-nav > div {
//           display: flex;
//           align-items: center;
//         }
//         .menu-nav :global(.theme-button) {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 2.25rem;
//           height: 2.25rem;
//           padding: 0;
//           margin: 0 ${theme.layout.gapHalf};
//         }
//         .user-settings__button {
//           border: none;
//           background: none;
//           padding: 0;
//           margin: 0;
//           appearance: none;
//           cursor: pointer;
//         }
//         :global(.user-settings__popover) {
//           width: 180px !important;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Menu;