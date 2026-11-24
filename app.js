/**
 * النهار 360 - Al-Nahar 360 | Master Application Script
 * Interactive Client Prototype & CMS Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// App State
const state = {
    currentView: 'homeView',
    language: 'ar',
    darkMode: false,
    mobileSim: false,
    publishedCount: 74,
    pendingCount: 5,
    viewsCount: 14280
};

// Translations Dictionary for Client Demo
const translations = {
    ar: {
        dir: 'rtl',
        lang: 'ar',
        logoText: 'النـهار',
        tagline: 'بوابة إخبارية رقمية شاملة | على مدار الساعة',
        navHome: 'الرئيسية',
        navEgypt: 'مصر والمحافظات',
        navPolitics: 'سياسة',
        navEconomy: 'اقتصاد وأعمال',
        navSports: 'رياضة',
        navWorld: 'عرب وعالم',
        navOpinions: 'مقالات الرأي',
        navCms: 'إدارة المحتوى',
        breakingLabel: 'عاجل',
        langBtnText: 'English'
    },
    en: {
        dir: 'ltr',
        lang: 'en',
        logoText: 'Al-Nahar',
        tagline: 'Comprehensive 24/7 Digital News Portal',
        navHome: 'Home',
        navEgypt: 'Egypt & Regions',
        navPolitics: 'Politics',
        navEconomy: 'Business & Economy',
        navSports: 'Sports',
        navWorld: 'World News',
        navOpinions: 'Op-Eds',
        navCms: 'CMS Dashboard',
        breakingLabel: 'BREAKING',
        langBtnText: 'العربية'
    }
};

function initApp() {
    setupViewSwitching();
    setupLanguageSwitcher();
    setupThemeSwitcher();
    setupMobilePreview();
    setupControllerBarCollapse();
    setupMobileMenu();
    setupMarketTabs();
}

/**
 * Interactive Market Indices Tabs (مصر | العالم | العملات | السلع)
 */
function setupMarketTabs() {
    const tabs = document.querySelectorAll('.market-tab-btn');
    const tableBody = document.querySelector('.markets-table-body');
    if (!tabs.length || !tableBody) return;

    const marketData = {
        'مصر': [
            { name: 'EGX 30', val: '32,165.76', change: '+1.24%' },
            { name: 'الدولار الأمريكي', val: '48.75', change: '+0.15%' },
            { name: 'الذهب عيار 21', val: '4,276.50', change: '+0.62%' },
            { name: 'خام برنت', val: '74.32', change: '+0.48%' }
        ],
        'العالم': [
            { name: 'داو جونز (Dow Jones)', val: '44,296.51', change: '+0.59%' },
            { name: 'ستاندرد آند بورز 500', val: '5,969.34', change: '+0.73%' },
            { name: 'ناسداك (NASDAQ)', val: '19,003.65', change: '+0.88%' },
            { name: 'نيكاي الياباني', val: '38,283.85', change: '+0.67%' }
        ],
        'العملات': [
            { name: 'اليورو / دولار', val: '1.042 $', change: '+0.12%' },
            { name: 'الجنيه الإسترليني', val: '1.258 $', change: '+0.25%' },
            { name: 'الريال السعودي', val: '13.02 ج.م', change: '+0.05%' },
            { name: 'الدرهم الإماراتي', val: '13.27 ج.م', change: '+0.04%' }
        ],
        'السلع': [
            { name: 'الذهب أوقية', val: '2,712.40 $', change: '+0.84%' },
            { name: 'الفضة أوقية', val: '31.45 $', change: '+1.15%' },
            { name: 'الغاز الطبيعي', val: '3.12 $', change: '+2.40%' },
            { name: 'النحاس', val: '4.15 $', change: '+0.32%' }
        ]
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const cat = tab.textContent.trim();
            const list = marketData[cat] || marketData['مصر'];
            tableBody.innerHTML = list.map(item => `
                <div class="market-ticker-row">
                    <div class="ticker-name-col">
                        <strong>${item.name}</strong>
                        <span>${item.val}</span>
                    </div>
                    <div class="ticker-change-col positive">
                        <i class="fa-solid fa-caret-up"></i> ${item.change}
                    </div>
                </div>
            `).join('');
        });
    });
}

/**
 * View Switcher Logic (Home, Article, Admin CMS)
 */
function setupViewSwitching() {
    const viewButtons = document.querySelectorAll('.demo-view-switches .view-btn');
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const viewTarget = btn.getAttribute('data-view');
            switchView(viewTarget);
        });
    });
}

