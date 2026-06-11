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
  why_title: { en: 'why rikixz', km: 'ហេតុអី rikixz?' },
  why_sub: { en: 'the only cambodia based layer 7 stresser that actually works.', km: 'ស្ត្រេសសឺរខ្មែរតែមួយគត់ដែលធ្វើការពិតមែន។' },
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
  faq4_a: { en: 'telegram: @krisneverdie or join @rikixzapi. tell us what you need and we will set you up.', km: 'តេឡេក្រាម៖ @krisneverdie ឬចូល @rikixzapi។ ប្រាប់យើងពីអ្វីដែលអ្នកចង់បាន យើងនឹងរៀបចំឲ្យអ្នក។' },
  faq5_q: { en: 'what payment?', km: 'បង់លុយតាមវិធីណា?' },
  faq5_a: { en: 'btc, usdt, crypto. ask on telegram for details.', km: 'BTC, USDT, crypto ផ្សេងៗ។ សួរតាម Telegram សម្រាប់ព័ត៌មានលម្អិត។' },
  faq6_q: { en: 'how fast does it start?', km: 'តើចាប់ផ្ដើមលឿនប៉ុណ្ណា?' },
  faq6_a: { en: 'right after payment. no waiting around. we activate immediately.', km: 'ភ្លាមៗបន្ទាប់ពីបង់លុយ។ មិនបាច់ចាំទេ។ យើងធ្វើឲ្យភ្លាមៗ។' },
  faq7_q: { en: 'what is method flood?', km: 'តើ METHOD-FLOOD ជាអី?' },
  faq7_a: { en: 'sends massive http/https request floods with randomized headers, user agents, and ip spoofing. designed to overwhelm web servers by consuming connection slots and bandwidth. works on most layer 7 targets.', km: 'បញ្ជូន http/https ច្រើនសន្ធឹកជាមួយ headers, user agents និង ip spoofing ចៃដន្យ។ បង្កើតឡើងដើម្បីធ្វើឲ្យ web server ផ្ទុកមិនបានដោយការប្រើប្រាស់ connection និង bandwidth ទាំងអស់។ វាយបាន target layer 7 ភាគច្រើន។' },
  faq8_q: { en: 'what is hegt?', km: 'តើ HEGT ជាអី?' },
  faq8_a: { en: 'high efficiency get attack. uses optimized request patterns with minimal bandwidth overhead to maximize impact on the target cpu and memory. more stealthy than raw flood, better against cached or cdn protected targets.', km: 'ការវាយប្រភេទ GET ដែលមានប្រសិទ្ធភាពខ្ពស់។ ប្រើរបៀប request ដែលបង្កើនប្រសិទ្ធភាពដោយប្រើ bandwidth តិចតួចដើម្បីវាយ CPU និង memory របស់គោលដៅ។ លាក់ខ្លួនជាង raw flood ហើយវាយបានល្អជាងលើ target ដែលមាន cache ឬ CDN ។' },
  faq9_q: { en: 'do you offer a free trial?', km: 'តើមានសាកល្បងឥតគិតថ្លៃទេ?' },
  faq9_a: { en: 'no free trials. we sell time based access starting at $5. join our telegram channel for announcements and updates.', km: 'គ្មានការសាកល្បងឥតគិតថ្លៃទេ។ យើងលក់តាមពេលវេលា ចាប់ផ្ដើមត្រឹមតែ $5។ ចូលឆានែល Telegram របស់យើងដើម្បីទទួលព័ត៌មាន។' },
  faq10_q: { en: 'what infrastructure do you use?', km: 'តើប្រើ infrastructure អ្វីខ្លះ?' },
  faq10_a: { en: 'we use a distributed network of booter panels across multiple locations. cambodia based infrastructure with global relay nodes for maximum reach and minimal latency.', km: 'យើងប្រើបណ្ដាញ booter panels ដែលចែកចាយនៅទីតាំងជាច្រើន។ ហេដ្ឋារចនាសម្ព័ន្ធមូលដ្ឋាននៅកម្ពុជា ជាមួយ relay nodes សកលសម្រាប់ការទៅដល់ឆ្ងាយបំផុត និង latency តិចបំផុត។' },
  why_title_sec: { en: 'why use rikixz?', km: 'ហេតុអីត្រូវប្រើ rikixz?' },
  why_sub_sec: { en: 'use it on your own risk. legit tool, not for illegal shit.', km: 'ប្រើដោយគ្រោះថ្នាក់ផ្ទាល់ខ្លួន។ ឧបករណ៍ស្របច្បាប់ មិនមែនសម្រាប់រឿងខុសច្បាប់ទេ។' },
  why1_title: { en: 'for testing only', km: 'សម្រាប់សាកល្បងតែប៉ុណ្ណោះ' },
  why1_desc: { en: 'rikixz stresser is designed exclusively for authorized stress testing of your own websites, servers, and network infrastructure. use it to simulate real world traffic, measure how your setup handles high load conditions, and find weak points before attackers do. we provide the tool, you point it at your own targets.', km: 'rikixz stresser បង្កើតឡើងសម្រាប់តែការសាកល្បងសម្ពាធលើគេហទំព័រ ម៉ាស៊ីនបម្រើ និងបណ្ដាញហេដ្ឋារចនាសម្ព័ន្ធរបស់អ្នកផ្ទាល់ដែលបានអនុញ្ញាតប៉ុណ្ណោះ។ ប្រើវាដើម្បីក្លែងធ្វើ traffic ពិតប្រាកដ វាស់ស្ទង់ពីរបៀបដែលប្រព័ន្ធរបស់អ្នកដោះស្រាយសម្ពាធខ្ពស់ និងស្វែងរកចំណុចខ្សោយមុនពេលអ្នកវាយប្រហាររកឃើញ។ យើងផ្តល់ឧបករណ៍ អ្នកចង្អុលទៅគោលដៅផ្ទាល់ខ្លួនអ្នក។' },
  why2_title: { en: 'use at your own risk', km: 'ប្រើដោយគ្រោះថ្នាក់' },
  why2_desc: { en: 'you are fully responsible for how you use this service. we provide the technology, but what you do with it is on you. if you misuse rikixz stresser to attack targets you do not own or lack written permission for, you accept all legal consequences. we do not take responsibility for your actions. use common sense, follow the law, and keep your testing legit.', km: 'អ្នកទទួលខុសត្រូវទាំងស្រុងចំពោះរបៀបដែលអ្នកប្រើសេវាកម្មនេះ។ យើងផ្តល់បច្ចេកវិទ្យា ប៉ុន្តែអ្វីដែលអ្នកធ្វើជាមួយវាគឺជាការទទួលខុសត្រូវរបស់អ្នក។ ប្រសិនបើអ្នកប្រើ rikixz stresser ដើម្បីវាយប្រហារគោលដៅដែលអ្នកមិនមែនជាម្ចាស់ ឬគ្មានការអនុញ្ញាតជាលាយលក្ខណ៍អក្សរ អ្នកទទួលយកផលវិបាកផ្លូវច្បាប់ទាំងអស់។ យើងមិនទទួលខុសត្រូវចំពោះសកម្មភាពរបស់អ្នកទេ។ ប្រើស្មារតីឲ្យបានត្រឹមត្រូវ គោរពច្បាប់ និងរក្សាការសាកល្បងរបស់អ្នកឲ្យស្របច្បាប់។' },
  why3_title: { en: 'no illegal use', km: 'ហាមប្រើខុសច្បាប់' },
  why3_desc: { en: 'do not use rikixz stresser for illegal activities. we monitor usage patterns and our support team actively watches for abuse. if we detect or suspect illegal use including attacks on unauthorized targets, we will ban your account immediately with no warnings and no refunds. we cooperate with law enforcement when required. this tool is for authorized security testing only, not for crime.', km: 'កុំប្រើ rikixz stresser សម្រាប់សកម្មភាពខុសច្បាប់។ យើងតាមដានលំនាំនៃការប្រើប្រាស់ ហើយក្រុមការងារជំនួយរបស់យើងតាមដានការប្រើប្រាស់ខុសយ៉ាងសកម្ម។ ប្រសិនបើយើងរកឃើញ ឬសង្ស័យថាមានការប្រើប្រាស់ខុសច្បាប់ រួមទាំងការវាយប្រហារលើគោលដៅដែលគ្មានការអនុញ្ញាត យើងនឹងបិទគណនីរបស់អ្នកភ្លាមៗ ដោយគ្មានការព្រមាន និងគ្មានការសងប្រាក់វិញ។ យើងសហការជាមួយអាជ្ញាធរនៅពេលចាំបាច់។ ឧបករណ៍នេះគឺសម្រាប់តែការធ្វើតេស្តសុវត្ថិភាពដែលមានការអនុញ្ញាតប៉ុណ្ណោះ មិនមែនសម្រាប់ឧក្រិដ្ឋកម្មទេ។' },
  why4_title: { en: 'stresser for run, not crime', km: 'stresser សម្រាប់សាកល្បង' },
  why4_desc: { en: 'this is a legitimate stress testing tool, not a botnet or criminal ddos service. the purpose is to help system administrators, network engineers, and security researchers test their own infrastructure resilience. use it to validate your firewall rules, test your load balancers, tune your rate limiting, and verify your ddos mitigation setup. keep it professional, keep it legal, and only test what you own.', km: 'នេះជាឧបករណ៍ធ្វើតេស្តសម្ពាធស្របច្បាប់ មិនមែន botnet ឬសេវាកម្ម ddos ឧក្រិដ្ឋកម្មទេ។ គោលបំណងគឺដើម្បីជួយអ្នកគ្រប់គ្រងប្រព័ន្ធ វិស្វករបណ្ដាញ និងអ្នកស្រាវជ្រាវសុវត្ថិភាពធ្វើតេស្តភាពធន់នៃហេដ្ឋារចនាសម្ព័ន្ធផ្ទាល់ខ្លួនរបស់ពួកគេ។ ប្រើវាដើម្បីធ្វើឲ្យប្រាកដថា firewall របស់អ្នកដំណើរការ សាកល្បង load balancers របស់អ្នក កែតម្រូវ rate limiting និងផ្ទៀងផ្ទាត់ ddos mitigation របស់អ្នក។ រក្សាវាឲ្យមានជំនាញវិជ្ជាជីវៈ រក្សាវាឲ្យស្របច្បាប់ និងសាកល្បងតែអ្វីដែលអ្នកជាម្ចាស់ប៉ុណ្ណោះ។' },
  tos_title: { en: 'terms of service', km: 'លក្ខខណ្ឌ' },
  tos_sub: { en: 'read this. seriously.', km: 'អានហ្នឹងសិន។ ចាំបាច់ណាស់។' },
  tos_warn: { en: 'violating any rule below will result in a permanent ban with no exceptions and no refunds.', km: 'ការបំពានច្បាប់ណាមួយខាងក្រោមនឹងត្រូវបណ្ដេញចេញជាអចិន្ត្រៃយ៍ ដោយគ្មានករណីលើកលែង និងគ្មានការសងប្រាក់វិញ។' },
  tos1: { en: 'do not attack cambodian targets', km: 'កុំវាយគោលដៅនៅកម្ពុជា' },
  tos1d: { en: 'any target hosted in cambodia or owned by cambodian entities is off limits. we are cambodia based and we protect our local infrastructure.', km: 'គោលដៅណាដែលបង្ហោះនៅកម្ពុជា ឬជាកម្មសិទ្ធិរបស់អង្គភាពខ្មែរត្រូវបានហាមឃាត់។ យើងឈរលើមូលដ្ឋាននៅកម្ពុជា ហើយយើងការពារហេដ្ឋារចនាសម្ព័ន្ធក្នុងស្រុករបស់យើង។' },
  tos2: { en: 'do not attack gov or edu targets', km: 'ហាមវាយគោលដៅ .gov និង .edu' },
  tos2d: { en: 'government websites and educational institutions are strictly prohibited. this includes all .gov, .edu, .mil, .gov.kh, .edu.kh and similar domains. no exceptions regardless of country.', km: 'គេហទំព័ររដ្ឋាភិបាល និងស្ថាប័នអប់រំត្រូវបានហាមឃាត់ជាដាច់ខាត។ រួមបញ្ចូលទាំង .gov, .edu, .mil, .gov.kh, .edu.kh និងដែនស្រដៀងគ្នាទាំងអស់។ គ្មានករណីលើកលែងដោយមិនគិតពីប្រទេសឡើយ។' },
  tos3: { en: 'do not share proof or screenshots publicly', km: 'កុំចែករំលែកភស្តុតាងជាសាធារណៈ' },
  tos3d: { en: 'do not post screenshots, videos, or any proof of attacks on public forums, social media, or anywhere else. what you do with our service is your business. keeping it private protects both you and us.', km: 'កុំបង្ហោះរូបភាព វីដេអូ ឬភស្តុតាងនៃការវាយប្រហារនៅលើវេទិកាសាធារណៈ បណ្ដាញសង្គម ឬកន្លែងណាផ្សេងទៀត។ អ្វីដែលអ្នកធ្វើជាមួយសេវាកម្មរបស់យើងគឺជារឿងផ្ទាល់ខ្លួនរបស់អ្នក។ ការរក្សាវាឲ្យឯកជនការពារទាំងអ្នក និងយើង។' },
  tos4: { en: 'you need written permission from the target owner', km: 'ត្រូវការការអនុញ្ញាតជាលាយលក្ខណ៍អក្សរពីម្ចាស់គោលដៅ' },
  tos4d: { en: 'before testing any target that is not your own property, you must obtain explicit written permission from the owner. verbal agreements are not enough. we may request proof of authorization at any time. testing without permission is a violation of our terms.', km: 'មុនពេលធ្វើតេស្តលើគោលដៅណាដែលមិនមែនជាកម្មសិទ្ធិរបស់អ្នក អ្នកត្រូវតែទទួលបានការអនុញ្ញាតជាលាយលក្ខណ៍អក្សរពីម្ចាស់។ ការយល់ព្រមដោយផ្ទាល់មាត់មិនគ្រប់គ្រាន់ទេ។ យើងអាចស្នើសុំភស្តុតាងនៃការអនុញ្ញាតនៅពេលណាមួយ។ ការធ្វើតេស្តដោយគ្មានការអនុញ្ញាតគឺជាការបំពានលើលក្ខខណ្ឌរបស់យើង។' },
  tos5: { en: 'no reselling or sharing access', km: 'ហាមលក់បន្ត ឬចែករំលែក access' },
  tos5d: { en: 'your access to rikixz stresser is personal and non transferable. you may not resell, share, give away, or sublicense your access to anyone else. each user must purchase their own access. violating this rule will result in immediate termination of all related accounts.', km: 'ការចូលប្រើ rikixz stresser របស់អ្នកគឺជាផ្ទាល់ខ្លួន និងមិនអាចផ្ទេរបានទេ។ អ្នកមិនអាចលក់បន្ត ចែករំលែក ឲ្យដោយឥតគិតថ្លៃ ឬផ្តល់សិទ្ធិបន្តដល់អ្នកដទៃបានទេ។ អ្នកប្រើម្នាក់ៗត្រូវតែទិញ access ផ្ទាល់ខ្លួន។ ការបំពានច្បាប់នេះនឹងនាំឲ្យមានការបញ្ចប់គណនីដែលពាក់ព័ន្ធទាំងអស់ភ្លាមៗ។' },
  tos6: { en: 'no refunds if you break the rules', km: 'មិនសងលុយវិញទេ បើអ្នកបំពានច្បាប់' },
  tos6d: { en: 'all sales are final. we do not offer refunds for any reason, especially if you are banned for violating these terms. by purchasing you agree that you have read and understood these rules. if you are unsure about any rule, ask us on telegram before ordering.', km: 'ការលក់ទាំងអស់គឺចប់។ យើងមិនផ្តល់ការសងប្រាក់វិញសម្រាប់ហេតុផលណាមួយទេ ជាពិសេសប្រសិនបើអ្នកត្រូវបានបណ្ដេញចេញដោយសារការបំពានលក្ខខណ្ឌទាំងនេះ។ តាមរយៈការទិញ អ្នកយល់ព្រមថាអ្នកបានអាន និងយល់ពីច្បាប់ទាំងនេះហើយ។ ប្រសិនបើអ្នកមិនច្បាស់អំពីច្បាប់ណាមួយ សូមសួរមកយើងតាម Telegram មុនពេលបញ្ជាទិញ។' },
  tos7: { en: 'no attack on cambodian infrastructure', km: 'ហាមវាយហេដ្ឋារចនាសម្ព័ន្ធកម្ពុជា' },
  tos7d: { en: 'this includes cambodian ISPs, cambodian hosting providers, cambodian government services, and any cambodian owned online service. we are a cambodian service and we respect our country.', km: 'នេះរួមបញ្ចូល ISP កម្ពុជា អ្នកផ្តល់សេវាបង្ហោះនៅកម្ពុជា សេវារដ្ឋាភិបាលកម្ពុជា និងសេវាកម្មអនឡាញណាដែលជាកម្មសិទ្ធិរបស់ខ្មែរ។ យើងជាសេវាកម្មខ្មែរ ហើយយើងគោរពប្រទេសរបស់យើង។' },
  contact_title: { en: 'contact', km: 'ទំនាក់ទំនង' },
  contact_sub: { en: 'reach us on telegram.', km: 'ទាក់ទងមកយើងតាម Telegram។' },
  channel_label: { en: 'channel', km: 'ឆានែល' },
  owner_label: { en: 'owner', km: 'ម្ចាស់' },
  support_label: { en: 'support', km: 'ជំនួយ' },
  channel_desc: { en: 'announcements, updates, and community.', km: 'សេចក្តីប្រកាស ព័ត៌មានថ្មីៗ និងសហគមន៍។' },
  owner_desc: { en: 'direct contact with the owner for business.', km: 'ទាក់ទងផ្ទាល់ជាមួយម្ចាស់សម្រាប់ការងារ។' },
  support_desc: { en: 'order help, questions, and technical support.', km: 'ជំនួយបញ្ជាទិញ សំណួរ និងជំនួយបច្ចេកទេស។' },
  join_btn: { en: 'join', km: 'ចូល' },
  message_btn: { en: 'message', km: 'ទាក់ទង' },
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
      <div class="feat-grid">
        <div class="feat-card2">
          <div class="feat-icon2">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <h4>{{ t.feat1_title[lang] }}</h4>
          <p>{{ t.feat1_desc[lang] }}</p>
        </div>
        <div class="feat-card2">
          <div class="feat-icon2 i2">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
          </div>
          <h4>{{ t.feat2_title[lang] }}</h4>
          <p>{{ t.feat2_desc[lang] }}</p>
        </div>
        <div class="feat-card2">
          <div class="feat-icon2 i3">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <h4>{{ t.feat3_title[lang] }}</h4>
          <p>{{ t.feat3_desc[lang] }}</p>
        </div>
        <div class="feat-card2">
          <div class="feat-icon2 i4">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
          </div>
          <h4>{{ t.feat4_title[lang] }}</h4>
          <p>{{ t.feat4_desc[lang] }}</p>
        </div>
        <div class="feat-card2">
          <div class="feat-icon2 i5">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5A10 10 0 0012 2z"/></svg>
          </div>
          <h4>{{ t.feat5_title[lang] }}</h4>
          <p>{{ t.feat5_desc[lang] }}</p>
        </div>
        <div class="feat-card2">
          <div class="feat-icon2 i6">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          <h4>{{ t.feat6_title[lang] }}</h4>
          <p>{{ t.feat6_desc[lang] }}</p>
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
          <div class="pcard-top">
            <div class="pname">{{ t.basic[lang] }}</div>
            <div class="pprice"><span class="dollar">$</span>5</div>
            <div class="pperiod">60 {{ t.seconds[lang] }}</div>
          </div>
          <ul class="pfeats">
            <li class="in"><span>&#10003;</span> {{ t.method_l7[lang] }}</li>
            <li class="in"><span>&#10003;</span> 60s {{ t.seconds[lang] }}</li>
            <li class="in"><span>&#10003;</span> {{ t.basic_bypass[lang] }}</li>
            <li class="in"><span>&#10003;</span> {{ t.tg_support[lang] }}</li>
            <li class="out"><span>&#10007;</span> {{ t.cf_bypass[lang] }}</li>
            <li class="out"><span>&#10007;</span> {{ t.priority_queue[lang] }}</li>
            <li class="out"><span>&#10007;</span> {{ t.concurrent[lang] }}</li>
          </ul>
          <a href="#contact" class="btn-order">{{ t.order_btn[lang] }}</a>
        </div>
        <div class="pcard pop">
          <div class="pop-tag">{{ t.bestseller[lang] }}</div>
          <div class="pcard-top">
            <div class="pname">{{ t.standard[lang] }}</div>
            <div class="pprice"><span class="dollar">$</span>10</div>
            <div class="pperiod">130 {{ t.seconds[lang] }}</div>
          </div>
          <ul class="pfeats">
            <li class="in"><span>&#10003;</span> {{ t.method_l7[lang] }}</li>
            <li class="in"><span>&#10003;</span> 130s {{ t.seconds[lang] }}</li>
            <li class="in"><span>&#10003;</span> {{ t.basic_bypass[lang] }}</li>
            <li class="in"><span>&#10003;</span> {{ t.tg_support[lang] }}</li>
            <li class="in"><span>&#10003;</span> {{ t.cf_bypass[lang] }}</li>
            <li class="out"><span>&#10007;</span> {{ t.priority_queue[lang] }}</li>
            <li class="out"><span>&#10007;</span> {{ t.concurrent[lang] }}</li>
          </ul>
          <a href="#contact" class="btn-order btn-order-pop">{{ t.order_btn[lang] }}</a>
        </div>
        <div class="pcard">
          <div class="pcard-top">
            <div class="pname">{{ t.premium[lang] }}</div>
            <div class="pprice"><span class="dollar">$</span>15</div>
            <div class="pperiod">200 {{ t.seconds[lang] }}</div>
          </div>
          <ul class="pfeats">
            <li class="in"><span>&#10003;</span> {{ t.method_l7[lang] }}</li>
            <li class="in"><span>&#10003;</span> 200s {{ t.seconds[lang] }}</li>
            <li class="in"><span>&#10003;</span> {{ t.advanced_bypass[lang] }}</li>
            <li class="in"><span>&#10003;</span> {{ t.tg_support[lang] }}</li>
            <li class="in"><span>&#10003;</span> {{ t.cf_bypass[lang] }}</li>
            <li class="in"><span>&#10003;</span> {{ t.priority_queue[lang] }}</li>
            <li class="in"><span>&#10003;</span> {{ t.concurrent[lang] }}</li>
          </ul>
          <a href="#contact" class="btn-order">{{ t.order_btn[lang] }}</a>
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
          { q: t.faq7_q[lang], a: t.faq7_a[lang] },
          { q: t.faq8_q[lang], a: t.faq8_a[lang] },
          { q: t.faq9_q[lang], a: t.faq9_a[lang] },
          { q: t.faq10_q[lang], a: t.faq10_a[lang] },
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
        <div class="tos-list">
          <div class="tos-item">
            <div class="tos-num">1</div>
            <div class="tos-body">
              <strong>{{ t.tos1[lang] }}</strong>
              <span>{{ t.tos1d[lang] }}</span>
            </div>
          </div>
          <div class="tos-item">
            <div class="tos-num">2</div>
            <div class="tos-body">
              <strong>{{ t.tos2[lang] }}</strong>
              <span>{{ t.tos2d[lang] }}</span>
            </div>
          </div>
          <div class="tos-item">
            <div class="tos-num">3</div>
            <div class="tos-body">
              <strong>{{ t.tos3[lang] }}</strong>
              <span>{{ t.tos3d[lang] }}</span>
            </div>
          </div>
          <div class="tos-item">
            <div class="tos-num">4</div>
            <div class="tos-body">
              <strong>{{ t.tos4[lang] }}</strong>
              <span>{{ t.tos4d[lang] }}</span>
            </div>
          </div>
          <div class="tos-item">
            <div class="tos-num">5</div>
            <div class="tos-body">
              <strong>{{ t.tos5[lang] }}</strong>
              <span>{{ t.tos5d[lang] }}</span>
            </div>
          </div>
          <div class="tos-item">
            <div class="tos-num">6</div>
            <div class="tos-body">
              <strong>{{ t.tos6[lang] }}</strong>
              <span>{{ t.tos6d[lang] }}</span>
            </div>
          </div>
          <div class="tos-item">
            <div class="tos-num">7</div>
            <div class="tos-body">
              <strong>{{ t.tos7[lang] }}</strong>
              <span>{{ t.tos7d[lang] }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- contact -->
    <section class="sec contact-sec" id="contact">
      <div class="sec-head">
        <h2>{{ t.contact_title[lang] }}</h2>
        <p>{{ t.contact_sub[lang] }}</p>
      </div>
      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-tag tag-channel">{{ t.channel_label[lang] }}</div>
          <div class="contact-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
          </div>
          <strong class="contact-name">@rikixzapi</strong>
          <span class="contact-desc">{{ t.channel_desc[lang] }}</span>
          <a href="https://t.me/rikixzapi" target="_blank" class="contact-btn">{{ t.join_btn[lang] }}</a>
        </div>
        <div class="contact-card card-owner">
          <div class="contact-tag tag-owner">{{ t.owner_label[lang] }}</div>
          <div class="contact-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15C15.866 15 19 12.3137 19 9C19 5.68629 15.866 3 12 3C8.13401 3 5 5.68629 5 9C5 12.3137 8.13401 15 12 15Z"/><path d="M3 21C3 17.6863 6.68629 15 12 15C17.3137 15 21 17.6863 21 21"/></svg>
          </div>
          <strong class="contact-name">@krisneverdie</strong>
          <span class="contact-desc">{{ t.owner_desc[lang] }}</span>
          <a href="https://t.me/krisneverdie" target="_blank" class="contact-btn">{{ t.message_btn[lang] }}</a>
        </div>
        <div class="contact-card">
          <div class="contact-tag tag-support">{{ t.support_label[lang] }}</div>
          <div class="contact-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"/></svg>
          </div>
          <div class="contact-sublist">
            <a href="https://t.me/rosykisa" target="_blank" class="contact-sub">@rosykisa</a>
            <a href="https://t.me/rikixz_supporter" target="_blank" class="contact-sub">@rikixz_supporter</a>
          </div>
          <span class="contact-desc">{{ t.support_desc[lang] }}</span>
          <a href="https://t.me/rosykisa" target="_blank" class="contact-btn">{{ t.message_btn[lang] }}</a>
        </div>
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
  --bg: #f4f4f9;
  --bg2: #eaeaef;
  --card: #ffffff;
  --card-h: #f0f0f5;
  --text: #444466;
  --text2: #8888aa;
  --head: #1a1a2e;
  --accent: #ff2666;
  --accent2: #cc1144;
  --green: #00bb66;
  --border: #e0e0e8;
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
    linear-gradient(rgba(255,38,102,.04) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,38,102,.04) 1px,transparent 1px);
  background-size:40px 40px;
  pointer-events:none
}
a { color:inherit; text-decoration:none }

