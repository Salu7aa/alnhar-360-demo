/**
 * AL-NAHAR 360 - ENTERPRISE NEWSPAPER PLATFORM CORE JAVASCRIPT
 * Full-Control CMS Dashboard, Dynamic Routing, Live State & Interactive Modals
 */

// Global State Object
const STATE_STORAGE_KEY = 'alnahar_360_platform_state_v3';

// Default Seed Data
const DEFAULT_STATE = {
    settings: {
        siteName: 'النهار 360',
        sloganAr: 'الحقيقة في كل الاتجاهات',
        sloganEn: 'The Truth in Every Direction',
        chiefEditor: 'أحمد مصطفى',
        contactEmail: 'contact@alnahar360.com',
        contactPhone: '+20 2 3345 6789',
        copyrightYear: '2026'
    },
    breakingNews: [
        'مصر تستضيف منتدى الاستثمار الإفريقي 2026 بحضور قادة ورؤساء حكومات 45 دولة',
        'البنك المركزي: ارتفاع صافي الاحتياطي النقدي الأجنبي ليسجل 47.8 مليار دولار',
        'الأهلي يعلن عن شراكة جديدة مع كبرى الشركات العالمية في مجال التكنولوجيا الرياضية',
        'تراجع أسعار النفط عالمياً وسط توقعات بزيادة المعروض واستقرار أسواق الطاقة',
        'إطلاق منصة رقمية قومية جديدة لتقديم 150 خدمة حكومية موحدة للمواطنين',
        'ارتفاع طفيف في أسعار الذهب محلياً وعيار 21 يسجل 4,276 جنيهاً للجرام'
    ],
    marketIndices: {
        egypt: [
            { name: 'EGX 30', val: '32,165.76', change: '+1.24%', isPositive: true },
            { name: 'الدولار الأمريكي', val: '48.75', change: '+0.15%', isPositive: true },
            { name: 'الذهب عيار 21', val: '4,276.50', change: '+0.62%', isPositive: true },
            { name: 'خام برنت', val: '74.32', change: '+0.48%', isPositive: true }
        ],
        world: [
            { name: 'داو جونز (Dow Jones)', val: '44,296.51', change: '+0.59%', isPositive: true },
            { name: 'ستاندرد آند بورز 500', val: '5,969.34', change: '+0.73%', isPositive: true },
            { name: 'ناسداك (NASDAQ)', val: '19,003.65', change: '+0.88%', isPositive: true },
            { name: 'نيكاي الياباني', val: '38,283.85', change: '+0.67%', isPositive: true }
        ],
        currencies: [
            { name: 'الدولار / الجنيه', val: '48.75', change: '+0.15%', isPositive: true },
            { name: 'اليورو / الجنيه', val: '52.34', change: '-0.10%', isPositive: false },
            { name: 'الإسترليني / الجنيه', val: '61.23', change: '+0.32%', isPositive: true },
            { name: 'الريال السعودي / الجنيه', val: '12.98', change: '0.00%', isPositive: true }
        ],
        commodities: [
            { name: 'الذهب (أونصة)', val: '$2,735.40', change: '+0.85%', isPositive: true },
            { name: 'الفضة (أونصة)', val: '$33.62', change: '+1.15%', isPositive: true },
            { name: 'الغاز الطبيعي', val: '$2.84', change: '-1.40%', isPositive: false },
            { name: 'النحاس (رطل)', val: '$4.38', change: '+0.45%', isPositive: true }
        ]
    },
    currencyRates: {
        USD: 48.75,
        EUR: 52.34,
        GBP: 61.23,
        SAR: 12.98
    },
    poll: {
        question: 'هل تتوقع أن تتصدر مصر صادرات الطاقة الخضراء بحلول 2030؟',
        options: [
            { id: 'opt1', text: 'نعم، بكل تأكيد', votes: 1420 },
            { id: 'opt2', text: 'محتمل مع تذليل التحديات', votes: 365 },
            { id: 'opt3', text: 'لا أعتقد ذلك', votes: 135 }
        ],
        userVoted: false
    },
    articles: [
        {
            id: 'art-1',
            title: 'مصر تعزز مكانتها الإقليمية كمركز للاستثمار في الطاقة المتجددة',
            category: 'اقتصاد',
            categoryName: 'اقتصاد وأعمال',
            author: 'أحمد مصطفى - القاهرة',
            authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '4 دقائق',
            image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=80',
            caption: 'بانوراما العاصمة المصرية القاهرة المطلة على نهر النيل - تصوير النهار 360',
            summary: 'تؤكد الدولة التزامها بجذب المزيد من الاستثمارات الأجنبية في قطاع الطاقة النظيفة، مع توقيع اتفاقيات استراتيجية جديدة بقيمة 14 مليار دولار مع شركاء دوليين.',
            lead: 'القاهرة - النهار 360: تسارعت وتيرة التحول نحو الاقتصاد الأخضر في مصر خلال العام الجاري، مع توقيع حزمة اتفاقيات استراتيجية جديدة بقيمة تتجاوز 14 مليار دولار لتوليد الكهرباء من طاقة الرياح والخلايا الشمسية، بالشراكة مع تحالفات دولية رائدة.',
            content: `وأوضح التقرير السنوي الصادر عن وزارة الكهرباء والطاقة المتجددة أن مصر نجحت في خفض الانبعاثات الكربونية بمعدلات قياسية، بالتوازي مع التوسع في تصدير الهيدروجين الأخضر إلى الأسواق الأوروبية، مستفيدة من الموقع الجغرافي الفريد وقناة السويس.

ومن جانبه، أشاد البنك الدولي بالإصلاحات الهيكلية التي اتخذتها الحكومة المصرية لتحفيز القطاع الخاص على ضخ استثمارات مباشرة في مشروعات الطاقة المتجددة، وتوفير الأراضي المجهزة والحوافز الضريبية والجمارك الميسرة.

وتستهدف الاستراتيجية الوطنية للطاقة وصول نسبة مساهمة الطاقة المتجددة إلى أكثر من 42% من إجمالي القدرات الكهربائية المولدة بحلول عام 2030، مع التركيز على مشروعات الهيدروجين الأخضر في المنطقة الاقتصادية لقناة السويس.`,
            quote: 'مصر تمتلك مقومات طبيعية تؤهلها لتكون عاصمة الطاقة النظيفة في حوض البحر المتوسط، وتوجيهات القيادة السياسية تركز على توطين التكنولوجيا وتأهيل الكوادر الوطنية.',
            quoteCite: 'د. محمود شاكر، خبير الطاقة الدولية',
            isHero: true,
            isBreaking: false,
            views: 14290,
            reactions: { like: 342, heart: 189, mindblown: 95 },
            comments: [
                { name: 'م. طارق العوضي', date: 'منذ ساعتين', text: 'خطوات ممتازة تؤكد الرؤية الثاقبة للاستثمار في المستقبل وتقليل الاعتماد على الوقود الأحفوري.' },
                { name: 'د. نادية سليم', date: 'منذ 4 ساعات', text: 'التغطية ممتازة ومفصلة كالعادة من مؤسسة النهار، نتمنى استمرار هذا التميز الإخباري.' }
            ]
        },
        {
            id: 'art-2',
            title: 'إطلاق الاستراتيجية الوطنية للذكاء الاصطناعي 2030 لتأهيل الشباب وسوق العمل',
            category: 'تكنولوجيا',
            categoryName: 'التكنولوجيا والابتكار',
            author: 'م. سارة كمال - قسم التكنولوجيا',
            authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '3 دقائق',
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
            caption: 'تطبيقات الذكاء الاصطناعي والحوسبة الفائقة في مصر',
            summary: 'وزارة الاتصالات وتكنولوجيا المعلومات تطلق المرحلة الثانية من الاستراتيجية الوطنية للذكاء الاصطناعي لتأهيل 100 ألف كادر تقني وتأسيس مراكز تميز.',
            lead: 'القاهرة - النهار 360: أعلنت وزارة الاتصالات وتكنولوجيا المعلومات اليوم عن إطلاق المرحلة الثانية من الاستراتيجية الوطنية للذكاء الاصطناعي، بهدف تعزيز استخدام التكنولوجيا المتقدمة في القطاعات الحيوية كالرعاية الصحية والتعليم والصناعة.',
            content: `وتتضمن المبادرة تأسيس 10 مراكز تميز متخصصة في الجامعات المصرية، وشراكات مع كبرى الشركات العالمية مثل جوجل ومايكروسوفت لتدريب الكوادر المحلية وتقديم منح مجانية لرواد الأعمال.

وأكد خبراء تكنولوجيا المعلومات أن هذه الخطوة ستعزز موقع مصر كمركز إقليمي لصناعة التعهيد والخدمات الرقمية العابرة للحدود، والتي حققت نمواً تجاوز 25% خلال العام المالي المنصرم.`,
            quote: 'الاستثمار في العقول الرقمية وتطوير خوارزميات عربية أصيلة هو الضمانة الحقيقية للسيادة الرقمية المصرية.',
            quoteCite: 'م. سارة كمال، استشاري التحول الرقمي',
            isHero: true,
            isBreaking: false,
            views: 8940,
            reactions: { like: 210, heart: 140, mindblown: 85 },
            comments: [
                { name: 'كريم عبد الرحمن', date: 'منذ ساعة', text: 'مبادرة رائعة نحتاج التركيز على ربط التعليم بسوق العمل البرمجي.' }
            ]
        },
        {
            id: 'art-3',
            title: 'مصر تستضيف قمة الاستثمار الإفريقية بحضور قادة ومؤسسات تمويل دولية',
            category: 'مصر',
            categoryName: 'مصر والمحافظات',
            author: 'محمد يوسف - الشؤون الدبلوماسية',
            authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '5 دقائق',
            image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80',
            caption: 'جلسات قمة الاستثمار الإفريقية بالعاصمة الإدارية الجديدة',
            summary: 'انطلاق فعاليات منتدى الاستثمار الإفريقي بمشاركة 45 دولة لبحث مشروعات البنية التحتية والربط الكهربائي والتجارة الحرة القارية.',
            lead: 'العاصمة الإدارية - النهار 360: انطلقت اليوم بالعاصمة الإدارية الجديدة أعمال الدورة السنوية لقمة الاستثمار الإفريقية بمشاركة رؤساء دول وحكومات وممثلي كبرى بنوك التنمية الدولية.',
            content: `شهدت الجلسة الافتتاحية توقيع اتفاقيات تمويلية بقيمة 8 مليارات دولار لتنفيذ مشروعات البنية التحتية وشبكات النقل الذكي، فضلاً عن دعم رواد الأعمال وتسهيل حركة التجارة عبر منطقة التجارة الحرة القارية الإفريقية (AfCFTA).`,
            quote: 'إفريقيا تمتلك مقدرات المستقبل، وتكاملنا الاقتصادي مع دول القارة هو ركيزة أساسية للأمن القومي والتنمية المستدامة.',
            quoteCite: 'وزير الاستثمار والتجارة الخارجية',
            isHero: true,
            isBreaking: true,
            views: 12500,
            reactions: { like: 410, heart: 290, mindblown: 120 },
            comments: []
        },
        {
            id: 'art-4',
            title: 'البنك المركزي: الاقتصاد المصري يواصل مسار النمو رغم التحديات',
            category: 'اقتصاد',
            categoryName: 'اقتصاد وأعمال',
            author: 'فريق الاقتصاد',
            authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '3 دقائق',
            image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80',
            caption: 'المقر الرئيسي للبنك المركزي المصري',
            summary: 'المركزي يؤكد أن الإجراءات النقدية الاستباقية نجحت في كبح التضخم وتعزيز مرونة القطاع المصرفي أمام تقلبات الاقتصاد العالمي.',
            lead: 'القاهرة - النهار 360: أعلن البنك المركزي المصري عن استمرار المؤشرات الإيجابية لنمو الاقتصاد القومي مدعوماً بزيادة تدفقات النقد الأجنبي ونمو الصادرات غير البترولية.',
            content: `وأشار تقرير السياسة النقدية إلى أن الاحتياطي النقدي الأجنبي حافظ على مستويات آمنة تغطي ما يقارب 8 أشهر من الواردات السلعية، مما يعكس نجاح برنامج الإصلاح الاقتصادي والشراكات الاستثمارية الكبرى.`,
            quote: 'القطاع المصرفي المصري يتمتع بمستويات سيولة مرتفعة ومعدلات كفاية رأس مال تتجاوز المعايير الدولية المقررة.',
            quoteCite: 'تقرير الاستقرار المالي للبنك المركزي',
            isHero: false,
            isBreaking: false,
            views: 9840,
            reactions: { like: 195, heart: 80, mindblown: 45 },
            comments: []
        },
        {
            id: 'art-5',
            title: 'ارتفاع أسعار الذهب عالمياً مع توقعات بمزيد من الطلب',
            category: 'اقتصاد',
            categoryName: 'اقتصاد وأعمال',
            author: 'شعبة المعادن الثمينة',
            authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '2 دقيقة',
            image: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=600&q=80',
            caption: 'سبائك الذهب الخالص في البورصات العالمية',
            summary: 'المعدن الأصفر يقفز إلى مستويات تاريخية مدفوعاً بطلب البنوك المركزية وتوقعات خفض أسعار الفائدة الأمريكية.',
            lead: 'لندن / القاهرة - النهار 360: قفزت أسعار الذهب في البورصات العالمية لتسجل الأونصة 2,735 دولاراً وسط إقبال واسع على الملاذات الآمنة، وهو ما انعكس على السوق المحلي في مصر.',
            content: `وسجل جرام الذهب عيار 21 في مصر 4,276 جنيهاً، وسط استقرار في حركة البيع والشراء وتزايد إقبال المواطنين على السبائك والجنيهات الذهبية للادخار وحفظ القيمة.`,
            quote: 'الذهب يظل الملاذ التاريخي الآمن لحفظ المدخرات في أوقات التحولات الاقتصادية الكبرى.',
            quoteCite: 'نادي نجيب، سكرتير شعبة الذهب سابقاً',
            isHero: false,
            isBreaking: false,
            views: 11200,
            reactions: { like: 260, heart: 110, mindblown: 55 },
            comments: []
        },
        {
            id: 'art-6',
            title: 'الذكاء الاصطناعي يقود مستقبل الصناعات الرقمية في مصر',
            category: 'تكنولوجيا',
            categoryName: 'التكنولوجيا والابتكار',
            author: 'هشام إبراهيم',
            authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '3 دقائق',
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
            caption: 'تقنيات الذكاء الاصطناعي ومستقبل الروبوتات الصناعية',
            summary: 'دراسة حديثة تتوقع مساهمة الذكاء الاصطناعي بنسبة 7.7% في الناتج المحلي الإجمالي لمصر بحلول عام 2030.',
            lead: 'القاهرة - النهار 360: كشف تقرير متخصص صادر عن مركز المعلومات ودعم اتخاذ القرار أن قطاع تكنولوجيا المعلومات والاتصالات يمثل المحرك الأسرع نمواً في الاقتصاد المصري.',
            content: `وتتبنى الشركات والمصانع المصرية حلول الأتمتة الذكية والتحليلات التنبؤية لرفع الكفاءة التشغيلية وتقليل الهدر في سلاسل الإمداد والطاقة.`,
            quote: 'الذكاء الاصطناعي لم يعد خياراً ترفيهياً بل هو عصب الإنتاجية والتنافسية العالمية.',
            quoteCite: 'د. شريف عبد العظيم، أستاذ النظم الذكية',
            isHero: false,
            isBreaking: false,
            views: 6210,
            reactions: { like: 180, heart: 95, mindblown: 70 },
            comments: []
        },
        {
            id: 'art-7',
            title: 'الأهلي المصري يطلق مبادرة لدعم المشروعات الصغيرة والمتوسطة',
            category: 'رياضة',
            categoryName: 'رياضة ومجتمع',
            author: 'وائل السعيد',
            authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '3 دقائق',
            image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
            caption: 'مبادرات المسؤولية المجتمعية والرياضية للأندية المصرية',
            summary: 'النادي الأهلي يعلن تخصيص صندوق لدعم رواد الأعمال في مجال الرياضة والصحة والمحتوى الرقمي الرياضي.',
            lead: 'القاهرة - النهار 360: في خطوة رائدة للمؤسسات الرياضية، أعلن مجلس إدارة النادي الأهلي بالتعاون مع بنوك وطنية عن تدشين مبادرة لتمويل حاضنات المشروعات الرياضية للشباب.',
            content: `تهدف المبادرة إلى تمويل 50 مشروعاً ناشئاً في مجالات التحليل الفني الرقمي، تصنيع الأدوات الرياضية، والتطبيقات الصحية، لتعظيم القيمة المضافة لصناعة الرياضة في مصر.`,
            quote: 'الرياضة أصبحت صناعة متكاملة تفتح آلاف فرص العمل للشباب المصري المبدع.',
            quoteCite: 'المكتب الإعلامي للنادي الأهلي',
            isHero: false,
            isBreaking: false,
            views: 15400,
            reactions: { like: 520, heart: 430, mindblown: 110 },
            comments: []
        },
        {
            id: 'art-8',
            title: 'بناء العقول .. الجامعات التكنولوجية تقود صناعة المستقبل في مصر',
            category: 'تعليم',
            categoryName: 'تعليم وجامعات',
            author: 'د. منى الشريف',
            authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '4 دقائق',
            image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
            caption: 'طلاب الجامعات التكنولوجية في المعامل التطبيقية الحديثة',
            summary: 'افتتاح 6 جامعات تكنولوجية جديدة تقدم برامج في الأطراف الصناعية، الذكاء الاصطناعي، وتكنولوجيا السكك الحديدية بالتعاون مع شركاء دوليين.',
            lead: 'القاهرة - النهار 360: تشهد منظومة التعليم العالي في مصر نقلة نوعية عبر التوسع في مسار التعليم التكنولوجي الذي يربط الخريجين مباشرة باحتياجات كبرى المصانع والشركات الاستثمارية.',
            content: `وأكدت وزارة التعليم العالي أن نسبة توظيف خريجي الجامعات التكنولوجية تخطت 90% خلال الأشهر الأولى من التخرج بفضل التدريب العملي الميداني والشهادات المزدوجة مع جامعات أوروبية وآسيوية.`,
            quote: 'التعليم التكنولوجي هو رهان الدولة لتحقيق نهضة صناعية وطنية قائمة على الكفاءة والابتكار.',
            quoteCite: 'وزير التعليم العالي والبحث العلمي',
            isHero: false,
            isBreaking: false,
            views: 7420,
            reactions: { like: 310, heart: 190, mindblown: 65 },
            comments: []
        },
        {
            id: 'art-9',
            title: 'طفرة في منظومة التأمين الصحي الشامل لتغطية 5 محافظات جديدة',
            category: 'صحة',
            categoryName: 'صحة وطب',
            author: 'فريق الصحة والبيئة',
            authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '3 دقائق',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
            caption: 'أطقم الرعاية الطبية في المستشفيات النموذجية الحديثة',
            summary: 'الهيئة العامة للتأمين الصحي الشامل تعلن انضمام محافظات جديدة وتقديم أكثر من 45 مليون خدمة طبية مجانية للمواطنين بأعلى معايير الجودة العالمية.',
            lead: 'الإسماعيلية / القاهرة - النهار 360: أعلنت الهيئة العامة للتأمين الصحي الشامل عن بدء التشغيل التجريبي للمنظومة في محافظات المرحلة الثانية بعد استكمال البنية التحتية للمستشفيات والمراكز الحضرية.',
            content: `وتتيح المنظومة للمواطنين الحصول على كافة الفحوصات والعمليات الجراحية الدقيقة وزراعة الأعضاء بدون أعباء مالية، مع إتاحة الملف الطبي الإلكتروني الموحد لكل مواطن.`,
            quote: 'صحة المواطن المصري هي حجر الزاوية في بناء الجمهورية الجديدة والتنمية البشرية المستدامة.',
            quoteCite: 'رئيس الهيئة العامة للرعاية الصحية',
            isHero: false,
            isBreaking: false,
            views: 5890,
            reactions: { like: 280, heart: 210, mindblown: 40 },
            comments: []
        },
        {
            id: 'art-10',
            title: 'مستقبل الطاقة المتجددة في مصر وتحديات التحول الأخضر',
            category: 'تقارير وتحليلات',
            categoryName: 'تقارير وتحليلات',
            author: 'مركز النهار للدراسات والبحوث',
            authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '6 دقائق',
            image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80',
            caption: 'محطات طاقة الرياح بخليج السويس والبحر الأحمر',
            summary: 'تقرير تحليلي يرصد خريطة مشروعات طاقة الرياح والشمس في مصر وفرص تصدير الهيدروجين الأخضر للاتحاد الأوروبي ومواجهة تحديات تمويل الشبكات الذكية.',
            lead: 'القاهرة - النهار 360: يقدم هذا التقرير قراءة استشرافية للفرص والتحديات الاقتصادية المرتبطة بخطط تحويل مصر إلى مركز إقليمي لإنتاج وتصدير الطاقة النظيفة بحلول عام 2030.',
            content: `يرى الخبراء أن الميزة التنافسية لمصر لا تقتصر على سطوع الشمس الدائم وسرعة الرياح القياسية في خليج السويس، بل تمتد إلى القرب الجغرافي من أسواق الاستهلاك الأوروبية والبنية التحتية لقناة السويس.`,
            quote: 'التحول الأخضر ليس مجرد حماية للبيئة، بل هو أكبر فرصة استثمارية وتصديرية لاقتصاد مصر في القرن الحادي والعشرين.',
            quoteCite: 'تقرير مركز أبحاث الطاقة المستدامة',
            isHero: false,
            isBreaking: false,
            views: 11450,
            reactions: { like: 390, heart: 180, mindblown: 130 },
            comments: []
        },
        {
            id: 'art-11',
            title: 'الاقتصاد الرقمي .. فرصة للنمو والريادة في الأسواق العربية',
            category: 'تقارير وتحليلات',
            categoryName: 'تقارير وتحليلات',
            author: 'فريق الاقتصاد الرقمي',
            authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '4 دقائق',
            image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
            caption: 'نمو التجارة الإلكترونية والمدفوعات اللاتلامسية في مصر',
            summary: 'تحليل شامل لنمو قطاع التكنولوجيا المالية وحلول الدفع الإلكتروني وتطور حجم التجارة الرقمية في المنطقة العربية.',
            lead: 'القاهرة - النهار 360: سجلت معاملات الدفع الإلكتروني عبر بطاقات ميزة وشبكة المدفوعات اللحظية (إنستاباي) أرقاماً قياسية تخطت 2.5 تريليون جنيه خلال العام الجاري.',
            content: `ويعكس هذا النمو تحول المجتمع المصري نحو المعاملات اللانقدية والشمول المالي، مما وفر بيئة خصبة لنمو الشركات الناشئة وجذب استثمارات صناديق رأس المال المخاطر.`,
            quote: 'الشمول المالي والمدفوعات اللحظية أعادا صياغة الاقتصاد المصري وعززا الشفافية والنمو السريع.',
            quoteCite: 'اتحاد بنوك مصر',
            isHero: false,
            isBreaking: false,
            views: 8750,
            reactions: { like: 240, heart: 130, mindblown: 60 },
            comments: []
        },
        {
            id: 'art-12',
            title: 'الذكاء الاصطناعي .. بين الفرص الواعدة والمخاطر الأخلاقية والأمنية',
            category: 'تقارير وتحليلات',
            categoryName: 'تقارير وتحليلات',
            author: 'د. طارق حلمي',
            authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
            date: '24 نوفمبر 2026',
            readTime: '5 دقائق',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
            caption: 'مستقبل الذكاء الاصطناعي التوليدي والأخلاقيات الرقمية',
            summary: 'قراءة في التحديات القانونية والتنظيمية لحماية البيانات ومكافحة التزييف العميق بالتوازي مع الاستفادة من طفرات نماذج اللغة الضخمة.',
            lead: 'القاهرة - النهار 360: يفرض التسارع المذهل في أدوات الذكاء الاصطناعي التوليدي إعادة التفكير في الأطر التشريعية والأخلاقية لحماية الملكية الفكرية وسوق العمل.',
            content: `وتعمل اللجان المتخصصة في البرلمان المصري بالتعاون مع المنظمات الدولية على صياغة أول ميثاق وطني لأخلاقيات الذكاء الاصطناعي يضمن حقوق المبدعين ويحفز الابتكار المسؤول.`,
            quote: 'الذكاء الاصطناعي أداة تمكين للبشرية وليست بديلاً عنها، والتوازن الأخلاقي هو صمام الأمان.',
            quoteCite: 'المجلس القومي للاتصالات',
            isHero: false,
            isBreaking: false,
            views: 9320,
            reactions: { like: 290, heart: 150, mindblown: 105 },
            comments: []
        }
    ]
};

