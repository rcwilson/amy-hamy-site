import '@styles/globals.css'
//import 'bootstrap/dist/css/bootstrap.css';
import 'styles/custom.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react'

function Application({ Component, pageProps }) {
  useEffect(()=>{
    import('bootstrap/dist/js/bootstrap');
  },[]);
  return <Component {...pageProps} />
}

export default Application 
