<script setup lang="ts">
import { ref } from 'vue'

const lang = ref<'en' | 'km'>('en')
const faqOpen = ref<number | null>(null)
const toggleFaq = (i: number) => {
  faqOpen.value = faqOpen.value === i ? null : i
}

const toggleLang = () => {
  lang.value = lang.value === 'en' ? 'km' : 'en'
}

const methods = [
  { name: 'METHOD-FLOOD', type: 'Layer 7', power: 9.5, ok: true },
  { name: 'HEGT', type: 'Layer 7', power: 9.7, ok: true },
]

const t = {
  nav_price: { en: 'prices', km: 'តម្លៃ' },
  nav_methods: { en: 'methods', km: 'វិធីសាស្ត្រ' },
  nav_faq: { en: 'faq', km: 'សំណួរ' },
  nav_tos: { en: 'tos', km: 'លក្ខខណ្ឌ' },
  nav_order: { en: 'order', km: 'បញ្ជាទិញ' },
  badge: { en: 'first cambodia ip stresser', km: 'ទីមួយនៅកម្ពុជា' },
  hero_sub: { en: '#1 cambodia based layer 7 stresser. gov & edu targets not allowed. prices start at $5. hit us on telegram to order.', km: 'ស្ត្រេសសឺរលេខ១ នៅកម្ពុជា។ ហាមវាយ .gov និង .edu។ តម្លៃចាប់ផ្ដើមត្រឹមតែ $5។ ទាក់ទងតេឡេក្រាមដើម្បីបញ្ជាទិញ។' },
  btn_plans: { en: 'see plans', km: 'មើលតម្លៃ' },
  btn_methods: { en: 'methods', km: 'វិធីសាស្ត្រ' },
  why_title: { en: 'why us?', km: 'ហេតុអីយើង?' },
  why_sub: { en: 'we actually deliver. no bullshit.', km: 'យើងធ្វើការអីពិតៗ មិនកុហកទេ។' },
  feat1_title: { en: 'first in cambodia', km: 'ទីមួយនៅកម្ពុជា' },
  feat1_desc: { en: 'only layer 7 stresser based in cambodia. local infra, global reach.', km: 'ស្ត្រេសសឺរតែមួយគត់ដែលមានមូលដ្ឋាននៅកម្ពុជា។ ហេដ្ឋារចនាសម្ព័ន្ធក្នុងស្រុក ប៉ុន្តែទៅដល់ពិភពលោក។' },
  feat2_title: { en: 'no gov / edu targets', km: 'ហាម .gov និង .edu' },
  feat2_desc: { en: 'gov and edu targets are strictly not allowed. we do not permit attacks on government or educational sites.', km: 'គោលដៅ .gov និង .edu ត្រូវបានហាមឃាត់ជាដាច់ខាត។ យើងមិនអនុញ្ញាតឲ្យវាយគេហទំព័ររដ្ឋាភិបាល ឬសាលារៀនទេ។' },
  feat3_title: { en: 'no tos bypass', km: 'ហាម TOS Bypass' },
  feat3_desc: { en: 'we do not allow bypassing terms of service. use only on targets you own.', km: 'យើងមិនអនុញ្ញាតឲ្យរំលង TOS ទេ។ ប្រើតែលើគោលដៅដែលអ្នកជាម្ចាស់ប៉ុណ្ណោះ។' },
  feat4_title: { en: 'http flood', km: 'HTTP Flood' },
  feat4_desc: { en: 'high volume http/https flood. eats through rate limits.', km: 'បញ្ជូន http/https ច្រើនសន្ធឹក។ រំលង rate limit បានស្រួល។' },
  feat5_title: { en: 'cf bypass', km: 'រំលង Cloudflare' },
  feat5_desc: { en: 'browser fingerprints + rotating user agents. cloudflare doesnt stand a chance.', km: 'ប្រើ browser fingerprints និង user agents បង្វិល។ Cloudflare ឈរមិនបានទេ។' },
  feat6_title: { en: 'smart ddos', km: 'Smart DDoS' },
  feat6_desc: { en: 'auto picks the best vector based on real time target response.', km: 'ជ្រើសរើសវិធីល្អបំផុតដោយស្វ័យប្រវត្តិ តាមការឆ្លើយតបរបស់គោលដៅ។' },
  clients_title: { en: 'clients', km: 'អតិថិជន' },
  clients_sub: { en: 'trusted by people who know.', km: 'ទុកចិត្តដោយអ្នកដែលយល់។' },
  client1_text: { en: '"been using rikixz for months. method flood hits hard. fastest setup i\'ve seen."', km: '"ប្រើ rikixz រាប់ខែហើយ។ method flood ខ្លាំងណាស់។ លឿនជាងគេដែលធ្លាប់ឃើញ។"' },
  client2_text: { en: '"first cambodia stresser that actually delivers. method flood kills. support is quick on tg."', km: '"ស្ត្រេសសឺរខ្មែរដំបូងដែលធ្វើការពិតមែន។ method flood ខ្លាំងណាស់។ សាវ៉ាឆាប់រហ័សតាម tg។"' },
  methods_title: { en: 'methods', km: 'វិធីសាស្ត្រ' },
  methods_sub: { en: 'full list of what we got.', km: 'បញ្ជីទាំងអស់ដែលយើងមាន។' },
  tbl_method: { en: 'method', km: 'វិធី' },
  tbl_type: { en: 'type', km: 'ប្រភេទ' },
  tbl_power: { en: 'power', km: 'កម្លាំង' },
  tbl_status: { en: 'status', km: 'ស្ថានភាព' },
  status_online: { en: 'online', km: 'ប្រើបាន' },
  status_limited: { en: 'limited', km: 'មានកំណត់' },
  pricing_title: { en: 'pricing', km: 'តម្លៃ' },
  pricing_sub: { en: 'pick your duration. simple.', km: 'ជ្រើសរើសពេលវេលា។ ងាយស្រួល។' },
  basic: { en: 'basic', km: 'ធម្មតា' },
  standard: { en: 'standard', km: 'កណ្ដាល' },
  premium: { en: 'premium', km: 'កំពូល' },
  bestseller: { en: 'best seller', km: 'ពេញនិយម' },
  seconds: { en: 'seconds', km: 'វិនាទី' },
  order_btn: { en: 'order', km: 'បញ្ជាទិញ' },
  method_l7: { en: 'layer 7 methods', km: 'វិធី Layer 7' },
  basic_bypass: { en: 'basic bypass', km: 'Bypass ធម្មតា' },
  advanced_bypass: { en: 'advanced bypass', km: 'Bypass កម្រិតខ្ពស់' },
  tg_support: { en: 'telegram support', km: 'ជំនួយ Telegram' },
  cf_bypass: { en: 'cf bypass', km: 'រំលង CF' },
  priority_queue: { en: 'priority queue', km: 'អាទិភាព' },
  concurrent: { en: 'concurrent attacks', km: 'វាយក្នុងពេលតែមួយ' },
  faq_title: { en: 'faq', km: 'សំណួរ' },
  faq_sub: { en: 'common questions.', km: 'សំណួរគេសួរញឹកញាប់។' },
  faq1_q: { en: 'what is an ip stresser?', km: 'តើ IP stresser ជាអី?' },
  faq1_a: { en: 'tool that tests network resilience by simulating traffic. helps find weak spots in your setup.', km: 'ឧបករណ៍សាកល្បងបណ្ដាញដោយក្លែងធ្វើ traffic។ ជួយរកចំណុចខ្សោយរបស់អ្នក។' },
  faq2_q: { en: 'is this legal?', km: 'តើវាស្របច្បាប់ទេ?' },
  faq2_a: { en: 'only if you own the target or have written permission. we dont condone illegal use.', km: 'លុះត្រាតែអ្នកជាម្ចាស់គោលដៅ ឬមានការអនុញ្ញាតជាលាយលក្ខណ៍អក្សរ។ យើងមិនគាំទ្រការប្រើខុសច្បាប់ទេ។' },
  faq3_q: { en: 'what are the rules?', km: 'តើមានច្បាប់អីខ្លះ?' },
  faq3_a: { en: 'break the tos and youre banned. no refunds. simple.', km: 'បំពាន TOS ត្រូវបានបណ្ដេញចេញ។ មិនសងលុយវិញទេ។ សាមញ្ញ។' },
  faq4_q: { en: 'how do i order?', km: 'តើបញ្ជាទិញដូចម្ដេច?' },
  faq4_a: { en: 'telegram: @krisneverdie or join @rikixzapi. tell us what you need.', km: 'តេឡេក្រាម៖ @krisneverdie ឬចូល @rikixzapi។ ប្រាប់យើងពីអ្វីដែលអ្នកចង់បាន។' },
  faq5_q: { en: 'what payment?', km: 'បង់លុយតាមវិធីណា?' },
  faq5_a: { en: 'btc, usdt, crypto. ask on telegram for details.', km: 'BTC, USDT, crypto ផ្សេងៗ។ សួរតាម Telegram សម្រាប់ព័ត៌មានលម្អិត។' },
  faq6_q: { en: 'how fast does it start?', km: 'តើចាប់ផ្ដើមលឿនប៉ុណ្ណា?' },
  faq6_a: { en: 'right after payment. no waiting around.', km: 'ភ្លាមៗបន្ទាប់ពីបង់លុយ។ មិនបាច់ចាំទេ។' },
  why_title_sec: { en: 'why use rikixz?', km: 'ហេតុអីត្រូវប្រើ rikixz?' },
  why_sub_sec: { en: 'use it on your own risk. legit tool, not for illegal shit.', km: 'ប្រើដោយគ្រោះថ្នាក់ផ្ទាល់ខ្លួន។ ឧបករណ៍ស្របច្បាប់ មិនមែនសម្រាប់រឿងខុសច្បាប់ទេ។' },
  why1_title: { en: 'for testing only', km: 'សម្រាប់សាកល្បងតែប៉ុណ្ណោះ' },
  why1_desc: { en: 'this stresser is made for running tests on your own website or servers. check your dstat, see how your setup handles the load.', km: 'stresser នេះបង្កើតឡើងសម្រាប់សាកល្បង website ឬ server ផ្ទាល់ខ្លួនឯង។ ពិនិត្យ dstat របស់អ្នក មើលថា setup អ្នកទប់បានប៉ុណ្ណា។' },
  why2_title: { en: 'use at your own risk', km: 'ប្រើដោយគ្រោះថ្នាក់' },
  why2_desc: { en: 'you are responsible for what you do with this tool. we provide the service, you provide the brain.', km: 'អ្នកទទួលខុសត្រូវចំពោះអ្វីដែលអ្នកធ្វើជាមួយឧបករណ៍នេះ។ យើងផ្ដល់សេវា អ្នកផ្ដល់ខួរក្បាល។' },
  why3_title: { en: 'no illegal use', km: 'ហាមប្រើខុសច្បាប់' },
  why3_desc: { en: 'do not use this for illegal activities. if our support team sees you using it for illegal shit, you get banned immediately. no warnings. no refunds.', km: 'កុំប្រើរឿងនេះសម្រាប់សកម្មភាពខុសច្បាប់។ បើក្រុមការងារយើងឃើញអ្នកប្រើខុសច្បាប់ អ្នកនឹងត្រូវបានបណ្ដេញចេញភ្លាមៗ។ គ្មានការព្រមានទេ។ មិនសងលុយវិញ។' },
  why4_title: { en: 'stresser for run, not crime', km: 'stresser សម្រាប់សាកល្បង' },
  why4_desc: { en: 'this is a stress testing tool. use it to stress test your own infrastructure. keep it legit.', km: 'នេះជាឧបករណ៍ stress testing។ ប្រើវាដើម្បីសាកល្បង infrastructure ផ្ទាល់ខ្លួនឯង។ រក្សាវាឲ្យស្របច្បាប់។' },
  tos_title: { en: 'terms of service', km: 'លក្ខខណ្ឌ' },
  tos_sub: { en: 'read this. seriously.', km: 'អានហ្នឹងសិន។ ចាំបាច់ណាស់។' },
  tos_warn: { en: 'violating any rule = permanent ban. no exceptions. no refunds.', km: 'បំពានច្បាប់ណាមួយ = បណ្ដេញចេញជាអចិន្ត្រៃយ៍។ គ្មានករណីលើកលែង។ មិនសងលុយវិញ។' },
  tos1: { en: 'do not attack cambodian targets', km: 'កុំវាយគោលដៅនៅកម្ពុជា' },
  tos2: { en: 'do not attack gov or edu targets', km: 'ហាមវាយគោលដៅ .gov និង .edu' },
  tos3: { en: 'do not share proof/screenshots publicly', km: 'កុំចែករំលែកភស្តុតាងជាសាធារណៈ' },
  tos4: { en: 'you need permission from target owner', km: 'ត្រូវការការអនុញ្ញាតពីម្ចាស់គោលដៅ' },
  tos5: { en: 'no reselling or sharing access', km: 'ហាមលក់បន្ត ឬចែករំលែក access' },
  tos6: { en: 'no refunds if you break the rules', km: 'មិនសងលុយវិញទេ បើអ្នកបំពានច្បាប់' },
  contact_title: { en: 'contact', km: 'ទំនាក់ទំនង' },
  contact_sub: { en: 'hit us up on telegram.', km: 'ទាក់ទងមកយើងតាម Telegram។' },
  channel: { en: 'channel: @rikixzapi', km: 'ឆានែល៖ @rikixzapi' },
  backup: { en: 'backup: @krisneverdie', km: 'បម្រុង៖ @krisneverdie' },
  support1: { en: 'support: @rosykisa', km: 'សាវ៉ា៖ @rosykisa' },
  support2: { en: 'support: @rikixz_supporter', km: 'សាវ៉ា៖ @rikixz_supporter' },
  footer: { en: 'rikixz stresser &mdash; first cambodia ip stresser &copy; 2026', km: 'rikixz stresser &mdash; ស្ត្រេសសឺរខ្មែរដំបូង &copy; 2026' },
  footer_sub: { en: 'for authorized testing only. read the', km: 'សម្រាប់សាកល្បងតែប៉ុណ្ណោះ។ អាន' },
  tos_link: { en: 'tos', km: 'លក្ខខណ្ឌ' },
}
</script>

