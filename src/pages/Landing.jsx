import React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';

export default function Landing() {
  const { t, dir } = useLanguage();

  return (
    <Box dir={dir}>
      <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0052CC 0%, #00A3BF 100%)',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
            {t('landing.title')}
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.95 }}>
            {t('landing.tagline')}
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, maxWidth: 800, mx: 'auto', opacity: 0.9 }}>
            {t('landing.subtitle')}
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: '#0052CC',
                '&:hover': { bgcolor: '#f0f0f0' },
                px: 4,
                py: 1.5,
              }}
            >
              {t('landing.startStudent')}
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': { borderColor: '#f0f0f0', bgcolor: 'rgba(255,255,255,0.1)' },
                px: 4,
                py: 1.5,
              }}
            >
              {t('landing.joinTeacher')}
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Problem Section */}
      <Box sx={{ py: 8, bgcolor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" fontWeight="bold" gutterBottom>
            {t('landing.problemTitle')}
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
            {t('landing.problemSubtitle')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {t('landing.forStudents')}
                  </Typography>
                  <Box component="ul" sx={{ pl: 3 }}>
                    {t('landing.studentProblems').map((problem, index) => (
                      <Typography key={index} component="li" variant="body1" sx={{ mb: 2 }}>
                        {problem}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {t('landing.forTeachers')}
                  </Typography>
                  <Box component="ul" sx={{ pl: 3 }}>
                    {t('landing.teacherProblems').map((problem, index) => (
                      <Typography key={index} component="li" variant="body1" sx={{ mb: 2 }}>
                        {problem}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Solution Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" fontWeight="bold" gutterBottom>
            {t('landing.solutionTitle')}
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}>
            {t('landing.solutionSubtitle')}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ textAlign: 'center', p: 3, height: '100%', boxShadow: 2 }}>
                <PsychologyIcon sx={{ fontSize: 60, color: '#0052CC', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('landing.personalized')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('landing.personalizedDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ textAlign: 'center', p: 3, height: '100%', boxShadow: 2 }}>
                <CalendarMonthIcon sx={{ fontSize: 60, color: '#00A3BF', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('landing.flexible')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('landing.flexibleDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ textAlign: 'center', p: 3, height: '100%', boxShadow: 2 }}>
                <PeopleIcon sx={{ fontSize: 60, color: '#FF6B6B', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('landing.communityDriven')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('landing.communityDrivenDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ textAlign: 'center', p: 3, height: '100%', boxShadow: 2 }}>
                <SchoolIcon sx={{ fontSize: 60, color: '#FFAA4C', mb: 2 }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('landing.oneOnOne')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('landing.oneOnOneDesc')}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ py: 8, bgcolor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" fontWeight="bold" gutterBottom>
            {t('landing.howItWorks')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              { num: 1, title: t('landing.step1Title'), desc: t('landing.step1Desc'), color: '#0052CC' },
              { num: 2, title: t('landing.step2Title'), desc: t('landing.step2Desc'), color: '#00A3BF' },
              { num: 3, title: t('landing.step3Title'), desc: t('landing.step3Desc'), color: '#FF6B6B' },
              { num: 4, title: t('landing.step4Title'), desc: t('landing.step4Desc'), color: '#FFAA4C' },
            ].map((step) => (
              <Grid item xs={12} md={3} key={step.num}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: step.color,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 32,
                      fontWeight: 'bold',
                      mx: 'auto',
                      mb: 2,
                    }}
                  >
                    {step.num}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
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
            {t('landing.readyToStart')}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            {t('landing.readySubtitle')}
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
            {t('landing.getStarted')}
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
