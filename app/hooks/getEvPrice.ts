// TODO: update the link with local environment variables

export async function getEvPrice() {
  const res = await fetch("http://127.0.0.1:8000/api/main/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
