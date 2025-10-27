import React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';

export default function Pricing() {
  const { t, dir } = useLanguage();

  return (
    <Box dir={dir}>
      <Navbar />
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#f9fafb', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" fontWeight="bold" textAlign="center" gutterBottom>
            {t('pricing.title')}
          </Typography>
          <Typography variant="h5" textAlign="center" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            {t('pricing.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Pricing Cards for Students */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            {t('pricing.forStudents')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', p: 4, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {t('pricing.free')}
                  </Typography>
                  <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
                    $0
                    <Typography component="span" variant="h6" color="text.secondary">
                      {t('pricing.perMonth')}
                    </Typography>
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {t('pricing.greatStart')}
                  </Typography>
                  <List>
                    {t('pricing.freeFeatures').map((feature, index) => (
                      <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button variant="outlined" size="large" fullWidth sx={{ mt: 3 }}>
                    {t('pricing.startNow')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  p: 4,
                  boxShadow: 6,
                  border: '2px solid',
                  borderColor: 'primary.main',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: -16,
                    right: 24,
                    bgcolor: 'primary.main',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  <StarIcon fontSize="small" />
                  <Typography variant="body2" fontWeight="bold">
                    {t('pricing.popular')}
                  </Typography>
                </Box>
                <CardContent>
                  <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {t('pricing.premium')}
                  </Typography>
                  <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
                    $10
                    <Typography component="span" variant="h6" color="text.secondary">
                      {t('pricing.perMonth')}
                    </Typography>
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {t('pricing.seriousLearners')}
                  </Typography>
                  <List>
                    {t('pricing.premiumFeatures').map((feature, index) => (
                      <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button variant="contained" size="large" fullWidth sx={{ mt: 3 }}>
                    {t('pricing.upgrade')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Teacher Pricing */}
      <Box sx={{ py: 8, bgcolor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            {t('pricing.forTeachers')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>
              <Card sx={{ p: 4, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
                    {t('pricing.commissionModel')}
                  </Typography>
                  <Box sx={{ textAlign: 'center', my: 4 }}>
                    <Typography variant="h2" fontWeight="bold" color="primary">
                      15%
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {t('pricing.commission')}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" paragraph textAlign="center">
                    {t('pricing.commissionDesc')}
                  </Typography>
                  <List>
                    {t('pricing.teacherFeatures').map((feature, index) => (
                      <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Button variant="contained" size="large" fullWidth sx={{ mt: 3 }}>
                    {t('pricing.joinAsTeacher')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Lesson Pricing Example */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            {t('pricing.lessonPricing')}
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
            {t('pricing.lessonPricingDesc')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {t('pricing.communityTutor')}
                </Typography>
                <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
                  $8-15
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('pricing.perHour')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {t('pricing.professionalTeacher')}
                </Typography>
                <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
                  $15-30
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('pricing.perHour')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {t('pricing.expertSpecialized')}
                </Typography>
                <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
                  $30-50+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('pricing.perHour')}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: 8, bgcolor: '#f9fafb' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            {t('pricing.faq')}
          </Typography>
          <Box sx={{ mt: 4 }}>
            {t('pricing.faqItems').map((item, index) => (
              <Card key={index} sx={{ mb: 2, p: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.question}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.answer}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #0052CC 0%, #00A3BF 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
            {t('pricing.readyToStart')}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            {t('pricing.readySubtitle')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: '#0052CC',
              '&:hover': { bgcolor: '#f0f0f0' },
              px: 6,
              py: 2,
              fontSize: '1.1rem',
            }}
          >
            {t('pricing.getStarted')}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
