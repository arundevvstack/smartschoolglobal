const routes = [
  "",
  "platform",
  "ai-for-schools",
  "academics",
  "admissions",
  "examinations",
  "student-management",
  "mobile-app",
  "attendance",
  "communication",
  "finance",
  "transportation",
  "security",
  "hr-payroll",
  "smart-wallet-canteen",
  "hostel-management",
  "incident-management",
  "global",
  "about",
  "contact",
  "sitemap.xml",
  "robots.txt"
];

async function testAll() {
  console.log("Starting full routes smoke test against http://localhost:3000...\n");
  let passed = 0;
  for (const r of routes) {
    const url = `http://localhost:3000/${r}`;
    try {
      const res = await fetch(url);
      if (res.status === 200) {
        console.log(`[PASS 200 OK] -> ${url}`);
        passed++;
      } else {
        console.error(`[FAIL ${res.status}] -> ${url}`);
      }
    } catch (err) {
      console.error(`[ERROR] -> ${url}: ${err.message}`);
    }
  }
  console.log(`\nResults: ${passed} / ${routes.length} routes responded with 200 OK.`);
}

testAll();