<template>
  <div class="wrap">
    <!-- header -->
    <div class="topbar">
      <div class="topbar-in">
        <span class="logo"><img src="https://i.postimg.cc/FzYQ42Zv/%F0%90%94%8C-anime-icon.jpg" alt="" class="logo-img"> rikixz stresser</span>
        <div class="topbar-right">
          <a href="#prices">{{ t.nav_price[lang] }}</a>
          <a href="#methods">{{ t.nav_methods[lang] }}</a>
          <a href="#faq">{{ t.nav_faq[lang] }}</a>
          <a href="#tos">{{ t.nav_tos[lang] }}</a>
          <button class="lang-btn" @click="toggleLang">{{ lang === 'en' ? 'KH' : 'EN' }}</button>
          <a href="#contact" class="topbar-cta">{{ t.nav_order[lang] }}</a>
        </div>
      </div>
    </div>

    <!-- hero -->
    <section class="hero-sec">
      <div class="hero-overlay"></div>
      <div class="hero-particles">
        <span class="particle" style="--x:10%;--s:4;--d:0s"></span>
        <span class="particle" style="--x:25%;--s:3;--d:2s"></span>
        <span class="particle" style="--x:45%;--s:5;--d:4s"></span>
        <span class="particle" style="--x:65%;--s:2;--d:1s"></span>
        <span class="particle" style="--x:80%;--s:4;--d:3s"></span>
        <span class="particle" style="--x:90%;--s:3;--d:5s"></span>
      </div>
      <div class="hero-in">
        <img src="https://i.postimg.cc/FzYQ42Zv/%F0%90%94%8C-anime-icon.jpg" alt="" class="hero-logo">
        <div class="hero-badge">{{ t.badge[lang] }}</div>
        <h1 class="hero-title">RIKIXZ<br>STRESSER</h1>
        <p class="hero-sub">{{ t.hero_sub[lang] }}</p>
        <div class="hero-btns">
          <a href="#prices" class="btn-primary">{{ t.btn_plans[lang] }}</a>
          <a href="#methods" class="btn-ghost">{{ t.btn_methods[lang] }}</a>
        </div>
        <div class="hero-stats">
          <div class="stat"><span class="stat-n">200+</span><span class="stat-l">gbps</span></div>
          <div class="stat"><span class="stat-n">12</span><span class="stat-l">pops</span></div>
          <div class="stat"><span class="stat-n">2</span><span class="stat-l">methods</span></div>
          <div class="stat"><span class="stat-n">2</span><span class="stat-l">clients</span></div>
        </div>
      </div>
    </section>

    <!-- features -->
    <section class="sec" id="features">
      <div class="sec-head">
        <h2>{{ t.why_title[lang] }}</h2>
        <p>{{ t.why_sub[lang] }}</p>
      </div>
      <div class="feats">
        <div class="feat">
          <div>
            <strong>{{ t.feat1_title[lang] }}</strong>
            <span>{{ t.feat1_desc[lang] }}</span>
          </div>
        </div>
        <div class="feat">
          <div>
            <strong>{{ t.feat2_title[lang] }}</strong>
            <span>{{ t.feat2_desc[lang] }}</span>
          </div>
        </div>
        <div class="feat">
          <div>
            <strong>{{ t.feat3_title[lang] }}</strong>
            <span>{{ t.feat3_desc[lang] }}</span>
          </div>
        </div>
        <div class="feat">
          <div>
            <strong>{{ t.feat4_title[lang] }}</strong>
            <span>{{ t.feat4_desc[lang] }}</span>
          </div>
        </div>
        <div class="feat">
          <div>
            <strong>{{ t.feat5_title[lang] }}</strong>
            <span>{{ t.feat5_desc[lang] }}</span>
          </div>
        </div>
        <div class="feat">
          <div>
            <strong>{{ t.feat6_title[lang] }}</strong>
            <span>{{ t.feat6_desc[lang] }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- clients -->
    <section class="sec" id="clients">
      <div class="sec-head">
        <h2>{{ t.clients_title[lang] }}</h2>
        <p>{{ t.clients_sub[lang] }}</p>
      </div>
      <div class="clients-grid">
        <div class="client-card">
          <div class="client-stars">* * * * *</div>
          <p class="client-text">{{ t.client1_text[lang] }}</p>
          <div class="client-name">@anon1337</div>
        </div>
        <div class="client-card">
          <div class="client-stars">* * * * *</div>
          <p class="client-text">{{ t.client2_text[lang] }}</p>
          <div class="client-name">@cyberx7</div>
        </div>
      </div>
    </section>

    <!-- methods -->
    <section class="sec" id="methods">
      <div class="sec-head">
        <h2>{{ t.methods_title[lang] }}</h2>
        <p>{{ t.methods_sub[lang] }}</p>
      </div>
      <div class="table-wrap">
        <table class="tbl">
          <thead>
            <tr>
              <th>{{ t.tbl_method[lang] }}</th>
              <th>{{ t.tbl_type[lang] }}</th>
              <th>{{ t.tbl_power[lang] }}</th>
              <th>{{ t.tbl_status[lang] }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="m in methods" :key="m.name">
              <td class="mname">{{ m.name }}</td>
              <td>{{ m.type }}</td>
              <td>{{ m.power.toFixed(1) }}/10</td>
              <td><span class="sbadge" :class="m.ok ? 'up' : 'lim'">{{ m.ok ? t.status_online[lang] : t.status_limited[lang] }}</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- pricing -->
    <section class="sec" id="prices">
      <div class="sec-head">
        <h2>{{ t.pricing_title[lang] }}</h2>
        <p>{{ t.pricing_sub[lang] }}</p>
      </div>
      <div class="prices">
        <div class="pcard">
          <div class="pname">{{ t.basic[lang] }}</div>
          <div class="pprice"><span class="dollar">$</span>5</div>
          <div class="pperiod">60 {{ t.seconds[lang] }}</div>
          <ul class="pfeats">
            <li><span class="chk">+</span> {{ t.method_l7[lang] }}</li>
            <li><span class="chk">+</span> 60s {{ t.seconds[lang] }}</li>
            <li><span class="chk">+</span> {{ t.basic_bypass[lang] }}</li>
            <li><span class="chk">+</span> {{ t.tg_support[lang] }}</li>
            <li><span class="x">-</span> {{ t.cf_bypass[lang] }}</li>
            <li><span class="x">-</span> {{ t.priority_queue[lang] }}</li>
            <li><span class="x">-</span> {{ t.concurrent[lang] }}</li>
          </ul>
          <a href="#contact" class="btn-primary btn-sm">{{ t.order_btn[lang] }}</a>
        </div>
        <div class="pcard pop">
          <div class="pop-tag">{{ t.bestseller[lang] }}</div>
          <div class="pname">{{ t.standard[lang] }}</div>
          <div class="pprice"><span class="dollar">$</span>10</div>
          <div class="pperiod">130 {{ t.seconds[lang] }}</div>
          <ul class="pfeats">
            <li><span class="chk">+</span> {{ t.method_l7[lang] }}</li>
            <li><span class="chk">+</span> 130s {{ t.seconds[lang] }}</li>
            <li><span class="chk">+</span> {{ t.basic_bypass[lang] }}</li>
            <li><span class="chk">+</span> {{ t.tg_support[lang] }}</li>
            <li><span class="chk">+</span> {{ t.cf_bypass[lang] }}</li>
            <li><span class="x">-</span> {{ t.priority_queue[lang] }}</li>
            <li><span class="x">-</span> {{ t.concurrent[lang] }}</li>
          </ul>
          <a href="#contact" class="btn-primary btn-sm">{{ t.order_btn[lang] }}</a>
        </div>
        <div class="pcard">
          <div class="pname">{{ t.premium[lang] }}</div>
          <div class="pprice"><span class="dollar">$</span>15</div>
          <div class="pperiod">200 {{ t.seconds[lang] }}</div>
          <ul class="pfeats">
            <li><span class="chk">+</span> {{ t.method_l7[lang] }}</li>
            <li><span class="chk">+</span> 200s {{ t.seconds[lang] }}</li>
            <li><span class="chk">+</span> {{ t.advanced_bypass[lang] }}</li>
            <li><span class="chk">+</span> {{ t.tg_support[lang] }}</li>
            <li><span class="chk">+</span> {{ t.cf_bypass[lang] }}</li>
            <li><span class="chk">+</span> {{ t.priority_queue[lang] }}</li>
            <li><span class="chk">+</span> {{ t.concurrent[lang] }}</li>
          </ul>
          <a href="#contact" class="btn-primary btn-sm">{{ t.order_btn[lang] }}</a>
        </div>
      </div>
    </section>

    <!-- faq -->
    <section class="sec" id="faq">
      <div class="sec-head">
        <h2>{{ t.faq_title[lang] }}</h2>
        <p>{{ t.faq_sub[lang] }}</p>
      </div>
      <div class="faqs">
        <div v-for="(item, i) in [
          { q: t.faq1_q[lang], a: t.faq1_a[lang] },
          { q: t.faq2_q[lang], a: t.faq2_a[lang] },
          { q: t.faq3_q[lang], a: t.faq3_a[lang] },
          { q: t.faq4_q[lang], a: t.faq4_a[lang] },
          { q: t.faq5_q[lang], a: t.faq5_a[lang] },
          { q: t.faq6_q[lang], a: t.faq6_a[lang] },
        ]" :key="i" class="faq-item" :class="{ open: faqOpen === i }">
          <button class="faq-q" @click="toggleFaq(i)">
            {{ item.q }}
            <span class="arr">{{ faqOpen === i ? '&#9650;' : '&#9660;' }}</span>
          </button>
          <div class="faq-a">
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- why -->
    <section class="sec" id="why">
      <div class="sec-head">
        <h2>{{ t.why_title_sec[lang] }}</h2>
        <p>{{ t.why_sub_sec[lang] }}</p>
      </div>
      <div class="why-box">
        <div class="why-item">
          <span class="chk">+</span>
          <div>
            <strong>{{ t.why1_title[lang] }}</strong>
            <span>{{ t.why1_desc[lang] }}</span>
          </div>
        </div>
        <div class="why-item">
          <span class="chk">+</span>
          <div>
            <strong>{{ t.why2_title[lang] }}</strong>
            <span>{{ t.why2_desc[lang] }}</span>
          </div>
        </div>
        <div class="why-item">
          <span class="chk">+</span>
          <div>
            <strong>{{ t.why3_title[lang] }}</strong>
            <span>{{ t.why3_desc[lang] }}</span>
          </div>
        </div>
        <div class="why-item">
          <span class="chk">+</span>
          <div>
            <strong>{{ t.why4_title[lang] }}</strong>
            <span>{{ t.why4_desc[lang] }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- tos -->
    <section class="sec" id="tos">
      <div class="sec-head">
        <h2>{{ t.tos_title[lang] }}</h2>
        <p>{{ t.tos_sub[lang] }}</p>
      </div>
      <div class="tos-box">
        <div class="tos-warn">{{ t.tos_warn[lang] }}</div>
        <ul class="tos-list">
          <li><span class="chk">+</span> {{ t.tos1[lang] }}</li>
          <li><span class="chk">+</span> {{ t.tos2[lang] }}</li>
          <li><span class="chk">+</span> {{ t.tos3[lang] }}</li>
          <li><span class="chk">+</span> {{ t.tos4[lang] }}</li>
          <li><span class="chk">+</span> {{ t.tos5[lang] }}</li>
          <li><span class="chk">+</span> {{ t.tos6[lang] }}</li>
        </ul>
      </div>
    </section>

    <!-- contact -->
    <section class="sec contact-sec" id="contact">
      <div class="sec-head">
        <h2>{{ t.contact_title[lang] }}</h2>
        <p>{{ t.contact_sub[lang] }}</p>
      </div>
      <div class="contact-links">
        <a href="https://t.me/rikixzapi" target="_blank" class="clink">{{ t.channel[lang] }}</a>
        <a href="https://t.me/krisneverdie" target="_blank" class="clink">{{ t.backup[lang] }}</a>
        <a href="https://t.me/rosykisa" target="_blank" class="clink">{{ t.support1[lang] }}</a>
        <a href="https://t.me/rikixz_supporter" target="_blank" class="clink">{{ t.support2[lang] }}</a>
      </div>
    </section>

    <!-- footer -->
    <footer class="ftr">
      <p v-html="t.footer[lang]"></p>
      <p class="ftr-small">{{ t.footer_sub[lang] }} <a href="#tos">{{ t.tos_link[lang] }}</a>.</p>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap');

:root {
  --bg: #08080e;
  --bg2: #0f0f18;
  --card: #151520;
  --card-h: #1c1c2a;
  --text: #c8c8d0;
  --text2: #707090;
  --head: #e8e8f0;
  --accent: #ff2666;
  --accent2: #cc1144;
  --green: #00ee88;
  --border: #1e1e30;
  --font: 'Inter', system-ui, sans-serif;
  --mono: 'JetBrains Mono', monospace;
  --gradient: linear-gradient(135deg, #ff2666, #8833ff, #ff2666);
}

@keyframes pulse-glow {
  0%, 100% { box-shadow:0 0 60px rgba(255,38,102,.25),0 0 120px rgba(255,38,102,.1) }
  50% { box-shadow:0 0 80px rgba(255,38,102,.4),0 0 160px rgba(255,38,102,.2) }
}
@keyframes fade-up {
  from { opacity:0; transform:translateY(30px) }
  to { opacity:1; transform:translateY(0) }
}
@keyframes fade-scale {
  from { opacity:0; transform:scale(.92) }
  to { opacity:1; transform:scale(1) }
}
@keyframes glitch {
  0%, 90%, 100% { transform:translate(0) }
  92% { transform:translate(-2px,1px) }
  94% { transform:translate(2px,-1px) }
  96% { transform:translate(-1px,2px) }
  98% { transform:translate(1px,-2px) }
}
@keyframes scanline {
  0% { transform:translateY(-100%) }
  100% { transform:translateY(100vh) }
}
@keyframes shimmer { 100% { transform:translateX(100%) } }
@keyframes gradient-shift {
  0% { background-position:0% 50% }
  50% { background-position:100% 50% }
  100% { background-position:0% 50% }
}
@keyframes float-particle {
  0% { transform:translateY(100vh) rotate(0deg);opacity:0 }
  10% { opacity:.6 }
  90% { opacity:.6 }
  100% { transform:translateY(-10vh) rotate(720deg);opacity:0 }
}
@keyframes border-glow {
  0%, 100% { border-color:var(--border) }
  50% { border-color:rgba(255,38,102,.3) }
}
@keyframes text-shimmer {
  0% { background-position:-200% center }
  100% { background-position:200% center }
}

* { margin:0; padding:0; box-sizing:border-box }
html { scroll-behavior:smooth }
body {
  background:var(--bg);
  color:var(--text);
  font:15px/1.6 var(--font);
  -webkit-font-smoothing:antialiased;
  position:relative
}
body::before {
  content:'';position:fixed;inset:0;z-index:-1;
  background-image:
    linear-gradient(rgba(255,38,102,.02) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,38,102,.02) 1px,transparent 1px);
  background-size:40px 40px;
  pointer-events:none
}
a { color:inherit; text-decoration:none }

/* topbar */
.topbar {
  position:fixed;top:0;left:0;right:0;z-index:100;
  background:rgba(8,8,14,.9);backdrop-filter:blur(16px);
  border-bottom:1px solid var(--border);padding:0 20px
}
.topbar-in {
  max-width:1100px;margin:0 auto;display:flex;
  align-items:center;justify-content:space-between;height:56px
}
.logo { display:flex;align-items:center;gap:10px;font-weight:800;font-size:16px;color:var(--accent);letter-spacing:-.3px }
.logo-img { width:32px;height:32px;border-radius:8px;object-fit:cover;border:2px solid rgba(255,38,102,.3);flex-shrink:0 }
.topbar-right { display:flex;align-items:center;gap:16px }
.topbar-right a { font-size:13px;font-weight:500;color:var(--text2);transition:color .15s;white-space:nowrap }
.topbar-right a:hover { color:var(--text) }
.lang-btn {
  background:var(--card);border:1px solid var(--border);color:var(--text);padding:4px 12px;
  border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;
  font-family:var(--font);letter-spacing:.5px;text-transform:uppercase
}
.lang-btn:hover { border-color:var(--accent);color:var(--accent);background:var(--card-h) }
.topbar-cta {
  background:var(--accent);color:#fff!important;padding:6px 16px;
  border-radius:6px;font-weight:600!important;font-size:12px!important
}

/* hero */
.hero-sec {
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  text-align:center;padding:100px 24px 60px;position:relative;overflow:hidden
}
.hero-overlay {
  position:absolute;inset:0;
  pointer-events:none
}
.hero-overlay::before {
  content:'';position:absolute;inset:0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(255,38,102,.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(136,51,255,.06) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(0,238,136,.04) 0%, transparent 50%);
  background-size:200% 200%;
  animation:gradient-shift 8s ease infinite
}
.hero-overlay::after {
  content:'';position:absolute;inset:0;
  background-image:
    linear-gradient(rgba(255,38,102,.04) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,38,102,.04) 1px,transparent 1px);
  background-size:50px 50px;
  pointer-events:none;
  opacity:.5
}
.hero-particles { position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0 }
.particle {
  position:absolute;bottom:0;left:var(--x);width:4px;height:4px;
  border-radius:50%;background:var(--accent);opacity:0;
  animation:float-particle calc(var(--s)*3s) linear var(--d) infinite
}
.hero-in { position:relative;z-index:1;max-width:680px }
.hero-logo { width:100px;height:100px;border-radius:24px;object-fit:cover;margin-bottom:20px;border:2px solid rgba(255,38,102,.15);animation:pulse-glow 3s ease-in-out infinite }
.hero-badge {
  display:inline-block;padding:6px 18px;border:1px solid rgba(255,38,102,.3);
  border-radius:20px;font-size:12px;font-weight:600;color:var(--accent);
  text-transform:uppercase;letter-spacing:1px;margin-bottom:20px;animation:fade-up .6s ease-out both;
  background:rgba(255,38,102,.06);backdrop-filter:blur(4px);
  box-shadow:0 0 20px rgba(255,38,102,.1)
}
.hero-title {
  font-size:clamp(44px, 10vw, 80px);font-weight:900;line-height:1;
  letter-spacing:-3px;margin-bottom:16px;animation:fade-up .6s ease-out .15s both;
  background:linear-gradient(135deg, var(--head) 0%, var(--accent) 50%, var(--head) 100%);
  background-size:200% auto;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  animation:fade-up .6s ease-out .15s both, text-shimmer 4s linear infinite
}
.hero-title:hover { animation:glitch .3s ease-in-out, text-shimmer 4s linear infinite }
.hero-sub {
  font-size:16px;color:var(--text2);max-width:480px;margin:0 auto 28px;line-height:1.7;
  animation:fade-up .6s ease-out .3s both
}
.hero-btns { display:flex;gap:10px;justify-content:center;flex-wrap:wrap;animation:fade-up .6s ease-out .45s both }
.btn-primary {
  display:inline-flex;padding:14px 32px;background:var(--gradient);background-size:200% auto;color:#fff;
  border-radius:10px;font-weight:600;font-size:14px;transition:all .3s;border:none;cursor:pointer;
  background-size:200% auto;animation:gradient-shift 4s ease infinite;position:relative;
  overflow:hidden
}
.btn-primary::after { content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.1),transparent);transform:translateX(-100%);transition:transform .4s }
.btn-primary:hover { transform:translateY(-3px);box-shadow:0 8px 40px rgba(255,38,102,.4) }
.btn-primary:hover::after { transform:translateX(100%) }
.btn-ghost {
  display:inline-flex;padding:14px 32px;background:rgba(21,21,32,.6);color:var(--text);
  border-radius:10px;font-weight:600;font-size:14px;border:1px solid var(--border);transition:all .3s;
  backdrop-filter:blur(4px)
}
.btn-ghost:hover { border-color:var(--accent);transform:translateY(-3px);box-shadow:0 8px 30px rgba(255,38,102,.15);background:rgba(21,21,32,.9) }
.btn-sm { padding:10px 20px;font-size:13px }
.hero-stats { display:flex;gap:36px;justify-content:center;margin-top:48px;flex-wrap:wrap;animation:fade-up .6s ease-out .6s both }
.stat { text-align:center;transition:all .3s }
.stat:hover { transform:translateY(-4px) }
.stat-n { display:block;font-size:26px;font-weight:800;color:var(--head);font-family:var(--mono);transition:color .3s }
.stat:hover .stat-n { color:var(--accent) }
.stat-l { font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--text2);margin-top:2px;display:block }