// Application State
let appState = null;
let currentHeroIndex = 0;
let heroTimer = null;

/**
 * Initialize Platform State from localStorage or default
 */
function loadState() {
    try {
        const stored = localStorage.getItem(STATE_STORAGE_KEY);
        if (stored) {
            appState = JSON.parse(stored);
        } else {
            appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
            saveState();
        }
    } catch (e) {
        console.error('Error loading state, using default:', e);
        appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }
}

function saveState() {
    try {
        localStorage.setItem(STATE_STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
        console.error('Error saving state:', e);
    }
}

/**
 * Reset State to Defaults (Admin Utility)
 */
function resetStateToDefault() {
    if (confirm('هل أنت متأكد من استعادة كافة بيانات الموقع الافتراضية؟')) {
        appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState();
        renderAll();
        showToast('إعادة ضبط النظام', 'تمت استعادة البيانات الافتراضية للموقع بنجاح');
    }
}

/**
 * Platform Initialization
 */
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    setupRouting();
    setupHeroCarousel();
    setupMarketTabs();
    setupCurrencyCalculator();
    setupPoll();
    setupSearchEngine();
    setupModals();
    setupAdminPanel();
    setupLanguageSwitcher();
    setupThemeSwitcher();
    setupMobileMenu();
    setupDockController();
    renderAll();
});