function switchView(viewId) {
    // Hide all views
    document.querySelectorAll('.page-view-section').forEach(section => {
        section.classList.remove('active-view');
    });

    // Show target view
    const targetSection = document.getElementById(viewId);
    if (targetSection) {
        targetSection.classList.add('active-view');
        state.currentView = viewId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active button state in demo controller
    document.querySelectorAll('.demo-view-switches .view-btn').forEach(btn => {
        if (btn.getAttribute('data-view') === viewId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update nav bar active state
    const navItems = document.querySelectorAll('.nav-links-list li');
    navItems.forEach(li => li.classList.remove('active'));
    if (viewId === 'homeView') {
        if (navItems[0]) navItems[0].classList.add('active');
    }
}

/**
 * Smooth Scroll to anchor sections
 */
function scrollToSection(sectionId) {
    setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 150);
}

/**
 * Language Switcher (Arabic <-> English)
 */
function setupLanguageSwitcher() {
    const langBtn = document.getElementById('langSwitchBtn');
    if (!langBtn) return;

    langBtn.addEventListener('click', () => {
        state.language = state.language === 'ar' ? 'en' : 'ar';
        applyLanguage(state.language);
    });
}

function applyLanguage(lang) {
    const config = translations[lang];
    document.documentElement.dir = config.dir;
    document.documentElement.lang = config.lang;

    const langBtnText = document.getElementById('langBtnText');
    if (langBtnText) langBtnText.textContent = config.langBtnText;

    const logoText = document.querySelector('.logo-text-ar');
    if (logoText) logoText.textContent = config.logoText;

    const brandTagline = document.querySelector('.brand-tagline');
    if (brandTagline) brandTagline.textContent = config.tagline;

    const breakingLabel = document.querySelector('.breaking-label');
    if (breakingLabel) {
        breakingLabel.innerHTML = `<span class="pulse-beacon"></span><i class="fa-solid fa-bolt"></i> ${config.breakingLabel}`;
    }

    if (lang === 'en') {
        showToast('Bilingual Mode Active', 'Switched to English (LTR layout)');
    } else {
        showToast('تم تفعيل اللغة العربية', 'الواجهة بالكامل باللغة العربية (RTL)');
    }
}

/**
 * Dark / Light Mode Switcher
 */
function setupThemeSwitcher() {
    const themeBtn = document.getElementById('themeSwitchBtn');
    if (!themeBtn) return;

    themeBtn.addEventListener('click', () => {
        state.darkMode = !state.darkMode;
        document.body.classList.toggle('dark-mode', state.darkMode);
        themeBtn.innerHTML = state.darkMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        showToast(
            state.darkMode ? 'الوضع الليلي مفعّل' : 'الوضع النهاري مفعّل',
            state.darkMode ? 'تصميم مريح للقراءة الليلية' : 'تم العودة للنمط الافتراضي'
        );
    });
}

/**
 * Mobile Device Preview Simulator
 */
function setupMobilePreview() {
    const mobileBtn = document.getElementById('mobilePreviewBtn');
    if (!mobileBtn) return;

    mobileBtn.addEventListener('click', () => {
        state.mobileSim = !state.mobileSim;
        document.body.classList.toggle('mobile-sim-active', state.mobileSim);
        mobileBtn.classList.toggle('active', state.mobileSim);
        showToast(
            state.mobileSim ? 'معاينة شاشة الموبايل' : 'معاينة شاشة سطح المكتب',
            state.mobileSim ? 'يعرض الموقع كما يظهر على الهواتف الذكية' : 'العودة للعرض الكامل'
        );
    });
}

/**
 * Demo Controller Collapse
 */
function setupControllerBarCollapse() {
    const toggleBtn = document.getElementById('toggleControllerBtn');
    const controllerBody = document.getElementById('controllerBody');
    if (!toggleBtn || !controllerBody) return;

    // Auto-collapse on mobile devices to prevent covering content
    let isCollapsed = window.innerWidth <= 768;
    if (isCollapsed) {
        controllerBody.style.display = 'none';
        toggleBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    }

    toggleBtn.addEventListener('click', () => {
        isCollapsed = !isCollapsed;
        controllerBody.style.display = isCollapsed ? 'none' : 'block';
        toggleBtn.innerHTML = isCollapsed ? '<i class="fa-solid fa-chevron-up"></i>' : '<i class="fa-solid fa-chevron-down"></i>';
    });
}

/**
 * Mobile Hamburger Menu
 */
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinksList = document.getElementById('navLinksList');
    if (mobileMenuBtn && navLinksList) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksList.classList.toggle('open');
        });

        // Close menu automatically when any link is tapped on mobile
        navLinksList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksList.classList.remove('open');
            });
        });
    }
}

