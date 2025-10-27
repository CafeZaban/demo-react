import React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import LanguageIcon from '@mui/icons-material/Language';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';

export default function About() {
  const { t, dir } = useLanguage();

  return (
    <Box dir={dir}>
      <Navbar />
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#f9fafb', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" fontWeight="bold" textAlign="center" gutterBottom>
            {t('about.title')}
          </Typography>
          <Typography variant="h5" textAlign="center" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            {t('about.subtitle')}
          </Typography>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                {t('about.missionTitle')}
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                {t('about.missionSubtitle')}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {t('about.missionDesc')}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, bgcolor: '#0052CC', color: 'white' }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {t('about.visionTitle')}
                </Typography>
                <Typography variant="body1">
                  {t('about.visionDesc')}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Competitive Advantage */}
      <Box sx={{ py: 8, bgcolor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            {t('about.competitiveAdvantage')}
          </Typography>
          <Typography variant="h5" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            {t('about.aiEngine')}
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
            {t('about.aiDesc')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <TrendingUpIcon sx={{ fontSize: 50, color: '#0052CC', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('about.learningGoals')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.learningGoalsDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <LanguageIcon sx={{ fontSize: 50, color: '#00A3BF', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('about.proficiencyLevels')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.proficiencyDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <EmojiObjectsIcon sx={{ fontSize: 50, color: '#FF6B6B', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('about.sharedInterests')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.sharedInterestsDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
                <AccessTimeIcon sx={{ fontSize: 50, color: '#FFAA4C', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('about.availability')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('about.availabilityDesc')}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Market Opportunity */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            {t('about.marketOpportunity')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                <Typography variant="h2" fontWeight="bold" color="primary" gutterBottom>
                  $20B+
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {t('about.marketSize')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('about.gigEconomy')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('about.gigEconomyDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('about.personalConnection')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('about.personalConnectionDesc')}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Target Audience */}
      <Box sx={{ py: 8, bgcolor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            {t('about.targetMarket')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
                  {t('about.students')}
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                  {t('about.studentsList').map((item, index) => (
                    <Typography key={index} component="li" variant="body1" paragraph>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom color="primary">
                  {t('about.teachers')}
                </Typography>
                <Box component="ul" sx={{ pl: 3 }}>
                  {t('about.teachersList').map((item, index) => (
                    <Typography key={index} component="li" variant="body1" paragraph>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Card>
            </Grid>
          </Grid>
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
            {t('about.joinMovement')}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            {t('about.joinSubtitle')}
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
            {t('about.learnMore')}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
