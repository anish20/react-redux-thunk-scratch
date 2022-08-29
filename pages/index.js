import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button,Stack } from 'react-bootstrap';
import UserForm from '../components/UserForm';
import Counter from '../components/Counter';

export default function Home() {
  return (
    <div className={styles.container}>
     {/* <UserForm /> */}
     <Counter />
    </div>
  )
}
