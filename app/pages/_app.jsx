import {createTheme, ThemeProvider} from '@mui/material/styles';
import AppBar from '../components/appBar'
import Footer from '../components/footer'

const customTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#9abae6',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
});

function MyApp({Component, pageProps}) {
    return (
        <html lang="en">
        <ThemeProvider theme={customTheme}>
            <AppBar/>
            <Component {...pageProps} />
            <Footer/>
        </ThemeProvider>
        </html>
    )
}
export default MyApp;