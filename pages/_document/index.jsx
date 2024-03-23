import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming your main App component is in App.tsx
import {ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import Document, {Html, Head, Main, NextScript} from 'next/document';

const theme = createTheme();

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Your other head elements */}
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

