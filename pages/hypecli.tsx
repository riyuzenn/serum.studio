import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Terminal from "../components/terminal";

var term_data = [
  { index: 0, text: "# Hype CLI, a lightweight cli toolkit for creating commands.", },
  { index: 1, text: "# Built with pure Python 3.", },
  { index: 2, text: "# Lightweight and fast.", },
  { index: 3, text: "# Decorator based, easy to install.", },
  { index: 4, text: "pip install hypecli.", },
]

export default function Home() {
  return (
    <Terminal data={term_data} success_text={'hypecli is successfully installed.'} ></Terminal>
  )
}
