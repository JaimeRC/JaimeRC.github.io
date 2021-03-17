import React from 'react';
import PropTypes from 'prop-types';
//import { useSelector } from 'react-redux';
import { styled, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({
    root: {
        marginTop: theme.spacing(6),
    },
    footer: {
        padding: theme.spacing(3, 0),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(8, 0),
        },
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        '& img': {
            width: 28,
            height: 22,
            marginRight: theme.spacing(1.5),
        },
    },
    list: {
        marginBottom: theme.spacing(4),
        '& h3': {
            fontWeight: theme.typography.fontWeightMedium,
        },
        '& ul': {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
        '& li': {
            padding: '6px 0',
            color: theme.palette.text.secondary,
        },
    },
    version: {
        marginTop: theme.spacing(3),
    },
    careers: {
        display: 'flex',
    },
});

const Badge = styled('span')(({ theme }) => ({
    alignSelf: 'center',
    padding: '1px 3px',
    backgroundColor: theme.palette.type === 'light' ? 'rgb(235, 87, 87)' : '#c55e5e',
    color: '#fff',
    borderRadius: 3,
    marginLeft: 6,
    fontSize: '10px',
    lineHeight: '1.3',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: '0.5px',
    display: 'inline-block',
}));

function AppFooter(props) {
    const { classes } = props;
   // const userLanguage = useSelector((state) => state.options.userLanguage);
   // const languagePrefix = userLanguage === 'en' ? '' : `/${userLanguage}`;
   // const t = useSelector((state) => state.options.t);

    return (
        <div className={classes.root}>
            <Divider />
            <Container maxWidth="md">
                <footer className={classes.footer}>
                    <Grid container>
                        <Grid item xs={12} sm={3}>
                            <div className={classes.logo}>
                                    Material-UI
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={3} className={classes.list}>
                            <Typography component="h2" gutterBottom>
                                {'footerCommunity'}
                            </Typography>
                            <ul>
                                <li>

                                        GitHub
                                </li>
                                <li>
                                        Twitter
                                </li>
                                <li>

                                        StackOverflow
                                </li>
                                <li>
                                        {'pages./discover-more/team'}
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={6} sm={3} className={classes.list}>
                            <Typography component="h2" gutterBottom>
                                {'footerResources'}
                            </Typography>
                            <ul>
                                <li>
                                        {'pages./getting-started/support'}
                                </li>
                                <li>
                                        {'blogTitle'}
                                </li>
                                <li>
                                        {'pages./components/material-icons'}
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={6} sm={3} className={classes.list}>
                            <Typography component="h2" gutterBottom>
                                {'footerCompany'}
                            </Typography>
                            <ul>
                                <li>
                                        About
                                </li>
                                <li>
                                        Contact Us
                                </li>
                                <li className={classes.careers}>
                                        Careers
                                        <Badge>hiring</Badge>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                    <Typography className={classes.version} color="textSecondary" variant="body2">

                        {' Copyright © '}
                        {new Date().getFullYear()}
                        {' Material-UI. '}
                    </Typography>
                </footer>
            </Container>
        </div>
    );
}

AppFooter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppFooter);
