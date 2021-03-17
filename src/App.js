import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import AppAppBar from "./view/AppAppBar";
import ProductHero from "./view/ProductHero";
import ProductValues from "./view/ProductValues";
import ProductCategories from "./view/ProductCategories";
import ProductHowItWorks from "./view/ProductHowItWorks";
import ProductCTA from "./view/ProductCTA";
import ProductSmokingHero from "./view/ProductSmokingHero";
import AppFooter from "./view/AppFooter";

const App = () => (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
        <AppAppBar />
        <ProductHero />
        <ProductValues />
        <ProductCategories />
        <ProductHowItWorks />
        <ProductCTA />
        <ProductSmokingHero />
        <AppFooter />
    </ThemeProvider>
)
export default App
