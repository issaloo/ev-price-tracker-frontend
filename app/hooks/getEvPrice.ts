export async function getEvPrice() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/main/`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