/**
 * Render All Live Components Across Homepage and CMS
 */
function renderAll() {
    renderHeroSlider();
    renderLatestNews();
    renderUrgentNews();
    renderMostRead();
    renderMarketsTable();
    renderCurrenciesWidget();
    renderPollWidget();
    renderCmsDashboard();
}

/**
 * ============================================================
 * ROUTING & VIEW SWITCHING (Make every link & page CLICKABLE)
 * ============================================================
 */
function setupRouting() {
    // Intercept clicks on links with data-view or switchView
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.view) {
            switchView(e.state.view, e.state.param, false);
        }
    });

    // Check initial URL hash on load with full URI decoding
    if (window.location.hash) {
        try {
            const raw = window.location.hash.substring(1);
            const decoded = decodeURIComponent(raw);
            const parts = decoded.split('-');
            const view = parts[0];
            const param = parts.slice(1).join('-');
            if (document.getElementById(view)) {
                switchView(view, param || null, false);
            }
        } catch (err) {
            console.error('Error parsing initial hash:', err);
        }
    }
}

function switchView(viewId, param = null, pushHistory = true) {
    const views = document.querySelectorAll('.page-view-section');
    views.forEach(v => v.classList.remove('active-view'));

    const target = document.getElementById(viewId);
    if (!target) return;

    target.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update history
    if (pushHistory) {
        history.pushState({ view: viewId, param: param }, '', `#${viewId}${param ? '-' + param : ''}`);
    }

    // Specific View Logic
    if (viewId === 'articleView' && param) {
        populateArticleView(param);
    } else if (viewId === 'categoryView' && param) {
        populateCategoryView(param);
    } else if (viewId === 'adminView') {
        renderCmsDashboard();
    }

    // Update Navbar Active Class
    const navItems = document.querySelectorAll('.nav-links-list li');
    navItems.forEach(li => li.classList.remove('active'));
    if (viewId === 'homeView') {
        const homeLi = document.querySelector('.nav-links-list li:first-child');
        if (homeLi) homeLi.classList.add('active');
    }

    // Update Dock Active Button
    const dockBtns = document.querySelectorAll('.dock-btn');
    dockBtns.forEach(btn => btn.classList.remove('active'));
    const matchingBtn = document.querySelector(`.dock-btn[data-view="${viewId}"]`);
    if (matchingBtn) matchingBtn.classList.add('active');
}

