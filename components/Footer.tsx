import React from 'react';
import { Grid, Typography, Link as MuiLink, Box, Container } from '@mui/material';
import Image from 'next/image';
import { footerLinks } from '@/constants';

const Footer = async () => {
   
    return (
        <footer className="border-t border-gray-100">
            <Container maxWidth="xl" component="footer" sx={{ py: 5 }}>
                <Grid container spacing={5} justifyContent="space-between" alignItems="flex-start">
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                            <Image src="/muivoo_logo.png" alt="muivoo ke logo" width={118} height={18} className="object-contain" />
                            <h3 color="text.secondary">
                                MuivooKe 2023 <br />
                                All Rights Reserved &copy;
                            </h3>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Grid container spacing={2}>
                            {footerLinks.map((link) => (
                                <Grid item key={link.title}>
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                                            {link.title}
                                        </Typography>
                                        {link.links.map((item, index) => (
                                            <MuiLink
                                                key={item.title}
                                                href={item.url}
                                                color="text.secondary"
                                                sx={{ display: 'block', marginBottom: index < link.links.length - 1 ? 1 : 0 }}
                                            >
                                                {item.title}
                                            </MuiLink>
                                        ))}

                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <MuiLink href="" color="text.secondary">
                                Terms of Use
                            </MuiLink>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;


