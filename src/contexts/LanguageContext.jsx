import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
  fa: {
    // Landing Page
    landing: {
      title: 'کافه زبان',
      tagline: 'دنیا را از طریق زبان به هم متصل کنیم',
      subtitle: 'یک پلتفرم هوشمند وب‌محور که زبان‌آموزان را با معلمان و شرکای تمرین مناسب به‌طور یکپارچه متصل می‌کند',
      startStudent: 'شروع به عنوان دانش‌آموز',
      joinTeacher: 'پیوستن به عنوان معلم',
      problemTitle: 'یادگیری زبان قطع شده است',
      problemSubtitle: 'ما مشکلات رایج زبان‌آموزان و معلمان را حل می‌کنیم',
      forStudents: 'برای دانش‌آموزان 😥',
      studentProblems: [
        'نمی‌توانم کسی را برای تمرین صحبت کردن پیدا کنم',
        'برنامه‌ریزی درس‌ها یک کابوس است',
        'اپلیکیشن‌های عمومی به من در مکالمه واقعی کمک نمی‌کنند'
      ],
      forTeachers: 'برای معلمان 👩‍🏫',
      teacherProblems: [
        'پیدا کردن دانش‌آموزان جدید به‌طور مداوم سخت است',
        'بیشتر وقتم صرف امور اداری می‌شود تا تدریس',
        'متمایز شدن در بازار شلوغ دشوار است'
      ],
      solutionTitle: 'راه‌حل: یک اتصال هوشمند',
      solutionSubtitle: 'کافه زبان یادگیری را شخصی‌سازی شده، انعطاف‌پذیر و مبتنی بر جامعه می‌کند',
      personalized: 'شخصی‌سازی شده',
      personalizedDesc: 'توصیه‌های مبتنی بر هوش مصنوعی تطابق کامل را تضمین می‌کنند',
      flexible: 'انعطاف‌پذیر',
      flexibleDesc: 'جلسات را برنامه‌ریزی کنید که متناسب با زندگی شما باشد',
      communityDriven: 'مبتنی بر جامعه',
      communityDrivenDesc: 'از معلمان یاد بگیرید و با همسالان تمرین کنید',
      oneOnOne: 'تدریس یک‌به‌یک',
      oneOnOneDesc: 'کلاس‌های خصوصی با معلمان ماهر',
      howItWorks: 'چگونه کار می‌کند',
      step1Title: 'پروفایل خود را بسازید',
      step1Desc: 'اهداف، علایق و سبک یادگیری خود را به ما بگویید',
      step2Title: 'تطابق خود را کشف کنید',
      step2Desc: 'هوش مصنوعی ما بهترین معلمان و شرکای تمرین را پیشنهاد می‌دهد',
      step3Title: 'برنامه‌ریزی و اتصال',
      step3Desc: 'جلسات را با تقویم یکپارچه و بدون تداخل رزرو کنید',
      step4Title: 'یاد بگیرید و رشد کنید',
      step4Desc: 'در درس‌های یک‌به‌یک یا تمرین همتا به همتا شرکت کنید',
      readyToStart: 'آماده شروع هستید؟',
      readySubtitle: 'امروز به هزاران زبان‌آموز و معلم بپیوندید',
      getStarted: 'همین الان شروع کنید'
    },
    // About Page
    about: {
      title: 'درباره کافه زبان',
      subtitle: 'ما در حال ساختن آینده یادگیری زبان هستیم - شخصی، انعطاف‌پذیر و مبتنی بر هوش مصنوعی',
      missionTitle: 'ماموریت ما',
      missionSubtitle: 'یادگیری زبان را در دسترس، جذاب و موثر کنیم با متصل کردن زبان‌آموزان و معلمان در سراسر جهان',
      missionDesc: 'ما معتقدیم که هر کسی باید به ابزارها و منابعی دسترسی داشته باشد که برای تسلط بر یک زبان جدید نیاز دارد. پلتفرم ما شکاف بین یادگیری سنتی و نیازهای یادگیرندگان مدرن را پر می‌کند.',
      visionTitle: 'چشم‌انداز ما',
      visionDesc: 'پلتفرم پیشرو برای تمرین زبان و یادگیری مشارکتی شوید، که توسط جامعه و فناوری هوشمند پشتیبانی می‌شود.',
      competitiveAdvantage: 'مزیت رقابتی ما',
      aiEngine: 'موتور تطبیق مبتنی بر هوش مصنوعی',
      aiDesc: 'در حالی که رقبا به فیلترهای ساده متکی هستند، سیستم هوشمند ما شراکت‌های بهتر و حفظ بالاتر را با تطبیق کاربران بر اساس معیارهایی که مهم هستند ایجاد می‌کند.',
      learningGoals: 'اهداف یادگیری',
      learningGoalsDesc: 'تسلط، تجاری، سفر و موارد دیگر',
      proficiencyLevels: 'سطوح مهارت',
      proficiencyDesc: 'اطمینان از شرکای تمرین متعادل',
      sharedInterests: 'علایق مشترک',
      sharedInterestsDesc: 'مکالمات را جذاب و سرگرم‌کننده می‌کند',
      availability: 'دسترسی و منطقه زمانی',
      availabilityDesc: 'ساده‌سازی برنامه‌ریزی در سراسر جهان',
      marketOpportunity: 'فرصت بازار',
      marketSize: 'بازار یادگیری زبان آنلاین جهانی تا سال 2027',
      gigEconomy: 'رشد اقتصاد کار پاره‌وقت',
      gigEconomyDesc: 'کار از راه دور تقاضای عظیمی برای فرصت‌های یادگیری و تدریس انعطاف‌پذیر ایجاد کرده است',
      personalConnection: 'نیاز به اتصال شخصی',
      personalConnectionDesc: 'پلتفرم‌های موجود اغلب عمومی هستند و به نیاز حیاتی به اتصال شخصی پاسخ نمی‌دهند',
      targetMarket: 'بازار هدف ما',
      students: 'دانش‌آموزان',
      studentsList: [
        'دانشجویان دانشگاهی در حال آماده شدن برای تحصیل در خارج',
        'متخصصان نیازمند مهارت‌های زبانی برای حرفه خود',
        'یادگیرندگان مادام‌العمر و علاقه‌مندان به سفر'
      ],
      teachers: 'معلمان',
      teachersList: [
        'مدرسان زبان دارای گواهینامه به دنبال یک پلتفرم تدریس انعطاف‌پذیر',
        'گویندگان بومی به دنبال کسب درآمد از مهارت‌های زبانی خود'
      ],
      joinMovement: 'به جنبش ما بپیوندید',
      joinSubtitle: 'چه دانش‌آموز باشید چه معلم، کافه زبان جایی برای شما دارد',
      learnMore: 'بیشتر بدانید'
    },
    // Pricing Page
    pricing: {
      title: 'قیمت‌گذاری ساده و شفاف',
      subtitle: 'برنامه‌ای را انتخاب کنید که برای شما مناسب است',
      forStudents: 'برای دانش‌آموزان',
      free: 'رایگان',
      perMonth: '/ماه',
      greatStart: 'برای شروع عالی است',
      premium: 'پرمیوم',
      popular: 'محبوب',
      seriousLearners: 'برای یادگیرندگان جدی',
      allFreeFeatures: 'همه ویژگی‌های رایگان',
      startNow: 'شروع کنید',
      upgrade: 'ارتقا دهید',
      freeFeatures: [
        'جستجوی معلمان و شرکای تمرین',
        'رزرو جلسات',
        'پروفایل پایه',
        'پشتیبانی از جامعه'
      ],
      premiumFeatures: [
        'همه ویژگی‌های رایگان',
        'توصیه‌های پیشرفته مبتنی بر هوش مصنوعی',
        'جستجوی نامحدود شریک',
        'ضبط جلسات',
        'ردیابی پیشرفت پیشرفته',
        'پشتیبانی اولویت‌دار'
      ],
      forTeachers: 'برای معلمان',
      commissionModel: 'مدل کمیسیون',
      commission: 'کمیسیون از هر درس',
      commissionDesc: 'ما فقط زمانی که شما درآمد کسب می‌کنید درآمد داریم. بدون هزینه ماهانه، بدون هزینه پنهان.',
      joinAsTeacher: 'به عنوان معلم بپیوندید',
      teacherFeatures: [
        'نرخ خود را تعیین کنید',
        'مدیریت خودکار برنامه‌ریزی و پرداخت',
        'ابزارهای پروفایل حرفه‌ای',
        'تطبیق مبتنی بر هوش مصنوعی با دانش‌آموزان',
        'پرداخت هفتگی',
        'پشتیبانی اختصاصی معلم'
      ],
      lessonPricing: 'قیمت درس‌ها',
      lessonPricingDesc: 'معلمان نرخ خود را تعیین می‌کنند. در اینجا میانگین قیمت‌ها آورده شده است:',
      communityTutor: 'معلم جامعه',
      professionalTeacher: 'معلم حرفه‌ای',
      expertSpecialized: 'متخصص/تخصصی',
      perHour: 'به ازای هر ساعت',
      faq: 'سوالات متداول',
      faqItems: [
        {
          question: 'آیا می‌توانم هر زمان لغو کنم؟',
          answer: 'بله، می‌توانید اشتراک پرمیوم خود را هر زمان لغو کنید. بدون قرارداد، بدون هزینه لغو.'
        },
        {
          question: 'چگونه معلمان پرداخت می‌شوند؟',
          answer: 'معلمان به صورت هفتگی از طریق روش‌های پرداخت امن پرداخت می‌شوند. ما کمیسیون 15٪ را کم می‌کنیم و بقیه مستقیماً به شما پرداخت می‌شود.'
        },
        {
          question: 'آیا می‌توانم قبل از رزرو با معلمان صحبت کنم؟',
          answer: 'بله! شما می‌توانید با معلمان از طریق سیستم پیام‌رسانی ما قبل از رزرو اولین درس خود ارتباط برقرار کنید.'
        },
        {
          question: 'اگر با درس راضی نبودم چه؟',
          answer: 'ما یک گارانتی رضایت 100٪ ارائه می‌دهیم. اگر از درس اول خود راضی نیستید، ما آن را جایگزین می‌کنیم یا بازپرداخت کامل ارائه می‌دهیم.'
        }
      ],
      readyToStart: 'آماده شروع هستید؟',
      readySubtitle: 'امروز به هزاران زبان‌آموز و معلم بپیوندید',
      getStarted: 'همین الان شروع کنید'
    },
    // Teachers Page
    teachers: {
      title: 'تدریس کنید، درآمد کسب کنید، تاثیر بگذارید',
      subtitle: 'به هزاران معلم زبان بپیوندید که زندگی خود را در پلتفرم ما تبدیل می‌کنند',
      description: 'چه یک مربی باتجربه باشید یا یک گوینده بومی به دنبال تدریس، کافه زبان همه چیزهایی که برای موفقیت نیاز دارید را فراهم می‌کند.',
      joinAsTeacher: 'به عنوان معلم بپیوندید',
      howMuchEarn: 'تا چقدر می‌توانید درآمد کسب کنید؟',
      avgMonthlyIncome: 'درآمد ماهانه متوسط معلمان ما',
      basedOn: 'بر اساس 20 ساعت در هفته با نرخ $25/ساعت',
      whyTeach: 'چرا در کافه زبان تدریس کنید؟',
      competitiveCommission: 'کمیسیون رقابتی',
      competitiveCommissionDesc: 'فقط 15% کمیسیون - بیشتر از آنچه که درآمد کسب می‌کنید را نگه دارید',
      flexibleSchedule: 'برنامه انعطاف‌پذیر',
      flexibleScheduleDesc: 'ساعات خود را تعیین کنید و از هر کجا که می‌خواهید تدریس کنید',
      readyStudents: 'دانش‌آموزان آماده',
      readyStudentsDesc: 'هوش مصنوعی ما شما را با دانش‌آموزان مناسب تطبیق می‌دهد',
      professionalGrowth: 'رشد حرفه‌ای',
      professionalGrowthDesc: 'ابزارها و منابع برای بهبود مهارت‌های تدریس شما',
      securePayments: 'پرداخت امن',
      securePaymentsDesc: 'پرداخت هفتگی خودکار مستقیماً به حساب شما',
      dedicatedSupport: 'پشتیبانی اختصاصی',
      dedicatedSupportDesc: 'تیم پشتیبانی ما همیشه در دسترس است تا کمک کند',
      howItWorks: 'چگونه کار می‌کند',
      step1: 'ثبت‌نام کنید',
      step1Desc: 'یک پروفایل حرفه‌ای ایجاد کنید و احراز هویت را کامل کنید',
      step2: 'نرخ خود را تعیین کنید',
      step2Desc: 'دستمزد خود را انتخاب کنید و در دسترس بودن خود را تعیین کنید',
      step3: 'دانش‌آموزان دریافت کنید',
      step3Desc: 'هوش مصنوعی ما شما را با دانش‌آموزان مناسب مطابقت می‌دهد',
      step4: 'تدریس و درآمد',
      step4Desc: 'جلسات را برگزار کنید و پرداخت هفتگی دریافت کنید',
      testimonials: 'آنچه معلمان ما می‌گویند',
      requirements: 'الزامات',
      requirementsTitle: 'برای تدریس در کافه زبان، شما باید:',
      requirementsList: [
        'گوینده بومی یا دارای تسلط بر زبانی که می‌خواهید تدریس کنید باشید',
        'اتصال اینترنت پایدار و یک وب‌کم داشته باشید',
        'صبور، دوستانه و علاقه‌مند به تدریس باشید',
        'حداقل 18 سال سن داشته باشید',
        '(اختیاری) گواهینامه تدریس یا مدرک مرتبط'
      ],
      requirementsNote: 'توجه: در حالی که گواهینامه‌های تدریس ارزشمند هستند، ما معتقدیم که گویندگان بومی با اشتیاق می‌توانند معلمان عالی باشند!',
      readyToTeach: 'آماده شروع سفر تدریس خود هستید؟',
      getApproved: 'ظرف 24 ساعت تایید شوید و شروع به تدریس کنید',
      applyToTeach: 'درخواست برای تدریس',
      freeToJoin: 'رایگان برای پیوستن • بدون هزینه پنهان'
    },
    // Navigation
    nav: {
      home: 'خانه',
      about: 'درباره ما',
      pricing: 'قیمت‌گذاری',
      teachers: 'معلمان',
      login: 'ورود',
      signup: 'ثبت‌نام'
    }
  },
  en: {
    // Landing Page
    landing: {
      title: 'Cafe Zaban',
      tagline: 'Connecting the World Through Language',
      subtitle: 'An intelligent, web-based platform that seamlessly connects language learners with the right teachers and practice partners',
      startStudent: 'Start as a Student',
      joinTeacher: 'Join as a Teacher',
      problemTitle: 'Language Learning is Disconnected',
      problemSubtitle: 'We solve common problems for both language learners and teachers',
      forStudents: 'For Students 😥',
      studentProblems: [
        "I can't find anyone to practice speaking with",
        'Scheduling lessons is a nightmare',
        "Generic apps don't help me with real conversation"
      ],
      forTeachers: 'For Teachers 👩‍🏫',
      teacherProblems: [
        "It's hard to find new students consistently",
        'I spend more time on admin than on teaching',
        "It's difficult to stand out in a crowded market"
      ],
      solutionTitle: 'The Solution: An Intelligent Connection',
      solutionSubtitle: 'Cafe Zaban makes learning personalized, flexible, and community-driven',
      personalized: 'Personalized',
      personalizedDesc: 'AI-driven recommendations ensure the perfect match',
      flexible: 'Flexible',
      flexibleDesc: 'Schedule sessions that fit your life',
      communityDriven: 'Community-Driven',
      communityDrivenDesc: 'Learn from teachers and practice with peers',
      oneOnOne: 'One-on-One Tutoring',
      oneOnOneDesc: 'Private classes with skilled teachers',
      howItWorks: 'How It Works',
      step1Title: 'Create Your Profile',
      step1Desc: 'Tell us your goals, interests, and learning style',
      step2Title: 'Discover Your Match',
      step2Desc: 'Our AI suggests the best teachers and practice partners for you',
      step3Title: 'Schedule & Connect',
      step3Desc: 'Book sessions with our integrated, conflict-free calendar',
      step4Title: 'Learn & Grow',
      step4Desc: 'Engage in 1-on-1 lessons or peer-to-peer practice',
      readyToStart: 'Ready to Get Started?',
      readySubtitle: 'Join thousands of language learners and teachers today',
      getStarted: 'Get Started Now'
    },
    // About Page
    about: {
      title: 'About Cafe Zaban',
      subtitle: 'We are building the future of language learning - personalized, flexible, and AI-powered',
      missionTitle: 'Our Mission',
      missionSubtitle: 'To make language learning accessible, engaging, and effective by connecting learners and teachers worldwide',
      missionDesc: 'We believe everyone should have access to the tools and resources they need to master a new language. Our platform bridges the gap between traditional learning and the needs of modern learners.',
      visionTitle: 'Our Vision',
      visionDesc: 'To become the leading platform for language practice and collaborative learning, powered by community and intelligent technology.',
      competitiveAdvantage: 'Our Competitive Advantage',
      aiEngine: 'The AI-Powered Matching Engine',
      aiDesc: 'While competitors rely on simple filters, our intelligent system creates better partnerships and higher retention by matching users on criteria that matter.',
      learningGoals: 'Learning Goals',
      learningGoalsDesc: 'Fluency, business, travel, and more',
      proficiencyLevels: 'Proficiency Levels',
      proficiencyDesc: 'Ensuring balanced practice partners',
      sharedInterests: 'Shared Interests',
      sharedInterestsDesc: 'Making conversations engaging and fun',
      availability: 'Availability & Time Zones',
      availabilityDesc: 'Simplifying scheduling across the globe',
      marketOpportunity: 'Market Opportunity',
      marketSize: 'Global online language learning market by 2027',
      gigEconomy: 'Growth of the Gig Economy',
      gigEconomyDesc: 'Remote work has created massive demand for flexible learning and teaching opportunities',
      personalConnection: 'Need for Personal Connection',
      personalConnectionDesc: 'Existing platforms are often generic and fail to address the critical need for personal connection',
      targetMarket: 'Our Target Market',
      students: 'Students',
      studentsList: [
        'University students preparing for study abroad',
        'Professionals needing language skills for their careers',
        'Lifelong learners and travel enthusiasts'
      ],
      teachers: 'Teachers',
      teachersList: [
        'Certified language instructors seeking a flexible teaching platform',
        'Native speakers looking to monetize their language skills'
      ],
      joinMovement: 'Join Our Movement',
      joinSubtitle: 'Whether you\'re a student or teacher, Cafe Zaban has a place for you',
      learnMore: 'Learn More'
    },
    // Pricing Page
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the plan that works for you',
      forStudents: 'For Students',
      free: 'Free',
      perMonth: '/month',
      greatStart: 'Great for getting started',
      premium: 'Premium',
      popular: 'Popular',
      seriousLearners: 'For serious learners',
      allFreeFeatures: 'All free features',
      startNow: 'Get Started',
      upgrade: 'Upgrade Now',
      freeFeatures: [
        'Search for teachers and practice partners',
        'Book sessions',
        'Basic profile',
        'Community support'
      ],
      premiumFeatures: [
        'All free features',
        'Advanced AI-driven recommendations',
        'Unlimited partner search',
        'Session recordings',
        'Advanced progress tracking',
        'Priority support'
      ],
      forTeachers: 'For Teachers',
      commissionModel: 'Commission Model',
      commission: 'commission per lesson',
      commissionDesc: 'We only earn when you earn. No monthly fees, no hidden costs.',
      joinAsTeacher: 'Join as a Teacher',
      teacherFeatures: [
        'Set your own rates',
        'Automated scheduling and payment management',
        'Professional profile tools',
        'AI-powered matching with students',
        'Weekly payouts',
        'Dedicated teacher support'
      ],
      lessonPricing: 'Lesson Pricing',
      lessonPricingDesc: 'Teachers set their own rates. Here are the average prices:',
      communityTutor: 'Community Tutor',
      professionalTeacher: 'Professional Teacher',
      expertSpecialized: 'Expert/Specialized',
      perHour: 'per hour',
      faq: 'Frequently Asked Questions',
      faqItems: [
        {
          question: 'Can I cancel anytime?',
          answer: 'Yes, you can cancel your Premium subscription at any time. No contracts, no cancellation fees.'
        },
        {
          question: 'How do teachers get paid?',
          answer: 'Teachers are paid weekly via secure payment methods. We deduct our 15% commission and the rest is paid directly to you.'
        },
        {
          question: 'Can I talk to teachers before booking?',
          answer: 'Yes! You can connect with teachers via our messaging system before booking your first lesson.'
        },
        {
          question: 'What if I\'m not satisfied with a lesson?',
          answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with your first lesson, we\'ll replace it or provide a full refund.'
        }
      ],
      readyToStart: 'Ready to Get Started?',
      readySubtitle: 'Join thousands of language learners and teachers today',
      getStarted: 'Get Started Now'
    },
    // Teachers Page
    teachers: {
      title: 'Teach, Earn, Make an Impact',
      subtitle: 'Join thousands of language teachers transforming their lives on our platform',
      description: 'Whether you\'re an experienced tutor or a native speaker looking to teach, Cafe Zaban provides everything you need to succeed.',
      joinAsTeacher: 'Join as a Teacher',
      howMuchEarn: 'How Much Can You Earn?',
      avgMonthlyIncome: 'Average monthly income for our teachers',
      basedOn: 'Based on 20 hours/week at $25/hour',
      whyTeach: 'Why Teach on Cafe Zaban?',
      competitiveCommission: 'Competitive Commission',
      competitiveCommissionDesc: 'Only 15% commission - keep more of what you earn',
      flexibleSchedule: 'Flexible Schedule',
      flexibleScheduleDesc: 'Set your own hours and teach from anywhere you want',
      readyStudents: 'Ready Students',
      readyStudentsDesc: 'Our AI matches you with the right students',
      professionalGrowth: 'Professional Growth',
      professionalGrowthDesc: 'Tools and resources to improve your teaching skills',
      securePayments: 'Secure Payments',
      securePaymentsDesc: 'Automatic weekly payments directly to your account',
      dedicatedSupport: 'Dedicated Support',
      dedicatedSupportDesc: 'Our support team is always available to help',
      howItWorks: 'How It Works',
      step1: 'Sign Up',
      step1Desc: 'Create a professional profile and complete verification',
      step2: 'Set Your Rate',
      step2Desc: 'Choose your hourly rate and set your availability',
      step3: 'Get Students',
      step3Desc: 'Our AI matches you with suitable students',
      step4: 'Teach & Earn',
      step4Desc: 'Conduct sessions and receive weekly payments',
      testimonials: 'What Our Teachers Say',
      requirements: 'Requirements',
      requirementsTitle: 'To teach on Cafe Zaban, you must:',
      requirementsList: [
        'Be a native speaker or fluent in the language you want to teach',
        'Have a stable internet connection and a webcam',
        'Be patient, friendly, and passionate about teaching',
        'Be at least 18 years old',
        '(Optional) Teaching certification or related degree'
      ],
      requirementsNote: 'Note: While teaching certifications are valuable, we believe native speakers with passion can be excellent teachers!',
      readyToTeach: 'Ready to Start Your Teaching Journey?',
      getApproved: 'Get approved within 24 hours and start teaching',
      applyToTeach: 'Apply to Teach',
      freeToJoin: 'Free to join • No hidden fees'
    },
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      pricing: 'Pricing',
      teachers: 'Teachers',
      login: 'Login',
      signup: 'Sign Up'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fa'); // Default to Persian

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fa' ? 'en' : 'fa');
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const dir = language === 'fa' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};