/* topbar */
.topbar {
  position:fixed;top:0;left:0;right:0;z-index:100;
  background:rgba(255,255,255,.95);backdrop-filter:blur(20px);
  border-bottom:1px solid var(--border);padding:0 24px;
  transition:box-shadow .3s
}
.topbar:hover { box-shadow:0 2px 24px rgba(0,0,0,.04) }
.topbar-in {
  max-width:1200px;margin:0 auto;display:flex;
  align-items:center;justify-content:space-between;height:72px
}
.logo { display:flex;align-items:center;gap:14px;font-weight:800;font-size:28px;color:var(--accent);letter-spacing:-.5px }
.logo-img { width:50px;height:50px;border-radius:12px;object-fit:cover;flex-shrink:0;transition:transform .3s,box-shadow .3s;box-shadow:0 0 0 0 rgba(255,38,102,.2) }
.logo:hover .logo-img { transform:scale(1.05);box-shadow:0 0 0 3px rgba(255,38,102,.2) }
.topbar-right { display:flex;align-items:center;gap:24px }
.topbar-right a { font-size:13px;font-weight:500;color:var(--text2);transition:color .2s;white-space:nowrap;position:relative;padding:4px 0 }
.topbar-right a::after { content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:var(--accent);transition:width .25s;border-radius:2px }
.topbar-right a:hover { color:var(--accent) }
.topbar-right a:hover::after { width:100% }
.lang-btn {
  background:var(--card);border:1px solid var(--border);color:var(--text);padding:5px 14px;
  border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;
  font-family:var(--font);letter-spacing:.5px;text-transform:uppercase
}
.lang-btn:hover { border-color:var(--accent);color:var(--accent);background:var(--card-h);box-shadow:0 0 12px rgba(255,38,102,.08) }
.topbar-cta {
  background:var(--accent);color:#fff!important;padding:8px 20px;
  border-radius:8px;font-weight:600!important;font-size:13px!important;
  transition:all .25s!important
}
.topbar-cta::after { display:none!important }
.topbar-cta:hover { background:var(--accent2)!important;transform:translateY(-1px);box-shadow:0 4px 16px rgba(255,38,102,.3)!important }