/**
 * Article Font Size Controls
 */
function changeFontSize(size) {
    const articleBody = document.getElementById('articleBodyText');
    const buttons = document.querySelectorAll('.font-resizer-group button');
    buttons.forEach(b => b.classList.remove('active'));

    if (articleBody) {
        articleBody.classList.remove('font-small', 'font-large');
        if (size === 'small') {
            articleBody.classList.add('font-small');
            buttons[0].classList.add('active');
        } else if (size === 'large') {
            articleBody.classList.add('font-large');
            buttons[2].classList.add('active');
        } else {
            buttons[1].classList.add('active');
        }
    }
}

/**
 * Social Sharing Simulation
 */
function shareSocial(network) {
    const articleTitle = encodeURIComponent(document.querySelector('.article-headline-main').textContent.trim());
    const articleUrl = encodeURIComponent(window.location.href);

    if (network === 'whatsapp') {
        window.open(`https://api.whatsapp.com/send?text=${articleTitle}%20${articleUrl}`, '_blank');
        showToast('مشاركة عبر واتساب', 'تم تجهيز رابط الخبر للمشاركة السريعة');
    } else if (network === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`, '_blank');
        showToast('مشاركة عبر فيسبوك', 'فتح نافذة المشاركة');
    } else if (network === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?text=${articleTitle}&url=${articleUrl}`, '_blank');
        showToast('مشاركة عبر إكس', 'فتح نافذة النشر على X');
    }
}

function copyArticleLink() {
    navigator.clipboard?.writeText(window.location.href);
    showToast('تم نسخ الرابط', 'تم نسخ رابط الخبر بنجاح للحافظة');
}

/**
 * Reader Interactive Reactions
 */
function reactArticle(type) {
    const idMap = {
        like: 'countLike',
        insight: 'countInsight',
        surprise: 'countSurprise'
    };

    const targetElem = document.getElementById(idMap[type]);
    if (targetElem) {
        let currentCount = parseInt(targetElem.textContent.replace(/,/g, ''), 10) || 0;
        currentCount += 1;
        targetElem.textContent = currentCount.toLocaleString();
        event.currentTarget.classList.add('reacted');
        showToast('شكراً لتفاعلك!', 'تم تسجيل انطباعك حول الخبر بنجاح');
    }
}

/**
 * Add Comment Simulation
 */
function handleAddComment(event) {
    event.preventDefault();
    const name = document.getElementById('commenterName').value.trim();
    const text = document.getElementById('commenterText').value.trim();
    const list = document.getElementById('commentsStreamList');
    const totalCountElem = document.getElementById('totalCommentsCount');

    if (!name || !text || !list) return;

    const newCommentHtml = `
        <div class="single-comment-item" style="border-right: 3px solid var(--brand-red);">
            <div class="comment-avatar"><i class="fa-solid fa-user-check text-green"></i></div>
            <div class="comment-content-area">
                <div class="comment-top">
                    <strong>${escapeHtml(name)}</strong>
                    <span class="text-green font-bold">الآن (بانتظار المراجعة)</span>
                </div>
                <p>${escapeHtml(text)}</p>
            </div>
        </div>
    `;

    list.insertAdjacentHTML('afterbegin', newCommentHtml);
    event.target.reset();

    if (totalCountElem) {
        let count = parseInt(totalCountElem.textContent, 10) || 0;
        totalCountElem.textContent = count + 1;
    }

    showToast('تم استلام تعليقك', 'شكراً لمشاركتك الراقية، سيظهر التعليق فور مراجعته التحريرية');
}

/**
 * Reader Poll Simulation
 */
function handlePollSubmit(event) {
    event.preventDefault();
    const pollForm = document.getElementById('pollForm');
    const pollResults = document.getElementById('pollResults');
    if (pollForm && pollResults) {
        pollForm.style.display = 'none';
        pollResults.style.display = 'block';
        showToast('تم تسجيل تصويتك', 'شكراً لمشاركتك في استطلاع رأي القراء اليومي');
    }
}

/**
 * Newsletter Submit
 */
function handleNewsletterSubmit(event) {
    event.preventDefault();
    event.target.reset();
    showToast('تم الاشتراك بنجاح', 'ستصلك أهم وأحدث أخبار النهار 360 يومياً');
}

/**
 * Video Player Simulation
 */
function playVideoDemo() {
    showToast('مشغل النهار 360 TV', 'جاري تشغيل البث المرئي عالي الدقة (Full HD 1080p)');
}

/**
 * CMS Engine: News Publisher & Editor
 */
