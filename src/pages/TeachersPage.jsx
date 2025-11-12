import React from 'react';
import { Box, Button, Container, Typography, Grid, Card, CardContent, Avatar, Chip } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';

export default function TeachersPage() {
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
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
                {t('teachers.title')}
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.95 }}>
                {t('teachers.subtitle')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                {t('teachers.description')}
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
                {t('teachers.joinAsTeacher')}
              </Button>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
                  {t('teachers.howMuchEarn')}
                </Typography>
                <Box sx={{ my: 3 }}>
                  <Typography variant="h2" fontWeight="bold" color="primary">
                    $2000+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {t('teachers.avgMonthlyIncome')}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {t('teachers.basedOn')}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Teach With Us */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            {t('teachers.whyTeach')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <MonetizationOnIcon sx={{ fontSize: 60, color: '#0052CC', mb: 2 }} />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {t('teachers.competitiveCommission')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('teachers.competitiveCommissionDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <ScheduleIcon sx={{ fontSize: 60, color: '#00A3BF', mb: 2 }} />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {t('teachers.flexibleSchedule')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('teachers.flexibleScheduleDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <GroupsIcon sx={{ fontSize: 60, color: '#FF6B6B', mb: 2 }} />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {t('teachers.readyStudents')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('teachers.readyStudentsDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <TrendingUpIcon sx={{ fontSize: 60, color: '#FFAA4C', mb: 2 }} />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {t('teachers.professionalGrowth')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('teachers.professionalGrowthDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <VerifiedUserIcon sx={{ fontSize: 60, color: '#0052CC', mb: 2 }} />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {t('teachers.securePayments')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('teachers.securePaymentsDesc')}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                <SupportAgentIcon sx={{ fontSize: 60, color: '#00A3BF', mb: 2 }} />
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  {t('teachers.dedicatedSupport')}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t('teachers.dedicatedSupportDesc')}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works for Teachers */}
      <Box sx={{ py: 8, bgcolor: '#f9fafb' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            {t('teachers.howItWorks')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: '#0052CC',
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
                  1
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('teachers.step1')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('teachers.step1Desc')}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: '#00A3BF',
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
                  2
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('teachers.step2')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('teachers.step2Desc')}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: '#FF6B6B',
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
                  3
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('teachers.step3')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('teachers.step3Desc')}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: '#FFAA4C',
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
                  4
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {t('teachers.step4')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t('teachers.step4Desc')}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Teacher Testimonials */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            {t('teachers.testimonials')}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ width: 60, height: 60, mr: 2, bgcolor: '#0052CC' }}>س</Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      سارا احمدی
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      معلم انگلیسی
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  "کافه زبان زندگی من را تغییر داده است. من اکنون می‌توانم از خانه تدریس کنم و بیش از آنچه در شغل قبلی‌ام درآمد داشتم، کسب کنم. پلتفرم استفاده آسانی دارد و پشتیبانی عالی است."
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ width: 60, height: 60, mr: 2, bgcolor: '#00A3BF' }}>م</Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      محمد رضایی
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      معلم فارسی
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  "سیستم تطبیق هوش مصنوعی فوق‌العاده است. دانش‌آموزانی که به من معرفی می‌شوند واقعاً علاقه‌مند و متعهد هستند. من دیگر مجبور نیستم وقت خود را صرف یافتن دانش‌آموزان جدید کنم."
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ p: 4, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ width: 60, height: 60, mr: 2, bgcolor: '#FF6B6B' }}>ل</Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight="bold">
                      لیلا کریمی
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      معلم فرانسه
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  "پرداخت سریع و قابل اعتماد است. من هرگز نگران درآمدم نیستم. کافه زبان به من اعتماد به نفس داده است که به طور تمام وقت به تدریس آنلاین بپردازم."
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Requirements */}
      <Box sx={{ py: 8, bgcolor: '#f9fafb' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" fontWeight="bold" textAlign="center" gutterBottom>
            {t('teachers.requirements')}
          </Typography>
          <Card sx={{ p: 4, mt: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {t('teachers.requirementsTitle')}
            </Typography>
            <Box component="ul" sx={{ pl: 3, mt: 2 }}>
              {t('teachers.requirementsList').map((req, index) => (
                <Typography key={index} component="li" variant="body1" paragraph>
                  {req}
                </Typography>
              ))}
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
              {t('teachers.requirementsNote')}
            </Typography>
          </Card>
        </Container>
      </Box>

      {/* Final CTA */}
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
            {t('teachers.readyToTeach')}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            {t('teachers.getApproved')}
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
            {t('teachers.applyToTeach')}
          </Button>
          <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
            {t('teachers.freeToJoin')}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
