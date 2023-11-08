// TODO: update the link with local environment variables
export async function getGraphData(brandModelPattern: string) {
  const res = await fetch(
    `http://127.0.0.1:8000/api/graph/${brandModelPattern}`,
  );
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