/* sections */
.sec { padding:80px 24px;max-width:1100px;margin:0 auto;position:relative }
.sec::after { content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:80%;max-width:400px;height:1px;background:linear-gradient(90deg,transparent,var(--accent),transparent);opacity:.2 }
.sec-head { text-align:center;margin-bottom:44px;animation:fade-up .5s ease-out both }
.sec-head h2 { font-size:clamp(24px,4vw,34px);font-weight:800;color:var(--head);margin-bottom:8px;text-transform:uppercase;letter-spacing:-1px;background:var(--gradient);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradient-shift 4s ease infinite }
.sec-head p { color:var(--text2);font-size:15px }

/* features */
.feats { display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:10px }
.feat {
  display:flex;align-items:flex-start;gap:14px;padding:22px;
  background:var(--card);border:1px solid var(--border);border-radius:12px;transition:all .4s cubic-bezier(.22,1,.36,1);animation:fade-up .5s ease-out both;
  position:relative;overflow:hidden
}
.feat::before { content:'';position:absolute;inset:0;opacity:0;background:linear-gradient(135deg,rgba(255,38,102,.05),transparent 50%);transition:opacity .4s }
.feat:nth-child(1) { animation-delay:0s }
.feat:nth-child(2) { animation-delay:.05s }
.feat:nth-child(3) { animation-delay:.1s }
.feat:nth-child(4) { animation-delay:.15s }
.feat:nth-child(5) { animation-delay:.2s }
.feat:nth-child(6) { animation-delay:.25s }
.feat:hover { background:var(--card-h);border-color:var(--accent);transform:translateY(-4px);box-shadow:0 12px 40px rgba(255,38,102,.15) }
.feat:hover::before { opacity:1 }
.feat strong { display:block;font-size:14px;font-weight:700;color:var(--head);margin-bottom:4px;text-transform:uppercase;letter-spacing:.3px }
.feat span { font-size:13px;color:var(--text2);line-height:1.5 }

