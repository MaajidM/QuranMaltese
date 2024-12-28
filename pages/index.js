import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch Quran data from GitHub
    fetch('https://raw.githubusercontent.com/MaajidM/QuranMaltese/main/maltese.json')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Quran Maltese Translation</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
