export async function getData() {
  const url = `${import.meta.env.BASE_URL}logements-kasa.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} on ${url}`);
  return res.json();
}

