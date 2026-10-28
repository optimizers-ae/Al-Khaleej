const fs = require('fs');

async function testPlace(name, url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      'Accept-Language': 'en'
    }
  });
  const html = await res.text();
  // Find all coordinates [lat, lng] in the entire html text
  // Coordinates in UAE are roughly lat 25.35 to 25.45, lng 55.40 to 55.60
  const matches = [...html.matchAll(/(25\.\d{5,8})[^\d]+(55\.\d{5,8})/g)];
  console.log(`\nResults for ${name}:`);
  const unique = new Set();
  for (const m of matches) {
    unique.add(`${m[1]}, ${m[2]}`);
  }
  console.log('Coordinates candidates:', Array.from(unique).slice(0, 5));
}

async function run() {
  await testPlace("Item 4 (Al Ittehad)", "https://www.google.com/maps/search/Al+Ittehad+Pharmacy+Al+Owan+Al+Nakhil+1+Ajman?hl=en");
  await testPlace("Item 5 (Al Meydan)", "https://www.google.com/maps/search/AL+MEYDAN+PHARMACY+Garden+City+Ajman?hl=en");
  await testPlace("Item 6 (Dar Al Shifa Br 1)", "https://www.google.com/maps/search/PUREMED+PHARMACY+Dar+Al+Shifa+Pharmacy+Br.1+Al+Bustan+Ajman?hl=en");
  await testPlace("Item 2 (Dar Al Sai)", "https://www.google.com/maps/search/DAR+AL+SAI+PHARMACY+Puremed+Ajman?hl=en");
}

run().catch(console.error);
