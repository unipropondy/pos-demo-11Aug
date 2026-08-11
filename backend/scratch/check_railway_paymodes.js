async function main() {
  const url = "https://pos-demo-11aug-production.up.railway.app/api/sales/payment-methods";
  try {
    const res = await fetch(url);
    console.log("Railway response status:", res.status);
    const data = await res.json();
    console.log("Railway response data:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
  }
}

main();
