async function loadUrl(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.arrayBuffer();
}

export default loadUrl;
