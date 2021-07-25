import '../css/new.css'
import '../css/sarada.css'


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)
    
    return getLayout(<Component {...pageProps} />)
}
  