function handleCmsPublish(event) {
    event.preventDefault();
    const title = document.getElementById('cmsTitle').value.trim();
    const category = document.getElementById('cmsCategory').value;
    const author = document.getElementById('cmsAuthor').value;
    const isBreaking = document.getElementById('cmsIsBreaking').checked;
    const isHero = document.getElementById('cmsIsHero').checked;

    if (!title) return;

    // Update Counter
    state.publishedCount += 1;
    const publishedCounterElem = document.getElementById('cmsPublishedCount');
    if (publishedCounterElem) {
        publishedCounterElem.innerHTML = `${state.publishedCount} <span class="kpi-tag">مباشر</span>`;
    }

    // Add to CMS Table
    const tableBody = document.getElementById('cmsArticlesTableBody');
    if (tableBody) {
        const newRow = `
            <tr style="background: rgba(34, 197, 94, 0.08);">
                <td>
                    <strong>${escapeHtml(title)}</strong>
                    <small><i class="fa-regular fa-clock"></i> الآن | 1 زيارة</small>
                </td>
                <td><span class="tag-cat">${escapeHtml(category)}</span></td>
                <td><span class="badge-status published">منشور فوري</span></td>
                <td>
                    <div class="action-icons">
                        <button onclick="switchView('articleView')" title="معاينة"><i class="fa-solid fa-eye"></i></button>
                        <button onclick="editArticleMock(this)" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                        <button onclick="deleteArticleMock(this)" class="delete" title="حذف"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('afterbegin', newRow);
    }

    // If marked as breaking, prepend to Breaking Ticker!
    if (isBreaking) {
        const tickerTrack = document.getElementById('tickerItemsTrack');
        if (tickerTrack) {
            const breakingItem = `
                <span class="ticker-entry" style="color: var(--brand-red); font-weight: bold;">
                    <i class="fa-solid fa-fire text-red"></i> ${escapeHtml(title)}
                </span>
            `;
            tickerTrack.insertAdjacentHTML('afterbegin', breakingItem);
        }
    }

    event.target.reset();

    showToast(
        'تم النشر بنجاح على الموقع!',
        `تم نشر الخبر في قسم (${category}) بنقرة واحدة وتحديث محركات البحث فورياً`
    );
}

function simulateSchedule() {
    showToast('جدولة النشر الذكية', 'تم تحديد موعد نشر الخبر تلقائياً في تمام الساعة 08:00 صباحاً');
}

function simulateSaveDraft() {
    showToast('حفظ المسودة', 'تم حفظ مسودة الخبر بأمان في حساب المحرر');
}

function approveArticleMock(btn) {
    const row = btn.closest('tr');
    if (row) {
        const badge = row.querySelector('.badge-status');
        if (badge) {
            badge.className = 'badge-status published';
            badge.textContent = 'معتمد ومنشور';
        }
        btn.remove();

        // decrement pending
        state.pendingCount = Math.max(0, state.pendingCount - 1);
        const pendingCountElem = document.getElementById('cmsPendingCount');
        if (pendingCountElem) {
            pendingCountElem.innerHTML = `${state.pendingCount} <span class="kpi-badge-alert">محدث</span>`;
        }

        showToast('تم اعتماد الخبر', 'قام رئيس التحرير باعتماد ونشر المقال مباشرة على الصفحة الأولى');
    }
}

function deleteArticleMock(btn) {
    if (confirm('هل أنت متأكد من رغبتك في حذف هذا الخبر من الموقع نهائياً؟')) {
        const row = btn.closest('tr');
        if (row) {
            row.style.opacity = '0';
            setTimeout(() => row.remove(), 250);
            showToast('تم حذف الخبر', 'تمت إزالة الخبر من قواعد البيانات والموقع بنجاح');
        }
    }
}

function editArticleMock(btn) {
    showToast('فتح محرر الأخبار', 'جاري جلب تفاصيل الخبر ومرفقات الصور في المحرر المتقدم');
}

function refreshCmsList() {
    showToast('تحديث البيانات', 'تمت مزامنة أحدث الإحصائيات والأخبار المنشورة');
}

function openPublishModal() {
    const formElem = document.getElementById('cmsNewArticleForm');
    if (formElem) {
        formElem.scrollIntoView({ behavior: 'smooth' });
        const input = document.getElementById('cmsTitle');
        if (input) input.focus();
    }
}

/**
 * Toast Notification Utility
 */
let toastTimeout = null;
function showToast(title, message) {
    const toast = document.getElementById('notificationToast');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');

    if (!toast || !toastTitle || !toastMessage) return;

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

/**
 * Security helper to prevent XSS in mock insertion
 */
function escapeHtml(string) {
    const div = document.createElement('div');
    div.innerText = string;
    return div.innerHTML;
}