/* hero */
.hero-sec {
  min-height:100vh;display:flex;align-items:center;justify-content:center;
  text-align:center;padding:100px 24px 60px;position:relative;overflow:hidden;
  background:linear-gradient(180deg, rgba(255,38,102,.03) 0%, transparent 50%, rgba(136,51,255,.02) 100%)
}
.hero-overlay {
  position:absolute;inset:0;
  pointer-events:none
}
.hero-overlay::before {
  content:'';position:absolute;inset:0;
  background:
    radial-gradient(ellipse at 15% 60%, rgba(255,38,102,.15) 0%, transparent 50%),
    radial-gradient(ellipse at 85% 30%, rgba(136,51,255,.1) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(0,187,102,.06) 0%, transparent 50%);
  background-size:200% 200%;
  animation:gradient-shift 10s ease infinite
}
.hero-overlay::after {
  content:'';position:absolute;inset:0;
  background-image:
    linear-gradient(rgba(255,38,102,.06) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,38,102,.06) 1px,transparent 1px);
  background-size:50px 50px;
  pointer-events:none;
  opacity:.3
}
.hero-particles { position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0 }
.particle {
  position:absolute;bottom:0;left:var(--x);width:5px;height:5px;
  border-radius:50%;background:var(--accent);opacity:0;
  animation:float-particle calc(var(--s)*4s) linear var(--d) infinite
}
.hero-in { position:relative;z-index:1;max-width:720px }
.hero-logo {
  width:110px;height:110px;border-radius:28px;object-fit:cover;margin-bottom:24px;
  box-shadow:0 0 0 2px rgba(255,38,102,.15), 0 0 40px rgba(255,38,102,.1);
  animation:pulse-glow 3s ease-in-out infinite;transition:transform .3s
}
.hero-logo:hover { transform:scale(1.05) }
.hero-badge {
  display:inline-block;padding:7px 22px;border:1px solid var(--accent);
  border-radius:20px;font-size:11px;font-weight:700;color:var(--accent);
  text-transform:uppercase;letter-spacing:1.5px;margin-bottom:24px;animation:fade-up .6s ease-out both;
  background:rgba(255,38,102,.06);backdrop-filter:blur(8px);
  box-shadow:0 0 24px rgba(255,38,102,.08)
}
.hero-title {
  font-size:clamp(48px, 11vw, 90px);font-weight:900;line-height:.9;
  letter-spacing:-4px;margin-bottom:20px;
  background:linear-gradient(135deg, var(--head) 0%, var(--accent) 50%, var(--head) 100%);
  background-size:200% auto;
  -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
  animation:fade-up .6s ease-out .15s both, text-shimmer 4s linear infinite
}
.hero-title:hover { animation:glitch .3s ease-in-out, text-shimmer 4s linear infinite }
.hero-sub {
  font-size:17px;color:var(--text2);max-width:540px;margin:0 auto 32px;line-height:1.7;
  animation:fade-up .6s ease-out .3s both
}
.hero-btns { display:flex;gap:12px;justify-content:center;flex-wrap:wrap;animation:fade-up .6s ease-out .45s both }
.btn-primary {
  display:inline-flex;padding:16px 36px;background:var(--gradient);background-size:200% auto;color:#fff;
  border-radius:12px;font-weight:700;font-size:14px;transition:all .3s;border:none;cursor:pointer;
  background-size:200% auto;animation:gradient-shift 4s ease infinite;position:relative;
  overflow:hidden;text-transform:uppercase;letter-spacing:.5px
}
.btn-primary::after { content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent);transform:translateX(-100%);transition:transform .5s }
.btn-primary:hover { transform:translateY(-3px);box-shadow:0 8px 40px rgba(255,38,102,.4) }
.btn-primary:hover::after { transform:translateX(100%) }
.btn-ghost {
  display:inline-flex;padding:16px 36px;background:rgba(255,255,255,.75);color:var(--text);
  border-radius:12px;font-weight:600;font-size:14px;border:1px solid var(--border);transition:all .3s;
  backdrop-filter:blur(4px);text-transform:uppercase;letter-spacing:.5px
}
.btn-ghost:hover { border-color:var(--accent);transform:translateY(-3px);box-shadow:0 8px 30px rgba(255,38,102,.12);background:#fff;color:var(--accent) }
.btn-sm { padding:10px 20px;font-size:13px }
.hero-stats { display:flex;gap:40px;justify-content:center;margin-top:52px;flex-wrap:wrap;animation:fade-up .6s ease-out .6s both }
.stat { text-align:center;transition:all .3s;padding:8px 16px;border-radius:12px;background:rgba(255,255,255,.5);border:1px solid var(--border) }
.stat:hover { transform:translateY(-4px);border-color:rgba(255,38,102,.2);background:rgba(255,38,102,.04) }
.stat-n { display:block;font-size:26px;font-weight:800;color:var(--head);font-family:var(--mono);transition:color .3s;letter-spacing:-1px }
.stat:hover .stat-n { color:var(--accent) }
.stat-l { font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--text2);margin-top:2px;display:block }

