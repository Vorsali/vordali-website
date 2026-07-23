
:root {
  --bg: #040711;
  --bg-soft: #07101f;
  --panel: rgba(10, 19, 37, .72);
  --panel-solid: #0a1324;
  --line: rgba(137, 182, 255, .16);
  --text: #f4f7ff;
  --muted: #98a6bc;
  --blue: #1388ff;
  --cyan: #20d7ff;
  --max: 1180px;
  --radius: 26px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--text);
  background:
    radial-gradient(circle at 50% -5%, rgba(14, 85, 191, .17), transparent 35%),
    var(--bg);
  font-family: Inter, system-ui, sans-serif;
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
button, input, textarea { font: inherit; }

.page-noise {
  position: fixed; inset: 0; z-index: 1000; pointer-events: none; opacity: .045;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E");
}

.site-header {
  position: fixed; top: 0; left: 0; width: 100%; height: 82px; z-index: 50;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 max(24px, calc((100vw - var(--max)) / 2));
  transition: background .3s ease, border .3s ease, backdrop-filter .3s ease;
}
.site-header.scrolled {
  background: rgba(4, 7, 17, .76);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(18px);
}
.brand { display: inline-flex; align-items: center; gap: 10px; font-family: "Space Grotesk"; font-weight: 700; letter-spacing: .19em; font-size: 15px; }
.brand img { width: 36px; height: 36px; object-fit: cover; border-radius: 50%; box-shadow: 0 0 28px rgba(19,136,255,.25); }
.site-nav { display: flex; align-items: center; gap: 31px; font-size: 14px; color: #c2ccdc; }
.site-nav a { transition: color .2s ease; }
.site-nav a:hover { color: white; }
.nav-cta { padding: 10px 16px; border: 1px solid rgba(107,168,255,.34); border-radius: 999px; background: rgba(22, 97, 204, .09); }
.menu-button { display: none; background: none; border: 0; width: 44px; height: 44px; }
.menu-button span { display: block; width: 22px; height: 1px; margin: 6px auto; background: white; }

.hero {
  min-height: 100svh; position: relative; display: grid; place-items: center; overflow: hidden;
  padding: 130px 24px 90px;
}
.hero-bg {
  position: absolute; inset: 0;
  background:
    linear-gradient(90deg, rgba(4,7,17,.36), rgba(4,7,17,.77) 50%, rgba(4,7,17,.36)),
    linear-gradient(0deg, var(--bg) 0%, transparent 22%, transparent 78%, rgba(4,7,17,.5) 100%),
    url("/assets/vordali-hero.webp") center/cover no-repeat;
  opacity: .68;
  transform: scale(1.02);
}
.hero::after {
  content:""; position:absolute; inset:0;
  background-image: linear-gradient(rgba(65,126,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(65,126,255,.045) 1px, transparent 1px);
  background-size: 70px 70px;
  mask-image: linear-gradient(to bottom, transparent 5%, black 40%, transparent 92%);
}
.hero-glow { position: absolute; border-radius: 50%; filter: blur(1px); pointer-events: none; }
.hero-glow-one { width: 560px; height: 560px; top: 15%; left: 50%; transform: translateX(-50%); background: radial-gradient(circle, rgba(0,132,255,.15), transparent 68%); }
.hero-glow-two { width: 800px; height: 300px; bottom: -150px; left: 50%; transform: translateX(-50%); background: radial-gradient(ellipse, rgba(0,100,255,.22), transparent 66%); }

.hero-content { position: relative; z-index: 2; max-width: 920px; text-align: center; margin-top: 45px; }
.eyebrow, .kicker { text-transform: uppercase; letter-spacing: .17em; font-size: 12px; color: #5ca9ff; font-weight: 700; }
.eyebrow { display: inline-flex; align-items: center; gap: 10px; padding: 8px 13px; border: 1px solid rgba(81,151,255,.24); border-radius: 999px; background: rgba(4, 15, 34, .55); }
.eyebrow span { width: 7px; height: 7px; border-radius: 50%; background: var(--cyan); box-shadow: 0 0 16px var(--cyan); }
.hero h1 {
  margin: 25px auto 22px; max-width: 880px;
  font-family: "Space Grotesk"; font-size: clamp(56px, 7.2vw, 96px);
  line-height: .96; letter-spacing: -.055em; font-weight: 600;
}
.hero h1 em { font-style: normal; background: linear-gradient(100deg, #fff 15%, #32c5ff 50%, #1c75ff 90%); -webkit-background-clip: text; color: transparent; }
.hero-content > p { max-width: 690px; margin: 0 auto; color: #afbad0; font-size: clamp(17px, 2vw, 20px); line-height: 1.7; }
.hero-actions { display: flex; justify-content: center; gap: 12px; margin-top: 34px; flex-wrap: wrap; }
.button {
  display: inline-flex; min-height: 52px; padding: 0 23px; align-items: center; justify-content: center; gap: 12px;
  border-radius: 12px; border: 1px solid transparent; font-size: 14px; font-weight: 700; cursor: pointer;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
}
.button:hover { transform: translateY(-2px); }
.button-primary { background: linear-gradient(110deg, #126dff, #11a4ff); box-shadow: 0 14px 38px rgba(0,103,255,.26), inset 0 1px rgba(255,255,255,.25); color: white; }
.button-primary:hover { box-shadow: 0 17px 48px rgba(0,103,255,.39); }
.button-secondary { background: rgba(8, 14, 29, .72); border-color: rgba(129,164,222,.22); color: #dce6f7; }
.hero-proof { max-width: 760px; margin: 65px auto 0; padding-top: 25px; border-top: 1px solid var(--line); display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.hero-proof div { display: flex; flex-direction: column; gap: 7px; }
.hero-proof strong { font-size: 13px; }
.hero-proof span { color: #75849b; font-size: 12px; }
.scroll-cue { position: absolute; z-index:2; bottom: 28px; left: 50%; transform: translateX(-50%); display: flex; align-items:center; gap:12px; color:#718097; text-transform:uppercase; letter-spacing:.18em; font-size:9px; }
.scroll-cue i { display:block; width:20px; height:32px; border:1px solid rgba(141,174,227,.3); border-radius:999px; position:relative; }
.scroll-cue i::after { content:""; width:3px; height:6px; background:#56a9ff; border-radius:3px; position:absolute; top:6px; left:8px; animation:scroll 1.8s infinite; }
@keyframes scroll { 0%{opacity:0;transform:translateY(0)} 30%{opacity:1} 100%{opacity:0;transform:translateY(12px)} }

.section { max-width: var(--max); margin: 0 auto; padding: 140px 24px; }
.section-heading { max-width: 730px; margin-bottom: 65px; }
.section-heading.centered { text-align:center; margin-left:auto; margin-right:auto; }
.section-heading h2, .principle-title h2, .cta-content h2 {
  margin: 14px 0 21px; font-family:"Space Grotesk"; font-size:clamp(39px,5vw,64px); line-height:1.05; letter-spacing:-.045em;
}
.section-heading > p:last-child, .principle-title + p { color:var(--muted); font-size:17px; line-height:1.7; }

.platform-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:18px; }
.feature-card { position:relative; padding:34px; border:1px solid var(--line); border-radius:var(--radius); background:linear-gradient(145deg, rgba(13,25,48,.78), rgba(5,11,24,.72)); overflow:hidden; min-height:360px; }
.feature-card::before { content:""; position:absolute; width:240px; height:240px; right:-100px; top:-100px; background:radial-gradient(circle,rgba(22,125,255,.14),transparent 70%); }
.feature-card-large { grid-column:1/-1; padding:26px; min-height:640px; }
.card-topline { color:#91a2ba; font-size:12px; display:flex; align-items:center; gap:8px; margin-bottom:20px; }
.status-dot { width:7px;height:7px;border-radius:50%;background:#33e49b;box-shadow:0 0 12px #33e49b; }
.dashboard-preview { display:grid; grid-template-columns:58px 1fr; min-height:440px; border:1px solid rgba(137,182,255,.14); background:#070d19; border-radius:18px; overflow:hidden; box-shadow:0 30px 80px rgba(0,0,0,.32); }
.dashboard-sidebar { border-right:1px solid rgba(137,182,255,.11); display:flex; flex-direction:column; align-items:center; gap:25px; padding:17px 0; }
.mini-logo { width:29px;height:29px;border-radius:8px;background:linear-gradient(145deg,#08b8ff,#1649ff);display:grid;place-items:center;font-weight:800;font-size:12px; }
.dashboard-sidebar span { width:17px;height:17px;border-radius:5px;background:#172237; }
.dashboard-sidebar span.active { background:#116fff;box-shadow:0 0 17px rgba(17,111,255,.55); }
.dashboard-main { padding:30px; }
.dashboard-head { display:flex;justify-content:space-between;align-items:center; }
.dashboard-head div:first-child { display:flex;flex-direction:column;gap:7px; }
.dashboard-head small,.metric-row small { color:#6e7e97; }
.dashboard-head strong { font-size:21px; }
.avatar-stack { display:flex; }
.avatar-stack i { width:27px;height:27px;border-radius:50%;border:2px solid #070d19;background:linear-gradient(145deg,#314e78,#0f75ff);margin-left:-8px; }
.metric-row { display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:28px; }
.metric-row > div { padding:18px;border-radius:12px;background:#0b1527;border:1px solid rgba(122,170,244,.1);display:grid;gap:7px; }
.metric-row strong { font-size:27px; }
.metric-row span { font-size:10px;color:#7e8da4; }
.metric-row .metric-up { color:#39d69a; }
.activity-panel { display:grid;grid-template-columns:1.25fr .75fr;gap:14px;margin-top:14px; }
.activity-chart,.activity-feed { height:210px;border:1px solid rgba(122,170,244,.1);border-radius:12px;background:#0a1323; }
.activity-chart { display:flex;align-items:flex-end;gap:10px;padding:25px; }
.activity-chart span { flex:1;border-radius:5px 5px 2px 2px;background:linear-gradient(#12c4ff,#125fff);opacity:.78; }
.activity-feed { padding:20px;display:flex;flex-direction:column;gap:16px;justify-content:center; }
.activity-feed div { display:grid;grid-template-columns:8px 1fr auto;gap:8px;align-items:center;font-size:10px;color:#a9b5c8; }
.activity-feed i { width:7px;height:7px;border-radius:50%;background:#1687ff; }
.activity-feed small { color:#607087; }
.card-copy { max-width:690px;padding:28px 9px 5px; }
.card-copy h3,.feature-card h3,.solution-card h3 { font-family:"Space Grotesk";font-size:27px;margin:0 0 13px;letter-spacing:-.03em; }
.card-copy p,.feature-card > p,.solution-card p { color:var(--muted);line-height:1.65;margin:0; }
.icon-shell { width:44px;height:44px;border:1px solid rgba(72,152,255,.27);border-radius:13px;background:rgba(14,80,177,.11);display:grid;place-items:center;color:#46adff;font-size:22px;margin-bottom:50px; }
.flow-visual { display:flex;align-items:center;margin-top:55px; }
.flow-visual span { padding:10px 13px;border:1px solid rgba(105,160,240,.18);border-radius:9px;background:#091425;color:#b9c7da;font-size:11px; }
.flow-visual i { height:1px;flex:1;background:linear-gradient(90deg,#125fff,#20d7ff);position:relative; }
.flow-visual i::after { content:"";position:absolute;right:0;top:-3px;border-left:5px solid #20d7ff;border-top:3px solid transparent;border-bottom:3px solid transparent; }
.automation-visual { margin-top:38px; }
.automation-visual div { display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:10px;background:#091425;border:1px solid rgba(105,160,240,.12);font-size:11px;color:#b9c7da; }
.automation-visual span { width:7px;height:7px;background:#2dd6a0;border-radius:50%;box-shadow:0 0 10px rgba(45,214,160,.5); }
.automation-visual i { display:block;width:1px;height:15px;background:#1e65c0;margin-left:15px; }

.solutions { max-width:1280px; }
.solution-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:14px; }
.solution-card { padding:29px;min-height:440px;border:1px solid var(--line);border-radius:22px;background:linear-gradient(160deg,rgba(12,22,42,.8),rgba(5,10,21,.7));position:relative;transition:transform .25s ease,border-color .25s ease; }
.solution-card:hover { transform:translateY(-6px);border-color:rgba(71,150,255,.4); }
.solution-number { position:absolute;right:24px;top:23px;color:#52647e;font-size:10px;letter-spacing:.16em; }
.solution-icon { width:47px;height:47px;border-radius:14px;background:linear-gradient(140deg,rgba(26,133,255,.2),rgba(22,78,197,.05));border:1px solid rgba(57,143,255,.22);display:grid;place-items:center;color:#37a8ff;font-size:23px;margin:22px 0 47px; }
.solution-card h3 { font-size:24px; }
.solution-card p { font-size:14px;min-height:92px; }
.solution-card ul { list-style:none;padding:0;margin:24px 0 0;border-top:1px solid var(--line); }
.solution-card li { padding:11px 0;border-bottom:1px solid rgba(137,182,255,.09);font-size:12px;color:#8494aa; }
.solution-card li::before { content:"";display:inline-block;width:5px;height:5px;border-radius:50%;background:#1687ff;margin-right:9px;vertical-align:2px; }

.vision-section { min-height:760px;display:grid;place-items:center;position:relative;overflow:hidden;padding:130px 24px;border-top:1px solid rgba(137,182,255,.08);border-bottom:1px solid rgba(137,182,255,.08);background:#050914; }
.vision-section::before { content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(64,126,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(64,126,255,.04) 1px,transparent 1px);background-size:58px 58px;mask-image:radial-gradient(circle,black,transparent 70%); }
.vision-orb { position:absolute;width:630px;height:630px;border-radius:50%;background:radial-gradient(circle,rgba(22,125,255,.18) 0%,rgba(9,75,176,.08) 35%,transparent 68%);box-shadow:inset 0 0 80px rgba(32,215,255,.04); }
.vision-content { position:relative;max-width:930px;text-align:center;z-index:2; }
.vision-content blockquote { margin:22px 0 31px;font-family:"Space Grotesk";font-size:clamp(39px,5.4vw,68px);line-height:1.12;letter-spacing:-.045em; }
.vision-content > p:last-child { max-width:750px;margin:auto;color:#99a8bd;font-size:17px;line-height:1.8; }

.principle-section { display:grid;grid-template-columns:.9fr 1.1fr;gap:90px;align-items:start; }
.principle-title { position:sticky;top:130px; }
.principles article { padding:40px 0;border-top:1px solid var(--line);display:grid;grid-template-columns:50px 1fr;column-gap:20px; }
.principles span { color:#4a92f1;font-size:11px;letter-spacing:.16em;grid-row:1/3; }
.principles h3 { margin:0 0 10px;font-family:"Space Grotesk";font-size:24px; }
.principles p { margin:0;color:var(--muted);line-height:1.7; }

.cta-section { position:relative;overflow:hidden;padding:140px 24px 150px;border-top:1px solid var(--line); }
.cta-grid { position:absolute;inset:0;background-image:linear-gradient(rgba(69,132,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(69,132,255,.05) 1px,transparent 1px);background-size:54px 54px;mask-image:linear-gradient(to bottom,transparent,black 35%,black 80%,transparent); }
.cta-section::before { content:"";position:absolute;width:900px;height:650px;border-radius:50%;left:50%;top:45%;transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(17,113,255,.2),transparent 65%); }
.cta-content { position:relative;z-index:2;max-width:760px;margin:auto;text-align:center; }
.cta-content > img { width:92px;height:92px;border-radius:50%;margin:0 auto 25px;box-shadow:0 0 60px rgba(18,111,255,.34); }
.cta-content > p:not(.kicker) { color:var(--muted);font-size:17px;line-height:1.7;max-width:650px;margin:0 auto; }
.interest-form { margin:45px auto 18px;max-width:700px;display:grid;grid-template-columns:1fr 1fr;gap:13px;text-align:left; }
.interest-form label { display:block; }
.interest-form label span { display:block;font-size:11px;color:#91a0b5;margin:0 0 8px 3px; }
.interest-form input,.interest-form textarea { width:100%;border:1px solid rgba(125,170,240,.18);border-radius:12px;background:rgba(4,10,23,.75);color:white;padding:15px 16px;outline:none;transition:border .2s,box-shadow .2s; }
.interest-form input:focus,.interest-form textarea:focus { border-color:#267fff;box-shadow:0 0 0 3px rgba(38,127,255,.1); }
.full-field { grid-column:1/-1; }
.cta-content > small { color:#596a83;font-size:10px; }

.site-footer { max-width:var(--max);margin:auto;padding:50px 24px 42px;border-top:1px solid var(--line);display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center;color:#7e8da4;font-size:12px; }
.footer-brand { color:white; }
.site-footer > p { grid-column:1;margin:0; }
.site-footer > div { grid-column:2;grid-row:1/3;display:flex;gap:24px; }
.site-footer > small { grid-column:1/-1;margin-top:35px;padding-top:22px;border-top:1px solid rgba(137,182,255,.08); }

.reveal { opacity:0;transform:translateY(24px);transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1); }
.reveal.visible { opacity:1;transform:none; }

@media (max-width: 980px) {
  .solution-grid { grid-template-columns:repeat(2,1fr); }
  .principle-section { grid-template-columns:1fr;gap:45px; }
  .principle-title { position:static; }
  .hero-proof { max-width:650px; }
}
@media (max-width: 760px) {
  .site-header { height:70px;padding:0 20px; }
  .menu-button { display:block;z-index:2; }
  .site-nav { position:fixed;top:0;right:0;width:min(82vw,360px);height:100vh;padding:105px 35px;display:flex;flex-direction:column;align-items:flex-start;gap:26px;background:rgba(4,8,18,.97);border-left:1px solid var(--line);transform:translateX(105%);transition:transform .3s ease; }
  .site-nav.open { transform:none; }
  .site-nav a { font-size:18px; }
  .hero { min-height:900px;padding-top:115px; }
  .hero-bg { background-position:center;opacity:.45; }
  .hero h1 { font-size:clamp(50px,15vw,71px); }
  .hero-proof { grid-template-columns:1fr;gap:18px;text-align:left;max-width:300px; }
  .hero-proof div { padding-left:15px;border-left:1px solid rgba(64,146,255,.35); }
  .scroll-cue { display:none; }
  .section { padding:105px 20px; }
  .platform-grid { grid-template-columns:1fr; }
  .feature-card-large { grid-column:auto;min-height:auto; }
  .dashboard-preview { grid-template-columns:45px 1fr;min-height:360px; }
  .dashboard-main { padding:17px; }
  .dashboard-head strong { font-size:15px; }
  .metric-row { gap:7px; }
  .metric-row > div { padding:11px; }
  .metric-row strong { font-size:18px; }
  .activity-panel { grid-template-columns:1fr; }
  .activity-feed { display:none; }
  .activity-chart { height:145px; }
  .feature-card { min-height:330px;padding:27px; }
  .solution-grid { grid-template-columns:1fr; }
  .solution-card { min-height:auto; }
  .vision-section { min-height:690px; }
  .interest-form { grid-template-columns:1fr; }
  .full-field { grid-column:auto; }
  .site-footer { grid-template-columns:1fr; }
  .site-footer > div { grid-column:1;grid-row:auto;flex-wrap:wrap; }
}
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior:auto; }
  *,*::before,*::after { animation:none!important;transition:none!important; }
  .reveal { opacity:1;transform:none; }
}


/* Commit connection patch */
.nav-product {
  color: #75bcff !important;
  font-weight: 700;
}
.nav-signin {
  color: #eef6ff !important;
  font-weight: 700;
}
.commit-section {
  max-width: 1280px;
}
.commit-panel {
  display: grid;
  grid-template-columns: .88fr 1.12fr;
  gap: 60px;
  align-items: center;
  padding: 54px;
  border: 1px solid rgba(72, 152, 255, .22);
  border-radius: 30px;
  background:
    radial-gradient(circle at 90% 10%, rgba(20, 120, 255, .18), transparent 34%),
    linear-gradient(145deg, rgba(11, 24, 46, .96), rgba(5, 11, 24, .94));
  box-shadow: 0 35px 100px rgba(0, 0, 0, .35);
}
.commit-copy h2 {
  margin: 14px 0 18px;
  font-family: "Space Grotesk";
  font-size: clamp(42px, 5vw, 66px);
  line-height: 1;
  letter-spacing: -.05em;
}
.commit-copy > p:not(.kicker) {
  color: var(--muted);
  font-size: 16px;
  line-height: 1.75;
}
.commit-points {
  margin: 30px 0;
  display: grid;
  gap: 12px;
}
.commit-points div {
  display: grid;
  grid-template-columns: 38px 1fr;
  align-items: start;
  gap: 12px;
  padding: 14px;
  border: 1px solid rgba(117, 171, 247, .12);
  border-radius: 12px;
  background: rgba(4, 12, 26, .55);
}
.commit-points span {
  width: 31px;
  height: 31px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  color: #66b9ff;
  background: rgba(18, 111, 255, .12);
  font-size: 10px;
  font-weight: 800;
}
.commit-points p {
  margin: 0;
  color: #8294ab;
  font-size: 12px;
  line-height: 1.6;
}
.commit-points strong {
  color: #e8f3ff;
}
.commit-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 26px;
}
.commit-copy > small {
  display: block;
  margin-top: 16px;
  color: #5f7188;
  font-size: 9px;
  line-height: 1.6;
}
.commit-preview {
  overflow: hidden;
  border: 1px solid rgba(108, 161, 233, .16);
  border-radius: 20px;
  background: #050b16;
  box-shadow: 0 28px 80px rgba(0,0,0,.32);
  transform: perspective(1100px) rotateY(-3deg);
}
.commit-preview-top {
  height: 56px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(137,182,255,.12);
}
.commit-preview-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}
.commit-preview-brand > span {
  width: 31px;
  height: 31px;
  display: grid;
  place-items: center;
  border-radius: 9px;
  background: linear-gradient(135deg, #1767ff, #18a9ff);
  font-weight: 800;
}
.commit-preview-brand strong {
  font-size: 9px;
  letter-spacing: .16em;
}
.commit-preview-brand small {
  display: block;
  margin-top: 2px;
  color: #4da9ff;
  font-size: 6px;
  letter-spacing: .22em;
}
.commit-preview-top i {
  color: #63d2ae;
  font-size: 7px;
  font-style: normal;
}
.commit-preview-body {
  min-height: 430px;
  display: grid;
  grid-template-columns: 145px 1fr;
}
.commit-preview-body aside {
  padding: 24px 14px;
  border-right: 1px solid rgba(137,182,255,.1);
}
.commit-preview-body aside b,
.commit-preview-body aside span {
  display: block;
}
.commit-preview-body aside b {
  margin-bottom: 28px;
  font-size: 9px;
}
.commit-preview-body aside span {
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 8px;
  color: #63768d;
  font-size: 7px;
}
.commit-preview-body aside span.active {
  color: white;
  border: 1px solid rgba(23,103,255,.22);
  background: rgba(23,103,255,.12);
}
.commit-preview-body > div {
  padding: 42px 32px;
}
.commit-preview-body > div > p {
  color: #4caaff;
  font-size: 7px;
  font-weight: 800;
  letter-spacing: .14em;
}
.commit-preview-body h3 {
  margin: 10px 0 6px;
  font-family: "Space Grotesk";
  font-size: 36px;
  letter-spacing: -.045em;
}
.commit-preview-body > div > small {
  color: #71849b;
  font-size: 8px;
}
.commit-form {
  margin-top: 26px;
  padding: 17px;
  border: 1px solid rgba(137,182,255,.12);
  border-radius: 13px;
  background: #081321;
}
.commit-form label {
  display: block;
  margin-bottom: 11px;
  color: #78a7d7;
  font-size: 7px;
}
.commit-form strong {
  display: block;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid rgba(137,182,255,.12);
  border-radius: 7px;
  color: #dcecff;
  font-size: 8px;
}
.commit-form button {
  width: 100%;
  min-height: 38px;
  border: 0;
  border-radius: 8px;
  color: white;
  background: linear-gradient(110deg, #1767ff, #14a2ff);
  font-size: 9px;
  font-weight: 800;
}

@media (max-width: 980px) {
  .commit-panel {
    grid-template-columns: 1fr;
  }
  .commit-preview {
    transform: none;
  }
}
@media (max-width: 760px) {
  .commit-panel {
    padding: 28px;
    border-radius: 22px;
  }
  .commit-actions {
    flex-direction: column;
  }
  .commit-actions .button {
    width: 100%;
  }
  .commit-preview-body {
    grid-template-columns: 78px 1fr;
  }
  .commit-preview-body aside {
    padding: 18px 7px;
  }
  .commit-preview-body aside b {
    font-size: 0;
  }
  .commit-preview-body aside span {
    padding: 8px 4px;
    text-align: center;
    font-size: 0;
  }
  .commit-preview-body aside span::first-letter {
    font-size: 8px;
  }
  .commit-preview-body > div {
    padding: 30px 17px;
  }
  .commit-preview-body h3 {
    font-size: 29px;
  }
}


.platform-page,.manifesto-page{max-width:1280px;margin:auto;padding:0 24px}.platform-hero{min-height:520px;padding:160px 0 75px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.platform-hero h1,.manifesto-hero h1{font-family:"Space Grotesk";font-size:clamp(52px,7vw,88px);line-height:.98;letter-spacing:-.06em;margin:17px 0 25px}.platform-hero h1 em,.manifesto-hero h1 em{font-style:normal;background:linear-gradient(100deg,#fff,#37cfff 55%,#2578ff);-webkit-background-clip:text;color:transparent}.platform-hero>p:not(.kicker){max-width:760px;color:#a8b4c8;font-size:18px;line-height:1.75}.product-page-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:17px;padding:30px 0 110px}.product-card{position:relative;min-height:440px;padding:36px;border:1px solid rgba(137,182,255,.16);border-radius:24px;background:linear-gradient(150deg,rgba(12,24,47,.92),rgba(5,10,22,.86));display:flex;flex-direction:column;overflow:hidden}.product-card:before,.lab-card:before{content:"";position:absolute;width:270px;height:270px;right:-90px;top:-90px;border-radius:50%;background:rgba(20,126,255,.13);filter:blur(55px)}.product-card.violet:before,.lab-card.violet:before{background:rgba(125,82,255,.13)}.product-card.green:before,.lab-card.green:before{background:rgba(25,211,153,.13)}.product-card.amber:before,.lab-card.amber:before{background:rgba(255,173,43,.13)}.product-status{width:max-content;padding:7px 10px;border:1px solid rgba(84,166,255,.25);border-radius:999px;color:#69b7ff;font-size:10px;text-transform:uppercase;letter-spacing:.15em}.product-number{position:absolute;right:30px;top:30px;color:#344a68;font-family:"Space Grotesk";font-size:12px}.product-card h2,.lab-card h2{font-family:"Space Grotesk";font-size:48px;margin:65px 0 10px}.product-card h3,.lab-card h3{font-family:"Space Grotesk";font-size:22px;margin:0 0 15px}.product-card p,.lab-card p{color:#91a0b6;line-height:1.75}.product-card small{display:block;margin:15px 0;color:#6f829d;line-height:1.6}.product-card small strong{color:#a9bad0}.product-actions{margin-top:auto;padding-top:25px}.platform-principle{margin-bottom:120px;display:grid;grid-template-columns:.8fr 1.2fr;gap:80px;align-items:start}.platform-principle h2{font-family:"Space Grotesk";font-size:47px;margin:12px 0}.platform-principle ol{list-style:none;padding:0;margin:0}.platform-principle li{display:grid;grid-template-columns:145px 1fr;gap:25px;padding:24px 0;border-top:1px solid rgba(137,182,255,.13)}.platform-principle li strong{font-family:"Space Grotesk";font-size:19px}.platform-principle li span{color:#899ab1;line-height:1.65}.pricing-page-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:25px 0 100px}.pricing-card{position:relative;padding:35px;border:1px solid rgba(137,182,255,.15);border-radius:24px;background:linear-gradient(150deg,rgba(12,24,47,.86),rgba(5,10,22,.8));display:flex;flex-direction:column;min-height:600px}.pricing-card.featured{border-color:rgba(38,142,255,.55);box-shadow:0 35px 90px rgba(0,83,190,.16);transform:translateY(-12px)}.pricing-ribbon{position:absolute;top:0;right:25px;padding:8px 12px;border-radius:0 0 10px 10px;background:#157fff;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.13em}.pricing-card>span{color:#64aeff;font-size:12px;text-transform:uppercase;letter-spacing:.16em;font-weight:800}.pricing-card h2{font-family:"Space Grotesk";font-size:49px;margin:30px 0 13px}.pricing-card h2 small{font-size:13px;color:#778aa4;letter-spacing:0}.pricing-card>p{color:#91a0b6;line-height:1.7;min-height:75px}.pricing-card ul{list-style:none;padding:24px 0;margin:0 0 28px;border-top:1px solid rgba(137,182,255,.12)}.pricing-card li{padding:10px 0;color:#9eacc0;font-size:13px}.pricing-card li:before{content:"✓";color:#35d7a3;margin-right:9px}.pricing-card .button{margin-top:auto}.roi-calculator-section{display:grid;grid-template-columns:.8fr 1.2fr;gap:70px;padding:90px 0 120px;border-top:1px solid rgba(137,182,255,.12)}.roi-calculator-copy h2,.pricing-foundation h2,.problem-form-section h2{font-family:"Space Grotesk";font-size:48px;margin:12px 0 18px;letter-spacing:-.045em}.roi-calculator-copy>p:not(.kicker),.problem-form-section>div>p:not(.kicker){color:#91a0b6;line-height:1.8}.roi-calculator{display:grid;grid-template-columns:1fr 1fr;gap:13px;padding:28px;border:1px solid rgba(137,182,255,.16);border-radius:22px;background:#081321}.roi-calculator label,.research-form label,.waitlist-modal-card label{font-size:11px;color:#91a4bd}.roi-calculator input,.research-form input,.research-form textarea,.waitlist-modal-card input,.waitlist-modal-card textarea{width:100%;margin-top:8px;border:1px solid rgba(137,182,255,.17);border-radius:10px;background:#050b16;color:white;padding:13px;outline:none}.roi-results{grid-column:1/-1;margin-top:12px;padding:22px;border-radius:15px;background:linear-gradient(140deg,rgba(18,111,255,.13),rgba(5,11,22,.5))}.roi-results>div{display:flex;justify-content:space-between;gap:20px;padding:12px 0;border-bottom:1px solid rgba(137,182,255,.1)}.roi-results span{color:#8497b1}.roi-results strong{font-family:"Space Grotesk";font-size:22px}.roi-results p{font-size:10px;color:#647690;line-height:1.6}.pricing-foundation{padding:0 0 120px}.pricing-foundation>div{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:35px}.pricing-foundation article{padding:25px;border:1px solid rgba(137,182,255,.14);border-radius:17px;background:#081321}.pricing-foundation article strong{font-family:"Space Grotesk";font-size:18px}.pricing-foundation article p{color:#8192aa;line-height:1.65}.labs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:20px 0 110px}.lab-card{position:relative;padding:32px;min-height:400px;border:1px solid rgba(137,182,255,.15);border-radius:22px;background:linear-gradient(150deg,rgba(12,24,47,.86),rgba(5,10,22,.8));display:flex;flex-direction:column;overflow:hidden}.lab-card>span{width:max-content;padding:6px 9px;border-radius:999px;border:1px solid rgba(137,182,255,.2);color:#8498b5;font-size:9px;text-transform:uppercase;letter-spacing:.15em}.lab-card h2{font-size:40px;margin-top:55px}.lab-card .button{margin-top:auto}.problem-form-section{display:grid;grid-template-columns:.75fr 1.25fr;gap:70px;padding:90px 0 120px;border-top:1px solid rgba(137,182,255,.12)}.research-form,.waitlist-modal-card{display:grid;grid-template-columns:1fr 1fr;gap:13px}.full-field{grid-column:1/-1}.form-message{min-height:18px;color:#5fc8ff}.modal-shell{position:fixed;inset:0;z-index:100}.modal-backdrop{position:absolute;inset:0;background:rgba(1,4,10,.78);backdrop-filter:blur(8px)}.waitlist-modal-card{position:relative;z-index:2;width:min(720px,calc(100% - 30px));max-height:90vh;overflow:auto;margin:5vh auto;padding:32px;border:1px solid rgba(137,182,255,.25);border-radius:22px;background:#081321;box-shadow:0 40px 120px rgba(0,0,0,.55)}.waitlist-modal-card h2{font-family:"Space Grotesk";font-size:35px;margin:10px 0}.waitlist-modal-card>p{grid-column:1/-1;color:#8799b1}.modal-close{position:absolute;right:18px;top:14px;border:0;background:transparent;color:#8da0b8;font-size:28px;cursor:pointer}.manifesto-page{padding-top:80px}.manifesto-hero{min-height:650px;display:flex;flex-direction:column;justify-content:center;text-align:center}.manifesto-copy{max-width:900px;margin:auto;padding:0 0 120px}.manifesto-copy .lead{font-size:25px;line-height:1.65;color:#cad4e3}.manifesto-copy>p{color:#95a6bc;line-height:1.8;font-size:17px}.manifesto-copy blockquote{margin:90px 0;padding:45px;border-left:3px solid #1687ff;background:linear-gradient(90deg,rgba(22,135,255,.1),transparent);font-family:"Space Grotesk";font-size:36px;line-height:1.35}.manifesto-rules article{display:grid;grid-template-columns:60px 1fr;gap:20px;padding:36px 0;border-top:1px solid rgba(137,182,255,.14)}.manifesto-rules span{color:#438fe8;font-size:11px;letter-spacing:.16em}.manifesto-rules h2{font-family:"Space Grotesk";font-size:28px;margin:0}.vordali-promise{margin-top:90px;padding:45px;border:1px solid rgba(63,153,255,.27);border-radius:24px;background:radial-gradient(circle at 85% 15%,rgba(22,120,255,.15),transparent 38%),#081321}.vordali-promise h2{font-family:"Space Grotesk";font-size:42px;line-height:1.2}.platform-footer{max-width:1280px}.problem-strip{padding:85px 24px;border-bottom:1px solid rgba(137,182,255,.08);background:linear-gradient(180deg,#050816,#07101d)}.problem-strip-inner{max-width:1050px;margin:auto;text-align:center}.problem-strip h2{font-family:"Space Grotesk";font-size:clamp(40px,5vw,64px);margin:12px 0;letter-spacing:-.05em}.problem-strip p:not(.kicker){max-width:750px;margin:0 auto 25px;color:#94a4ba;line-height:1.75}.problem-strip-inner>div{display:flex;justify-content:center;gap:12px}.roi-home-section{max-width:1180px}.roi-mini{display:grid;grid-template-columns:1.1fr .9fr;gap:18px;margin-top:40px;padding:24px;border:1px solid rgba(137,182,255,.15);border-radius:22px;background:#081321}.roi-mini>div{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.roi-mini label{font-size:10px;color:#879ab3}.roi-mini input{width:100%;margin-top:8px;padding:14px;border:1px solid rgba(137,182,255,.16);border-radius:10px;background:#050b16;color:white}.roi-mini article{padding:20px;border-radius:15px;background:linear-gradient(140deg,rgba(18,111,255,.13),rgba(5,11,22,.5))}.roi-mini article span{font-size:11px;color:#83a5cb}.roi-mini article strong{display:block;margin:12px 0;font-family:"Space Grotesk";font-size:39px}.roi-mini article p{color:#657891;font-size:9px;line-height:1.6}.roi-mini article a{color:#5db1ff;font-size:11px}.product-future-section{max-width:1180px}.future-product-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:35px}.future-product-card{padding:25px;min-height:240px;border:1px solid rgba(137,182,255,.14);border-radius:17px;background:#081321;display:flex;flex-direction:column}.future-product-card>span{color:#778da8;font-size:9px;text-transform:uppercase;letter-spacing:.15em}.future-product-card.live>span{color:#31d6a1}.future-product-card h3{font-family:"Space Grotesk";font-size:25px;margin:35px 0 10px}.future-product-card p{color:#8092aa;line-height:1.6;font-size:12px}.future-product-card a{margin-top:auto;color:#5caeff;font-size:11px}@media(max-width:900px){.product-page-grid,.pricing-page-grid{grid-template-columns:1fr}.pricing-card.featured{transform:none}.labs-grid{grid-template-columns:1fr}.platform-principle,.roi-calculator-section,.problem-form-section{grid-template-columns:1fr}.pricing-foundation>div{grid-template-columns:1fr}.future-product-grid{grid-template-columns:1fr 1fr}.roi-mini{grid-template-columns:1fr}.roi-mini>div{grid-template-columns:1fr}.platform-hero{padding-top:130px}}@media(max-width:600px){.platform-page,.manifesto-page{padding:0 18px}.platform-hero h1,.manifesto-hero h1{font-size:50px}.product-page-grid{padding-bottom:80px}.product-card{padding:27px}.product-card h2{font-size:40px}.pricing-card{min-height:auto}.roi-calculator,.research-form,.waitlist-modal-card{grid-template-columns:1fr}.full-field,.waitlist-modal-card>p{grid-column:1}.future-product-grid{grid-template-columns:1fr}.problem-strip-inner>div{flex-direction:column}.manifesto-copy blockquote{font-size:27px;padding:30px}.vordali-promise{padding:30px}.vordali-promise h2{font-size:32px}}


:root{--bg:#040711;--panel:#0a1324;--line:rgba(137,182,255,.16);--text:#f4f7ff;--muted:#98a6bc;--blue:#1388ff;--cyan:#20d7ff;--max:1180px}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;color:var(--text);background:radial-gradient(circle at 50% -10%,rgba(14,85,191,.2),transparent 32%),var(--bg);font-family:Inter,system-ui,sans-serif}a{color:inherit;text-decoration:none}.page-noise{position:fixed;inset:0;pointer-events:none;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}.trust-header{height:82px;border-bottom:1px solid var(--line);background:rgba(4,7,17,.82);backdrop-filter:blur(18px);display:flex;align-items:center;justify-content:space-between;padding:0 max(24px,calc((100vw - var(--max))/2));position:sticky;top:0;z-index:20}.brand{display:inline-flex;align-items:center;gap:10px;font-family:"Space Grotesk";font-weight:700;letter-spacing:.19em;font-size:15px}.brand img{width:36px;height:36px;object-fit:cover;border-radius:50%;box-shadow:0 0 28px rgba(19,136,255,.25)}.trust-header nav{display:flex;align-items:center;gap:28px;color:#c2ccdc;font-size:14px}.header-button{padding:10px 16px;border:1px solid rgba(107,168,255,.34);border-radius:999px;background:rgba(22,97,204,.09)}.kicker{text-transform:uppercase;letter-spacing:.18em;color:#5ca9ff;font-size:12px;font-weight:800}.trust-main,.policy-shell{max-width:var(--max);margin:auto;padding:0 24px}.trust-hero{min-height:570px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;position:relative;overflow:hidden}.trust-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(65,126,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(65,126,255,.045) 1px,transparent 1px);background-size:62px 62px;mask-image:radial-gradient(circle,black,transparent 72%)}.trust-orb{position:absolute;width:630px;height:630px;border-radius:50%;background:radial-gradient(circle,rgba(22,125,255,.16),transparent 67%)}.trust-hero>*{position:relative}.trust-hero h1,.policy-hero h1{font-family:"Space Grotesk";font-size:clamp(48px,7vw,84px);line-height:1;letter-spacing:-.055em;margin:18px 0 24px}.trust-hero h1 em{font-style:normal;background:linear-gradient(100deg,#fff 10%,#32c5ff 50%,#1c75ff 90%);-webkit-background-clip:text;color:transparent}.trust-hero>p:not(.kicker){max-width:720px;color:#abb8cd;font-size:18px;line-height:1.75}.trust-badges{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:26px}.trust-badges span{border:1px solid var(--line);background:rgba(8,18,35,.7);padding:10px 14px;border-radius:999px;color:#93a8c4;font-size:12px}.trust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:40px 0 120px}.trust-card{min-height:285px;padding:30px;border:1px solid var(--line);border-radius:22px;background:linear-gradient(150deg,rgba(13,25,48,.82),rgba(5,11,24,.76));display:flex;flex-direction:column;transition:.25s}.trust-card:hover{transform:translateY(-5px);border-color:rgba(71,150,255,.45)}.trust-card>span{color:#4d91ea;font-size:11px;letter-spacing:.16em}.trust-card h2{font-family:"Space Grotesk";font-size:27px;margin:48px 0 12px}.trust-card p{color:var(--muted);line-height:1.7;margin:0}.trust-card b{margin-top:auto;color:#59aaff;font-size:13px}.trust-note{margin-bottom:120px;border:1px solid var(--line);border-radius:24px;padding:42px;display:grid;grid-template-columns:1fr 1fr;gap:50px;background:rgba(8,18,35,.65)}.trust-note h2{font-family:"Space Grotesk";font-size:38px;margin:12px 0}.trust-note>p{color:var(--muted);line-height:1.8}.policy-hero{padding:110px 0 70px;border-bottom:1px solid var(--line)}.policy-hero h1{font-size:clamp(48px,6vw,72px)}.policy-hero>p:not(.kicker){max-width:720px;color:#abb8cd;font-size:18px;line-height:1.7}.policy-hero span{display:inline-block;margin-top:15px;color:#647790;font-size:12px}.policy-layout{display:grid;grid-template-columns:240px minmax(0,760px);gap:90px;padding:70px 0 130px}.policy-layout aside{position:sticky;top:120px;align-self:start;display:flex;flex-direction:column;gap:8px}.policy-layout aside p{text-transform:uppercase;letter-spacing:.15em;font-size:10px;color:#58708f}.policy-layout aside a{padding:8px 0;color:#8090a6;font-size:13px}.policy-layout aside a:hover{color:#5ca9ff}.policy-content section{padding:0 0 36px;margin:0 0 36px;border-bottom:1px solid rgba(137,182,255,.11);scroll-margin-top:115px}.policy-content h2{font-family:"Space Grotesk";font-size:27px;margin:0 0 16px}.policy-content p{color:#a4b1c4;line-height:1.85;margin:0}.trust-footer{border-top:1px solid var(--line);max-width:var(--max);margin:auto;padding:50px 24px 42px;display:grid;grid-template-columns:1fr 1.4fr;gap:24px;color:#7e8da4;font-size:12px}.footer-brand p{margin:12px 0}.footer-links{display:flex;justify-content:flex-end;align-items:center;gap:18px;flex-wrap:wrap}.trust-footer small{grid-column:1/-1;border-top:1px solid rgba(137,182,255,.1);padding-top:22px}@media(max-width:850px){.trust-header nav>a:not(.header-button){display:none}.trust-grid{grid-template-columns:1fr}.trust-note{grid-template-columns:1fr}.policy-layout{grid-template-columns:1fr;gap:35px}.policy-layout aside{position:static;border-bottom:1px solid var(--line);padding-bottom:25px}.trust-footer{grid-template-columns:1fr}.footer-links{justify-content:flex-start}.trust-hero{min-height:520px}.trust-hero h1{font-size:50px}}


button{font:inherit}.site-header{z-index:60}.mobile-nav-open{overflow:hidden}
.form-success{color:#42dba6}.form-error{color:#ff748c}
.policy-content a{color:#5ca9ff}
.home-main .section{scroll-margin-top:90px}

/* Phase 1: resilient status pages */
.status-page {
  min-height: calc(100vh - 150px);
  max-width: 900px;
  margin: 0 auto;
  padding: 180px 24px 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.status-page-standalone { min-height: 100vh; }
.status-page h1 {
  margin: 14px 0 18px;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(44px, 8vw, 82px);
  line-height: 1;
  letter-spacing: -.05em;
}
.status-page > p:not(.kicker) {
  max-width: 650px;
  margin: 0;
  color: var(--muted);
  font-size: 17px;
  line-height: 1.7;
}
.status-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
.honeypot {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  white-space: nowrap !important;
}

/* Phase 2: merchant enrollment and gated dashboard */
.merchant-auth-page{max-width:1100px;min-height:calc(100vh - 90px);margin:auto;padding:155px 24px 100px;display:grid;grid-template-columns:1fr 470px;gap:80px;align-items:center}.merchant-auth-copy h1,.merchant-flow-page h1{font-family:"Space Grotesk";font-size:clamp(45px,6vw,72px);line-height:1.02;letter-spacing:-.055em;margin:15px 0 22px}.merchant-auth-copy>p:not(.kicker),.merchant-flow-page header>p:not(.kicker){color:#9aaac0;font-size:17px;line-height:1.75;max-width:650px}.merchant-auth-copy ol{display:flex;flex-wrap:wrap;gap:8px;list-style:none;padding:25px 0 0}.merchant-auth-copy li{padding:8px 12px;border:1px solid var(--line);border-radius:999px;color:#71849e;font-size:11px}.merchant-auth-copy li.active{color:#61b6ff;border-color:rgba(59,151,255,.45)}.merchant-form{padding:30px;border:1px solid var(--line);border-radius:24px;background:linear-gradient(150deg,rgba(13,25,48,.93),rgba(5,11,24,.9));display:grid;gap:17px;box-shadow:0 30px 90px rgba(0,0,0,.25)}.merchant-form label{display:grid;gap:8px;color:#9cabc0;font-size:12px}.merchant-form input,.merchant-form select{width:100%;padding:14px 15px;border:1px solid rgba(137,182,255,.18);border-radius:11px;background:#050b16;color:white;outline:none}.merchant-form input:focus,.merchant-form select:focus{border-color:#278fff}.merchant-form button{width:100%;justify-content:center}.selected-plan{display:grid;grid-template-columns:1fr auto;gap:4px;padding:15px;border:1px solid rgba(45,154,255,.3);border-radius:13px;background:rgba(17,116,255,.08)}.selected-plan span{font-size:10px;color:#7e91aa;text-transform:uppercase;letter-spacing:.12em}.selected-plan strong{grid-column:1;color:#fff}.selected-plan a{grid-row:1/3;grid-column:2;align-self:center;color:#5cb2ff;font-size:11px}.form-footnote,.form-links{color:#8090a8;font-size:12px;text-align:center}.form-links{display:flex;justify-content:space-between}.form-footnote a,.form-links a{color:#5cb2ff}.merchant-flow-page{max-width:1100px;min-height:calc(100vh - 90px);margin:auto;padding:145px 24px 100px}.merchant-flow-page.narrow{max-width:850px}.merchant-flow-page>header{text-align:center;margin-bottom:45px}.merchant-flow-page>header p{margin-left:auto;margin-right:auto}.merchant-plan-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.merchant-plan-grid article{position:relative;padding:32px;border:1px solid var(--line);border-radius:23px;background:#081321;display:flex;flex-direction:column;min-height:470px}.merchant-plan-grid article.featured{border-color:rgba(55,156,255,.48);background:radial-gradient(circle at 85% 10%,rgba(24,128,255,.18),transparent 40%),#081321}.merchant-plan-grid article>span{color:#69b7ff;text-transform:uppercase;letter-spacing:.13em;font-size:11px}.merchant-plan-grid h2{font-family:"Space Grotesk";font-size:45px;margin:24px 0 8px}.merchant-plan-grid h2 small{font-size:13px;color:#8191a8}.merchant-plan-grid p,.merchant-plan-grid li{color:#94a4ba;line-height:1.7}.merchant-plan-grid ul{padding-left:18px;margin-bottom:28px}.merchant-plan-grid button{margin-top:auto}.checkout-foundation{padding:34px;border:1px solid var(--line);border-radius:24px;background:#081321;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.checkout-foundation>div{padding:17px;border-radius:13px;background:#050b16}.checkout-foundation span,.checkout-foundation small{display:block;color:#7d8fa8;font-size:10px;text-transform:uppercase;letter-spacing:.1em}.checkout-foundation strong{display:block;margin-top:8px;text-transform:capitalize}.checkout-foundation hr,.checkout-foundation h2,.checkout-foundation>p,.checkout-foundation>.button{grid-column:1/-1}.checkout-foundation hr{width:100%;border:0;border-top:1px solid var(--line)}.checkout-foundation h2{font-family:"Space Grotesk";font-size:30px;margin:10px 0 0}.checkout-foundation>p{color:#95a5bb;line-height:1.7}.checkout-foundation button:disabled{opacity:.55;cursor:not-allowed}.merchant-dashboard{min-height:100vh;display:grid;grid-template-columns:230px 1fr;background:#050914}.merchant-dashboard>aside{position:sticky;top:0;height:100vh;padding:28px 20px;border-right:1px solid var(--line);display:flex;flex-direction:column;background:#07101d}.dashboard-brand{font-family:"Space Grotesk";letter-spacing:.16em;font-weight:800}.dashboard-brand small{display:block;margin-top:5px;color:#4faaff;font-size:8px}.merchant-dashboard nav{display:grid;gap:5px;margin-top:55px}.merchant-dashboard nav a,.merchant-dashboard nav span{padding:12px;border-radius:9px;color:#8293aa;font-size:13px}.merchant-dashboard nav .active{background:rgba(20,127,255,.12);color:#69b7ff}.merchant-dashboard aside form{margin-top:auto}.merchant-dashboard aside button{border:0;background:none;color:#8090a7;cursor:pointer}.merchant-dashboard>section{padding:45px;max-width:1400px}.merchant-dashboard>section>header{display:flex;justify-content:space-between;align-items:center}.merchant-dashboard h1{font-family:"Space Grotesk";font-size:42px;margin:8px 0}.dashboard-status{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:38px 0}.dashboard-status article{padding:23px;border:1px solid var(--line);border-radius:18px;background:#081321}.dashboard-status span,.dashboard-status small{display:block;color:#7e90a8;font-size:11px}.dashboard-status strong{display:block;margin:20px 0 8px;font-family:"Space Grotesk";font-size:26px;text-transform:capitalize}.dashboard-welcome{padding:38px;border:1px solid rgba(52,151,255,.3);border-radius:22px;background:radial-gradient(circle at 90% 10%,rgba(20,126,255,.15),transparent 45%),#081321}.dashboard-welcome h2{font-family:"Space Grotesk";font-size:36px;margin:12px 0}.dashboard-welcome>p:not(.kicker){color:#94a5bb;line-height:1.7}@media(max-width:900px){.merchant-auth-page{grid-template-columns:1fr;gap:35px;padding-top:125px}.merchant-plan-grid{grid-template-columns:1fr}.merchant-dashboard{grid-template-columns:1fr}.merchant-dashboard>aside{height:auto;position:static;flex-direction:row;align-items:center;gap:20px}.merchant-dashboard nav{display:none}.merchant-dashboard aside form{margin:0 0 0 auto}.merchant-dashboard>section{padding:28px 18px}.dashboard-status{grid-template-columns:1fr 1fr}}@media(max-width:600px){.merchant-form{padding:22px}.checkout-foundation{grid-template-columns:1fr}.checkout-foundation>*{grid-column:1!important}.merchant-dashboard>section>header{align-items:flex-start;gap:15px;flex-direction:column}.dashboard-status{grid-template-columns:1fr}}

/* Sprint 3: Stripe subscription billing */
.checkout-error{grid-column:1/-1;margin:0}.subscription-result-card,.billing-card{padding:36px;border:1px solid var(--line);border-radius:24px;background:radial-gradient(circle at 90% 0,rgba(28,133,255,.13),transparent 42%),#081321}.subscription-result-card{text-align:center}.subscription-result-card h2,.billing-card h2{font-family:"Space Grotesk";font-size:34px;margin:18px 0 10px}.subscription-result-card>p,.billing-card>p{color:#94a5bb;line-height:1.75}.result-icon{width:62px;height:62px;margin:0 auto;display:grid;place-items:center;border:1px solid rgba(77,166,255,.35);border-radius:50%;color:#62b8ff;font-size:25px;background:rgba(20,126,255,.08)}.result-icon.ready{color:#59dfac;border-color:rgba(65,220,165,.35);background:rgba(65,220,165,.08)}.subscription-status-line{max-width:380px;margin:28px auto;padding:15px;display:flex;justify-content:space-between;border:1px solid var(--line);border-radius:12px;background:#050b16}.subscription-status-line span{color:#7f91a9}.subscription-status-line strong{text-transform:capitalize}.subscription-result-card>.button{margin-top:10px}.billing-card{max-width:760px;margin-top:35px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.billing-card>div{padding:18px;border:1px solid var(--line);border-radius:13px;background:#050b16}.billing-card span{display:block;color:#7e90a8;font-size:10px;text-transform:uppercase;letter-spacing:.1em}.billing-card strong{display:block;margin-top:8px;text-transform:capitalize}.billing-card>p,.billing-card>.button,.billing-card>button,.billing-card>.form-error{grid-column:1/-1}.billing-card>.button{justify-self:start}@media(max-width:650px){.billing-card{grid-template-columns:1fr}.billing-card>*{grid-column:1!important}}

.merchant-form-wide{max-width:980px;margin:0 auto}.form-section{padding:1.4rem 0;border-bottom:1px solid rgba(148,163,184,.18)}.form-section:last-of-type{border-bottom:0}.form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}.dashboard-actions{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1.4rem}@media(max-width:760px){.form-grid{grid-template-columns:1fr}.merchant-dashboard{display:block}.merchant-dashboard aside{position:relative;min-height:auto}.merchant-dashboard>section{padding:1.25rem}}

.nav-signout-form {
  display: contents;
}

.nav-signout-form button {
  font: inherit;
  cursor: pointer;
}

/* Phase 6 — Adaptive merchant experience and restored Vordali identity */
.hero-bg {
  background-image: linear-gradient(to bottom, rgba(2,7,20,.05), rgba(3,8,20,.76) 76%, #050914 100%), url("/assets/vordali-hero-original.webp");
  background-position: center bottom;
  opacity: .62;
}
.brand-orb { position:relative;display:grid;place-items:center;border-radius:50%;isolation:isolate; }
.brand-orb::before,.brand-orb::after { content:"";position:absolute;border-radius:50%;pointer-events:none; }
.brand-orb::before { inset:-7%;border:2px solid rgba(31,151,255,.55);box-shadow:0 0 18px rgba(20,125,255,.72),0 0 55px rgba(0,199,255,.28),inset 0 0 16px rgba(24,157,255,.28);animation:vordali-ring-pulse 3.4s ease-in-out infinite; }
.brand-orb::after { inset:-10%;background:conic-gradient(from 0deg,transparent 0 76%,rgba(79,218,255,.9) 82%,transparent 88%);filter:blur(3px);opacity:.55;animation:vordali-ring-sweep 7s linear infinite;z-index:-1; }
.brand-orb img { width:100%;height:100%;object-fit:cover;border-radius:50%;filter:drop-shadow(0 0 24px rgba(19,129,255,.35)); }
.hero-brand-orb { width:150px;height:150px;margin:0 auto 24px;box-shadow:0 0 70px rgba(14,105,255,.24); }
.brand-orb-small { width:105px;height:105px;margin:0 auto 28px; }
@keyframes vordali-ring-pulse { 0%,100%{transform:scale(.98);opacity:.65}50%{transform:scale(1.035);opacity:1;box-shadow:0 0 26px rgba(20,125,255,.9),0 0 75px rgba(0,199,255,.38),inset 0 0 20px rgba(24,157,255,.4)} }
@keyframes vordali-ring-sweep { to{transform:rotate(360deg)} }

.auth-callback-page { min-height:100vh;display:grid;place-content:center;text-align:center;padding:40px;background:radial-gradient(circle at 50% 35%,rgba(13,105,255,.15),transparent 32%),#050914; }
.auth-callback-page h1 { font-family:"Space Grotesk";font-size:clamp(48px,8vw,78px);margin:10px 0; }
.auth-callback-page p:not(.kicker) { color:#9cadc3;max-width:560px;line-height:1.7;margin:0 auto 28px; }

.adaptive-profile-section { border:1px solid rgba(45,144,255,.25);border-radius:18px;padding:25px!important;margin:18px 0;background:radial-gradient(circle at 90% 10%,rgba(20,126,255,.12),transparent 42%),rgba(7,17,32,.55); }
.adaptive-profile-section h2 { font-family:"Space Grotesk";font-size:28px;margin:8px 0; }
.adaptive-profile-section>p:not(.kicker) { color:#91a3bb;line-height:1.65; }
.input-prefix,.input-suffix { display:flex!important;align-items:center;border:1px solid rgba(125,170,240,.18);border-radius:10px;background:rgba(4,10,23,.72);overflow:hidden; }
.input-prefix input,.input-suffix input { border:0!important;border-radius:0!important;background:transparent!important; }
.input-prefix b,.input-suffix b { padding:0 13px;color:#6db7ff; }
.field-help { display:block;color:#71849e;line-height:1.6;margin-top:16px; }

.roi-tank-layout { display:grid;grid-template-columns:minmax(280px,.9fr) minmax(340px,1.1fr);gap:28px;align-items:stretch;max-width:1120px;margin:0 auto; }
.roi-controls { display:grid;gap:13px;padding:27px;border:1px solid var(--line);border-radius:22px;background:rgba(6,15,30,.76); }
.roi-controls label { display:grid;gap:8px;color:#8fa1ba;font-size:12px; }
.roi-controls input,.roi-controls select { width:100%;padding:13px 14px;border-radius:10px;border:1px solid rgba(125,170,240,.18);background:#07111f;color:white; }
.roi-controls input[type="range"] { padding:0;accent-color:#159cff; }
.roi-controls label>span { color:#4bb4ff;font-weight:800; }
.roi-inline-results { display:grid;gap:9px;border-top:1px solid var(--line);padding-top:16px;color:#8395ad;font-size:12px; }
.roi-inline-results span { display:flex;justify-content:space-between;gap:15px; }
.roi-inline-results b { color:#fff; }
.recovery-tank-card { min-height:455px;display:grid;grid-template-columns:minmax(190px,.8fr) minmax(180px,1fr);align-items:center;gap:26px;padding:30px;border:1px solid rgba(41,145,255,.28);border-radius:25px;background:radial-gradient(circle at 80% 18%,rgba(22,129,255,.18),transparent 40%),linear-gradient(145deg,#08182b,#06101d);overflow:hidden; }
.tank-copy { position:relative;z-index:3; }
.tank-mode { display:inline-block;color:#5db8ff;text-transform:uppercase;letter-spacing:.16em;font-size:10px;font-weight:800; }
.tank-copy>strong { display:block;font-family:"Space Grotesk";font-size:clamp(36px,5vw,60px);margin:14px 0 2px;letter-spacing:-.05em; }
.tank-copy>p { color:#9aacbf;margin:0 0 30px; }
.tank-summary { display:grid;gap:10px;color:#73869f;font-size:11px; }
.tank-summary span { display:flex;justify-content:space-between;border-bottom:1px solid rgba(125,170,240,.1);padding-bottom:8px; }
.tank-summary b { color:#dcecff; }
.tank-shell { position:relative;height:360px;max-width:260px;width:100%;margin:auto;border:3px solid rgba(111,198,255,.62);border-top-width:5px;border-radius:30px 30px 45px 45px;background:linear-gradient(100deg,rgba(255,255,255,.08),transparent 35%,rgba(255,255,255,.04));box-shadow:inset 0 0 30px rgba(19,92,180,.18),0 0 40px rgba(0,131,255,.15);overflow:hidden; }
.tank-glass { position:absolute;inset:0;background:linear-gradient(95deg,rgba(255,255,255,.13),transparent 20% 75%,rgba(255,255,255,.06));z-index:4;pointer-events:none; }
.tank-liquid { position:absolute;left:0;right:0;bottom:0;background:linear-gradient(180deg,#20d9ff,#078dff 45%,#074bd6);box-shadow:0 -8px 35px rgba(28,210,255,.55);transition:height .25s ease; }
.tank-wave { position:absolute;left:-20%;top:-14px;width:140%;height:30px;border-radius:45%;background:rgba(72,229,255,.75); }
.tank-wave-one { animation:tank-wave 4.5s linear infinite; }
.tank-wave-two { opacity:.45;top:-9px;animation:tank-wave-reverse 6s linear infinite; }
@keyframes tank-wave { to{transform:translateX(14%) rotate(360deg)} }
@keyframes tank-wave-reverse { to{transform:translateX(-12%) rotate(-360deg)} }
.money-particle { position:absolute;color:rgba(231,252,255,.85);font-weight:900;text-shadow:0 0 10px #fff;animation:money-rise 3.5s ease-in infinite; }
.particle-one { left:25%;bottom:10%; }.particle-two { left:61%;bottom:35%;animation-delay:1.1s }.particle-three { left:43%;bottom:62%;animation-delay:2.2s }
@keyframes money-rise { 0%{transform:translateY(20px) scale(.7);opacity:0}35%{opacity:.8}100%{transform:translateY(-85px) scale(1.15);opacity:0} }
.tank-break-even { position:absolute;left:0;right:0;border-top:1px dashed rgba(255,255,255,.8);z-index:6; }
.tank-break-even span { position:absolute;right:8px;bottom:4px;padding:3px 7px;border-radius:7px;background:rgba(2,10,23,.83);font-size:9px;color:#d8f5ff; }
.tank-level { position:absolute;right:13px;top:13px;z-index:7;padding:5px 8px;border-radius:9px;background:rgba(2,10,23,.7);font-weight:800;color:#7ddcff;font-size:12px; }
.recovery-tank-card.compact { min-height:390px; }
.compact-layout { max-width:1050px; }
.dashboard-intelligence-grid { display:grid;grid-template-columns:minmax(460px,1.2fr) minmax(340px,.8fr);gap:18px;align-items:stretch; }
.dashboard-intelligence-grid .recovery-tank-card { min-height:430px; }
.dashboard-brand { display:flex;align-items:center;gap:9px;flex-wrap:wrap; }
.dashboard-brand img { width:34px;height:34px;border-radius:50%;box-shadow:0 0 20px rgba(20,127,255,.35); }
.dashboard-brand small { flex-basis:100%;margin-left:43px; }

@media (max-width:900px) {
  .hero-bg { background-image:linear-gradient(to bottom,rgba(2,7,20,.05),rgba(3,8,20,.76) 76%,#050914 100%),url("/assets/vordali-hero-mobile-original.webp");background-position:center top; }
  .hero-brand-orb { width:125px;height:125px; }
  .roi-tank-layout,.dashboard-intelligence-grid { grid-template-columns:1fr; }
  .recovery-tank-card { grid-template-columns:1fr; }
  .tank-copy { text-align:center; }
}
@media (max-width:600px) {
  .hero-brand-orb { width:105px;height:105px; }
  .recovery-tank-card { padding:22px; }
  .tank-shell { height:320px;max-width:220px; }
}

/* Phase 7 — Recovery Tank™ signature experience */
.site-header .brand img{width:42px;height:42px;object-fit:cover;border-radius:50%;box-shadow:0 0 26px rgba(35,147,255,.35)}
.simulator-heading{padding-bottom:6px}.simulator-heading>span{color:#59b6ff;text-transform:uppercase;letter-spacing:.16em;font-size:10px;font-weight:800}.simulator-heading h3{font-family:"Space Grotesk";font-size:30px;letter-spacing:-.035em;margin:7px 0 6px}.simulator-heading p{color:#8396ae;line-height:1.55;margin:0;font-size:13px}.range-control{display:grid;grid-template-columns:1fr 48px;align-items:center;gap:12px}.range-control strong{color:var(--tank-mid,#159cff);text-align:right}.recovery-theme-picker{margin:4px 0 0;padding:16px;border:1px solid rgba(125,170,240,.15);border-radius:15px;background:rgba(3,10,22,.55)}.recovery-theme-picker legend{padding:0 8px;color:#9fb0c5;font-size:11px}.theme-options{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.theme-options button{appearance:none;border:1px solid rgba(125,170,240,.14);border-radius:12px;background:#07111f;color:#8fa1b8;padding:9px 7px;cursor:pointer;transition:.2s}.theme-options button:hover,.theme-options button.selected{transform:translateY(-2px);border-color:rgba(103,190,255,.7);color:#fff;box-shadow:0 8px 20px rgba(0,0,0,.18)}.theme-preview{display:block;height:27px;border-radius:8px;margin-bottom:7px;box-shadow:inset 0 1px rgba(255,255,255,.3),0 0 14px rgba(52,160,255,.14);position:relative;overflow:hidden}.theme-preview:after{content:"";position:absolute;inset:-80% -30%;background:linear-gradient(100deg,transparent 40%,rgba(255,255,255,.55),transparent 60%);transform:rotate(15deg);animation:theme-shimmer 3.4s linear infinite}@keyframes theme-shimmer{to{transform:translateX(120%) rotate(15deg)}}.theme-options small{font-size:10px}.recovery-theme-picker>p{color:#667b96;font-size:10px;line-height:1.5;margin:11px 0 0}
.recovery-tank-card{--tank-light:#42e7ff;--tank-mid:#0a98ff;--tank-deep:#0752d8;position:relative;border-color:color-mix(in srgb,var(--tank-mid) 38%,transparent);background:radial-gradient(circle at 80% 18%,color-mix(in srgb,var(--tank-mid) 20%,transparent),transparent 40%),linear-gradient(145deg,#08182b,#06101d);box-shadow:inset 0 1px rgba(255,255,255,.03),0 24px 75px rgba(0,0,0,.22)}.recovery-tank-card:before{content:"";position:absolute;width:280px;height:280px;right:-90px;bottom:-100px;border-radius:50%;background:var(--tank-mid);filter:blur(100px);opacity:.09;pointer-events:none;transition:background .45s ease}.tank-mode{color:var(--tank-light);transition:color .45s ease}.tank-business-label{display:block;margin-top:12px;color:#7288a2;font-size:11px}.tank-copy>strong{transition:color .45s ease;text-shadow:0 0 32px color-mix(in srgb,var(--tank-mid) 22%,transparent)}.tank-plaque{display:inline-flex;flex-direction:column;margin-top:25px;padding:9px 13px;border:1px solid color-mix(in srgb,var(--tank-light) 28%,transparent);border-radius:8px;background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(0,0,0,.12));box-shadow:inset 0 1px rgba(255,255,255,.08)}.tank-plaque span{font-family:"Space Grotesk";font-size:10px;letter-spacing:.08em;color:#d8eaff}.tank-plaque small{font-size:8px;color:#6f8299;margin-top:2px}.tank-shell{border-color:color-mix(in srgb,var(--tank-light) 68%,#8296b5);box-shadow:inset 0 0 30px color-mix(in srgb,var(--tank-deep) 24%,transparent),0 0 42px color-mix(in srgb,var(--tank-mid) 22%,transparent);transition:border-color .45s ease,box-shadow .45s ease}.tank-rim{position:absolute;z-index:8;left:5%;right:5%;top:-1px;height:10px;border-radius:999px;background:linear-gradient(180deg,rgba(255,255,255,.72),color-mix(in srgb,var(--tank-light) 50%,transparent),rgba(255,255,255,.08));box-shadow:0 0 18px color-mix(in srgb,var(--tank-light) 42%,transparent)}.tank-liquid{background:linear-gradient(180deg,var(--tank-light),var(--tank-mid) 45%,var(--tank-deep));box-shadow:0 -8px 38px color-mix(in srgb,var(--tank-light) 58%,transparent);transition:height .25s ease,background .45s ease,box-shadow .45s ease}.tank-wave{background:color-mix(in srgb,var(--tank-light) 76%,white 24%);transition:background .45s ease}.tank-level{color:var(--tank-light);border:1px solid color-mix(in srgb,var(--tank-light) 22%,transparent)}.tank-base-glow{position:absolute;left:10%;right:10%;bottom:-12px;height:28px;border-radius:50%;background:var(--tank-mid);filter:blur(18px);opacity:.55;z-index:0;transition:background .45s ease}.money-particle{color:color-mix(in srgb,var(--tank-light) 46%,white);text-shadow:0 0 12px var(--tank-light)}.particle-four{left:74%;bottom:14%;animation-delay:.5s}.particle-five{left:14%;bottom:48%;animation-delay:1.7s}.particle-six{left:78%;bottom:70%;animation-delay:2.8s}.tank-bubble{position:absolute;border:1px solid color-mix(in srgb,var(--tank-light) 65%,white);border-radius:50%;opacity:.55;animation:bubble-rise 4.8s ease-in infinite}.bubble-one{width:9px;height:9px;left:34%;bottom:8%}.bubble-two{width:14px;height:14px;left:68%;bottom:18%;animation-delay:1.3s}.bubble-three{width:6px;height:6px;left:52%;bottom:2%;animation-delay:2.4s}@keyframes bubble-rise{0%{transform:translateY(10px) scale(.6);opacity:0}25%{opacity:.6}100%{transform:translateY(-210px) scale(1.25);opacity:0}}.tank-break-even{border-color:color-mix(in srgb,var(--tank-light) 58%,white)}
@media(max-width:600px){.theme-options{grid-template-columns:repeat(2,1fr)}.simulator-heading h3{font-size:25px}.tank-plaque{margin-top:18px}.site-header .brand img{width:37px;height:37px}}
@media(prefers-reduced-motion:reduce){.tank-wave,.money-particle,.tank-bubble,.theme-preview:after{animation:none!important}.tank-liquid,.tank-shell,.recovery-tank-card{transition:none!important}}

/* Phase 8 — Recovery Tank™ hero experience */
.recovery-hero{--tank-light:#42e7ff;--tank-mid:#0a98ff;--tank-deep:#0752d8;position:relative;min-height:880px;padding:108px 24px 34px;overflow:hidden;border-bottom:1px solid rgba(80,150,255,.18);background:radial-gradient(circle at 50% 35%,color-mix(in srgb,var(--tank-mid) 15%,transparent),transparent 33%),linear-gradient(180deg,#020817 0%,#050a18 72%,#061127 100%);isolation:isolate;transition:background .5s ease}.recovery-atmosphere{position:absolute;inset:0;z-index:-2;overflow:hidden;background:radial-gradient(ellipse at 50% 110%,rgba(24,99,255,.28),transparent 48%)}.recovery-atmosphere:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(4,8,20,.94),transparent 28% 70%,rgba(4,8,20,.72));pointer-events:none}.hero-grid{position:absolute;inset:35% -20% -25%;transform:perspective(600px) rotateX(65deg);transform-origin:center bottom;background-image:linear-gradient(color-mix(in srgb,var(--tank-mid) 14%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--tank-mid) 14%,transparent) 1px,transparent 1px);background-size:55px 55px;mask-image:linear-gradient(to bottom,transparent,black 35%,transparent);animation:grid-drift 14s linear infinite}.aurora{position:absolute;border-radius:50%;filter:blur(90px);opacity:.22;mix-blend-mode:screen;animation:aurora-breathe 8s ease-in-out infinite}.aurora-one{width:620px;height:420px;left:23%;top:9%;background:var(--tank-mid)}.aurora-two{width:500px;height:360px;right:-8%;bottom:4%;background:#732cff;animation-delay:-3s}.energy-ribbon{position:absolute;height:5px;width:70%;right:-8%;bottom:16%;border-radius:50%;border-top:2px solid color-mix(in srgb,var(--tank-light) 80%,white);box-shadow:0 -2px 22px var(--tank-mid),0 0 50px #5d35ff;transform:rotate(-8deg);opacity:.55;animation:ribbon-float 7s ease-in-out infinite}.ribbon-two{bottom:10%;right:-16%;width:80%;transform:rotate(-5deg);opacity:.28;animation-delay:-2s}.ambient-star{position:absolute;width:3px;height:3px;border-radius:50%;background:var(--tank-light);box-shadow:0 0 12px var(--tank-light);animation:star-pulse 3s ease-in-out infinite}.star-1{left:6%;top:25%}.star-2{left:14%;top:64%;animation-delay:.4s}.star-3{left:21%;top:18%;animation-delay:1.2s}.star-4{left:28%;top:76%;animation-delay:2s}.star-5{left:33%;top:38%;animation-delay:.8s}.star-6{left:39%;top:15%;animation-delay:1.6s}.star-7{left:43%;top:70%;animation-delay:.2s}.star-8{left:48%;top:30%;animation-delay:2.3s}.star-9{left:53%;top:12%;animation-delay:1.1s}.star-10{left:57%;top:63%;animation-delay:2.6s}.star-11{left:62%;top:42%;animation-delay:.6s}.star-12{left:67%;top:20%;animation-delay:1.9s}.star-13{left:71%;top:72%;animation-delay:2.2s}.star-14{left:76%;top:35%;animation-delay:.3s}.star-15{left:82%;top:15%;animation-delay:1.5s}.star-16{left:87%;top:61%;animation-delay:2.8s}.star-17{left:92%;top:28%;animation-delay:.9s}.star-18{left:96%;top:78%;animation-delay:2.1s}.star-19{left:11%;top:84%;animation-delay:1.7s}.star-20{left:35%;top:91%;animation-delay:.5s}.star-21{left:68%;top:88%;animation-delay:2.4s}.star-22{left:89%;top:89%;animation-delay:1.3s}@keyframes grid-drift{to{background-position:0 55px,55px 0}}@keyframes aurora-breathe{50%{transform:scale(1.14) translate(2%,3%);opacity:.34}}@keyframes ribbon-float{50%{transform:rotate(-6deg) translateY(-18px) scaleX(1.03)}}@keyframes star-pulse{50%{opacity:.2;transform:scale(.55)}}
.recovery-hero-inner{width:min(1520px,100%);margin:auto;display:grid;grid-template-columns:minmax(300px,.9fr) minmax(390px,1.04fr) minmax(330px,.86fr);gap:34px;align-items:center;position:relative;z-index:2}.recovery-hero-copy{padding:20px 0 35px}.recovery-kicker{color:var(--tank-mid);text-transform:uppercase;letter-spacing:.34em;font-size:12px;font-weight:800;margin:0 0 22px}.recovery-hero-copy h1{font-family:"Space Grotesk";font-size:clamp(52px,5.5vw,86px);line-height:.9;letter-spacing:-.06em;margin:0 0 24px}.recovery-hero-copy h1 span{display:inline-block;background:linear-gradient(120deg,#e9f7ff 6%,var(--tank-light) 42%,var(--tank-mid) 72%);-webkit-background-clip:text;color:transparent;text-shadow:0 0 50px color-mix(in srgb,var(--tank-mid) 18%,transparent)}.recovery-hero-copy h2{font-family:"Space Grotesk";font-size:clamp(23px,2vw,32px);margin:0 0 14px}.hero-description{max-width:580px;color:#aab8ce;line-height:1.65;font-size:16px}.recovery-benefits{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:28px 0}.recovery-benefits div{min-height:92px;border:1px solid color-mix(in srgb,var(--tank-mid) 30%,transparent);border-radius:16px;background:linear-gradient(145deg,rgba(9,24,54,.85),rgba(5,12,28,.65));display:grid;place-items:center;text-align:center;padding:12px 7px;box-shadow:inset 0 1px rgba(255,255,255,.04)}.recovery-benefits b{font-size:23px;color:var(--tank-light);text-shadow:0 0 18px var(--tank-mid)}.recovery-benefits span{font-size:11px;color:#d5e2f5}.recovery-hero-actions{display:flex;gap:12px;flex-wrap:wrap}.recovery-hero-actions .button-primary{box-shadow:0 0 28px color-mix(in srgb,var(--tank-mid) 34%,transparent)}
.signature-tank-stage{position:relative;min-height:650px;display:grid;place-items:center;perspective:1100px;transform-style:preserve-3d;transition:filter .35s ease}.signature-tank-stage.is-changing{filter:brightness(1.22)}.tank-value-crown{position:absolute;top:3px;z-index:20;min-width:320px;padding:12px 80px 13px 24px;text-align:center;border:1px solid color-mix(in srgb,var(--tank-light) 65%,white);clip-path:polygon(7% 0,93% 0,100% 50%,93% 100%,7% 100%,0 50%);background:linear-gradient(180deg,rgba(16,51,113,.92),rgba(5,22,54,.88));box-shadow:0 0 26px color-mix(in srgb,var(--tank-mid) 50%,transparent),inset 0 0 22px rgba(42,159,255,.15)}.tank-value-crown small{display:block;color:#dcecff;font-size:11px}.tank-value-crown strong{display:block;font-family:"Space Grotesk";font-size:42px;line-height:1.08}.tank-value-crown span{position:absolute;right:25px;top:27px;color:#4ff1c4;font-weight:800;font-size:11px;background:rgba(5,112,81,.45);padding:6px 8px;border-radius:8px}.cylinder-tank{position:relative;width:min(440px,90%);height:570px;margin-top:60px;transform:rotateX(var(--tilt-x)) rotateY(var(--tilt-y));transition:transform .2s ease-out;transform-style:preserve-3d}.cylinder-glass{position:absolute;left:10%;right:10%;top:52px;height:390px;border:3px solid color-mix(in srgb,var(--tank-light) 75%,white);border-radius:42% / 8%;overflow:hidden;background:linear-gradient(90deg,rgba(255,255,255,.17),transparent 19% 74%,rgba(255,255,255,.1));box-shadow:inset 0 0 58px color-mix(in srgb,var(--tank-deep) 28%,transparent),0 0 38px color-mix(in srgb,var(--tank-mid) 38%,transparent),0 38px 70px rgba(0,0,0,.45);z-index:4}.tank-top-rim{position:absolute;z-index:10;left:8%;right:8%;top:35px;height:52px;border:4px solid color-mix(in srgb,var(--tank-light) 78%,white);border-radius:50%;background:linear-gradient(180deg,rgba(255,255,255,.42),rgba(3,30,68,.74) 38%,rgba(2,12,28,.85));box-shadow:0 0 24px var(--tank-mid),inset 0 0 20px rgba(255,255,255,.18)}.tank-top-rim i{position:absolute;inset:8px 12px;border:1px solid rgba(255,255,255,.3);border-radius:50%;background:rgba(2,10,25,.72)}.cylinder-liquid{position:absolute;left:0;right:0;bottom:0;height:var(--tank-fill);background:linear-gradient(90deg,color-mix(in srgb,var(--tank-deep) 84%,#031533),var(--tank-mid) 44%,var(--tank-light) 68%,var(--tank-deep));box-shadow:0 -14px 44px color-mix(in srgb,var(--tank-light) 75%,transparent),inset 30px 0 40px rgba(255,255,255,.08),inset -30px 0 45px rgba(0,0,0,.25);transition:height .6s cubic-bezier(.2,.8,.2,1),background .5s ease;overflow:visible}.liquid-surface{position:absolute;left:-5%;width:110%;height:38px;border-radius:50%;top:-19px;transform-origin:center;background:color-mix(in srgb,var(--tank-light) 78%,white);box-shadow:0 0 24px var(--tank-light);animation:surface-slosh 4.8s ease-in-out infinite}.surface-back{opacity:.48;transform:rotate(-1.2deg);animation-delay:-1.7s}.surface-front{opacity:.85;transform:rotate(1deg);mix-blend-mode:screen}.liquid-foam{position:absolute;left:5%;right:5%;top:-8px;height:7px;border-radius:50%;border-top:2px solid rgba(255,255,255,.86);filter:blur(.3px);opacity:.78;animation:foam-shift 3.3s ease-in-out infinite}.signature-tank-stage.is-changing .liquid-surface{animation:surface-slosh-active .55s ease-in-out 2}.business-particle{position:absolute;bottom:5%;color:rgba(241,254,255,.88);font-family:"Space Grotesk";font-weight:900;text-shadow:0 0 13px var(--tank-light);animation:business-rise 4s ease-in infinite;z-index:2}.liquid-bubble{position:absolute;border:1px solid color-mix(in srgb,var(--tank-light) 65%,white);border-radius:50%;opacity:.62;animation:bubble-lift 4.6s ease-in infinite}.liquid-bubble-1{width:8px;height:8px;left:18%;bottom:7%}.liquid-bubble-2{width:13px;height:13px;left:34%;bottom:17%;animation-delay:.8s}.liquid-bubble-3{width:6px;height:6px;left:47%;bottom:5%;animation-delay:1.7s}.liquid-bubble-4{width:10px;height:10px;left:61%;bottom:25%;animation-delay:2.4s}.liquid-bubble-5{width:16px;height:16px;left:75%;bottom:9%;animation-delay:1.1s}.liquid-bubble-6{width:7px;height:7px;left:84%;bottom:38%;animation-delay:3s}.liquid-bubble-7{width:12px;height:12px;left:26%;bottom:43%;animation-delay:2s}.liquid-bubble-8{width:8px;height:8px;left:55%;bottom:52%;animation-delay:.3s}.liquid-bubble-9{width:11px;height:11px;left:70%;bottom:60%;animation-delay:1.5s}.glass-reflection{position:absolute;z-index:7;top:-8%;height:117%;border-radius:50%;filter:blur(.2px);pointer-events:none}.reflection-one{left:18%;width:15%;background:linear-gradient(180deg,rgba(255,255,255,.78),rgba(110,230,255,.28) 72%,transparent);transform:skewX(-13deg);opacity:.64}.reflection-two{right:10%;width:5%;background:linear-gradient(180deg,rgba(255,255,255,.45),transparent 68%);opacity:.35}.glass-sweep{position:absolute;z-index:9;inset:-20% auto -20% -38%;width:22%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);transform:skewX(-18deg);animation:glass-sweep 5.8s ease-in-out infinite}.break-even-line{position:absolute;z-index:8;left:3%;right:3%;bottom:var(--break-even);border-top:1px dashed rgba(255,255,255,.72);transition:bottom .6s ease}.break-even-line span{position:absolute;right:7px;bottom:5px;font-size:9px;padding:4px 8px;border-radius:8px;background:rgba(0,7,19,.82);color:#ecf9ff}.tank-bottom-rim{position:absolute;z-index:8;left:9%;right:9%;top:418px;height:48px;border:3px solid color-mix(in srgb,var(--tank-light) 68%,white);border-radius:50%;background:linear-gradient(180deg,rgba(31,121,216,.72),rgba(3,17,42,.95));box-shadow:0 0 25px color-mix(in srgb,var(--tank-mid) 43%,transparent)}.tank-pedestal{position:absolute;left:12%;right:12%;top:430px;height:95px;border:2px solid color-mix(in srgb,var(--tank-light) 45%,white);border-radius:18px 18px 35px 35px;background:linear-gradient(90deg,#092452,#257be0 24%,#d6f5ff 48%,#1a65c8 72%,#071d45);box-shadow:0 18px 40px rgba(0,0,0,.46),0 0 26px color-mix(in srgb,var(--tank-mid) 35%,transparent);display:grid;place-items:center}.tank-plaque-large{padding:9px 28px;border-radius:8px;border:1px solid rgba(255,255,255,.62);background:linear-gradient(145deg,#d7deea,#7e8da5 55%,#e9eef5);box-shadow:inset 0 1px white,0 4px 12px rgba(0,0,0,.4);color:#071126;text-align:center;position:relative}.tank-plaque-large:before,.tank-plaque-large:after{content:"";position:absolute;width:5px;height:5px;border-radius:50%;background:#546174;top:50%;transform:translateY(-50%);box-shadow:inset 0 1px rgba(255,255,255,.7)}.tank-plaque-large:before{left:8px}.tank-plaque-large:after{right:8px}.tank-plaque-large strong{display:block;font-family:"Space Grotesk";font-size:18px}.tank-plaque-large small{display:block;font-size:9px;margin-top:1px}.stage-ring{position:absolute;left:1%;right:1%;bottom:1px;height:58px;border:3px solid var(--tank-mid);border-radius:50%;background:radial-gradient(ellipse,rgba(23,117,255,.24),rgba(3,12,31,.92) 65%);box-shadow:0 0 34px var(--tank-mid),inset 0 0 25px color-mix(in srgb,var(--tank-light) 35%,transparent);z-index:-1}.tank-proof-line{position:absolute;bottom:0;color:#a8bad0;font-size:11px;letter-spacing:.05em}@keyframes surface-slosh{0%,100%{transform:rotate(-.8deg) scaleX(1.02)}50%{transform:rotate(1.2deg) scaleX(.98)}}@keyframes surface-slosh-active{0%,100%{transform:rotate(-1deg) translateY(0)}50%{transform:rotate(4deg) translateY(7px)}}@keyframes foam-shift{50%{transform:translateX(4%) scaleX(.94)}}@keyframes business-rise{0%{transform:translateY(15px) scale(.7) rotate(-8deg);opacity:0}22%{opacity:.82}100%{transform:translateY(-290px) scale(1.2) rotate(8deg);opacity:0}}@keyframes bubble-lift{0%{transform:translateY(12px) scale(.55);opacity:0}22%{opacity:.65}100%{transform:translateY(-255px) scale(1.25);opacity:0}}@keyframes glass-sweep{0%,18%{transform:translateX(0) skewX(-18deg);opacity:0}38%{opacity:.7}58%,100%{transform:translateX(650%) skewX(-18deg);opacity:0}}
.recovery-control-panel{align-self:center;padding:24px;border:1px solid color-mix(in srgb,var(--tank-mid) 43%,transparent);border-radius:26px;background:linear-gradient(150deg,rgba(10,30,67,.88),rgba(4,13,31,.82));box-shadow:0 25px 70px rgba(0,0,0,.38),inset 0 1px rgba(255,255,255,.06);backdrop-filter:blur(18px)}.control-heading{padding-bottom:15px;border-bottom:1px solid rgba(135,180,255,.13);margin-bottom:15px}.control-heading>span{color:var(--tank-light);text-transform:uppercase;letter-spacing:.16em;font-size:9px;font-weight:800}.control-heading h3{font-family:"Space Grotesk";font-size:25px;margin:4px 0}.control-heading p{margin:0;color:#9aaac0;font-size:12px}.recovery-control-panel label{display:grid;gap:7px;color:#b9c8dc;font-size:11px;margin:13px 0}.recovery-control-panel select,.recovery-control-panel input[type=number]{width:100%;height:43px;border:1px solid rgba(105,165,255,.2);border-radius:10px;background:rgba(4,14,35,.78);color:#fff;padding:0 13px;outline:none}.stepper{display:grid;grid-template-columns:1fr 34px 34px;gap:7px}.stepper button{border:1px solid rgba(100,160,255,.18);border-radius:8px;background:#102957;color:#d9edff;cursor:pointer;font-size:18px}.money-stepper{grid-template-columns:23px 1fr 34px 34px;align-items:center}.money-stepper>span{color:var(--tank-light);font-weight:800}.recovery-control-panel input[type=range]{width:100%;accent-color:var(--tank-mid)}.recovery-control-panel label>b{color:var(--tank-light)}.hero-theme-picker{border:0;padding:0;margin:18px 0}.hero-theme-picker legend{font-size:11px;color:#b9c8dc;margin-bottom:9px}.hero-theme-picker>div{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.hero-theme-picker button{border:1px solid rgba(107,162,255,.17);border-radius:11px;background:#07152f;color:#9eb0c8;padding:7px;cursor:pointer;transition:.2s}.hero-theme-picker button:hover,.hero-theme-picker button.selected{transform:translateY(-2px);color:#fff;border-color:var(--tank-light);box-shadow:0 0 20px color-mix(in srgb,var(--tank-mid) 25%,transparent)}.hero-theme-picker i{display:block;height:26px;border-radius:7px;margin-bottom:6px;box-shadow:inset 0 1px rgba(255,255,255,.35)}.hero-theme-picker span{font-size:9px}.hero-result-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.hero-result-grid div{min-height:83px;border:1px solid rgba(111,170,255,.15);border-radius:11px;background:rgba(5,17,40,.72);display:grid;place-items:center;text-align:center;padding:10px 5px}.hero-result-grid span{font-size:9px;color:#8fa1ba;line-height:1.3}.hero-result-grid strong{font-family:"Space Grotesk";font-size:17px}.hero-result-grid div:last-child strong{color:#48efbc}.control-assurance{text-align:center;color:#a8b8ce;font-size:10px;margin:17px 0 0}.recovery-trust-strip{position:relative;z-index:3;width:min(1300px,calc(100% - 48px));margin:15px auto 0;min-height:62px;padding:12px 30px;border:1px solid color-mix(in srgb,var(--tank-mid) 36%,transparent);border-radius:24px;background:linear-gradient(90deg,rgba(11,43,95,.9),rgba(8,27,63,.86));box-shadow:0 0 35px color-mix(in srgb,var(--tank-mid) 18%,transparent);display:flex;align-items:center;justify-content:space-between;gap:15px;color:#d3e4f8;font-size:11px}.recovery-trust-strip span{white-space:nowrap}.recovery-trust-strip span+span{border-left:1px solid rgba(150,190,255,.18);padding-left:25px}
@media(max-width:1280px){.recovery-hero-inner{grid-template-columns:.9fr 1fr}.recovery-control-panel{grid-column:1/-1;width:min(850px,100%);margin:0 auto}.recovery-hero{padding-bottom:45px}.recovery-hero-copy{padding-top:55px}.signature-tank-stage{min-height:640px}.recovery-trust-strip{flex-wrap:wrap;justify-content:center}.recovery-trust-strip span+span{border-left:0;padding-left:0}}
@media(max-width:850px){.recovery-hero{padding:92px 18px 30px}.recovery-hero-inner{grid-template-columns:1fr}.recovery-hero-copy{text-align:center;padding:25px 0 0}.hero-description{margin-left:auto;margin-right:auto}.recovery-benefits{max-width:600px;margin:25px auto}.recovery-hero-actions{justify-content:center}.signature-tank-stage{min-height:620px}.cylinder-tank{width:min(420px,96%)}.recovery-control-panel{width:100%}.recovery-trust-strip{width:calc(100% - 36px)}.recovery-atmosphere:after{background:linear-gradient(180deg,rgba(4,8,20,.2),rgba(4,8,20,.65))}}
@media(max-width:540px){.recovery-hero-copy h1{font-size:53px}.recovery-benefits{grid-template-columns:repeat(2,1fr)}.signature-tank-stage{min-height:550px}.tank-value-crown{min-width:275px;padding-right:68px}.tank-value-crown strong{font-size:34px}.cylinder-tank{height:485px}.cylinder-glass{top:48px;height:315px}.tank-top-rim{top:33px}.tank-bottom-rim{top:338px}.tank-pedestal{top:350px;height:80px}.tank-plaque-large{padding:7px 22px}.tank-plaque-large strong{font-size:15px}.stage-ring{bottom:8px}.hero-theme-picker>div{grid-template-columns:repeat(2,1fr)}.hero-result-grid{grid-template-columns:1fr}.recovery-trust-strip{display:grid;grid-template-columns:1fr 1fr;text-align:center}.recovery-trust-strip span:last-child{grid-column:1/-1}.recovery-hero-actions .button{width:100%;justify-content:center}}
@media(prefers-reduced-motion:reduce){.hero-grid,.aurora,.energy-ribbon,.ambient-star,.liquid-surface,.liquid-foam,.business-particle,.liquid-bubble,.glass-sweep{animation:none!important}.cylinder-tank{transform:none!important}.cylinder-liquid,.break-even-line{transition:none!important}}

/* Phase 8.1 — compact, polished and performance-tuned Recovery Tank hero */
.recovery-hero{
  min-height:calc(100svh - 80px);
  padding:88px 22px 24px;
  contain:layout paint;
}
.recovery-hero-inner{
  width:min(1460px,100%);
  grid-template-columns:minmax(275px,.86fr) minmax(350px,1fr) minmax(320px,.82fr);
  gap:26px;
}
.signature-tank-stage{min-height:575px}
.cylinder-tank{
  width:min(390px,92%);
  height:505px;
  margin-top:48px;
  transform:none;
  transition:none;
}
.cylinder-glass{left:9%;right:9%;top:48px;height:350px;border-radius:40% / 7%}
/* Open glass lip: removes the heavy black ring while preserving a bright rim. */
.tank-top-rim{
  left:7%;right:7%;top:33px;height:39px;
  border:3px solid color-mix(in srgb,var(--tank-light) 80%,white);
  background:linear-gradient(180deg,rgba(255,255,255,.28),rgba(88,185,255,.06) 48%,transparent 60%);
  box-shadow:0 0 18px color-mix(in srgb,var(--tank-mid) 70%,transparent),inset 0 1px rgba(255,255,255,.7);
}
.tank-top-rim:after{
  content:"";position:absolute;inset:5px 11px;border-radius:50%;
  border:1px solid rgba(205,245,255,.48);background:transparent;
}
.tank-bottom-rim{left:8%;right:8%;top:372px;height:38px;background:linear-gradient(180deg,rgba(116,212,255,.38),rgba(5,22,52,.92))}
/* Brushed-metal pedestal modeled after the approved concept. */
.tank-pedestal{
  left:7%;right:7%;top:392px;height:86px;
  border:1px solid rgba(190,225,255,.48);
  border-radius:6px 6px 24px 24px;
  background:
    repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 1px,transparent 1px 4px),
    linear-gradient(90deg,#071733 0%,#263d5c 10%,#93a5ba 28%,#e5ebf1 50%,#8192a8 72%,#243a58 90%,#06152f 100%);
  box-shadow:0 15px 32px rgba(0,0,0,.48),0 0 18px color-mix(in srgb,var(--tank-mid) 28%,transparent),inset 0 2px rgba(255,255,255,.55),inset 0 -8px 16px rgba(0,0,0,.35);
}
.tank-pedestal:after{
  content:"";position:absolute;left:4%;right:4%;bottom:-15px;height:24px;border-radius:50%;
  border:2px solid color-mix(in srgb,var(--tank-mid) 70%,white);
  background:radial-gradient(ellipse,rgba(13,84,190,.42),rgba(3,10,25,.96) 65%);
  box-shadow:0 0 22px color-mix(in srgb,var(--tank-mid) 60%,transparent);
  z-index:-1;
}
.tank-plaque-large{
  min-width:255px;padding:8px 28px;border-radius:5px;
  border:1px solid #67788e;
  background:repeating-linear-gradient(0deg,rgba(255,255,255,.08) 0 1px,transparent 1px 3px),linear-gradient(135deg,#eef1f4,#9ca8b7 48%,#d8dee5);
  box-shadow:inset 0 1px #fff,inset 0 -1px rgba(0,0,0,.28),0 4px 10px rgba(0,0,0,.42);
}
.tank-plaque-large:before,.tank-plaque-large:after{width:6px;height:6px;background:radial-gradient(circle at 35% 30%,#e7edf3,#4b596a 55%,#1c2735)}
.tank-plaque-large strong{font-size:19px;letter-spacing:-.02em}
.tank-plaque-large small{font-size:9px;color:#172238}
.stage-ring{display:none}
.tank-proof-line{bottom:4px}
.tank-value-crown{top:0;min-width:300px;padding:10px 72px 11px 20px}
.tank-value-crown strong{font-size:37px}
.recovery-hero-copy{padding:4px 0 20px}
.recovery-kicker{margin-bottom:15px}
.recovery-hero-copy h1{font-size:clamp(48px,5vw,76px);margin-bottom:19px}
.recovery-hero-copy h2{font-size:clamp(21px,1.8vw,28px)}
.hero-description{font-size:14px;line-height:1.55}
.recovery-benefits{margin:20px 0;gap:8px}
.recovery-benefits div{min-height:78px;border-radius:13px;padding:9px 5px}
.recovery-control-panel{padding:19px;border-radius:20px;backdrop-filter:none}
.control-heading{padding-bottom:11px;margin-bottom:10px}
.control-heading h3{font-size:22px}
.recovery-control-panel label{margin:9px 0;gap:5px}
.recovery-control-panel select,.recovery-control-panel input[type=number]{height:38px}
.hero-theme-picker{margin:13px 0}
.hero-result-grid div{min-height:68px}
.recovery-trust-strip{min-height:52px;margin-top:8px;padding:9px 25px}
/* Keep animation but reduce compositor pressure. */
.aurora{filter:blur(70px)}
.energy-ribbon{animation-duration:10s}
.hero-grid{animation-duration:22s}
.ambient-star:nth-of-type(n+13){display:none}
.business-particle:nth-of-type(n+9),.liquid-bubble:nth-of-type(n+7){display:none}
.glass-sweep{animation-duration:8s;opacity:.7}

@media (min-width:1100px) and (max-height:850px){
  .recovery-hero{padding-top:72px;min-height:calc(100svh - 72px)}
  .recovery-hero-inner{align-items:start}
  .signature-tank-stage{min-height:535px}
  .cylinder-tank{width:min(360px,92%);height:470px;margin-top:40px}
  .cylinder-glass{top:43px;height:320px}
  .tank-top-rim{top:29px}
  .tank-bottom-rim{top:338px}
  .tank-pedestal{top:356px;height:78px}
  .tank-plaque-large{min-width:235px;padding:7px 24px}
  .tank-plaque-large strong{font-size:17px}
  .tank-value-crown strong{font-size:34px}
  .tank-proof-line{display:none}
  .recovery-hero-copy h1{font-size:clamp(46px,4.6vw,68px)}
  .recovery-benefits div{min-height:70px}
  .recovery-control-panel{padding:16px}
  .control-heading p,.control-assurance{display:none}
  .hero-result-grid div{min-height:58px;padding:7px 4px}
  .recovery-trust-strip{display:none}
}

/* Phase 8.5 — Recovery Tank industrial-design pass */
/* Prevent the eyebrow from slipping beneath the fixed navigation on short laptop screens. */
.recovery-kicker{padding-top:8px}

/* Stronger depth behind the tank, without another expensive blur layer. */
.signature-tank-stage:before{
  content:"";
  position:absolute;
  width:78%;height:72%;
  left:11%;top:16%;
  border-radius:50%;
  background:radial-gradient(ellipse,color-mix(in srgb,var(--tank-mid) 22%,transparent),transparent 68%);
  opacity:.78;
  pointer-events:none;
  z-index:-1;
}

/* Slightly heavier glass walls and a quieter, more realistic open lip. */
.cylinder-glass{
  border-width:4px;
  border-color:color-mix(in srgb,var(--tank-light) 72%,white);
  box-shadow:
    inset 8px 0 18px rgba(255,255,255,.08),
    inset -11px 0 24px rgba(0,9,31,.28),
    inset 0 0 54px color-mix(in srgb,var(--tank-deep) 25%,transparent),
    0 0 34px color-mix(in srgb,var(--tank-mid) 34%,transparent),
    0 30px 58px rgba(0,0,0,.34);
}
.tank-top-rim{
  border-width:3px;
  background:linear-gradient(180deg,rgba(255,255,255,.32),rgba(90,205,255,.07) 45%,transparent 66%);
  box-shadow:0 0 16px color-mix(in srgb,var(--tank-mid) 58%,transparent),inset 0 1px rgba(255,255,255,.78);
}

/* More dimensional liquid: two independent curved surfaces and darker glass edges. */
.cylinder-liquid:after{
  content:"";
  position:absolute;inset:0;
  background:linear-gradient(90deg,rgba(0,7,30,.32),transparent 17% 80%,rgba(0,7,30,.38));
  pointer-events:none;
}
.surface-back{height:42px;top:-21px;opacity:.42;animation-duration:5.7s}
.surface-front{height:34px;top:-17px;opacity:.88;animation-duration:4.1s}
.liquid-foam{top:-7px;left:7%;right:7%;box-shadow:0 0 9px rgba(255,255,255,.72)}

/* Replace the previous flat rounded block with a true three-dimensional cylindrical pedestal. */
.tank-pedestal{
  left:4.5%;right:4.5%;top:387px;height:101px;
  border:0;border-radius:0;background:none;box-shadow:none;
  display:block;overflow:visible;
}
.tank-pedestal:after{display:none!important}
.pedestal-top-collar{
  position:absolute;z-index:5;left:2%;right:2%;top:-7px;height:28px;border-radius:50%;
  border:2px solid rgba(201,229,255,.62);
  background:linear-gradient(180deg,#dce8f2 0%,#6f849a 17%,#172b43 53%,#061326 78%,#60758a 100%);
  box-shadow:inset 0 4px 6px rgba(255,255,255,.46),inset 0 -7px 10px rgba(0,0,0,.48),0 0 15px color-mix(in srgb,var(--tank-mid) 35%,transparent);
}
.pedestal-body{
  position:absolute;z-index:3;left:3%;right:3%;top:7px;height:74px;overflow:hidden;
  border:1px solid rgba(190,213,235,.47);border-radius:8px 8px 30px 30px / 8px 8px 20px 20px;
  background:
    repeating-linear-gradient(90deg,rgba(255,255,255,.026) 0 1px,rgba(0,0,0,.018) 1px 3px),
    linear-gradient(90deg,#071326 0%,#24364b 8%,#66798d 21%,#aab7c4 37%,#dbe2e9 50%,#9caab8 63%,#5e7185 79%,#1d3147 92%,#061326 100%);
  box-shadow:inset 0 4px 5px rgba(255,255,255,.38),inset 0 -12px 18px rgba(0,0,0,.5),0 13px 25px rgba(0,0,0,.38);
}
.pedestal-body:before,.pedestal-body:after{
  content:"";position:absolute;top:0;bottom:0;width:18%;pointer-events:none;
}
.pedestal-body:before{left:0;background:linear-gradient(90deg,rgba(0,0,0,.58),transparent)}
.pedestal-body:after{right:0;background:linear-gradient(270deg,rgba(0,0,0,.58),transparent)}
.pedestal-metal-sheen{
  position:absolute;z-index:2;top:-20%;bottom:-20%;left:-28%;width:18%;
  transform:skewX(-18deg);
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.28),transparent);
  animation:pedestal-sheen 9s ease-in-out infinite;
}
.pedestal-lower-bevel{
  position:absolute;z-index:4;left:5%;right:5%;top:69px;height:28px;border-radius:50%;
  border:1px solid rgba(139,164,188,.6);
  background:linear-gradient(180deg,#4f6478 0%,#172a40 34%,#071427 69%,#020914 100%);
  box-shadow:inset 0 4px 5px rgba(255,255,255,.18),inset 0 -7px 10px rgba(0,0,0,.55);
}
.pedestal-light-strip{
  position:absolute;z-index:6;left:8%;right:8%;top:87px;height:6px;border-radius:50%;
  background:linear-gradient(90deg,transparent,var(--tank-mid) 15%,var(--tank-light) 50%,var(--tank-mid) 85%,transparent);
  box-shadow:0 0 7px var(--tank-light),0 0 18px var(--tank-mid);
  opacity:.92;
}
.tank-plaque-large{
  position:absolute;z-index:7;left:50%;top:17px;transform:translateX(-50%);
  min-width:246px;padding:8px 25px 7px;border-radius:5px;
  border:1px solid #556579;
  background:
    repeating-linear-gradient(0deg,rgba(255,255,255,.08) 0 1px,transparent 1px 3px),
    linear-gradient(180deg,#f1f4f7 0%,#c3ccd5 38%,#8d99a7 61%,#d9e0e6 100%);
  color:#091426;text-align:center;
  box-shadow:inset 0 1px #fff,inset 0 -2px rgba(42,51,64,.32),0 2px 3px rgba(0,0,0,.54),0 0 0 3px rgba(23,38,54,.34);
}
.tank-plaque-large:before,.tank-plaque-large:after{display:none}
.tank-plaque-large strong{font-size:18px;line-height:1.05;text-shadow:0 1px rgba(255,255,255,.7)}
.tank-plaque-large small{font-size:8px;color:#1a2636;margin-top:2px}
.plaque-screw{
  position:absolute;width:7px;height:7px;border-radius:50%;
  background:radial-gradient(circle at 34% 28%,#eef3f7 0 12%,#778594 30%,#263444 62%,#0d1722 100%);
  box-shadow:inset 0 1px rgba(255,255,255,.6),0 1px 2px rgba(0,0,0,.65);
}
.plaque-screw:after{content:"";position:absolute;left:1px;right:1px;top:3px;height:1px;background:#13202d;transform:rotate(-38deg)}
.screw-tl{left:8px;top:7px}.screw-tr{right:8px;top:7px}.screw-bl{left:8px;bottom:7px}.screw-br{right:8px;bottom:7px}
.stage-ring{display:none!important}

@keyframes pedestal-sheen{
  0%,58%{transform:translateX(0) skewX(-18deg);opacity:0}
  68%{opacity:.72}
  82%,100%{transform:translateX(780%) skewX(-18deg);opacity:0}
}

/* Maintain the compact laptop layout with the new pedestal dimensions. */
@media (min-width:1100px) and (max-height:850px){
  .recovery-hero{padding-top:80px}
  .recovery-kicker{padding-top:6px}
  .tank-pedestal{top:350px;height:91px}
  .pedestal-body{height:66px}
  .pedestal-lower-bevel{top:61px;height:25px}
  .pedestal-light-strip{top:79px}
  .tank-plaque-large{top:15px;min-width:225px;padding:7px 22px 6px}
  .tank-plaque-large strong{font-size:16px}
}

@media(max-width:540px){
  .tank-pedestal{left:3%;right:3%;top:346px;height:88px}
  .pedestal-body{height:63px}
  .pedestal-lower-bevel{top:58px;height:24px}
  .pedestal-light-strip{top:76px}
  .tank-plaque-large{top:14px;min-width:205px;padding:6px 19px}
  .tank-plaque-large strong{font-size:14px}
}

@media(prefers-reduced-motion:reduce){.pedestal-metal-sheen{animation:none!important}}

/* Phase 8.6 — Recovery Tank Lab and corrected physical stacking */
.cylinder-tank{isolation:isolate}
.cylinder-glass{z-index:6}
.tank-top-rim{z-index:12}
.tank-bottom-rim{z-index:10;top:418px}
.tank-pedestal{
  z-index:9;
  top:438px;
  left:3%;right:3%;height:92px;
}
.pedestal-top-collar{
  z-index:13;
  top:-8px;left:2%;right:2%;height:31px;
  background:linear-gradient(180deg,#f2f7fb 0%,#9eafbf 14%,#43576d 38%,#13283e 66%,#6e8397 88%,#dbe7ef 100%);
  box-shadow:inset 0 5px 7px rgba(255,255,255,.52),inset 0 -7px 10px rgba(0,0,0,.42),0 0 14px color-mix(in srgb,var(--tank-mid) 38%,transparent);
}
.pedestal-body{
  z-index:8;top:10px;left:3%;right:3%;height:69px;
  border-radius:50% / 17%;
  overflow:hidden;
  background:
    repeating-linear-gradient(90deg,rgba(255,255,255,.025) 0 1px,rgba(0,0,0,.02) 1px 3px),
    linear-gradient(90deg,#050d19 0%,#17283a 8%,#53677b 21%,#a9b6c2 38%,#e1e7ec 50%,#9caab7 63%,#4c6075 79%,#14263a 92%,#050d19 100%);
  box-shadow:inset 0 5px 7px rgba(255,255,255,.34),inset 0 -12px 16px rgba(0,0,0,.42),0 10px 18px rgba(0,0,0,.24);
}
.pedestal-body:before,.pedestal-body:after{width:21%}
.pedestal-lower-bevel{display:none!important}
.pedestal-light-strip{
  z-index:14;top:76px;left:10%;right:10%;height:5px;
  background:linear-gradient(90deg,transparent,var(--tank-mid) 14%,var(--tank-light) 50%,var(--tank-mid) 86%,transparent);
  box-shadow:0 0 7px var(--tank-light),0 0 15px color-mix(in srgb,var(--tank-mid) 70%,transparent);
}
.pedestal-floor-glow{
  position:absolute;z-index:1;left:16%;right:16%;top:78px;height:23px;border-radius:50%;
  background:radial-gradient(ellipse,color-mix(in srgb,var(--tank-light) 34%,transparent) 0%,color-mix(in srgb,var(--tank-mid) 14%,transparent) 45%,transparent 74%);
  filter:blur(5px);opacity:.78;pointer-events:none;
}
.tank-plaque-large{top:17px;z-index:15}

@media (min-width:1100px) and (max-height:850px){
  .tank-bottom-rim{top:338px}
  .tank-pedestal{top:358px;height:82px}
  .pedestal-top-collar{height:27px;top:-7px}
  .pedestal-body{top:9px;height:61px}
  .pedestal-light-strip{top:67px}
  .pedestal-floor-glow{top:69px}
  .tank-plaque-large{top:14px}
}
@media(max-width:540px){
  .tank-bottom-rim{top:338px}
  .tank-pedestal{top:358px;height:80px}
  .pedestal-body{height:59px}
  .pedestal-light-strip{top:65px}
  .pedestal-floor-glow{top:67px}
}

.tank-lab-page{min-height:100svh;color:#f3f8ff;background:radial-gradient(circle at 44% 42%,rgba(0,142,255,.19),transparent 31%),linear-gradient(145deg,#020713,#06132a 62%,#030815);padding:28px 34px 48px;font-family:Inter,system-ui,sans-serif;overflow:hidden}
.tank-lab-header{max-width:1180px;margin:0 auto 12px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(112,181,255,.18);padding-bottom:14px}
.tank-lab-header span{color:#2edcff;font-size:11px;font-weight:800;letter-spacing:.18em}.tank-lab-header h1{font-family:"Space Grotesk",sans-serif;margin:5px 0 2px;font-size:30px}.tank-lab-header p{margin:0;color:#8ea0b8;font-size:13px}.tank-lab-header a{border:1px solid rgba(77,167,255,.4);border-radius:999px;padding:10px 16px;font-size:13px}
.tank-lab-workbench{max-width:1120px;margin:auto;min-height:650px;display:grid;grid-template-columns:minmax(520px,1fr) 310px;gap:42px;align-items:center}
.tank-lab-stage{min-height:620px}.tank-lab-stage .cylinder-tank{width:min(440px,90%)}
.tank-lab-controls{padding:22px;border:1px solid rgba(83,166,255,.32);border-radius:20px;background:linear-gradient(160deg,rgba(11,30,61,.9),rgba(4,13,29,.92));box-shadow:0 20px 60px rgba(0,0,0,.3)}
.tank-lab-controls label{display:flex;flex-direction:column;gap:8px;margin-bottom:20px;color:#b8c6d9;font-size:12px}.tank-lab-controls label b{color:#38ddff}.tank-lab-controls select{height:42px;border:1px solid rgba(96,166,255,.28);border-radius:10px;background:#07152b;color:white;padding:0 12px}.tank-lab-controls input[type=range]{width:100%;accent-color:#1da9ff}.tank-lab-controls fieldset{border:0;padding:0;margin:0 0 20px;display:grid;grid-template-columns:1fr 1fr;gap:8px}.tank-lab-controls legend{grid-column:1/-1;color:#b8c6d9;font-size:12px;margin-bottom:8px}.tank-lab-controls fieldset button{height:38px;color:#c8d6e8;background:linear-gradient(135deg,color-mix(in srgb,var(--swatch) 65%,#07152b),#07152b);border:1px solid rgba(112,174,255,.2);border-radius:9px}.tank-lab-controls fieldset button.active{border-color:#52e7ff;box-shadow:0 0 15px rgba(45,206,255,.18)}.tank-lab-checklist{display:flex;flex-direction:column;gap:7px;padding-top:16px;border-top:1px solid rgba(114,172,240,.16);font-size:11px;color:#91a7c0}.tank-lab-checklist strong{color:#ecf8ff;margin-bottom:3px}
@media(max-width:900px){.tank-lab-page{overflow:auto;padding:20px}.tank-lab-workbench{grid-template-columns:1fr}.tank-lab-controls{max-width:520px;margin:auto;width:100%}.tank-lab-header p{display:none}}

/* Phase 8.7: single-coordinate-system Recovery Tank assembly. */
.unified-tank-stage{min-height:575px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}
.unified-tank-wrap{position:absolute;inset:48px 0 12px;display:flex;align-items:center;justify-content:center;pointer-events:none}
.unified-tank-svg{width:min(440px,96%);height:auto;overflow:visible;filter:drop-shadow(0 22px 34px rgba(0,0,0,.28))}
.unified-tank-stage .cylinder-tank,.unified-tank-stage .tank-top-rim,.unified-tank-stage .cylinder-glass,.unified-tank-stage .tank-bottom-rim,.unified-tank-stage .tank-pedestal{display:none!important}
.tank-unified-assembly{transform-origin:220px 285px}
.unified-tank-stage.is-changing .tank-unified-assembly{animation:unified-tank-react .7s cubic-bezier(.2,.8,.2,1)}
@keyframes unified-tank-react{0%{transform:scale(.992) translateY(2px)}45%{transform:scale(1.008) translateY(-2px)}100%{transform:none}}
.svg-wave{transform-origin:center;will-change:transform}
.svg-wave-back{animation:svg-wave-back 5.6s ease-in-out infinite alternate}
.svg-wave-front{animation:svg-wave-front 4.3s ease-in-out infinite alternate}
@keyframes svg-wave-back{to{transform:translateX(20px) scaleY(.82)}}
@keyframes svg-wave-front{to{transform:translateX(-22px) scaleY(1.14)}}
.svg-business-particle{fill:#e9fcff;fill-opacity:.58;text-anchor:middle;animation:svg-particle-rise linear infinite;will-change:transform,opacity}
@keyframes svg-particle-rise{0%{transform:translateY(22px);opacity:0}20%{opacity:.7}80%{opacity:.5}100%{transform:translateY(-54px);opacity:0}}
.svg-bubble{animation:svg-bubble-rise 4.8s ease-in infinite;transform-origin:center;will-change:transform,opacity}
.svg-bubble-2{animation-delay:.7s}.svg-bubble-3{animation-delay:1.5s}.svg-bubble-4{animation-delay:2.1s}.svg-bubble-5{animation-delay:2.8s}.svg-bubble-6{animation-delay:3.3s}.svg-bubble-7{animation-delay:3.8s}
@keyframes svg-bubble-rise{0%{transform:translateY(24px) scale(.7);opacity:0}20%{opacity:.55}100%{transform:translateY(-90px) scale(1.15);opacity:0}}
.svg-glass-sweep{animation:svg-glass-sweep 8.5s ease-in-out infinite;transform-origin:center;will-change:transform,opacity}
@keyframes svg-glass-sweep{0%,68%,100%{opacity:.08;transform:translateX(-18px)}78%{opacity:.55}90%{opacity:.12;transform:translateX(72px)}}
.unified-plaque{filter:drop-shadow(0 2px 2px rgba(0,0,0,.45))}
.tank-floor-glow-svg{animation:floor-glow-pulse 5s ease-in-out infinite}
@keyframes floor-glow-pulse{50%{opacity:.7;transform:scaleX(.92);transform-origin:center}}
.unified-tank-stage .tank-proof-line{bottom:0}
@media(max-height:850px) and (min-width:851px){
  .unified-tank-stage{min-height:535px}
  .unified-tank-wrap{inset:36px 0 0}
  .unified-tank-svg{width:min(405px,94%)}
}
@media(max-width:540px){
  .unified-tank-stage{min-height:535px}
  .unified-tank-wrap{inset:48px 0 0}
  .unified-tank-svg{width:min(390px,98%)}
}
@media(prefers-reduced-motion:reduce){
  .svg-wave,.svg-business-particle,.svg-bubble,.svg-glass-sweep,.tank-floor-glow-svg,.unified-tank-stage.is-changing .tank-unified-assembly{animation:none!important}
}

/* Launch-candidate polish: legal brand name, cookie controls, and mobile tank reliability. */
.brand span{display:inline-flex;align-items:baseline;gap:7px}.brand span small{font-size:.48em;letter-spacing:.13em;color:#91b9e8}
.footer-brand small{font-size:.48em;letter-spacing:.12em;color:#83b6ee}
.break-even-marker-svg{pointer-events:none}.break-even-label-svg{text-rendering:geometricPrecision}
.cookie-consent{position:fixed;z-index:1000;left:50%;bottom:18px;transform:translateX(-50%);width:min(920px,calc(100% - 28px));display:flex;align-items:center;justify-content:space-between;gap:22px;padding:18px 20px;border:1px solid rgba(89,177,255,.4);border-radius:18px;background:linear-gradient(145deg,rgba(5,15,34,.98),rgba(7,27,58,.98));box-shadow:0 18px 65px rgba(0,0,0,.58),0 0 25px rgba(25,137,255,.13);backdrop-filter:blur(16px)}
.cookie-consent-copy{max-width:620px}.cookie-consent-copy strong{display:block;margin-bottom:5px;font-family:"Space Grotesk",sans-serif;font-size:17px}.cookie-consent-copy p{margin:0;color:#b8c9dd;font-size:12px;line-height:1.55}.cookie-consent-copy a{color:#58d8ff;text-decoration:underline;text-underline-offset:3px}.cookie-consent-actions{display:flex;gap:9px;flex-shrink:0}.cookie-consent .button{min-height:42px;white-space:nowrap}
@media(max-width:850px){
  .recovery-hero{overflow:hidden;contain:layout}
  .recovery-hero-inner{width:100%;min-width:0}
  .unified-tank-stage{width:100%;min-width:0;min-height:545px}
  .unified-tank-wrap{inset:44px -4px 0;overflow:visible}
  .unified-tank-svg{width:min(430px,100%);max-width:100%;overflow:visible}
  .tank-value-crown{max-width:calc(100% - 20px)}
}
@media(max-width:540px){
  .recovery-hero{padding-left:12px;padding-right:12px}
  .signature-tank-stage.unified-tank-stage{min-height:505px}
  .unified-tank-wrap{inset:46px -12px 0}
  .unified-tank-svg{width:100%;max-width:400px}
  .tank-value-crown{min-width:0;width:min(300px,calc(100% - 18px));padding:10px 66px 10px 15px}
  .tank-value-crown small{font-size:9px}.tank-value-crown strong{font-size:31px}.tank-value-crown span{right:16px;top:24px}
  .tank-proof-line{font-size:9px;text-align:center;width:100%;padding:0 8px}
  .cookie-consent{bottom:10px;display:block;padding:16px}.cookie-consent-actions{margin-top:13px;display:grid;grid-template-columns:1fr 1fr}.cookie-consent .button{width:100%;justify-content:center;padding-left:10px;padding-right:10px}
}
@media(max-width:380px){
  .unified-tank-wrap{inset:52px -18px 0}.unified-tank-svg{max-width:370px}
  .break-even-label-svg text{font-size:9px}
  .cookie-consent-actions{grid-template-columns:1fr}
}

/* Mobile Recovery Hero layout correction: controls first, fully centered tank, no horizontal crop. */
@media(max-width:850px){
  .recovery-hero{overflow-x:clip;contain:none}
  .recovery-hero-inner{display:flex;flex-direction:column;gap:20px;align-items:stretch}
  .recovery-hero-copy{order:1}
  .recovery-control-panel{order:2;max-width:620px;margin:0 auto}
  .signature-tank-stage.unified-tank-stage{order:3;align-self:center;width:100%;max-width:520px;overflow:visible}
  .unified-tank-wrap{left:0;right:0;overflow:visible}
  .unified-tank-svg{display:block;width:min(430px,94vw);max-width:100%;margin:0 auto}
}

@media(max-width:540px){
  .recovery-hero{padding-left:14px;padding-right:14px}
  .recovery-hero-inner{gap:16px}
  .recovery-control-panel{padding:15px 13px;border-radius:16px}
  .control-heading h3{font-size:23px}
  .control-heading p{font-size:11px}
  .recovery-control-panel label{margin:8px 0}
  .recovery-control-panel select,.recovery-control-panel input[type=number]{height:40px}
  .hero-theme-picker{margin:12px 0}
  .hero-result-grid{grid-template-columns:repeat(3,1fr);gap:6px}
  .hero-result-grid div{min-height:70px;padding:8px 3px}
  .hero-result-grid strong{font-size:14px}
  .signature-tank-stage.unified-tank-stage{min-height:500px;max-width:100%;margin-top:2px}
  .unified-tank-wrap{inset:44px 0 0}
  .unified-tank-svg{width:min(360px,94vw);max-width:100%}
}

@media(max-width:380px){
  .unified-tank-wrap{inset:48px 0 0}
  .unified-tank-svg{width:min(338px,94vw);max-width:100%}
  .hero-result-grid{grid-template-columns:1fr}
}


/* Mobile Recovery Tank animation reliability.
   The tank artwork and geometry remain unchanged; these rules only ensure its
   existing motion continues on phone browsers, even when a browser reports
   reduced-motion unexpectedly. */
@media (max-width:850px){
  .unified-tank-stage .svg-wave-back{animation:svg-wave-back 5.6s ease-in-out infinite alternate!important}
  .unified-tank-stage .svg-wave-front{animation:svg-wave-front 4.3s ease-in-out infinite alternate!important}
  .unified-tank-stage .svg-business-particle{animation-name:svg-particle-rise!important;animation-timing-function:linear!important;animation-iteration-count:infinite!important}
  .unified-tank-stage .svg-bubble{animation:svg-bubble-rise 4.8s ease-in infinite!important}
  .unified-tank-stage .svg-bubble-2{animation-delay:.7s!important}.unified-tank-stage .svg-bubble-3{animation-delay:1.5s!important}.unified-tank-stage .svg-bubble-4{animation-delay:2.1s!important}.unified-tank-stage .svg-bubble-5{animation-delay:2.8s!important}.unified-tank-stage .svg-bubble-6{animation-delay:3.3s!important}.unified-tank-stage .svg-bubble-7{animation-delay:3.8s!important}
  .unified-tank-stage .svg-glass-sweep{animation:svg-glass-sweep 8.5s ease-in-out infinite!important}
  .unified-tank-stage .tank-floor-glow-svg{animation:floor-glow-pulse 5s ease-in-out infinite!important}
  .unified-tank-stage.is-changing .tank-unified-assembly{animation:unified-tank-react .7s cubic-bezier(.2,.8,.2,1)!important}
}

/* Receipt particles use native SVG timing for reliable motion in mobile browsers.
   The text artwork, positions, size, color, and travel path are unchanged. */
.svg-business-particle-wrap{pointer-events:none}
.svg-business-particle-wrap .svg-business-particle{animation:none!important;opacity:1}

/* Recovery Simulator plan selector: Starter and Pro only. */
.plan-selector{border:0;padding:0;margin:0 0 15px}
.plan-selector legend{margin-bottom:8px;color:#b9c8dc;font-size:11px}
.plan-selector-options{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.plan-selector-options button{display:grid;gap:3px;min-height:62px;padding:10px 12px;border:1px solid rgba(107,162,255,.2);border-radius:12px;background:rgba(4,14,35,.78);color:#aebed2;text-align:left;cursor:pointer;transition:transform .2s,border-color .2s,box-shadow .2s,background .2s}
.plan-selector-options button:hover{transform:translateY(-1px);border-color:color-mix(in srgb,var(--tank-light) 70%,transparent)}
.plan-selector-options button.selected{color:#fff;border-color:var(--tank-light);background:linear-gradient(145deg,color-mix(in srgb,var(--tank-mid) 22%,#07152f),#07152f);box-shadow:0 0 20px color-mix(in srgb,var(--tank-mid) 22%,transparent),inset 0 1px rgba(255,255,255,.06)}
.plan-selector-options button span{font-size:12px;font-weight:800}
.plan-selector-options button strong{font-family:"Space Grotesk",sans-serif;font-size:13px;color:var(--tank-light)}
.plan-selector-description{min-height:30px;margin:8px 2px 0;color:#91a5be;font-size:10px;line-height:1.45}
.plan-selector-description strong{color:#dcecff}
@media(max-width:380px){.plan-selector-options{grid-template-columns:1fr}.plan-selector-options button{min-height:54px}}

/* Phase 6: premium homepage experience */
.success-result-card{position:relative;overflow:hidden;animation:resultSuccessPulse 1.25s ease-out .72s 1}
.success-result-card::after{content:"";position:absolute;inset:-1px;border-radius:inherit;pointer-events:none;opacity:0;box-shadow:inset 0 0 0 1px rgba(72,239,188,.65),0 0 28px rgba(72,239,188,.32);animation:resultSuccessRing 1.25s ease-out .72s 1}
@keyframes resultSuccessPulse{0%,100%{transform:scale(1)}45%{transform:scale(1.025);background:rgba(20,75,67,.5)}}
@keyframes resultSuccessRing{0%,100%{opacity:0}35%{opacity:1}75%{opacity:.35}}

.centered-heading{text-align:center;margin-inline:auto;max-width:850px}
.centered-heading p{margin-inline:auto}

.product-showcase{display:grid;gap:16px;margin-top:22px}
.product-showcase-tabs{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none}
.product-showcase-tabs::-webkit-scrollbar{display:none}
.product-showcase-tabs button{flex:0 0 auto;border:1px solid rgba(117,169,255,.17);border-radius:999px;background:#09162b;color:#8fa4c0;padding:9px 14px;font:700 10px/1 "Space Grotesk",sans-serif;cursor:pointer;transition:.25s}
.product-showcase-tabs button.active,.product-showcase-tabs button:hover{color:#fff;border-color:#35a8ff;background:rgba(28,112,214,.22);box-shadow:0 0 20px rgba(38,147,255,.16)}
.showcase-screen{display:grid;grid-template-columns:58px 1fr;min-height:405px;border:1px solid rgba(137,182,255,.14);background:#070d19;border-radius:18px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.32);animation:showcaseFade .55s ease both}
@keyframes showcaseFade{from{opacity:.15;transform:translateY(7px)}to{opacity:1;transform:none}}
.showcase-sidebar{background:#091323;border-right:1px solid rgba(125,167,226,.1);display:flex;flex-direction:column;align-items:center;gap:22px;padding:18px 0}
.showcase-sidebar span{width:20px;height:5px;border-radius:5px;background:#25344b}.showcase-sidebar span.active{background:#39aaff;box-shadow:0 0 14px rgba(57,170,255,.7)}
.showcase-main{padding:30px;display:grid;grid-template-columns:1fr 190px;grid-template-rows:auto 1fr;gap:22px}
.showcase-head{grid-column:1/-1;display:flex;justify-content:space-between;gap:20px;align-items:flex-start;border-bottom:1px solid rgba(138,175,225,.1);padding-bottom:22px}
.showcase-head div{display:grid;gap:6px}.showcase-head small{color:#48aaff;text-transform:uppercase;letter-spacing:.13em;font-size:9px}.showcase-head strong{font:700 24px/1.15 "Space Grotesk",sans-serif}
.showcase-live{font-size:9px;color:#46e7b6;border:1px solid rgba(70,231,182,.3);border-radius:999px;padding:7px 10px;background:rgba(70,231,182,.08)}
.showcase-metric{align-self:stretch;border:1px solid rgba(111,170,255,.13);border-radius:16px;background:linear-gradient(150deg,rgba(12,35,72,.9),rgba(6,18,40,.8));padding:25px;display:flex;flex-direction:column;justify-content:center}
.showcase-metric small{color:#92a5bf}.showcase-metric strong{font:700 54px/1 "Space Grotesk",sans-serif;margin:10px 0;color:#fff}.showcase-metric span{color:#48efbc;font-size:10px}
.showcase-list{display:grid;gap:10px;align-content:center}.showcase-list div{border:1px solid rgba(115,161,224,.12);border-radius:12px;background:#0b1526;padding:14px}.showcase-list span{display:block;color:#c8d7e9;font-size:11px;margin-bottom:9px}.showcase-list i{display:block;height:5px;border-radius:8px;background:linear-gradient(90deg,#237fe6,#44d6e8)}
.showcase-caption{margin:0;text-align:center;color:#8192aa;font-size:11px}

.revenue-loss-section{padding-top:120px}.revenue-loss-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:42px}
.revenue-loss-grid article{position:relative;min-height:270px;padding:30px;border:1px solid rgba(115,166,237,.14);border-radius:22px;background:linear-gradient(145deg,rgba(12,28,55,.82),rgba(5,13,29,.78));overflow:hidden}
.revenue-loss-grid article::after{content:"";position:absolute;width:180px;height:180px;right:-70px;bottom:-90px;border-radius:50%;background:radial-gradient(circle,rgba(40,134,255,.17),transparent 70%)}
.revenue-loss-grid span{display:inline-grid;place-items:center;width:42px;height:42px;border-radius:12px;color:#65c7ff;background:rgba(47,144,245,.12);border:1px solid rgba(82,170,255,.22);font:800 11px "Space Grotesk"}
.revenue-loss-grid h3{font:700 25px/1.15 "Space Grotesk";margin:38px 0 12px}.revenue-loss-grid p{color:var(--muted);line-height:1.7;margin:0}
.revenue-loss-solution{margin-top:18px;border:1px solid rgba(67,218,183,.24);border-radius:18px;background:rgba(18,66,61,.22);padding:22px 28px;display:flex;align-items:center;justify-content:center;gap:16px;text-align:center}
.revenue-loss-solution strong{color:#56efbd;font:700 18px "Space Grotesk"}.revenue-loss-solution span{color:#c6d8e7}

.commit-action-section{padding-top:125px}.commit-flow-stage{margin-top:40px;border:1px solid rgba(110,165,240,.15);border-radius:28px;background:radial-gradient(circle at 50% 0,rgba(24,112,220,.18),transparent 45%),linear-gradient(145deg,#071226,#040a16);padding:30px;overflow:hidden}
.commit-flow-brand{text-align:center;display:grid;gap:7px;margin-bottom:20px}.commit-flow-brand .kicker{margin:0}.commit-flow-brand strong{font:700 17px/1.35 "Space Grotesk";color:#dbeeff;min-height:24px}
.industry-rail{display:flex;justify-content:center;gap:9px;overflow:hidden;margin-bottom:20px}.industry-rail span{flex:0 0 auto;border:1px solid rgba(113,160,225,.13);border-radius:999px;padding:8px 12px;color:#64758d;font-size:9px;transition:.4s}.industry-rail span.active{color:#fff;border-color:#38b8ff;background:rgba(44,151,233,.18);box-shadow:0 0 18px rgba(39,163,255,.16)}
.commit-flow-theater{position:relative;display:grid;place-items:center;min-height:570px;max-width:920px;margin:0 auto;overflow:hidden}.flow-phone-wrap{position:relative;z-index:4;display:grid;justify-items:center;gap:12px;transition:transform .8s cubic-bezier(.22,.8,.22,1),opacity .55s ease}.flow-phone-role{padding:7px 14px;border:1px solid rgba(105,163,238,.2);border-radius:999px;background:rgba(7,19,39,.82);color:#b9d5ee;font:700 10px "Space Grotesk";letter-spacing:.12em;text-transform:uppercase}.demo-phone{position:relative;width:285px;height:535px;border:7px solid #344358;border-radius:45px;background:linear-gradient(#dcecff,#f4f8fb);box-shadow:0 32px 90px rgba(0,0,0,.46),inset 0 0 0 2px #0b1320;overflow:hidden;color:#0b1828}.phone-speaker{position:absolute;top:11px;left:50%;transform:translateX(-50%);width:84px;height:21px;border-radius:0 0 14px 14px;background:#101924;z-index:8}.phone-status{height:48px;padding:17px 18px 0;display:flex;justify-content:space-between;font-size:8px;font-weight:800;position:relative;z-index:7}.flow-phone{background:linear-gradient(160deg,#0b1b31,#06101e);color:#eef7ff;transition:background .45s ease,box-shadow .45s ease}.flow-screen{position:absolute;inset:48px 0 0;opacity:0;transform:translateY(18px) scale(.98);transition:opacity .5s ease,transform .65s cubic-bezier(.2,.8,.2,1);pointer-events:none}.business-app-head{display:grid;gap:5px;padding:28px 19px 16px}.business-app-head small{font-size:7px;letter-spacing:.13em;color:#52b9ff}.business-app-head strong{font:700 17px "Space Grotesk"}.business-request-form{display:grid;gap:10px;padding:0 14px}.business-request-form label{display:grid;gap:5px;padding:12px;border:1px solid rgba(121,175,241,.13);border-radius:12px;background:rgba(13,34,61,.78)}.business-request-form label span{font-size:8px;color:#7f96b2}.business-request-form label strong{font-size:12px}.business-send-button{margin-top:4px;border:0;border-radius:11px;background:linear-gradient(135deg,#1b8cff,#1265d2);color:white;padding:13px;font:800 10px "Space Grotesk";box-shadow:0 12px 25px rgba(15,108,222,.25)}
.customer-message-screen{padding:45px 18px;color:#0b1828}.phone-notification-label{display:block;text-align:center;color:#6d829b;font-size:8px;font-weight:800;letter-spacing:.14em;margin-bottom:14px}.sms-notification{border-radius:18px;background:rgba(255,255,255,.98);padding:17px;box-shadow:0 12px 35px rgba(27,53,87,.18)}.sms-notification small{color:#326da8;font-size:7px;letter-spacing:.12em}.sms-notification strong{display:block;font-size:14px;margin:5px 0}.sms-notification p{font-size:11px;line-height:1.45;color:#4d5b6b}.sms-notification>div{display:flex;justify-content:space-between;align-items:center;margin-top:14px}.sms-notification span{font:800 17px "Space Grotesk"}.sms-notification button{border:0;border-radius:9px;background:#116ddd;color:#fff;padding:9px 11px;font-weight:800;font-size:9px}
.customer-pay-screen{padding:42px 14px;color:#0b1828}.customer-pay-state{position:relative;display:grid;gap:13px;text-align:left;background:rgba(255,255,255,.98);border-radius:18px;padding:19px;box-shadow:0 12px 35px rgba(27,53,87,.15);transition:opacity .5s ease,transform .5s ease}.customer-pay-state>small{color:#326da8;font-size:7px;letter-spacing:.12em}.customer-pay-state>strong{font:800 32px "Space Grotesk";text-align:center}.customer-pay-state>p{text-align:center;margin:-6px 0 5px;color:#627082;font-size:11px}.payment-card-row{display:flex;justify-content:space-between;border:1px solid #cad7e6;border-radius:10px;padding:12px;font-size:11px;color:#44566b}.payment-card-row i{font-style:normal;font-weight:900;color:#1e5da6}.payment-submit{position:relative;border:0;border-radius:10px;background:#116ddd;color:#fff;padding:13px;font-weight:900;font-size:11px;box-shadow:0 8px 20px rgba(17,109,221,.25)}.tap-ripple{position:absolute;right:38px;bottom:28px;width:18px;height:18px;border-radius:50%;border:2px solid rgba(17,109,221,.65);animation:tapPay 5s ease infinite}.flow-payment-success{position:absolute;inset:90px 20px auto;display:grid;justify-items:center;text-align:center;gap:9px;opacity:0;transform:scale(.88);transition:opacity .5s ease,transform .5s ease}.paid-check{display:grid;place-items:center;width:62px;height:62px;border-radius:50%;background:#1bb78e;color:#fff;font-size:29px;box-shadow:0 0 30px rgba(27,183,142,.35)}.flow-payment-success strong{font:800 20px "Space Grotesk"}.flow-payment-success p{margin:0;color:#5e7186;font-size:11px}.phase-customer-pay .flow-payment-success{animation:paySuccessReveal 5s ease forwards}.phase-customer-pay .customer-pay-state{animation:checkoutFade 5s ease forwards}
.business-paid-screen{color:#eef7ff}.business-paid-state{position:absolute;left:14px;right:14px;top:105px;display:grid;justify-items:center;text-align:center;gap:8px}.business-paid-state small{font-size:7px;letter-spacing:.14em;color:#4ce1b5}.business-paid-state strong{font:800 38px "Space Grotesk"}.business-paid-state p{margin:0;color:#98abc0;font-size:11px}.business-paid-state em{font-style:normal;color:#4ce1b5;font-size:9px;border-radius:999px;padding:7px 10px;background:rgba(27,183,142,.1)}
.phase-business-create .business-create-screen,.phase-customer-message .customer-message-screen,.phase-customer-pay .customer-pay-screen,.phase-business-paid .business-paid-screen{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}.phase-customer-message .flow-phone,.phase-customer-pay .flow-phone{background:linear-gradient(#dcecff,#f4f8fb);color:#0b1828}.phase-customer-message .flow-phone{animation:phoneBuzz .58s ease .75s}.phase-business-paid .flow-phone{box-shadow:0 32px 90px rgba(0,0,0,.46),inset 0 0 0 2px #0b1320,0 0 52px rgba(48,225,173,.2)}
.phase-sms-flight .flow-phone-wrap{transform:translateX(-150%);opacity:0}.phase-confirm-flight .flow-phone-wrap{transform:translateX(150%);opacity:0}.phase-customer-message .flow-phone-wrap,.phase-customer-pay .flow-phone-wrap{animation:phoneEnterRight .85s cubic-bezier(.22,.8,.22,1) both}.phase-business-paid .flow-phone-wrap{animation:phoneEnterLeft .85s cubic-bezier(.22,.8,.22,1) both}
.flow-travel-line{position:absolute;left:12%;right:12%;top:51%;height:1px;background:linear-gradient(90deg,transparent,rgba(70,183,255,.24),transparent);opacity:0}.flying-sms,.flying-confirmation{position:absolute;z-index:6;top:45%;left:12%;display:grid;place-items:center;opacity:0}.flying-sms{width:58px;height:38px;border-radius:18px 18px 18px 5px;background:linear-gradient(135deg,#37bfff,#176fe2);color:#fff;box-shadow:0 0 28px rgba(48,174,255,.55);font-weight:900;letter-spacing:3px}.flying-sms::after{content:"";position:absolute;left:7px;bottom:-6px;border:7px solid transparent;border-top-color:#2189e8;transform:rotate(18deg)}.flying-confirmation{width:48px;height:48px;border-radius:50%;background:#25c893;color:white;font-size:23px;box-shadow:0 0 32px rgba(37,200,147,.55)}.phase-sms-flight .flow-travel-line,.phase-confirm-flight .flow-travel-line{opacity:1}.phase-sms-flight .flying-sms{animation:smsAcross 1.7s cubic-bezier(.32,.05,.25,1) forwards}.phase-confirm-flight .flying-confirmation{animation:confirmAcross 1.7s cubic-bezier(.32,.05,.25,1) forwards}
.commit-flow-progress{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:820px;margin:20px auto 0}.commit-flow-progress button{display:grid;grid-template-columns:auto 1fr;align-items:center;gap:9px;border:1px solid rgba(105,157,220,.12);border-radius:12px;background:rgba(6,17,34,.6);padding:10px;text-align:left;color:#60758e}.commit-flow-progress button span{display:grid;place-items:center;width:25px;height:25px;border-radius:50%;background:#13243b;font:800 9px "Space Grotesk"}.commit-flow-progress button small{font-size:8px;line-height:1.35}.commit-flow-progress button.active{color:#dff2ff;border-color:rgba(59,178,255,.35);background:rgba(19,80,137,.2)}.commit-flow-progress button.active span{background:#198ee7;color:#fff;box-shadow:0 0 16px rgba(25,142,231,.35)}.commit-flow-progress button.complete{color:#8edfc5}.commit-flow-progress button.complete span{background:#168b6c;color:#fff}
@keyframes phoneEnterRight{0%{transform:translateX(145%);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes phoneEnterLeft{0%{transform:translateX(-145%);opacity:0}100%{transform:translateX(0);opacity:1}}@keyframes smsAcross{0%{left:13%;top:54%;opacity:0;transform:translate(-50%,-50%) scale(.72) rotate(-5deg)}12%{opacity:1}50%{top:39%;transform:translate(-50%,-50%) scale(1) rotate(2deg)}88%{opacity:1}100%{left:87%;top:49%;opacity:0;transform:translate(-50%,-50%) scale(.82) rotate(4deg)}}@keyframes confirmAcross{0%{left:87%;top:50%;opacity:0;transform:translate(-50%,-50%) scale(.65)}12%{opacity:1}50%{top:40%;transform:translate(-50%,-50%) scale(1.08)}88%{opacity:1}100%{left:13%;top:50%;opacity:0;transform:translate(-50%,-50%) scale(.75)}}@keyframes phoneBuzz{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px) rotate(-.4deg)}50%{transform:translateX(4px) rotate(.4deg)}75%{transform:translateX(-2px)}}@keyframes tapPay{0%,38%{opacity:0;transform:scale(.55)}48%{opacity:1;transform:scale(.8)}66%{opacity:0;transform:scale(2.4)}100%{opacity:0}}@keyframes checkoutFade{0%,64%{opacity:1;transform:scale(1)}78%,100%{opacity:0;transform:scale(.96)}}@keyframes paySuccessReveal{0%,68%{opacity:0;transform:scale(.82)}82%,100%{opacity:1;transform:scale(1)}}

.faq-section{padding-top:125px}.faq-list{max-width:930px;margin:42px auto 0;display:grid;gap:10px}.faq-list details{border:1px solid rgba(112,163,231,.14);border-radius:15px;background:linear-gradient(145deg,rgba(10,25,50,.78),rgba(5,13,28,.7));overflow:hidden}.faq-list summary{list-style:none;cursor:pointer;padding:20px 22px;display:flex;justify-content:space-between;gap:20px;align-items:center;font:700 15px "Space Grotesk"}.faq-list summary::-webkit-details-marker{display:none}.faq-list summary span{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:rgba(41,137,238,.12);color:#55bfff;transition:.25s}.faq-list details[open] summary span{transform:rotate(45deg);background:rgba(65,222,182,.12);color:#4ce4b7}.faq-list details p{margin:0;padding:0 22px 22px;color:#98aac0;line-height:1.7;max-width:800px}

@media(max-width:900px){
  .showcase-main{grid-template-columns:1fr;padding:23px}.showcase-head{grid-column:auto}.showcase-list{grid-template-columns:repeat(3,1fr)}
  .revenue-loss-grid{grid-template-columns:1fr}.revenue-loss-grid article{min-height:auto}
  .commit-flow-theater{min-height:555px}.demo-phone{width:270px;height:520px}.industry-rail{justify-content:flex-start;overflow-x:auto;scrollbar-width:none}
}
@media(max-width:600px){
  .showcase-screen{grid-template-columns:40px 1fr;min-height:390px}.showcase-main{padding:18px;gap:14px}.showcase-head strong{font-size:17px}.showcase-metric strong{font-size:39px}.showcase-list{grid-template-columns:1fr}.showcase-list div:nth-child(n+3){display:none}
  .revenue-loss-section,.commit-action-section,.faq-section{padding-top:82px}.revenue-loss-solution{display:grid;padding:20px}
  .commit-flow-stage{padding:20px 8px}.commit-flow-theater{min-height:520px}.demo-phone{width:min(252px,82vw);height:490px}.commit-flow-brand strong{font-size:14px;padding:0 10px}.commit-flow-progress{grid-template-columns:repeat(2,1fr);gap:7px;padding:0 4px}.commit-flow-progress button small{font-size:7px}.industry-rail{margin-bottom:14px}.flow-phone-role{font-size:9px}.flow-travel-line{left:4%;right:4%}
  .faq-list summary{padding:17px;font-size:13px}.faq-list details p{padding:0 17px 18px;font-size:13px}
}
@media(prefers-reduced-motion:reduce){.showcase-screen,.success-result-card,.success-result-card::after,.sms-notification{animation-duration:.01ms!important;animation-iteration-count:1!important}}

/* Commit Flow motion reliability: remounted phase elements + GPU-safe transforms */
.flow-phone-wrap,.flying-sms,.flying-confirmation{will-change:transform,opacity;backface-visibility:hidden;transform-style:preserve-3d}
.phase-sms-flight .flow-phone-wrap{animation:flowPhoneExitLeft .9s cubic-bezier(.4,0,.2,1) both}
.phase-confirm-flight .flow-phone-wrap{animation:flowPhoneExitRight .9s cubic-bezier(.4,0,.2,1) both}
@keyframes flowPhoneExitLeft{0%{transform:translate3d(0,0,0);opacity:1}100%{transform:translate3d(-155%,0,0);opacity:0}}
@keyframes flowPhoneExitRight{0%{transform:translate3d(0,0,0);opacity:1}100%{transform:translate3d(155%,0,0);opacity:0}}

@media(max-width:600px){
  .commit-flow-theater{min-height:535px;isolation:isolate}
  .flow-phone-wrap{width:100%;transform-origin:center center}
  .phase-business-create .flow-phone-wrap{animation:mobilePhoneEnterLeft .85s cubic-bezier(.22,.8,.22,1) both}
  .phase-customer-message .flow-phone-wrap,.phase-customer-pay .flow-phone-wrap{animation:mobilePhoneEnterRight .9s cubic-bezier(.22,.8,.22,1) both}
  .phase-business-paid .flow-phone-wrap{animation:mobilePhoneEnterLeft .9s cubic-bezier(.22,.8,.22,1) both}
  .phase-sms-flight .flow-phone-wrap{animation:mobilePhoneExitLeft .85s cubic-bezier(.4,0,.2,1) both}
  .phase-confirm-flight .flow-phone-wrap{animation:mobilePhoneExitRight .85s cubic-bezier(.4,0,.2,1) both}
  .phase-sms-flight .flying-sms{animation:mobileSmsAcross 1.7s cubic-bezier(.32,.05,.25,1) both}
  .phase-confirm-flight .flying-confirmation{animation:mobileConfirmAcross 1.7s cubic-bezier(.32,.05,.25,1) both}
  .phase-customer-message .flow-phone{animation:mobilePhoneBuzz .62s ease .78s both}
  .phase-customer-pay .tap-ripple{animation:tapPay 5s ease both}
  .phase-customer-pay .flow-payment-success{animation:paySuccessReveal 5s ease both}
  .phase-customer-pay .customer-pay-state{animation:checkoutFade 5s ease both}
  .flying-sms{left:7%;top:47%;width:52px;height:35px}
  .flying-confirmation{left:93%;top:48%;width:45px;height:45px}
}
@keyframes mobilePhoneEnterLeft{0%{transform:translate3d(-115vw,0,0);opacity:0}100%{transform:translate3d(0,0,0);opacity:1}}
@keyframes mobilePhoneEnterRight{0%{transform:translate3d(115vw,0,0);opacity:0}100%{transform:translate3d(0,0,0);opacity:1}}
@keyframes mobilePhoneExitLeft{0%{transform:translate3d(0,0,0);opacity:1}100%{transform:translate3d(-115vw,0,0);opacity:0}}
@keyframes mobilePhoneExitRight{0%{transform:translate3d(0,0,0);opacity:1}100%{transform:translate3d(115vw,0,0);opacity:0}}
@keyframes mobileSmsAcross{0%{left:5%;top:54%;opacity:0;transform:translate3d(-50%,-50%,0) scale(.7) rotate(-6deg)}12%{opacity:1}50%{left:50%;top:38%;opacity:1;transform:translate3d(-50%,-50%,0) scale(1.04) rotate(2deg)}88%{opacity:1}100%{left:95%;top:49%;opacity:0;transform:translate3d(-50%,-50%,0) scale(.82) rotate(5deg)}}
@keyframes mobileConfirmAcross{0%{left:95%;top:50%;opacity:0;transform:translate3d(-50%,-50%,0) scale(.65)}12%{opacity:1}50%{left:50%;top:39%;opacity:1;transform:translate3d(-50%,-50%,0) scale(1.08)}88%{opacity:1}100%{left:5%;top:50%;opacity:0;transform:translate3d(-50%,-50%,0) scale(.75)}}
@keyframes mobilePhoneBuzz{0%,100%{transform:translate3d(0,0,0) rotate(0)}25%{transform:translate3d(-5px,0,0) rotate(-.6deg)}50%{transform:translate3d(5px,0,0) rotate(.6deg)}75%{transform:translate3d(-3px,0,0) rotate(-.3deg)}}


/* Commit v1.2 — SMS Consent & Messaging Policy */
.sms-policy-page{max-width:1180px;margin:auto;padding:0 24px 120px}.legal-center-nav{min-height:66px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);color:#8fa0b8;font-size:12px}.legal-center-nav>span{font-weight:800;letter-spacing:.12em;text-transform:uppercase}.legal-center-nav div{display:flex;gap:20px}.legal-center-nav a.active,.legal-center-nav a:hover{color:#5ca9ff}.sms-policy-hero{padding:105px 0 80px;text-align:center;border-bottom:1px solid var(--line)}.sms-policy-hero h1{font:700 clamp(52px,7vw,86px)/.98 "Space Grotesk";letter-spacing:-.06em;margin:18px 0 26px}.sms-policy-hero h1 em{font-style:normal;background:linear-gradient(100deg,#fff,#31c5ff 55%,#2477ff);-webkit-background-clip:text;color:transparent}.sms-policy-hero>p:not(.kicker){max-width:760px;margin:auto;color:#a9b6ca;font-size:18px;line-height:1.75}.sms-policy-badges{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:28px}.sms-policy-badges span{display:flex;align-items:center;gap:7px;padding:10px 14px;border:1px solid var(--line);border-radius:999px;background:rgba(9,20,38,.75);color:#a8bbd5;font-size:12px}.sms-summary-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:52px 0}.sms-summary-grid article{min-height:220px;padding:25px;border:1px solid var(--line);border-radius:18px;background:linear-gradient(145deg,rgba(12,25,46,.9),rgba(6,12,24,.82))}.sms-summary-grid svg{color:#4aa5ff}.sms-summary-grid h2{font:700 20px "Space Grotesk";margin:40px 0 10px}.sms-summary-grid p,.sms-policy-section p{color:#96a6bc;line-height:1.75}.sms-policy-section{padding:82px 0;border-top:1px solid var(--line)}.sms-policy-section>h2,.consent-product-demo h2,.message-example-section h2,.data-section h2,.sms-policy-contact h2{font:700 clamp(36px,5vw,54px)/1.05 "Space Grotesk";letter-spacing:-.045em;margin:12px 0 18px}.section-lead{max-width:760px}.consent-flow{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:38px}.consent-flow article{position:relative;padding:24px 20px;min-height:260px;border:1px solid var(--line);border-radius:16px;background:#081321}.consent-flow article:not(:last-child):after{content:"→";position:absolute;right:-13px;top:34px;z-index:3;color:#3d91ee;font-weight:800}.consent-flow article>span{color:#4d9cff;font:700 12px "Space Grotesk"}.consent-flow h3{font:700 18px "Space Grotesk";margin:44px 0 10px}.consent-flow p{font-size:12px}.consent-product-demo,.message-example-section,.data-section{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center}.compliance-note{display:flex;align-items:center;gap:9px;margin-top:25px;padding:13px 15px;border:1px solid rgba(49,217,155,.24);border-radius:11px;background:rgba(49,217,155,.06);color:#a8e2cc;font-size:12px}.consent-ui-card{padding:22px;border:1px solid rgba(72,154,255,.3);border-radius:20px;background:linear-gradient(145deg,#0c1728,#070d18);box-shadow:0 30px 80px rgba(0,0,0,.28)}.consent-ui-head{display:flex;align-items:center;gap:9px;padding-bottom:17px;border-bottom:1px solid var(--line);font:700 14px "Space Grotesk"}.consent-ui-card label{display:block;margin-top:16px;color:#8394aa;font-size:9px}.consent-ui-card input{width:100%;height:42px;margin-top:7px;padding:0 11px;border:1px solid var(--line);border-radius:9px;background:#050b15;color:#dbe8f7}.consent-checkbox{display:flex;gap:10px;margin:17px 0;padding:13px;border:1px solid rgba(56,153,255,.28);border-radius:10px;background:rgba(19,136,255,.07)}.consent-checkbox>span{width:20px;height:20px;display:grid;place-items:center;border-radius:5px;background:#1687ff;color:white;font-size:11px}.consent-checkbox p{margin:0!important}.consent-checkbox b{display:block;color:#eaf3ff;font-size:9px;line-height:1.5}.consent-checkbox small{display:block;margin-top:5px;color:#6f829b;font-size:7px}.consent-ui-card button{width:100%;height:46px;border:0;border-radius:9px;background:linear-gradient(100deg,#1767ff,#14a2ff);color:white;font-weight:800}.sms-phone{max-width:360px;margin:auto;padding:22px;border:8px solid #16243a;border-radius:30px;background:#edf5ff;color:#102038;box-shadow:0 25px 70px rgba(0,0,0,.3)}.sms-phone>span{font-size:11px;color:#63748a}.sms-phone p{margin:18px 0!important;padding:14px;border-radius:16px 16px 4px 16px;background:#177eff;color:white!important;font-size:13px;line-height:1.55}.sms-phone small{color:#50647d;line-height:1.5}.two-column-policy{display:grid;grid-template-columns:1fr 1fr;gap:18px}.two-column-policy article{padding:32px;border:1px solid rgba(49,217,155,.2);border-radius:18px;background:rgba(49,217,155,.04)}.two-column-policy .not-sent{border-color:rgba(255,108,126,.2);background:rgba(255,108,126,.04)}.two-column-policy h2{font:700 28px "Space Grotesk"}.two-column-policy li{margin:13px 0;color:#a7b6c9}.command-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.command-grid article{padding:26px;border:1px solid var(--line);border-radius:16px;background:#081321}.command-grid b{color:#53a9ff;letter-spacing:.12em}.responsibility-list{display:grid;grid-template-columns:1fr 1fr;gap:10px 25px;margin-top:28px}.responsibility-list p{display:flex;gap:9px;margin:0;padding:12px;border-bottom:1px solid rgba(137,182,255,.1)}.responsibility-list svg{flex:0 0 auto;color:#39d3a0}.enforcement-warning{margin-top:28px;padding:17px;border:1px solid rgba(255,184,76,.25);border-radius:12px;background:rgba(255,184,76,.06);color:#e5c491}.data-section aside{padding:28px;border:1px solid var(--line);border-radius:18px;background:#081321}.data-section aside h3{font:700 22px "Space Grotesk"}.data-section aside a{color:#5ca9ff}.sms-policy-contact{margin-top:40px;padding:50px;border:1px solid rgba(64,153,255,.28);border-radius:24px;text-align:center;background:radial-gradient(circle at 50% 0,rgba(22,120,255,.15),transparent 55%),#081321}.sms-policy-contact p{color:#9eacc0}.sms-policy-contact a{color:#5ca9ff}.sms-policy-contact>div{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;margin-top:25px}.footer-link-groups{display:flex!important;gap:50px!important}.footer-link-groups span{display:flex;flex-direction:column;gap:9px}.footer-link-groups b{color:#dce7f5;font-size:10px;text-transform:uppercase;letter-spacing:.1em}@media(max-width:900px){.sms-summary-grid{grid-template-columns:1fr 1fr}.consent-flow{grid-template-columns:1fr}.consent-flow article{min-height:auto}.consent-flow article:not(:last-child):after{content:"↓";right:auto;left:28px;top:auto;bottom:-18px}.consent-product-demo,.message-example-section,.data-section,.two-column-policy{grid-template-columns:1fr}.command-grid{grid-template-columns:1fr}.responsibility-list{grid-template-columns:1fr}.footer-link-groups{gap:25px!important}}@media(max-width:600px){.sms-policy-page{padding:0 18px 80px}.legal-center-nav{align-items:flex-start;flex-direction:column;padding:16px 0;gap:12px}.legal-center-nav div{gap:13px;flex-wrap:wrap}.sms-policy-hero{padding:75px 0 60px}.sms-summary-grid{grid-template-columns:1fr}.sms-policy-section{padding:60px 0}.sms-policy-contact{padding:32px 22px}.footer-link-groups{flex-direction:column}}

/* Recovery Collections homepage selector */
.recovery-collections-section{padding-top:90px}.collection-selector{max-width:920px;margin:28px auto 18px;display:flex;justify-content:center;gap:8px;flex-wrap:wrap}.collection-selector button{min-width:128px;min-height:48px;padding:8px 14px;border:1px solid rgba(95,158,238,.24);border-radius:12px;background:rgba(5,18,38,.72);color:#8ca1ba;font:700 12px "Space Grotesk",sans-serif;cursor:pointer;transition:.25s ease}.collection-selector button span{display:block;margin-top:2px;color:#51657d;font:500 8px Inter,sans-serif}.collection-selector button:hover:not([aria-disabled="true"]),.collection-selector button.active{border-color:#328dff;background:linear-gradient(135deg,rgba(19,82,170,.65),rgba(13,41,91,.9));color:#fff;transform:translateY(-2px)}.collection-selector button[aria-disabled="true"]{cursor:not-allowed;opacity:.58}
.collection-showcase-panel{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:minmax(240px,.75fr) minmax(430px,1.35fr) 190px;gap:26px;align-items:center;padding:30px;border:1px solid rgba(88,155,240,.22);border-radius:24px;background:radial-gradient(circle at 55% 45%,rgba(15,116,224,.13),transparent 34%),linear-gradient(145deg,rgba(8,24,50,.94),rgba(3,10,23,.98));overflow:hidden}.collection-copy h3{margin:8px 0 12px;font:700 30px "Space Grotesk",sans-serif}.collection-copy p{color:#96a8bd;line-height:1.7}.collection-copy ul{margin:18px 0;padding:0;list-style:none;display:grid;gap:9px}.collection-copy li{color:#d7e7f7;font-size:13px}.collection-copy li:before{content:"✓";margin-right:9px;color:#42d792}.collection-copy small{display:block;color:#667b94;line-height:1.55}.collection-badge{display:inline-flex;padding:6px 9px;border:1px solid rgba(70,168,255,.34);border-radius:999px;background:rgba(24,105,192,.13);color:#5ec5ff;font-size:9px;letter-spacing:.11em}.collection-preview-stage{min-height:500px;display:flex;align-items:center;justify-content:center}.collection-stats{display:grid;gap:10px}.collection-stats article{padding:15px;border:1px solid rgba(74,139,218,.2);border-radius:13px;background:rgba(6,20,39,.82)}.collection-stats span,.collection-stats strong{display:block}.collection-stats span{color:#6f849d;font-size:10px}.collection-stats strong{margin-top:8px;font:700 22px "Space Grotesk",sans-serif}.collection-signature-tank{transform:scale(.88);transform-origin:center}.collection-signature-tank .tank-value-crown{top:2px}
.restaurant-display-wrap{width:min(520px,100%);filter:drop-shadow(0 22px 32px rgba(0,0,0,.4))}.restaurant-case-top{padding:13px 18px;text-align:center;border:1px solid #8b96a0;border-bottom:0;border-radius:20px 20px 0 0;background:linear-gradient(90deg,#171c20,#aab2b8 18%,#262c31 39%,#d3d7da 52%,#252b30 68%,#9ca6ad 84%,#151a1e);box-shadow:inset 0 1px rgba(255,255,255,.45),0 0 28px rgba(255,145,25,.09)}.restaurant-case-top span,.restaurant-case-top strong{display:block;text-shadow:0 1px 2px #000}.restaurant-case-top span{color:#ffb34f;font-size:8px;letter-spacing:.16em}.restaurant-case-top strong{margin-top:4px;font:700 17px "Space Grotesk",sans-serif}.restaurant-case-body{height:370px;position:relative;overflow:hidden;padding:35px 25px 24px;border:4px solid #8b969e;border-top:2px solid #cbd2d6;background:linear-gradient(105deg,rgba(255,255,255,.12),transparent 23%,rgba(255,177,69,.04) 50%,rgba(255,255,255,.08) 79%,transparent),#160f0a;box-shadow:inset 0 0 55px rgba(255,137,24,.16),inset 18px 0 22px rgba(255,255,255,.035),inset -18px 0 22px rgba(255,255,255,.03)}.restaurant-case-body:after{content:"";position:absolute;inset:0;border-radius:1px;background:linear-gradient(116deg,transparent 7%,rgba(255,255,255,.12) 25%,transparent 40%);pointer-events:none}.restaurant-led{position:absolute;left:8%;right:8%;top:14px;height:8px;border-radius:999px;background:#ffc367;box-shadow:0 0 9px #ffb037,0 0 25px rgba(255,141,26,.7)}.restaurant-glass-reflection{position:absolute;top:34px;bottom:24px;left:9%;width:16%;transform:skewX(-10deg);border-radius:50%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.09),transparent);filter:blur(1px);pointer-events:none}.restaurant-shelves{height:100%;display:grid;grid-template-rows:repeat(3,1fr)}.restaurant-shelf{position:relative;z-index:2;display:flex;align-items:flex-end;justify-content:space-around;padding:0 12px 15px;border-bottom:5px solid #8a9297;box-shadow:0 5px 0 #272b2e,0 10px 16px rgba(0,0,0,.5)}.restaurant-item{width:70px;height:36px;position:relative;display:block;opacity:.1;transform:translateY(8px) scale(.82);transition:opacity .45s ease,transform .55s cubic-bezier(.2,.8,.2,1)}.restaurant-item.filled{opacity:1;transform:translateY(0) scale(1)}.restaurant-item>i{position:absolute;left:8%;right:8%;bottom:-5px;height:5px;border-radius:50%;background:rgba(0,0,0,.55);filter:blur(2px)}.restaurant-item.takeout-box{border:2px solid #d8c6a4;border-radius:4px 4px 7px 7px;background:linear-gradient(#f3e4c8,#bba47e)}.restaurant-item.takeout-box:before{content:"";position:absolute;left:5px;right:5px;top:-8px;height:11px;border:2px solid #dfcfb1;border-bottom:0;border-radius:5px 5px 0 0;background:#cab792}.restaurant-item.meal-tray{height:27px;margin-bottom:2px;border:2px solid #2d3337;border-radius:7px;background:linear-gradient(#4b5359,#1a1f22);box-shadow:inset 0 3px #d6d0bd}.restaurant-item.meal-tray:before{content:"";position:absolute;inset:4px 7px 6px;border-radius:4px;background:linear-gradient(90deg,#c87828 0 31%,#e6bd62 32% 63%,#7ea04d 64%)}.restaurant-item.paper-bag{width:48px;height:45px;border:2px solid #cda86b;border-radius:2px 2px 5px 5px;background:linear-gradient(90deg,#ad824c,#d3ad73 50%,#9c713e)}.restaurant-item.paper-bag:before{content:"";position:absolute;left:11px;right:11px;top:-9px;height:14px;border:2px solid #cda86b;border-bottom:0;border-radius:8px 8px 0 0}.restaurant-item.pastry-box{height:30px;border:2px solid #ded9cf;border-radius:5px;background:linear-gradient(#f5f2ea,#bcb6aa)}.restaurant-item.pastry-box:before{content:"";position:absolute;left:7px;right:7px;top:6px;height:11px;border-radius:2px;background:linear-gradient(90deg,#d98e33,#f0c062,#c9782d);box-shadow:inset 0 0 0 2px rgba(255,255,255,.35)}.restaurant-item.cup{width:34px;height:42px;margin-bottom:0;border:2px solid #e8e4dc;border-radius:2px 2px 9px 9px;background:linear-gradient(90deg,#ddd7cc,#fff,#bfb9af)}.restaurant-item.cup:before{content:"";position:absolute;left:-3px;right:-3px;top:-5px;height:7px;border-radius:5px;background:#272d31}.restaurant-item.cup:after{content:"";position:absolute;left:6px;right:6px;top:11px;height:11px;border-radius:3px;background:#a96d32}.restaurant-break-even{position:absolute;left:0;right:0;bottom:35%;z-index:6;border-top:2px dashed rgba(255,255,255,.58)}.restaurant-break-even span{position:absolute;right:8px;top:-22px;padding:4px 8px;border-radius:999px;background:#071426;color:#d8e8f7;font-size:8px}.restaurant-value{position:absolute;left:50%;top:49%;z-index:7;transform:translate(-50%,-50%);min-width:172px;padding:12px 15px;text-align:center;border:1px solid rgba(255,183,79,.34);border-radius:11px;background:rgba(4,13,26,.82);backdrop-filter:blur(7px)}.restaurant-value small,.restaurant-value strong{display:block}.restaurant-value small{color:#a9b8c7;font-size:9px}.restaurant-value strong{margin-top:3px;font:700 24px "Space Grotesk",sans-serif}.restaurant-heat{position:absolute;z-index:1;top:28px;width:28%;height:79%;border-left:2px solid rgba(255,190,92,.2);border-radius:50%;filter:blur(1px);animation:restaurantHeat 3.7s ease-in-out infinite}.restaurant-heat.heat-one{left:20%}.restaurant-heat.heat-two{left:49%;animation-delay:-1.2s}.restaurant-heat.heat-three{left:76%;animation-delay:-2.2s}.restaurant-case-base{height:72px;display:flex;align-items:center;justify-content:center;gap:34px;border:1px solid #727d85;border-radius:0 0 18px 18px;background:linear-gradient(90deg,#11161a,#5f6a72 18%,#171d21 43%,#6b767d 51%,#171d21 59%,#5e6870 82%,#101519);box-shadow:inset 0 1px rgba(255,255,255,.35)}.restaurant-case-base div{text-align:center}.restaurant-case-base b,.restaurant-case-base small{display:block}.restaurant-case-base b{font:700 15px Georgia}.restaurant-case-base small{font-size:8px;color:#d0a35f}.case-status-light{width:10px;height:10px;border-radius:50%;background:#ff991e;box-shadow:0 0 12px #ff8700}.restaurant-item.filled:nth-child(2n){animation:restaurantStock 4.8s ease-in-out infinite}.restaurant-item.filled:nth-child(3n){animation-delay:-1.7s}
@keyframes restaurantHeat{0%,100%{transform:translateY(20px) scaleX(.8);opacity:.04}50%{transform:translateY(-15px) scaleX(1.2);opacity:.34}}@keyframes restaurantStock{0%,100%{filter:brightness(1)}50%{filter:brightness(1.1)}}
@media(max-width:980px){.collection-showcase-panel{grid-template-columns:1fr 1.2fr}.collection-stats{grid-column:1/-1;grid-template-columns:repeat(3,1fr)}.collection-preview-stage{min-height:470px}.collection-signature-tank{transform:scale(.78)}}
@media(max-width:720px){.recovery-collections-section{padding-top:65px}.collection-showcase-panel{grid-template-columns:1fr;padding:19px}.collection-copy{text-align:center}.collection-copy ul{text-align:left;max-width:420px;margin:18px auto}.collection-preview-stage{min-height:410px}.collection-stats{grid-template-columns:1fr 1fr}.collection-stats article:last-child{grid-column:1/-1}.restaurant-case-body{height:310px;padding:32px 14px 18px}.restaurant-item{transform:translateY(8px) scale(.72)}.restaurant-item.filled{transform:translateY(0) scale(.84)}.restaurant-shelf{padding-inline:3px}.collection-signature-tank{transform:scale(.68);margin:-55px 0}.collection-selector button{min-width:104px}}

/* Restaurant Recovery Vessel — Kitchen Series */
.restaurant-vessel-stage{--vessel-light:#67e6ff;--vessel-mid:#168cff;--vessel-deep:#0738a8;position:relative;width:min(100%,560px);margin:auto;padding:10px 0 0;filter:drop-shadow(0 28px 38px rgba(0,0,0,.42))}.restaurant-vessel-crown{position:relative;z-index:3;width:min(78%,390px);margin:0 auto -22px;padding:13px 20px 15px;border:1px solid rgba(123,205,255,.32);border-radius:14px;background:linear-gradient(180deg,rgba(15,31,48,.97),rgba(4,12,22,.96));text-align:center;box-shadow:inset 0 1px 0 rgba(255,255,255,.09),0 13px 32px rgba(0,0,0,.34)}.restaurant-vessel-crown span{display:block;color:#6fe6ff;font:700 8px "Space Grotesk",sans-serif;letter-spacing:.18em}.restaurant-vessel-crown strong{display:block;margin-top:3px;color:#fff;font:700 18px "Space Grotesk",sans-serif}.restaurant-vessel-crown small{display:block;margin-top:3px;color:#778da4;font-size:8px}.restaurant-vessel-svg{display:block;width:100%;height:auto;overflow:visible}.restaurant-vessel-caption{display:flex;align-items:center;justify-content:space-between;gap:16px;width:min(82%,420px);margin:-30px auto 0;padding:11px 16px;border:1px solid rgba(126,161,186,.24);border-radius:10px;background:linear-gradient(180deg,rgba(24,37,49,.96),rgba(4,10,16,.98));color:#9aafbf;font-size:9px;letter-spacing:.06em;box-shadow:inset 0 1px 0 rgba(255,255,255,.06)}.restaurant-vessel-caption strong{color:#dce8ef;font:700 9px "Space Grotesk",sans-serif;letter-spacing:.08em}.restaurant-vessel-status{display:flex;align-items:center;gap:6px}.restaurant-vessel-status i{width:6px;height:6px;border-radius:50%;background:#48e28c;box-shadow:0 0 12px #48e28c}.rv-wave{transform-origin:center;will-change:transform}.rv-wave-back{animation:rv-wave-back 5.8s ease-in-out infinite alternate}.rv-wave-front{animation:rv-wave-front 4.4s ease-in-out infinite alternate}.rv-glass-sweep{animation:rv-glass-sweep 7.5s ease-in-out infinite}.rv-gauge{transform-box:fill-box;transform-origin:center;animation:rv-gauge-pulse 3.2s ease-in-out infinite}.rv-control-box circle{animation:rv-ready-light 1.8s ease-in-out infinite}.rv-lid,.rv-base,.rv-gauge,.rv-control-box,.rv-serial,.rv-hot-label{transition:transform .35s ease}.restaurant-vessel-stage:hover .rv-lid{transform:translateY(-2px)}.restaurant-vessel-stage:hover .rv-gauge{transform:translate(-1px,-1px)}
@keyframes rv-wave-back{to{transform:translateX(18px) scaleY(.84)}}@keyframes rv-wave-front{to{transform:translateX(-20px) scaleY(1.15)}}@keyframes rv-glass-sweep{0%,35%{opacity:.15;transform:translateX(-16px)}55%{opacity:.52}75%,100%{opacity:.16;transform:translateX(25px)}}@keyframes rv-gauge-pulse{0%,100%{filter:none}50%{filter:drop-shadow(0 0 7px rgba(103,230,255,.4))}}@keyframes rv-ready-light{0%,100%{opacity:.58}50%{opacity:1}}
@media(max-width:720px){.restaurant-vessel-stage{width:min(100%,480px);margin-top:8px}.restaurant-vessel-crown{width:80%;padding:10px 14px 12px}.restaurant-vessel-crown strong{font-size:15px}.restaurant-vessel-caption{width:84%;margin-top:-24px;flex-direction:column;gap:4px;text-align:center}.collection-preview-stage:has(.restaurant-vessel-stage){min-height:430px}}
@media(prefers-reduced-motion:reduce){.rv-wave,.rv-glass-sweep,.rv-gauge,.rv-control-box circle{animation:none!important}}