/* clients */
.clients-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px;max-width:640px;margin:0 auto }
.client-card {
  background:var(--card);border:1px solid var(--border);border-radius:14px;
  padding:28px;text-align:center;transition:all .4s cubic-bezier(.22,1,.36,1);animation:fade-scale .6s ease-out both;
  position:relative;overflow:hidden
}
.client-card::before { content:'';position:absolute;inset:0;opacity:0;background:linear-gradient(135deg,rgba(255,38,102,.04),transparent 50%);transition:opacity .4s }
.client-card:nth-child(1) { animation-delay:0s }
.client-card:nth-child(2) { animation-delay:.15s }
.client-card:hover { border-color:var(--accent);transform:translateY(-4px);box-shadow:0 12px 40px rgba(255,38,102,.15) }
.client-card:hover::before { opacity:1 }
.client-stars { color:var(--accent);font-size:16px;letter-spacing:4px;margin-bottom:12px }
.client-text { font-size:14px;color:var(--text2);line-height:1.6;font-style:italic;margin-bottom:12px }
.client-name { font-size:13px;font-weight:600;color:var(--accent);font-family:var(--mono) }

/* table */
.table-wrap { overflow-x:auto }
.tbl { width:100%;border-collapse:separate;border-spacing:0 3px;font-size:14px }
.tbl th { text-align:left;padding:10px 16px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--text2);border-bottom:1px solid var(--border) }
.tbl td { padding:14px 16px;background:var(--card);border-top:1px solid var(--border);transition:all .3s }
.tbl tr { transition:all .3s;cursor:default }
.tbl tr:hover td { background:var(--card-h) }
.tbl tr td:first-child { border-radius:8px 0 0 8px }
.tbl tr td:last-child { border-radius:0 8px 8px 0 }
.mname { font-weight:600;font-family:var(--mono);color:var(--accent);font-size:13px }
.sbadge { display:inline-flex;align-items:center;gap:4px;padding:2px 10px;border-radius:4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px }
.sbadge.up { background:rgba(0,238,136,.1);color:var(--green);position:relative;overflow:hidden }
.sbadge.up::after { content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(0,238,136,.15),transparent);transform:translateX(-100%);animation:shimmer 2.5s infinite }
.sbadge.lim { background:rgba(255,102,51,.1);color:#ff6633 }

/* pricing */
.prices { display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;align-items:start }
.pcard {
  background:var(--card);border:1px solid var(--border);border-radius:16px;padding:28px 24px;
  text-align:center;position:relative;transition:all .4s cubic-bezier(.22,1,.36,1);animation:fade-up .5s ease-out both;
  overflow:hidden;display:flex;flex-direction:column
}
.pcard::before { content:'';position:absolute;inset:0;opacity:0;background:linear-gradient(135deg,rgba(255,38,102,.04),transparent 60%);transition:opacity .4s;pointer-events:none }
.pcard > * { position:relative;z-index:1 }
.pcard:nth-child(1) { animation-delay:0s }
.pcard:nth-child(2) { animation-delay:.1s }
.pcard:nth-child(3) { animation-delay:.2s }
.pcard:hover { border-color:var(--accent);transform:translateY(-6px);box-shadow:0 16px 60px rgba(255,38,102,.2) }
.pcard:hover::before { opacity:1 }
.pcard.pop { border-color:var(--accent);background:linear-gradient(180deg,rgba(255,38,102,.1),var(--card));animation:border-glow 2s ease-in-out infinite,fade-up .5s ease-out both }
.pcard.pop:nth-child(2) { animation-delay:.1s;animation:border-glow 2s ease-in-out infinite,fade-up .5s ease-out both;animation-delay:.1s }
.pop-tag {
  position:absolute;top:-10px;left:50%;transform:translateX(-50%);
  background:var(--accent);color:#fff;padding:3px 14px;border-radius:20px;
  font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase
}
.pname { font-size:14px;font-weight:600;color:var(--text2);margin-bottom:10px;text-transform:uppercase;letter-spacing:.5px }
.pprice { font-size:44px;font-weight:900;color:var(--head);letter-spacing:-2px;margin-bottom:2px;line-height:1 }
.dollar { font-size:22px;font-weight:600;color:var(--text2);vertical-align:super }
.pperiod { font-size:13px;color:var(--text2);margin-bottom:22px;padding-bottom:16px;border-bottom:1px solid var(--border) }
.pfeats { list-style:none;text-align:left;margin:0 0 22px;flex:1 }
.pfeats li { display:flex;align-items:center;gap:8px;padding:10px 0;font-size:13px;color:var(--text2);border-bottom:1px solid var(--border) }
.pfeats li:last-child { border-bottom:none }
.pcard .btn-sm { margin-top:auto }
.chk { color:var(--green);font-weight:700;font-family:var(--mono);flex-shrink:0 }
.x { color:var(--text2);font-weight:700;font-family:var(--mono);flex-shrink:0;opacity:.4 }

/* faq */
.faqs { max-width:640px;margin:0 auto;display:flex;flex-direction:column;gap:8px }
.faq-item { background:var(--card);border:1px solid var(--border);border-radius:12px;overflow:hidden;transition:all .3s }
.faq-item:hover { border-color:var(--card-h) }
.faq-item.open { border-color:rgba(255,38,102,.2) }
.faq-q {
  width:100%;display:flex;align-items:center;justify-content:space-between;
  padding:16px 20px;background:none;border:none;color:var(--head);
  font-size:14px;font-weight:600;cursor:pointer;text-align:left;font-family:var(--font)
}
.faq-q:hover { color:var(--accent) }
.arr { font-size:10px;color:var(--text2);transition:transform .2s;flex-shrink:0 }
.faq-a { max-height:0;overflow:hidden;transition:max-height .25s,padding .25s }
.faq-item.open .faq-a { max-height:400px;padding:0 20px 16px }
.faq-a p { font-size:13px;color:var(--text2);line-height:1.7 }

/* why */
.why-box { max-width:640px;margin:0 auto;display:flex;flex-direction:column;gap:12px }
.why-item {
  display:flex;align-items:flex-start;gap:14px;padding:20px;
  background:var(--card);border:1px solid var(--border);border-radius:10px;
  animation:fade-up .5s ease-out both;transition:all .3s
}
.why-item:nth-child(1) { animation-delay:0s }
.why-item:nth-child(2) { animation-delay:.08s }
.why-item:nth-child(3) { animation-delay:.16s }
.why-item:nth-child(4) { animation-delay:.24s }
.why-item:hover { border-color:var(--accent);transform:translateY(-2px);box-shadow:0 4px 20px rgba(255,38,102,.1) }
.why-item .chk { font-size:18px;margin-top:1px }
.why-item strong { display:block;font-size:14px;font-weight:700;color:var(--head);margin-bottom:4px;text-transform:uppercase;letter-spacing:.3px }
.why-item span { font-size:13px;color:var(--text2);line-height:1.5 }

/* tos */
.tos-box {
  max-width:600px;margin:0 auto;background:var(--card);
  border:1px solid var(--border);border-radius:16px;padding:36px 32px;transition:all .3s;
  animation:fade-up .5s ease-out both
}
.tos-warn {
  text-align:center;font-size:14px;font-weight:600;color:var(--accent);
  padding:12px 20px;background:rgba(255,38,102,.1);border-radius:10px;margin-bottom:24px;
  border:1px solid rgba(255,38,102,.2);animation:pulse-glow 3s ease-in-out infinite
}
.tos-list { list-style:none;display:flex;flex-direction:column;gap:10px }
.tos-list li { display:flex;align-items:center;gap:10px;font-size:14px;color:var(--text2) }

/* contact */
.contact-sec { text-align:center }
.contact-links { display:flex;gap:12px;justify-content:center;flex-wrap:wrap }
.clink {
  display:inline-flex;align-items:center;gap:8px;padding:14px 28px;
  background:var(--card);border:1px solid var(--border);border-radius:12px;
  font-size:14px;font-weight:500;transition:all .3s cubic-bezier(.22,1,.36,1)
}
.clink:hover { background:var(--card-h);border-color:var(--accent);transform:translateY(-3px);box-shadow:0 8px 30px rgba(255,38,102,.12) }

/* footer */
.ftr { border-top:1px solid var(--border);padding:28px 24px;text-align:center }
.ftr p { font-size:13px;color:var(--text2) }
.ftr-small { margin-top:4px;font-size:12px }
.ftr a { color:var(--accent) }

@media(max-width:900px) {
  .feats { grid-template-columns:repeat(auto-fit,minmax(240px,1fr)) }
  .prices { grid-template-columns:repeat(auto-fit,minmax(220px,1fr)) }
}
@media(max-width:768px) {
  .topbar { padding:0 12px }
  .topbar-in { height:52px }
  .topbar-right { gap:6px }
  .topbar-right a:not(.topbar-cta):not(.lang-btn) { display:none }
  .topbar-cta { padding:5px 12px;font-size:11px!important }
  .lang-btn { padding:3px 8px;font-size:10px }
  .logo { font-size:14px;gap:6px }
  .logo-img { width:26px;height:26px }

  .hero-sec { padding:80px 16px 40px;min-height:90vh }
  .hero-logo { width:72px;height:72px;border-radius:16px }
  .hero-title { font-size:clamp(30px,10vw,44px);letter-spacing:-2px }
  .hero-sub { font-size:14px;max-width:100%;padding:0 4px }
  .hero-badge { font-size:10px;padding:4px 12px;margin-bottom:14px }
  .hero-btns { gap:8px }
  .btn-primary,.btn-ghost { padding:10px 22px;font-size:13px;flex:1;justify-content:center }
  .hero-stats { gap:20px;margin-top:36px }
  .stat-n { font-size:20px }
  .stat-l { font-size:10px }

  .sec { padding:40px 16px }
  .sec-head { margin-bottom:28px }
  .sec-head h2 { font-size:clamp(20px,5vw,24px) }
  .sec-head p { font-size:14px }

  .feats { grid-template-columns:1fr;gap:8px }
  .feat { padding:14px;gap:10px }
  .feat strong { font-size:13px }
  .feat span { font-size:12px }

  .clients-grid { grid-template-columns:1fr;gap:10px;max-width:100% }
  .client-card { padding:20px }
  .client-text { font-size:13px }
  .client-name { font-size:12px }

  .table-wrap { margin:0 -16px;padding:0 16px;width:auto }
  .tbl { font-size:13px }
  .tbl th,.tbl td { padding:10px 12px }
  .mname { font-size:12px }

  .prices { grid-template-columns:1fr;gap:12px;max-width:380px;margin:0 auto }
  .pcard { padding:22px 20px }
  .pprice { font-size:36px }
  .dollar { font-size:18px }
  .pperiod { font-size:12px;margin-bottom:16px;padding-bottom:12px }

  .faq-q { padding:14px 16px;font-size:13px }
  .faq-a p { font-size:12px }

  .why-box { gap:8px }
  .why-item { padding:14px;gap:10px }
  .why-item strong { font-size:13px }
  .why-item span { font-size:12px }
  .why-item .chk { font-size:16px }

  .tos-box { padding:20px 16px }
  .tos-warn { font-size:13px;padding:10px 14px }
  .tos-list li { font-size:13px }

  .contact-links { flex-direction:column;align-items:stretch;gap:8px;max-width:320px;margin:0 auto }
  .clink { padding:10px 20px;font-size:13px;justify-content:center }

  .ftr { padding:20px 16px }
  .ftr p { font-size:12px }
  .ftr-small { font-size:11px }
}
@media(max-width:480px) {
  .topbar-in { height:46px }
  .topbar-right { gap:4px }
  .topbar-right a { font-size:11px }
  .topbar-cta { padding:4px 10px;font-size:10px!important }
  .lang-btn { padding:2px 6px;font-size:9px;border-radius:4px }
  .logo-img { width:22px;height:22px;border-width:1px }
  .logo { font-size:12px;gap:5px }

  .hero-sec { padding:60px 12px 30px;min-height:85vh }
  .hero-logo { width:60px;height:60px;border-radius:14px;margin-bottom:14px }
  .hero-title { font-size:clamp(24px,12vw,34px);letter-spacing:-1px;margin-bottom:10px }
  .hero-sub { font-size:13px;margin-bottom:20px }
  .hero-badge { font-size:9px;padding:3px 10px;margin-bottom:12px }
  .btn-primary,.btn-ghost { padding:8px 16px;font-size:12px;border-radius:8px }
  .hero-stats { gap:14px;margin-top:24px }
  .stat-n { font-size:17px }
  .stat-l { font-size:9px;letter-spacing:.5px }

  .sec { padding:30px 12px }
  .sec-head { margin-bottom:20px }
  .sec-head h2 { font-size:clamp(17px,5vw,20px);letter-spacing:0 }
  .sec-head p { font-size:13px }

  .feat { padding:12px;border-radius:8px }
  .feat strong { font-size:12px }
  .feat span { font-size:11px }

  .client-card { padding:16px;border-radius:10px }
  .client-stars { font-size:14px;letter-spacing:2px;margin-bottom:8px }
  .client-text { font-size:12px;margin-bottom:8px }

  .tbl th,.tbl td { padding:8px 10px;font-size:12px }
  .tbl th { font-size:10px }

  .pcard { padding:18px 16px;border-radius:12px }
  .pname { font-size:12px;margin-bottom:8px }
  .pprice { font-size:30px }
  .dollar { font-size:15px }
  .pperiod { font-size:11px;margin-bottom:12px;padding-bottom:10px }
  .pfeats li { padding:7px 0;font-size:12px;gap:6px }
  .pop-tag { font-size:9px;padding:2px 10px;top:-8px }
  .btn-sm { padding:8px 16px;font-size:12px }

  .faq-q { padding:12px 14px;font-size:12px }
  .faq-item.open .faq-a { padding:0 14px 12px }

  .why-item { padding:12px;border-radius:8px }
  .why-item strong { font-size:12px }
  .why-item span { font-size:11px }
  .why-item .chk { font-size:14px }

  .tos-box { padding:16px 12px;border-radius:12px }
  .tos-warn { font-size:12px;padding:8px 12px }
  .tos-list li { font-size:12px;gap:8px }

  .clink { padding:8px 16px;font-size:12px;border-radius:8px }

  .ftr { padding:16px 12px }
  .ftr p { font-size:11px }
}
</style>