/* sections */
.sec { padding:90px 24px;max-width:1100px;margin:0 auto;position:relative }
.sec-alt { background:var(--bg2) }
.sec-head { text-align:center;margin-bottom:48px;animation:fade-up .5s ease-out both }
.sec-head h2 { font-size:clamp(26px,4vw,36px);font-weight:800;color:var(--head);margin-bottom:10px;text-transform:uppercase;letter-spacing:-1px;background:var(--gradient);background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradient-shift 4s ease infinite }
.sec-head p { color:var(--text2);font-size:15px }

/* features */
.feat-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:20px }
.feat-card2 {
  background:var(--card);border:1px solid var(--border);border-radius:16px;
  padding:32px 24px 28px;text-align:center;transition:all .3s ease;
  animation:fade-up .5s ease-out both;box-shadow:0 1px 3px rgba(0,0,0,.03)
}
.feat-card2:nth-child(1) { animation-delay:0s }
.feat-card2:nth-child(2) { animation-delay:.06s }
.feat-card2:nth-child(3) { animation-delay:.12s }
.feat-card2:nth-child(4) { animation-delay:.18s }
.feat-card2:nth-child(5) { animation-delay:.24s }
.feat-card2:nth-child(6) { animation-delay:.3s }
.feat-card2:hover { border-color:var(--accent);transform:translateY(-6px);box-shadow:0 16px 48px rgba(255,38,102,.12) }
.feat-icon2 {
  width:64px;height:64px;border-radius:16px;display:flex;align-items:center;justify-content:center;
  color:var(--accent);background:rgba(255,38,102,.08);margin:0 auto 18px;transition:all .3s
}
.feat-card2:hover .feat-icon2 { background:var(--accent);color:#fff;transform:scale(1.08) }
.feat-icon2.i2 { color:#8833ff;background:rgba(136,51,255,.08) }
.feat-card2:nth-child(2):hover .feat-icon2 { background:#8833ff;color:#fff }
.feat-icon2.i3 { color:var(--green);background:rgba(0,187,102,.08) }
.feat-card2:nth-child(3):hover .feat-icon2 { background:var(--green);color:#fff }
.feat-icon2.i4 { color:#ff8800;background:rgba(255,136,0,.08) }
.feat-card2:nth-child(4):hover .feat-icon2 { background:#ff8800;color:#fff }
.feat-icon2.i5 { color:#00bbff;background:rgba(0,187,255,.08) }
.feat-card2:nth-child(5):hover .feat-icon2 { background:#00bbff;color:#fff }
.feat-icon2.i6 { color:#ff44aa;background:rgba(255,68,170,.08) }
.feat-card2:nth-child(6):hover .feat-icon2 { background:#ff44aa;color:#fff }
.feat-card2 h4 { font-size:16px;font-weight:700;color:var(--head);margin-bottom:8px }
.feat-card2 p { font-size:13px;color:var(--text2);line-height:1.5;margin:0 }

/* clients */
.clients-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;max-width:620px;margin:0 auto }
.client-card {
  background:var(--card);border:1px solid var(--border);border-radius:14px;
  padding:28px 24px;text-align:center;transition:all .3s ease;animation:fade-scale .6s ease-out both;
  position:relative;box-shadow:0 1px 3px rgba(0,0,0,.03)
}
.client-card:nth-child(1) { animation-delay:0s }
.client-card:nth-child(2) { animation-delay:.15s }
.client-card:hover { border-color:var(--accent);transform:translateY(-3px);box-shadow:0 12px 36px rgba(255,38,102,.1) }
.client-stars { color:var(--accent);font-size:14px;letter-spacing:3px;margin-bottom:14px }
.client-text { font-size:14px;color:var(--text2);line-height:1.7;font-style:italic;margin-bottom:14px;position:relative;padding:0 4px }
.client-text::before { content:'"';color:var(--accent);font-size:24px;opacity:.3;position:absolute;top:-8px;left:-4px }
.client-name { font-size:13px;font-weight:600;color:var(--accent);font-family:var(--mono) }

/* table */
.table-wrap { overflow-x:auto;max-width:620px;margin:0 auto }
.tbl { width:100%;border-collapse:separate;border-spacing:0;font-size:14px;border:1px solid var(--border);border-radius:12px;overflow:hidden }
.tbl th { text-align:left;padding:14px 18px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--text2);background:var(--bg2);border-bottom:1px solid var(--border) }
.tbl td { padding:14px 18px;background:var(--card);transition:all .2s;border-bottom:1px solid var(--border) }
.tbl tr:last-child td { border-bottom:none }
.tbl tbody tr { cursor:default;transition:all .2s }
.tbl tbody tr:hover td { background:var(--card-h) }
.mname { font-weight:700;font-family:var(--mono);color:var(--accent);font-size:13px }
.sbadge { display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px }
.sbadge.up { background:rgba(0,187,102,.1);color:var(--green) }
.sbadge.lim { background:rgba(255,102,51,.1);color:#ff6633 }

/* pricing */
.prices { display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;align-items:start }
.pcard {
  background:var(--card);border:1px solid var(--border);border-radius:16px;
  text-align:center;position:relative;transition:all .3s ease;animation:fade-up .5s ease-out both;
  overflow:hidden;display:flex;flex-direction:column;box-shadow:0 2px 8px rgba(0,0,0,.04)
}
.pcard:nth-child(1) { animation-delay:0s }
.pcard:nth-child(2) { animation-delay:.1s }
.pcard:nth-child(3) { animation-delay:.2s }
.pcard:hover { transform:translateY(-6px);box-shadow:0 16px 48px rgba(255,38,102,.12);border-color:var(--accent) }
.pcard.pop { border-color:var(--accent);border-width:2px;box-shadow:0 4px 24px rgba(255,38,102,.08) }
.pcard.pop:hover { box-shadow:0 16px 56px rgba(255,38,102,.2) }
.pop-tag {
  position:absolute;top:0;left:0;right:0;
  background:var(--accent);color:#fff;padding:6px;
  font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase
}
.pcard-top { padding:36px 24px 22px;border-bottom:1px solid var(--border) }
.pcard.pop .pcard-top { padding-top:44px }
.pname { font-size:13px;font-weight:600;color:var(--text2);text-transform:uppercase;letter-spacing:1px;margin-bottom:14px }
.pprice { font-size:50px;font-weight:900;color:var(--head);letter-spacing:-3px;line-height:1;margin-bottom:4px }
.dollar { font-size:22px;font-weight:600;color:var(--text2);vertical-align:super;margin-right:2px }
.pperiod { font-size:13px;color:var(--text2);margin-top:4px }
.pfeats { list-style:none;text-align:left;margin:0;padding:18px 24px;flex:1;display:flex;flex-direction:column;gap:0 }
.pfeats li { display:flex;align-items:center;gap:10px;padding:11px 0;font-size:13px;color:var(--text2);border-bottom:1px solid var(--border) }
.pfeats li:last-child { border-bottom:none }
.pfeats li span { font-weight:700;font-size:14px;flex-shrink:0;width:20px;text-align:center }
.pfeats li.in span { color:var(--green) }
.pfeats li.out span { color:#ccc }
.btn-order {
  display:block;margin:0 24px 24px;padding:14px 0;border-radius:10px;
  font-weight:700;font-size:14px;text-align:center;cursor:pointer;transition:all .3s;
  background:var(--card);color:var(--head);border:2px solid var(--border);
  text-decoration:none;letter-spacing:.5px;text-transform:uppercase
}
.btn-order:hover { background:var(--accent);color:#fff;border-color:var(--accent);box-shadow:0 4px 20px rgba(255,38,102,.2) }
.btn-order-pop { background:var(--accent);color:#fff;border-color:var(--accent);position:relative;overflow:hidden }
.btn-order-pop::after { content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.12),transparent);transform:translateX(-100%);transition:transform .5s }
.btn-order-pop:hover { box-shadow:0 6px 28px rgba(255,38,102,.35)!important;transform:translateY(-2px) }
.btn-order-pop:hover::after { transform:translateX(100%) }

/* faq */
.faqs { max-width:640px;margin:0 auto;display:flex;flex-direction:column;gap:8px }
.faq-item { background:var(--card);border:1px solid var(--border);border-radius:12px;overflow:hidden;transition:all .3s }
.faq-item:hover { border-color:var(--accent) }
.faq-item.open { border-color:var(--accent);box-shadow:0 0 0 1px var(--accent) }
.faq-q {
  width:100%;display:flex;align-items:center;justify-content:space-between;
  padding:18px 22px;background:none;border:none;color:var(--head);
  font-size:14px;font-weight:600;cursor:pointer;text-align:left;font-family:var(--font);transition:color .2s
}
.faq-q:hover { color:var(--accent) }
.arr { font-size:8px;color:var(--text2);transition:transform .3s;flex-shrink:0;width:24px;height:24px;border-radius:6px;background:var(--bg);display:flex;align-items:center;justify-content:center }
.faq-item.open .arr { transform:rotate(180deg);background:rgba(255,38,102,.1);color:var(--accent) }
.faq-a { max-height:0;overflow:hidden;transition:max-height .3s ease,padding .3s ease }
.faq-item.open .faq-a { max-height:500px;padding:0 22px 20px }
.faq-a p { font-size:13px;color:var(--text2);line-height:1.7 }

/* why */
.why-box { max-width:640px;margin:0 auto;display:flex;flex-direction:column;gap:12px }
.why-item {
  display:flex;align-items:flex-start;gap:16px;padding:22px;
  background:var(--card);border:1px solid var(--border);border-radius:12px;
  animation:fade-up .5s ease-out both;transition:all .3s;box-shadow:0 1px 3px rgba(0,0,0,.03)
}
.why-item:nth-child(1) { animation-delay:0s }
.why-item:nth-child(2) { animation-delay:.08s }
.why-item:nth-child(3) { animation-delay:.16s }
.why-item:nth-child(4) { animation-delay:.24s }
.why-item:hover { border-color:var(--accent);transform:translateY(-3px);box-shadow:0 8px 28px rgba(255,38,102,.1) }
.why-item .chk { width:28px;height:28px;border-radius:8px;background:rgba(255,38,102,.1);display:flex;align-items:center;justify-content:center;color:var(--accent);font-weight:800;flex-shrink:0;margin-top:2px;font-size:14px }
.why-item strong { display:block;font-size:14px;font-weight:700;color:var(--head);margin-bottom:6px }
.why-item span { font-size:13px;color:var(--text2);line-height:1.6 }

/* tos */
.tos-box {
  max-width:720px;margin:0 auto;background:var(--card);
  border:1px solid var(--border);border-radius:16px;padding:36px 32px;transition:all .3s;
  animation:fade-up .5s ease-out both;box-shadow:0 2px 8px rgba(0,0,0,.04)
}
.tos-warn {
  text-align:center;font-size:14px;font-weight:600;color:var(--accent);
  padding:14px 20px;background:rgba(255,38,102,.08);border-radius:10px;margin-bottom:28px;
  border:1px solid rgba(255,38,102,.2);animation:pulse-glow 3s ease-in-out infinite
}
.tos-list { display:flex;flex-direction:column;gap:10px }
.tos-item {
  display:flex;gap:16px;padding:16px 20px;border-radius:12px;
  transition:all .25s;border:1px solid var(--border)
}
.tos-item:hover { border-color:rgba(255,38,102,.25);background:rgba(255,38,102,.03);transform:translateX(4px) }
.tos-num {
  flex-shrink:0;width:30px;height:30px;border-radius:8px;background:rgba(255,38,102,.1);
  display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:var(--accent);font-family:var(--mono)
}
.tos-body { flex:1;min-width:0 }
.tos-body strong { display:block;font-size:14px;font-weight:700;color:var(--head);margin-bottom:4px }
.tos-body span { font-size:13px;color:var(--text2);line-height:1.6;display:block }

/* contact */
.contact-sec { text-align:center }
.contact-grid { display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;max-width:780px;margin:0 auto }
.contact-card {
  background:var(--card);border:1px solid var(--border);border-radius:14px;
  padding:28px 22px;text-align:center;transition:all .3s;position:relative;
  display:flex;flex-direction:column;align-items:center;gap:10px;
  animation:fade-up .5s ease-out both;box-shadow:0 1px 3px rgba(0,0,0,.03)
}
.contact-card:nth-child(1) { animation-delay:0s }
.contact-card:nth-child(2) { animation-delay:.1s }
.contact-card:nth-child(3) { animation-delay:.2s }
.contact-card:hover { transform:translateY(-4px);box-shadow:0 12px 36px rgba(255,38,102,.1);border-color:var(--accent) }
.contact-tag {
  position:absolute;top:0;left:0;right:0;padding:5px;
  font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
  color:#fff;border-radius:13px 13px 0 0
}
.tag-channel { background:var(--accent) }
.tag-owner { background:#8833ff }
.tag-support { background:var(--green) }
.contact-icon {
  width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;
  color:var(--accent);background:rgba(255,38,102,.08);margin-top:8px
}
.card-owner .contact-icon { color:#8833ff;background:rgba(136,51,255,.08) }
.contact-card:last-child .contact-icon { color:var(--green);background:rgba(0,187,102,.08) }
.contact-name { font-size:15px;font-weight:700;color:var(--head);font-family:var(--mono) }
.contact-desc { font-size:12px;color:var(--text2);line-height:1.4 }
.contact-sublist { display:flex;flex-direction:column;gap:4px;width:100% }
.contact-sub {
  display:block;padding:8px 14px;border-radius:8px;background:var(--bg);
  font-size:13px;font-weight:600;color:var(--head);font-family:var(--mono);
  transition:all .2s;text-decoration:none
}
.contact-sub:hover { background:rgba(255,38,102,.08);color:var(--accent) }
.contact-btn {
  display:inline-block;padding:8px 24px;border-radius:8px;font-weight:600;font-size:12px;
  text-transform:uppercase;letter-spacing:.5px;text-decoration:none;transition:all .25s;
  background:transparent;color:var(--accent);border:1px solid var(--accent);margin-top:4px
}
.contact-btn:hover { background:var(--accent);color:#fff;box-shadow:0 4px 16px rgba(255,38,102,.2) }

/* footer */
.ftr { border-top:1px solid var(--border);padding:28px 24px;text-align:center }
.ftr p { font-size:13px;color:var(--text2) }
.ftr-small { margin-top:4px;font-size:12px }
.ftr a { color:var(--accent) }

@media(max-width:900px) {
  .feat-grid { grid-template-columns:repeat(2,1fr);gap:14px }
  .prices { grid-template-columns:repeat(auto-fit,minmax(220px,1fr)) }
}
@media(max-width:768px) {
  .topbar { padding:0 12px }
  .topbar-in { height:60px }
  .topbar-right { gap:8px }
  .topbar-right a:not(.topbar-cta):not(.lang-btn) { display:none }
  .topbar-cta { padding:6px 14px;font-size:12px!important }
  .lang-btn { padding:4px 10px;font-size:11px }
  .logo { font-size:20px;gap:10px }
  .logo-img { width:36px;height:36px }

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

  .feat-grid { grid-template-columns:1fr;gap:12px }
  .feat-card2 { padding:22px 18px 20px }
  .feat-icon2 { width:52px;height:52px;margin-bottom:14px }
  .feat-icon2 svg { width:28px;height:28px }
  .feat-card2 h4 { font-size:15px }
  .feat-card2 p { font-size:12px }

  .clients-grid { grid-template-columns:1fr;gap:10px;max-width:100% }
  .client-card { padding:20px }
  .client-text { font-size:13px }
  .client-name { font-size:12px }

  .table-wrap { margin:0 -16px;padding:0 16px;width:auto }
  .tbl { font-size:13px }
  .tbl th,.tbl td { padding:10px 12px }
  .mname { font-size:12px }

  .prices { grid-template-columns:1fr;gap:16px;max-width:360px;margin:0 auto }
  .pcard-top { padding:24px 20px 16px }
  .pcard.pop .pcard-top { padding-top:36px }
  .pname { font-size:12px }
  .pprice { font-size:36px }
  .dollar { font-size:17px }
  .pperiod { font-size:12px }
  .pfeats { padding:12px 20px }
  .pfeats li { padding:8px 0;font-size:12px }
  .btn-order { margin:0 20px 20px;padding:11px 0;font-size:13px }

  .faq-q { padding:14px 16px;font-size:13px }
  .faq-a p { font-size:12px }

  .why-box { gap:8px }
  .why-item { padding:14px;gap:10px }
  .why-item strong { font-size:13px }
  .why-item span { font-size:12px }
  .why-item .chk { font-size:16px }

  .tos-box { padding:24px 18px }
  .tos-warn { font-size:13px;padding:12px 16px;margin-bottom:20px }
  .tos-item { padding:12px 14px;gap:10px }
  .tos-num { width:24px;height:24px;font-size:11px }
  .tos-body strong { font-size:13px }
  .tos-body span { font-size:12px }

  .contact-grid { grid-template-columns:1fr;max-width:340px;gap:14px }
  .contact-card { padding:22px 18px;gap:8px }
  .contact-icon { width:46px;height:46px }
  .contact-name { font-size:14px }
  .contact-desc { font-size:11px }
  .contact-sub { font-size:12px;padding:6px 12px }
  .contact-btn { font-size:11px;padding:7px 20px }

  .ftr { padding:20px 16px }
  .ftr p { font-size:12px }
  .ftr-small { font-size:11px }
}
@media(max-width:480px) {
  .topbar-in { height:54px }
  .topbar-right { gap:6px }
  .topbar-right a { font-size:11px;font-weight:600 }
  .topbar-cta { padding:5px 12px;font-size:11px!important;border-radius:6px }
  .lang-btn { padding:3px 8px;font-size:10px;border-radius:5px }
  .logo-img { width:30px;height:30px }
  .logo { font-size:16px;gap:8px }

  .hero-sec { padding:72px 16px 40px;min-height:90vh }
  .hero-logo { width:80px;height:80px;border-radius:20px;margin-bottom:18px }
  .hero-title { font-size:clamp(32px,14vw,40px);letter-spacing:-2px;margin-bottom:14px }
  .hero-sub { font-size:14px;margin-bottom:24px;max-width:100% }
  .hero-badge { font-size:10px;padding:5px 14px;margin-bottom:16px }
  .btn-primary,.btn-ghost { padding:12px 24px;font-size:13px;border-radius:10px }
  .hero-stats { gap:16px;margin-top:28px }
  .stat { padding:6px 12px }
  .stat-n { font-size:18px }
  .stat-l { font-size:10px;letter-spacing:.5px }

  .sec { padding:36px 16px }
  .sec-head { margin-bottom:24px }
  .sec-head h2 { font-size:clamp(20px,6vw,24px);letter-spacing:-.5px }
  .sec-head p { font-size:14px }

  .feat-card2 { padding:18px 14px 16px;border-radius:12px }
  .feat-icon2 { width:44px;height:44px;border-radius:12px;margin-bottom:10px }
  .feat-icon2 svg { width:24px;height:24px }
  .feat-card2 h4 { font-size:14px }
  .feat-card2 p { font-size:12px }

  .clients-grid { gap:10px }
  .client-card { padding:18px;border-radius:12px }
  .client-stars { font-size:14px;letter-spacing:3px;margin-bottom:10px }
  .client-text { font-size:13px;margin-bottom:8px }

  .tbl th,.tbl td { padding:10px 12px;font-size:12px }
  .tbl th { font-size:10px }

  .pcard-top { padding:22px 18px 14px }
  .pcard.pop .pcard-top { padding-top:34px }
  .pprice { font-size:34px }
  .dollar { font-size:16px }
  .pperiod { font-size:12px }
  .pfeats { padding:12px 18px }
  .pfeats li { padding:8px 0;font-size:12px;gap:8px }
  .pop-tag { font-size:10px;padding:5px }
  .btn-order { margin:0 18px 18px;padding:11px 0;font-size:13px;border-radius:9px }

  .faq-q { padding:14px 16px;font-size:13px }
  .faq-item.open .faq-a { padding:0 16px 14px }

  .why-item { padding:14px;border-radius:10px }
  .why-item strong { font-size:13px }
  .why-item span { font-size:12px }
  .why-item .chk { font-size:16px }

  .tos-box { padding:18px 14px;border-radius:14px }
  .tos-warn { font-size:13px;padding:10px 14px }
  .tos-list li { font-size:13px;gap:8px }

  .clink { padding:10px 18px;font-size:13px;border-radius:9px }

  .ftr { padding:18px 16px }
  .ftr p { font-size:12px }
}
</style>