/**
 * Open Single Article View by ID (Dynamic Article Page)
 */
function openArticle(articleId) {
    const article = appState.articles.find(a => a.id === articleId) || appState.articles[0];
    if (!article) return;

    // Increment View Count
    article.views = (article.views || 0) + 1;
    saveState();

    switchView('articleView', article.id);
}

function populateArticleView(articleId) {
    const article = appState.articles.find(a => a.id === articleId) || appState.articles[0];
    if (!article) return;

    // Populate Breadcrumbs
    const crumbCat = document.getElementById('crumbCategory');
    const crumbTitle = document.getElementById('crumbTitle');
    if (crumbCat) {
        crumbCat.textContent = article.categoryName || article.category;
        crumbCat.onclick = () => openCategory(article.category);
    }
    if (crumbTitle) crumbTitle.textContent = article.title;

    // Populate Article Content
    const catBadge = document.getElementById('articleCategoryBadge');
    const titleEl = document.getElementById('articleMainTitle');
    const authorImg = document.getElementById('articleAuthorAvatar');
    const authorName = document.getElementById('articleAuthorName');
    const publishDate = document.getElementById('articlePublishDate');
    const featuredImg = document.getElementById('articleFeaturedMediaImg');
    const figcaption = document.getElementById('articleFigcaption');
    const leadText = document.getElementById('articleLeadText');
    const bodyProse = document.getElementById('articleBodyProse');
    const quoteText = document.getElementById('articlePullQuoteText');
    const quoteCite = document.getElementById('articlePullQuoteCite');

    if (catBadge) catBadge.textContent = article.categoryName || article.category;
    if (titleEl) titleEl.textContent = article.title;
    if (authorImg) authorImg.src = article.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80';
    if (authorName) authorName.textContent = article.author;
    if (publishDate) publishDate.textContent = `نُشر في: ${article.date} • قراءة: ${article.readTime || '3 دقائق'} • مشاهدات: ${article.views.toLocaleString('ar-EG')}`;
    if (featuredImg) featuredImg.src = article.image;
    if (figcaption) figcaption.textContent = article.caption || article.title;
    if (leadText) leadText.innerHTML = `<strong>النهار 360:</strong> ${article.lead || article.summary}`;
    
    if (bodyProse) {
        const paragraphs = (article.content || '').split('\n\n').filter(p => p.trim());
        bodyProse.innerHTML = paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('');
    }

    if (quoteText) quoteText.textContent = `"${article.quote || article.summary}"`;
    if (quoteCite) quoteCite.textContent = `— ${article.quoteCite || article.author}`;

    // Reactions
    const reactions = article.reactions || { like: 120, heart: 80, mindblown: 35 };
    const likeBtn = document.getElementById('reactLikeBtn');
    const heartBtn = document.getElementById('reactHeartBtn');
    const mindBtn = document.getElementById('reactMindBtn');
    if (likeBtn) likeBtn.innerHTML = `👍 مفيد (${reactions.like})`;
    if (heartBtn) heartBtn.innerHTML = `❤️ أعجبني (${reactions.heart})`;
    if (mindBtn) mindBtn.innerHTML = `💡 متميز (${reactions.mindblown})`;

    // Comments
    renderArticleComments(article);

    // Related News
    renderRelatedNews(article);
}

/**
 * Open Dedicated Category Archive Page View
 */
function openCategory(catKey) {
    switchView('categoryView', catKey);
}

