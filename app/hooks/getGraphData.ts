// TODO: update the link with local environment variables

export async function getGraphData(brandModelPattern: string) {
  const res = await fetch(
    `http://127.0.0.1:8000/api/graph/${brandModelPattern}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