function populateCategoryView(catKey) {
    const catMap = {
        'مصر': { title: 'قسم مصر والمحافظات', icon: 'fa-landmark', desc: 'متابعة شاملة لكافة المشروعات القومية، التنمية المحلية، وأخبار المحافظات المصرية على مدار الساعة.' },
        'العالم': { title: 'قسم عرب وعالم', icon: 'fa-globe', desc: 'تغطيات حصرية وتقارير معمقة لأبرز الأحداث الدولية والإقليمية والقمم السياسية.' },
        'الاقتصاد': { title: 'قسم اقتصاد وأعمال', icon: 'fa-chart-line', desc: 'أسواق المال، البورصة المصرية، أسعار الذهب والعملات، ومؤشرات التنمية والاستثمار.' },
        'اقتصاد': { title: 'قسم اقتصاد وأعمال', icon: 'fa-chart-line', desc: 'أسواق المال، البورصة المصرية، أسعار الذهب والعملات، ومؤشرات التنمية والاستثمار.' },
        'التكنولوجيا': { title: 'قسم التكنولوجيا والابتكار', icon: 'fa-microchip', desc: 'أحدث طفرات الذكاء الاصطناعي، الأمن السيبراني، الشركات الناشئة، والتحول الرقمي.' },
        'تكنولوجيا': { title: 'قسم التكنولوجيا والابتكار', icon: 'fa-microchip', desc: 'أحدث طفرات الذكاء الاصطناعي، الأمن السيبراني، الشركات الناشئة، والتحول الرقمي.' },
        'رياضة': { title: 'قسم الرياضة والملاعب', icon: 'fa-futbol', desc: 'أخبار الدوري المصري، البطولات القارية، أندية الأهلي والزمالك، ومحترفينا في الخارج.' },
        'صحة': { title: 'قسم الصحة والطب', icon: 'fa-heart-pulse', desc: 'منظومة التأمين الصحي الشامل، نصائح الأطباء، الاكتشافات الطبية، وصحة الأسرة.' },
        'تعليم': { title: 'قسم التعليم والجامعات', icon: 'fa-graduation-cap', desc: 'الجامعات التكنولوجية، التعليم الأساسي، نتائج الامتحانات، والمنح الدراسية.' },
        'ثقافة وفنون': { title: 'قسم الثقافة والفنون', icon: 'fa-masks-theater', desc: 'السينما المصرية، معارض الكتب، الحفلات الموسيقية، وتاريخ الفن العربي.' },
        'طرائف': { title: 'طرائف وغرائب', icon: 'fa-face-smile', desc: 'غرائب العالم، مواقف طريفة، والقصص الإنسانية الأكثر تفاعلاً على السوشيال ميديا.' },
        'طبائع': { title: 'علوم وبيئة وطبائع', icon: 'fa-leaf', desc: 'الحياة البرية، علوم الفضاء، التغير المناخي، والاستكشافات الجغرافية المذهلة.' },
        'فيديو': { title: 'منصة فيديو النهار 360', icon: 'fa-video', desc: 'تغطيات مرئية حصرية، لقاءات خاصة مع الوزراء والخبراء، وتقارير الشارع المصري.' },
        'تقارير وتحليلات': { title: 'مركز التقارير والتحليلات المعمقة', icon: 'fa-file-lines', desc: 'تحليلات استراتيجية واقتصادية معمقة يقدمها نخبة من كبار الخبراء والكتاب.' }
    };

    const info = catMap[catKey] || { title: `قسم ${catKey}`, icon: 'fa-newspaper', desc: 'أحدث الأخبار والتقارير المحدثة أولاً بأول.' };

    const titleEl = document.getElementById('catViewTitle');
    const descEl = document.getElementById('catViewDesc');
    const iconEl = document.getElementById('catViewIcon');
    const crumbEl = document.getElementById('catViewBreadcrumb');

    if (titleEl) titleEl.textContent = info.title;
    if (descEl) descEl.textContent = info.desc;
    if (iconEl) iconEl.className = `fa-solid ${info.icon}`;
    if (crumbEl) crumbEl.textContent = info.title;

    // Normalize category key by stripping leading 'ال' for resilient Arabic matching
    const cleanKey = (catKey || '').trim();
    const strippedKey = cleanKey.replace(/^ال/, '');
    const matched = appState.articles.filter(a => {
        if (cleanKey === 'الكل' || !cleanKey) return true;
        const c1 = (a.category || '').trim();
        const c1s = c1.replace(/^ال/, '');
        const c2 = (a.categoryName || '').trim();
        const c2s = c2.replace(/^ال/, '');
        return c1 === cleanKey || c2 === cleanKey ||
               c1s.includes(strippedKey) || strippedKey.includes(c1s) ||
               c2s.includes(strippedKey) || strippedKey.includes(c2s);
    });

    const grid = document.getElementById('categoryArticlesGrid');
    if (!grid) return;

    if (matched.length === 0) {
        grid.innerHTML = `
            <div class="empty-category-notice">
                <i class="fa-regular fa-folder-open"></i>
                <p>لا توجد مقالات منشورة حالياً في هذا القسم، سيتم إضافة تقارير جديدة قريباً.</p>
                <button class="btn-primary" onclick="switchView('homeView')">العودة للرئيسية</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = matched.map(art => `
        <article class="cat-article-card" onclick="openArticle('${art.id}')">
            <div class="cat-article-thumb">
                <img src="${art.image}" alt="${escapeHtml(art.title)}" loading="lazy">
                <span class="cat-badge-float">${escapeHtml(art.categoryName || art.category)}</span>
            </div>
            <div class="cat-article-body">
                <span class="cat-article-meta"><i class="fa-regular fa-clock"></i> ${art.date}</span>
                <h4 class="cat-article-title">${escapeHtml(art.title)}</h4>
                <p class="cat-article-excerpt">${escapeHtml(art.summary)}</p>
                <div class="cat-article-footer">
                    <span class="read-more-link">اقرأ التفاصيل <i class="fa-solid fa-arrow-left"></i></span>
                    <small><i class="fa-regular fa-eye"></i> ${art.views || 100}</small>
                </div>
            </div>
        </article>
    `).join('');
}

/**
 * ============================================================
 * HERO CAROUSEL CONTROLLER
 * ============================================================
 */
function setupHeroCarousel() {
    renderHeroSlider();
    // Auto advance every 8 seconds
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(() => {
        advanceHeroSlide(1);
    }, 8000);
}

function advanceHeroSlide(delta) {
    const heroArticles = appState.articles.filter(a => a.isHero);
    if (!heroArticles.length) return;

    currentHeroIndex = (currentHeroIndex + delta + heroArticles.length) % heroArticles.length;
    renderHeroSlider();
}

function setHeroSlide(index) {
    currentHeroIndex = index;
    renderHeroSlider();
}

function renderHeroSlider() {
    const heroArticles = appState.articles.filter(a => a.isHero);
    if (!heroArticles.length) return;

    const current = heroArticles[currentHeroIndex % heroArticles.length];
    if (!current) return;

    const card = document.getElementById('featuredHeroCard');
    const bgImg = document.getElementById('heroBgImage');
    const headline = document.getElementById('heroHeadlineTitle');
    const summary = document.getElementById('heroLeadSummary');
    const dotsWrap = document.getElementById('heroSliderDotsWrap');

    if (bgImg) bgImg.src = current.image;
    if (headline) headline.textContent = current.title;
    if (summary) summary.textContent = current.summary;

    if (card) {
        card.onclick = () => openArticle(current.id);
    }

    if (dotsWrap) {
        dotsWrap.innerHTML = `
            <span class="arrow-nav" onclick="event.stopPropagation(); advanceHeroSlide(1);" title="التالي">›</span>
            <span class="dot-text">المزيد</span>
            ${heroArticles.map((_, idx) => `
                <span class="dot ${idx === (currentHeroIndex % heroArticles.length) ? 'active' : ''}" 
                      onclick="event.stopPropagation(); setHeroSlide(${idx});"></span>
            `).join('')}
            <span class="arrow-nav" onclick="event.stopPropagation(); advanceHeroSlide(-1);" title="السابق">‹</span>
        `;
    }
}

/**
 * ============================================================
 * HOMEPAGE DYNAMIC COMPONENTS RENDERERS
 * ============================================================
 */
function renderLatestNews() {
    const container = document.getElementById('latestNewsListWrap');
    if (!container) return;

    // Get 4 non-hero or latest articles
    const latest = appState.articles.slice(3, 7);
    container.innerHTML = latest.map(art => `
        <article class="latest-news-item" onclick="openArticle('${art.id}')">
            <div class="item-text-side">
                <h5>${escapeHtml(art.title)}</h5>
                <span class="item-time-stamp"><i class="fa-regular fa-clock"></i> ${art.date}</span>
            </div>
            <div class="item-thumb-box">
                <img src="${art.image}" alt="${escapeHtml(art.title)}" loading="lazy">
            </div>
        </article>
    `).join('');
}

function renderUrgentNews() {
    const container = document.getElementById('urgentFeedItemsWrap');
    if (!container) return;

    const items = appState.breakingNews.slice(0, 5);
    container.innerHTML = items.map((newsText, idx) => `
        <div class="urgent-row-item" onclick="openUrgentStory(${idx})">
            <span class="red-num-bubble">${idx + 1}</span>
            <div class="urgent-item-text">
                <h6>${escapeHtml(newsText)}</h6>
                <small class="time-stamp">منذ ${10 * (idx + 1)} دقيقة</small>
            </div>
        </div>
    `).join('');
}

function openUrgentStory(idx) {
    // Open related or matching article
    const target = appState.articles[idx % appState.articles.length];
    openArticle(target.id);
}

function renderMostRead() {
    const container = document.getElementById('mostReadListWrap');
    if (!container) return;

    // Sort by views
    const sorted = [...appState.articles].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
    container.innerHTML = sorted.map((art, idx) => `
        <div class="most-read-row" onclick="openArticle('${art.id}')">
            <span class="num-badge">${idx + 1}</span>
            <h6 class="title-text">${escapeHtml(art.title)}</h6>
            <img src="${art.authorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80'}" alt="الكاتب" class="author-circle-avatar">
        </div>
    `).join('');
}

/**
 * ============================================================
 * INTERACTIVE MARKET INDICES TABS (مصر | العالم | العملات | السلع)
 * ============================================================
 */
function setupMarketTabs() {
    const tabButtons = document.querySelectorAll('.market-tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabButtons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            const tabKey = e.currentTarget.getAttribute('data-tab');
            renderMarketsTable(tabKey);
        });
    });
}

function renderMarketsTable(tabKey = 'egypt') {
    const tableBody = document.getElementById('marketsTableBody');
    if (!tableBody) return;

    const data = appState.marketIndices[tabKey] || appState.marketIndices.egypt;
    tableBody.innerHTML = data.map(item => `
        <div class="market-ticker-row" onclick="openMarketDetails('${escapeHtml(item.name)}', '${escapeHtml(item.val)}', '${escapeHtml(item.change)}')">
            <div class="ticker-name-col">
                <strong>${escapeHtml(item.name)}</strong>
                <span>${escapeHtml(item.val)}</span>
            </div>
            <div class="ticker-change-col ${item.isPositive ? 'positive' : 'negative'}">
                <i class="fa-solid fa-caret-${item.isPositive ? 'up' : 'down'}"></i> ${escapeHtml(item.change)}
            </div>
        </div>
    `).join('');
}

function openMarketDetails(name, val, change) {
    showToast('بيانات البورصة المباشرة', `المؤشر: ${name} | القيمة: ${val} | التغير: ${change}`);
}

/**
 * ============================================================
 * CURRENCY CONVERTER WIDGET & MODAL
 * ============================================================
 */
function setupCurrencyCalculator() {
    renderCurrenciesWidget();
}

function renderCurrenciesWidget() {
    const grid = document.getElementById('currenciesGridRow');
    if (!grid) return;

    const rates = appState.currencyRates;
    grid.innerHTML = `
        <div class="curr-cell" onclick="openCurrencyModal('USD')">
            <span class="curr-title">دولار أمريكي</span>
            <strong class="curr-rate">${rates.USD.toFixed(2)}</strong>
            <small>ج.م</small>
        </div>
        <div class="curr-cell" onclick="openCurrencyModal('SAR')">
            <span class="curr-title">ريال سعودي</span>
            <strong class="curr-rate">${rates.SAR.toFixed(2)}</strong>
            <small>ج.م</small>
        </div>
        <div class="curr-cell" onclick="openCurrencyModal('EUR')">
            <span class="curr-title">يورو أوروبي</span>
            <strong class="curr-rate">${rates.EUR.toFixed(2)}</strong>
            <small>ج.م</small>
        </div>
        <div class="curr-cell" onclick="openCurrencyModal('GBP')">
            <span class="curr-title">جنيه إسترليني</span>
            <strong class="curr-rate">${rates.GBP.toFixed(2)}</strong>
            <small>ج.م</small>
        </div>
    `;
}

function openCurrencyModal(defaultCurrency = 'USD') {
    const select = document.getElementById('calcSourceCurrency');
    if (select) select.value = defaultCurrency;
    calculateCurrencyConversion();
    openModal('currencyModal');
}

function calculateCurrencyConversion() {
    const amountInput = document.getElementById('calcAmountInput');
    const currencySelect = document.getElementById('calcSourceCurrency');
    const resultBox = document.getElementById('calcResultBox');

    if (!amountInput || !currencySelect || !resultBox) return;

    const amount = parseFloat(amountInput.value) || 0;
    const curr = currencySelect.value;
    const rate = appState.currencyRates[curr] || 48.75;
    const egpTotal = (amount * rate).toFixed(2);

    resultBox.innerHTML = `
        <div class="calc-result-badge">
            <span>${amount.toLocaleString()} ${curr} =</span>
            <strong>${parseFloat(egpTotal).toLocaleString()} جنيه مصري</strong>
        </div>
        <small class="rate-notice">سعر الصرف اللحظي للبنك المركزي: 1 ${curr} = ${rate} ج.م</small>
    `;
}

/**
 * ============================================================
 * INTERACTIVE POLL WIDGET
 * ============================================================
 */
function setupPoll() {
    renderPollWidget();
}

function renderPollWidget() {
    const pollQ = document.getElementById('pollQuestionText');
    const form = document.getElementById('pollForm');
    const results = document.getElementById('pollResults');

    if (pollQ) pollQ.textContent = appState.poll.question;

    if (!form || !results) return;

    if (appState.poll.userVoted) {
        form.style.display = 'none';
        results.style.display = 'flex';
        renderPollResults();
    } else {
        form.style.display = 'block';
        results.style.display = 'none';
        form.innerHTML = appState.poll.options.map((opt, idx) => `
            <label class="poll-opt">
                <input type="radio" name="pollChoice" value="${opt.id}" ${idx === 0 ? 'checked' : ''}>
                <span>${escapeHtml(opt.text)}</span>
            </label>
        `).join('') + '<button type="submit" class="btn-poll-vote">تصويت</button>';
    }
}

function handlePollSubmit() {
    const selected = document.querySelector('input[name="pollChoice"]:checked');
    if (!selected) return;

    const optId = selected.value;
    const targetOpt = appState.poll.options.find(o => o.id === optId);
    if (targetOpt) {
        targetOpt.votes = (targetOpt.votes || 0) + 1;
        appState.poll.userVoted = true;
        saveState();
        renderPollWidget();
        showToast('شكراً لتصويتك', 'تم تسجيل صوتك في استطلاع رأي النهار 360 بنجاح.');
    }
}

function renderPollResults() {
    const results = document.getElementById('pollResults');
    if (!results) return;

    const totalVotes = appState.poll.options.reduce((acc, o) => acc + (o.votes || 0), 0) || 1;
    results.innerHTML = appState.poll.options.map(opt => {
        const pct = Math.round(((opt.votes || 0) / totalVotes) * 100);
        return `
            <div class="result-bar-unit">
                <div class="result-text-row">
                    <span>${escapeHtml(opt.text)}</span>
                    <strong>${pct}% (${(opt.votes || 0).toLocaleString()})</strong>
                </div>
                <div class="bar-track">
                    <div class="bar-fill" style="width: ${pct}%;"></div>
                </div>
            </div>
        `;
    }).join('') + `<small class="total-votes-count">إجمالي المشاركين: ${totalVotes.toLocaleString()} صوت</small>`;
}

/**
 * ============================================================
 * INTERACTIVE SEARCH ENGINE
 * ============================================================
 */
function setupSearchEngine() {
    const inputs = document.querySelectorAll('.header-search-pill input, #globalSearchInput');
    inputs.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performGlobalSearch(input.value);
            }
        });
    });

    const searchBtns = document.querySelectorAll('.header-search-pill button');
    searchBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const input = btn.closest('.header-search-pill').querySelector('input');
            if (input) performGlobalSearch(input.value);
        });
    });
}

function performGlobalSearch(keyword) {
    if (!keyword || !keyword.trim()) {
        showToast('تنبيه البحث', 'يرجى كتابة كلمة مفتاحية للبحث.');
        return;
    }

    const term = keyword.trim().toLowerCase();
    const results = appState.articles.filter(a => 
        (a.title && a.title.toLowerCase().includes(term)) ||
        (a.summary && a.summary.toLowerCase().includes(term)) ||
        (a.category && a.category.toLowerCase().includes(term)) ||
        (a.author && a.author.toLowerCase().includes(term)) ||
        (a.content && a.content.toLowerCase().includes(term))
    );

    const modalTitle = document.getElementById('searchModalKeyword');
    const resultsList = document.getElementById('searchResultsList');

    if (modalTitle) modalTitle.textContent = `نتائج البحث عن: "${keyword}" (${results.length})`;
    if (resultsList) {
        if (results.length === 0) {
            resultsList.innerHTML = `
                <div class="no-search-results">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <p>لم نجد أي مقالات تطابق "${escapeHtml(keyword)}". جرب استخدام كلمات بحث أخرى أو تصفح الأقسام.</p>
                </div>
            `;
        } else {
            resultsList.innerHTML = results.map(art => `
                <article class="search-result-item" onclick="closeModal('searchModal'); openArticle('${art.id}');">
                    <img src="${art.image}" alt="${escapeHtml(art.title)}">
                    <div>
                        <span class="badge-cat-mini">${escapeHtml(art.categoryName || art.category)}</span>
                        <h4>${escapeHtml(art.title)}</h4>
                        <p>${escapeHtml(art.summary)}</p>
                        <small><i class="fa-regular fa-clock"></i> ${art.date} • بقلم: ${escapeHtml(art.author)}</small>
                    </div>
                </article>
            `).join('');
        }
    }

    openModal('searchModal');
}

/**
 * ============================================================
 * INTERACTIVE MODALS SYSTEM (Video, Modals, Institutional Pages)
 * ============================================================
 */
function setupModals() {
    // Backdrop click to close
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    document.querySelectorAll('.modal-close-trigger').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            if (modal) modal.classList.remove('active');
        });
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

// 1. Video Player Modal
function playVideoDemo(title = 'مشروعات الطاقة المتجددة .. خطوة نحو مستقبل أكثر استدامة', poster = 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80') {
    const videoTitle = document.getElementById('modalVideoTitle');
    const videoPoster = document.getElementById('modalVideoPoster');
    
    if (videoTitle) videoTitle.textContent = title;
    if (videoPoster) videoPoster.src = poster;

    openModal('videoModal');
}

// 2. Infographic Deep Dive Modal
function openInfographicDetails() {
    openModal('infographicModal');
}

// 3. Mobile App Download Modal
function openAppDownload(store = 'all') {
    openModal('appModal');
}

// 4. Institutional Modals (من نحن، هيئة التحرير، سياسة الخصوصية، اتصل بنا)
function openInfoModal(type) {
    const titles = {
        about: 'عن مؤسسة النهار 360',
        editorial: 'هيئة التحرير ومجلس الإدارة',
        privacy: 'سياسة الخصوصية وسرية البيانات',
        terms: 'شروط وأحكام الاستخدام',
        contact: 'اتصل بنا ومكاتب المؤسسة',
        sitemap: 'خريطة أقسام الموقع'
    };

    const contents = {
        about: `
            <div class="info-prose">
                <h4>بوابة إخبارية رقمية شاملة على مدار الساعة</h4>
                <p>تعد <strong>النهار 360</strong> إحدى أبرز المنصات الصحفية الرقمية المستقلة في مصر والعالم العربي، تأسست لتقديم صحافة استقصائية، مهنية وموضوعية تواكب تطلعات القارئ العربي المعاصر.</p>
                <p>تعتمد المؤسسة على شبكة واسعة من المراسلين في كافة المحافظات المصرية والعواصم العالمية، وتوظف أحدث تقنيات غرف الأخبار الذكية والتحليلات البيانية لتقديم تغطية خبرية آنية موثوقة تلتزم بميثاق الشرف الصحفي.</p>
                <div class="info-features-grid">
                    <div class="feat-box"><i class="fa-solid fa-bolt text-red"></i> تغطية عاجلة على مدار الساعة</div>
                    <div class="feat-box"><i class="fa-solid fa-chart-line text-blue"></i> تحليلات اقتصادية وبورصة لحظية</div>
                    <div class="feat-box"><i class="fa-solid fa-shield-halved text-green"></i> دقة التوثيق والمصداقية المهنية</div>
                </div>
            </div>
        `,
        editorial: `
            <div class="info-prose">
                <h4>مجلس الإدارة ورئاسة التحرير</h4>
                <ul class="editorial-board-list">
                    <li><strong>رئيس مجلس الإدارة:</strong> م. أسامة الشريف</li>
                    <li><strong>رئيس التحرير التنفيذي:</strong> الكاتب الصحفي أحمد مصطفى</li>
                    <li><strong>مدير التحرير للشؤون الاقتصادية:</strong> د. حازم عبد العزيز</li>
                    <li><strong>مدير التحرير للتحقيقات والتكنولوجيا:</strong> م. سارة كمال</li>
                    <li><strong>المستشار القانوني للمؤسسة:</strong> المستشار طارق فؤاد</li>
                </ul>
            </div>
        `,
        privacy: `
            <div class="info-prose">
                <h4>التزامنا بحماية بيانات القراء</h4>
                <p>نحن في "النهار 360" نحترم خصوصيتك التامة، ولا نقوم بمشاركة أي بيانات شخصية أو بريد إلكتروني مع أي أطراف ثالثة. يتم تشفير كافة الاتصالات عبر بروتوكولات HTTPS المعتمدة عالمياً.</p>
            </div>
        `,
        contact: `
            <div class="info-prose">
                <h4>تواصل مع غرفة الأخبار والإعلانات</h4>
                <div class="contact-cards-cluster">
                    <p><i class="fa-solid fa-location-dot text-red"></i> <strong>المقر الرئيسي:</strong> 14 شارع النيل، العجوزة، الجيزة، مصر</p>
                    <p><i class="fa-solid fa-phone text-blue"></i> <strong>الهاتف الموحد:</strong> +20 2 3345 6789</p>
                    <p><i class="fa-solid fa-envelope text-green"></i> <strong>البريد الإلكتروني:</strong> contact@alnahar360.com</p>
                </div>
                <form class="contact-interactive-form" onsubmit="event.preventDefault(); handleContactSubmit();">
                    <input type="text" placeholder="اسمك الكريم" required>
                    <input type="email" placeholder="بريدك الإلكتروني" required>
                    <textarea placeholder="رسالتك أو اقتراحك أو استفسارك الإعلاني..." rows="3" required></textarea>
                    <button type="submit" class="btn-primary">إرسال الرسالة</button>
                </form>
            </div>
        `,
        terms: `
            <div class="info-prose">
                <h4>شروط الاستخدام وحقوق الملكية الفكرية</h4>
                <p>كافة حقوق النشر والمحتوى المكتوب والمصري والمرئي محفوظة لمؤسسة "النهار 360". يحظر إعادة النشر التجاري بدون الحصول على إذن مسبق ومكتوب.</p>
            </div>
        `,
        sitemap: `
            <div class="info-prose">
                <h4>خريطة الموقع الكاملة</h4>
                <div class="sitemap-links-grid">
                    <a href="javascript:void(0)" onclick="closeModal('infoModal'); openCategory('مصر');">مصر والمحافظات</a>
                    <a href="javascript:void(0)" onclick="closeModal('infoModal'); openCategory('العالم');">عرب وعالم</a>
                    <a href="javascript:void(0)" onclick="closeModal('infoModal'); openCategory('الاقتصاد');">اقتصاد وأعمال</a>
                    <a href="javascript:void(0)" onclick="closeModal('infoModal'); openCategory('التكنولوجيا');">التكنولوجيا والابتكار</a>
                    <a href="javascript:void(0)" onclick="closeModal('infoModal'); openCategory('رياضة');">رياضة وملاعب</a>
                    <a href="javascript:void(0)" onclick="closeModal('infoModal'); openCategory('صحة');">صحة وطب</a>
                    <a href="javascript:void(0)" onclick="closeModal('infoModal'); openCategory('تعليم');">تعليم وجامعات</a>
                    <a href="javascript:void(0)" onclick="closeModal('infoModal'); openCategory('تقارير وتحليلات');">تقارير وتحليلات</a>
                </div>
            </div>
        `
    };

    const titleEl = document.getElementById('infoModalTitle');
    const bodyEl = document.getElementById('infoModalBody');

    if (titleEl) titleEl.textContent = titles[type] || 'معلومات المؤسسة';
    if (bodyEl) bodyEl.innerHTML = contents[type] || '<p>مرحباً بكم في النهار 360.</p>';

    openModal('infoModal');
}

function handleContactSubmit() {
    closeModal('infoModal');
    showToast('تم استلام رسالتك', 'شكراً لتواصلك مع النهار 360. سيقوم فريق التحرير بالرد خلال 24 ساعة.');
}

/**
 * ============================================================
 * ARTICLE INTERACTION (Font resizer, Reactions, Comments)
 * ============================================================
 */
let currentFontSizePx = 16;
function changeFontSize(delta) {
    currentFontSizePx = Math.max(14, Math.min(24, currentFontSizePx + delta));
    const prose = document.getElementById('articleBodyProse');
    if (prose) prose.style.fontSize = `${currentFontSizePx}px`;
    showToast('حجم الخط', `تم تعديل حجم خط المقال إلى ${currentFontSizePx}px`);
}

function copyArticleLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('تم نسخ الرابط', 'تم نسخ رابط الخبر إلى الحافظة بنجاح.');
    }).catch(() => {
        showToast('تم نسخ الرابط', 'يمكنك مشاركة الرابط مع أصدقائك.');
    });
}

function shareSocial(network) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
    let shareUrl = '';

    if (network === 'facebook') shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if (network === 'twitter') shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    if (network === 'whatsapp') shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    if (network === 'telegram') shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;

    if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=450');
}

function reactArticle(btn, type) {
    btn.classList.add('reacted');
    showToast('شكراً لتفاعلك', 'تم تسجيل تفاعلك مع هذا الخبر بنجاح.');
}

function renderArticleComments(article) {
    const list = document.getElementById('commentsStreamList');
    const countEl = document.getElementById('totalCommentsCount');
    const comments = article.comments || [];

    if (countEl) countEl.textContent = comments.length;
    if (!list) return;

    if (comments.length === 0) {
        list.innerHTML = '<p class="no-comments-msg">كن أول من يعلق على هذا الخبر ويميز النقاش!</p>';
        return;
    }

    list.innerHTML = comments.map(c => `
        <div class="comment-item-card">
            <div class="comment-header">
                <strong>${escapeHtml(c.name)}</strong>
                <small>${escapeHtml(c.date)}</small>
            </div>
            <p>${escapeHtml(c.text)}</p>
        </div>
    `).join('');
}

function handleAddComment() {
    const nameInput = document.getElementById('commenterName');
    const textInput = document.getElementById('commenterText');

    if (!nameInput || !textInput || !textInput.value.trim()) return;

    const newComment = {
        name: nameInput.value.trim() || 'قارئ النهار',
        date: 'الآن',
        text: textInput.value.trim()
    };

    // Find active article
    const crumbTitle = document.getElementById('crumbTitle');
    const title = crumbTitle ? crumbTitle.textContent : '';
    const article = appState.articles.find(a => a.title === title) || appState.articles[0];

    if (article) {
        article.comments = article.comments || [];
        article.comments.unshift(newComment);
        saveState();
        renderArticleComments(article);
        textInput.value = '';
        showToast('تمت إضافة تعليقك', 'شكراً لمشاركتك وجهة نظرك في النهار 360.');
    }
}

function renderRelatedNews(currentArticle) {
    const container = document.getElementById('relatedNewsListWrap');
    if (!container) return;

    const related = appState.articles
        .filter(a => a.id !== currentArticle.id && a.category === currentArticle.category)
        .slice(0, 3);

    const fallback = appState.articles.filter(a => a.id !== currentArticle.id).slice(0, 3);
    const finalItems = related.length ? related : fallback;

    container.innerHTML = finalItems.map(item => `
        <div class="related-row" onclick="openArticle('${item.id}')">
            <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
            <h6>${escapeHtml(item.title)}</h6>
        </div>
    `).join('');
}

function handleNewsletterSubmit() {
    const input = document.querySelector('.newsletter-form-inline input');
    if (!input || !input.value.trim()) return;

    showToast('تم الاشتراك بنجاح', `شكراً لانضمامك إلى قائمة النهار 360 البريدية (${escapeHtml(input.value)}).`);
    input.value = '';
}

/**
 * ============================================================
 * FULL-CONTROL ADMIN CMS PANEL (Manage the entire site live)
 * ============================================================
 */
function setupAdminPanel() {
    // CMS Tabs switcher
    const tabBtns = document.querySelectorAll('.cms-sidebar-tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const tabKey = btn.getAttribute('data-tab');
            switchCmsTab(tabKey);
        });
    });

    renderCmsDashboard();
}

function switchCmsTab(tabKey) {
    document.querySelectorAll('.cms-tab-panel').forEach(panel => panel.classList.remove('active'));
    const target = document.getElementById(tabKey);
    if (target) target.classList.add('active');
}

function renderCmsDashboard() {
    // Metrics
    const pubCount = document.getElementById('cmsTotalPublishedCount');
    const heroCount = document.getElementById('cmsTotalHeroCount');
    const breakingCount = document.getElementById('cmsTotalBreakingCount');
    const viewsCount = document.getElementById('cmsTotalViewsCount');

    if (pubCount) pubCount.textContent = appState.articles.length;
    if (heroCount) heroCount.textContent = appState.articles.filter(a => a.isHero).length;
    if (breakingCount) breakingCount.textContent = appState.breakingNews.length;
    if (viewsCount) {
        const totalV = appState.articles.reduce((acc, a) => acc + (a.views || 0), 0);
        viewsCount.textContent = (totalV > 1000) ? (totalV / 1000).toFixed(1) + 'K' : totalV;
    }

    // Render Articles Table
    renderCmsArticlesTable();

    // Render Breaking Manager
    renderCmsBreakingManager();

    // Render Financial Tickers Manager
    renderCmsMarketsManager();

    // Render Settings Manager
    renderCmsSettingsManager();
}

function renderCmsArticlesTable() {
    const tbody = document.getElementById('cmsArticlesTableBody');
    if (!tbody) return;

    tbody.innerHTML = appState.articles.map(art => `
        <tr>
            <td>
                <div class="table-art-meta">
                    <img src="${art.image}" class="table-art-thumb" alt="${escapeHtml(art.title)}">
                    <div>
                        <strong>${escapeHtml(art.title)}</strong>
                        <small><i class="fa-regular fa-clock"></i> ${art.date} • ${art.author}</small>
                    </div>
                </div>
            </td>
            <td><span class="badge-cat-mini">${escapeHtml(art.categoryName || art.category)}</span></td>
            <td>
                ${art.isHero ? '<span class="badge-pill bg-gold">مانشيت</span>' : ''}
                ${art.isBreaking ? '<span class="badge-pill bg-red">عاجل</span>' : ''}
                <span class="badge-pill bg-green">منشور</span>
            </td>
            <td><strong>${(art.views || 0).toLocaleString()}</strong></td>
            <td>
                <button class="btn-action-icon" onclick="openArticle('${art.id}')" title="معاينة بالموقع"><i class="fa-solid fa-eye"></i></button>
                <button class="btn-action-icon text-blue" onclick="loadArticleIntoEditor('${art.id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                <button class="btn-action-icon text-red" onclick="deleteArticle('${art.id}')" title="حذف"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

function handleCmsPublish() {
    const editId = document.getElementById('cmsEditingArticleId').value;
    const title = document.getElementById('cmsTitle').value.trim();
    const category = document.getElementById('cmsCategory').value;
    const author = document.getElementById('cmsAuthor').value.trim() || 'غرفة الأخبار - القاهرة';
    const image = document.getElementById('cmsImage').value.trim() || 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1200&q=80';
    const summary = document.getElementById('cmsSummary').value.trim();
    const content = document.getElementById('cmsContent').value.trim();
    const isHero = document.getElementById('cmsIsHero').checked;
    const isBreaking = document.getElementById('cmsIsBreaking').checked;

    if (!title || !summary) {
        showToast('خطأ في البيانات', 'يرجى إدخال عنوان وملخص الخبر على الأقل.');
        return;
    }

    if (editId) {
        // Edit existing
        const art = appState.articles.find(a => a.id === editId);
        if (art) {
            art.title = title;
            art.category = category;
            art.author = author;
            art.image = image;
            art.summary = summary;
            art.content = content;
            art.isHero = isHero;
            art.isBreaking = isBreaking;
            showToast('تم تحديث الخبر', `تم حفظ التعديلات على "${title}" فورياً.`);
        }
    } else {
        // Create new
        const newArt = {
            id: 'art-' + Date.now(),
            title: title,
            category: category,
            categoryName: category,
            author: author,
            authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
            date: 'الآن',
            readTime: '3 دقائق',
            image: image,
            caption: title,
            summary: summary,
            lead: summary,
            content: content || summary,
            isHero: isHero,
            isBreaking: isBreaking,
            views: 1,
            reactions: { like: 0, heart: 0, mindblown: 0 },
            comments: []
        };

        if (isHero) {
            appState.articles.unshift(newArt);
        } else {
            appState.articles.splice(3, 0, newArt);
        }

        if (isBreaking) {
            appState.breakingNews.unshift(title);
        }

        showToast('تم النشر الفوري!', `تم نشر خبر "${title}" على الموقع الحي بنجاح.`);
    }

    saveState();
    resetCmsEditor();
    renderAll();
}

function loadArticleIntoEditor(articleId) {
    const art = appState.articles.find(a => a.id === articleId);
    if (!art) return;

    document.getElementById('cmsEditingArticleId').value = art.id;
    document.getElementById('cmsTitle').value = art.title;
    document.getElementById('cmsCategory').value = art.category;
    document.getElementById('cmsAuthor').value = art.author;
    document.getElementById('cmsImage').value = art.image;
    document.getElementById('cmsSummary').value = art.summary;
    document.getElementById('cmsContent').value = art.content || art.summary;
    document.getElementById('cmsIsHero').checked = !!art.isHero;
    document.getElementById('cmsIsBreaking').checked = !!art.isBreaking;

    // Switch to Articles tab and scroll to editor
    switchCmsTab('cmsArticlesTab');
    document.getElementById('cmsEditorCard').scrollIntoView({ behavior: 'smooth' });
    showToast('وضع التعديل', `جاري تعديل: "${art.title}"`);
}

function resetCmsEditor() {
    document.getElementById('cmsNewArticleForm').reset();
    document.getElementById('cmsEditingArticleId').value = '';
}

function deleteArticle(articleId) {
    const art = appState.articles.find(a => a.id === articleId);
    if (!art) return;

    if (confirm(`هل أنت متأكد من حذف مقال "${art.title}" نهائياً من الموقع؟`)) {
        appState.articles = appState.articles.filter(a => a.id !== articleId);
        saveState();
        renderAll();
        showToast('تم الحذف', 'تم حذف المقال من الموقع وقاعدة البيانات.');
    }
}

// 2. Breaking News Manager
function renderCmsBreakingManager() {
    const list = document.getElementById('cmsBreakingList');
    if (!list) return;

    list.innerHTML = appState.breakingNews.map((news, idx) => `
        <div class="cms-breaking-row">
            <span class="badge-num">${idx + 1}</span>
            <input type="text" value="${escapeHtml(news)}" onchange="updateBreakingItem(${idx}, this.value)">
            <button class="btn-action-icon text-red" onclick="removeBreakingItem(${idx})" title="حذف الخبر"><i class="fa-solid fa-trash"></i></button>
        </div>
    `).join('');
}

function addCmsBreakingNews() {
    const input = document.getElementById('cmsNewBreakingInput');
    if (!input || !input.value.trim()) return;

    appState.breakingNews.unshift(input.value.trim());
    saveState();
    renderAll();
    input.value = '';
    showToast('أخبار عاجلة', 'تمت إضافة الخبر العاجل ونشره على الشريط الرئيسي.');
}

function updateBreakingItem(idx, newVal) {
    if (idx >= 0 && idx < appState.breakingNews.length) {
        appState.breakingNews[idx] = newVal.trim();
        saveState();
        renderAll();
        showToast('تحديث الأخبار العاجلة', 'تم تحديث نص الخبر بنجاح.');
    }
}

function removeBreakingItem(idx) {
    if (confirm('هل أنت متأكد من حذف هذا الخبر العاجل؟')) {
        appState.breakingNews.splice(idx, 1);
        saveState();
        renderAll();
        showToast('تم الحذف', 'تم حذف الخبر من شريط وقائمة الأخبار العاجلة.');
    }
}

// 3. Financial Tickers Manager
function renderCmsMarketsManager() {
    const egx = document.getElementById('cmsEgxVal');
    const egxChg = document.getElementById('cmsEgxChg');
    const usd = document.getElementById('cmsUsdVal');
    const gold = document.getElementById('cmsGoldVal');
    const brent = document.getElementById('cmsBrentVal');
    const eur = document.getElementById('cmsEurVal');
    const gbp = document.getElementById('cmsGbpVal');
    const sar = document.getElementById('cmsSarVal');

    const eg = appState.marketIndices.egypt;
    if (egx) egx.value = eg[0]?.val || '32,165.76';
    if (egxChg) egxChg.value = eg[0]?.change || '+1.24%';
    if (usd) usd.value = appState.currencyRates.USD || 48.75;
    if (gold) gold.value = eg[2]?.val || '4,276.50';
    if (brent) brent.value = eg[3]?.val || '74.32';
    if (eur) eur.value = appState.currencyRates.EUR || 52.34;
    if (gbp) gbp.value = appState.currencyRates.GBP || 61.23;
    if (sar) sar.value = appState.currencyRates.SAR || 12.98;
}

function handleCmsMarketsSave() {
    const egx = document.getElementById('cmsEgxVal').value;
    const egxChg = document.getElementById('cmsEgxChg').value;
    const usd = parseFloat(document.getElementById('cmsUsdVal').value) || 48.75;
    const gold = document.getElementById('cmsGoldVal').value;
    const brent = document.getElementById('cmsBrentVal').value;
    const eur = parseFloat(document.getElementById('cmsEurVal').value) || 52.34;
    const gbp = parseFloat(document.getElementById('cmsGbpVal').value) || 61.23;
    const sar = parseFloat(document.getElementById('cmsSarVal').value) || 12.98;

    // Update Egypt market
    appState.marketIndices.egypt[0].val = egx;
    appState.marketIndices.egypt[0].change = egxChg;
    appState.marketIndices.egypt[1].val = usd.toFixed(2);
    appState.marketIndices.egypt[2].val = gold;
    appState.marketIndices.egypt[3].val = brent;

    // Update Rates
    appState.currencyRates.USD = usd;
    appState.currencyRates.EUR = eur;
    appState.currencyRates.GBP = gbp;
    appState.currencyRates.SAR = sar;

    saveState();
    renderAll();
    showToast('تم تحديث المؤشرات', 'تم تحديث أسعار الأسواق والعملات على الصفحة الرئيسية فورياً!');
}

// 4. Settings Manager
function renderCmsSettingsManager() {
    const name = document.getElementById('cmsSettingSiteName');
    const sloganAr = document.getElementById('cmsSettingSloganAr');
    const sloganEn = document.getElementById('cmsSettingSloganEn');
    const editor = document.getElementById('cmsSettingEditor');
    const email = document.getElementById('cmsSettingEmail');

    if (name) name.value = appState.settings.siteName;
    if (sloganAr) sloganAr.value = appState.settings.sloganAr;
    if (sloganEn) sloganEn.value = appState.settings.sloganEn;
    if (editor) editor.value = appState.settings.chiefEditor;
    if (email) email.value = appState.settings.contactEmail;
}

function handleCmsSettingsSave() {
    appState.settings.siteName = document.getElementById('cmsSettingSiteName').value.trim();
    appState.settings.sloganAr = document.getElementById('cmsSettingSloganAr').value.trim();
    appState.settings.sloganEn = document.getElementById('cmsSettingSloganEn').value.trim();
    appState.settings.chiefEditor = document.getElementById('cmsSettingEditor').value.trim();
    appState.settings.contactEmail = document.getElementById('cmsSettingEmail').value.trim();

    saveState();
    showToast('تم حفظ الإعدادات', 'تم تحديث إعدادات وهوية الموقع بنجاح.');
}

/**
 * ============================================================
 * UTILITY & TOAST CONTROLLERS
 * ============================================================
 */
function showToast(title, msg) {
    const toast = document.getElementById('notificationToast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');

    if (!toast) return;

    if (toastTitle) toastTitle.textContent = title;
    if (toastMessage) toastMessage.textContent = msg;

    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

function setupDockController() {
    const trigger = document.getElementById('dockTriggerBtn');
    const panel = document.getElementById('dockPanel');
    const closeBtn = document.getElementById('dockCloseBtn');

    if (trigger && panel) {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            panel.classList.toggle('open');
        });
    }

    if (closeBtn && panel) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            panel.classList.remove('open');
        });
    }

    document.addEventListener('click', (e) => {
        if (panel && !panel.contains(e.target) && e.target !== trigger) {
            panel.classList.remove('open');
        }
    });
}

function setupMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navCluster = document.querySelector('.nav-links-cluster');
    if (!menuBtn || !navCluster) return;

    menuBtn.addEventListener('click', () => {
        navCluster.classList.toggle('mobile-open');
    });
}

function setupLanguageSwitcher() {
    // English LTR / Arabic RTL switcher
    const langBtn = document.getElementById('langSwitchBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const isAr = document.documentElement.dir === 'rtl';
            applyLanguage(isAr ? 'en' : 'ar');
        });
    }
}

function applyLanguage(lang) {
    if (lang === 'en') {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = 'en';
        document.body.classList.add('ltr-mode');
        const langText = document.getElementById('langBtnText');
        if (langText) langText.textContent = 'العربية / RTL';
        showToast('Language Switched', 'Interface switched to English (LTR) mode.');
    } else {
        document.documentElement.dir = 'rtl';
        document.documentElement.lang = 'ar';
        document.body.classList.remove('ltr-mode');
        const langText = document.getElementById('langBtnText');
        if (langText) langText.textContent = 'English / LTR';
        showToast('تم تبديل اللغة', 'تم تحويل واجهة الموقع إلى اللغة العربية (RTL).');
    }
}

function setupThemeSwitcher() {
    const themeBtn = document.getElementById('themeSwitchBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isDark = document.body.classList.contains('dark-mode');
            themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i> الوضع النهاري' : '<i class="fa-solid fa-moon"></i> الوضع الليلي';
            showToast(isDark ? 'الوضع الليلي' : 'الوضع النهاري', isDark ? 'تم تفعيل المظهر الليلي الداكن' : 'تم تفعيل المظهر النهاري المضيء');
        });
    }
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
