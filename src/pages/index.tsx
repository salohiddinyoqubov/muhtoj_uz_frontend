// pages/index.tsx
import React, { useEffect, useState } from 'react';

interface Data {
    message: string;
}

const Home: React.FC = () => {
    const [data, setData] = useState<Data | null>(null);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`)
            .then(response => response.json())
            .then((data: Data) => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            {data && <p>{data.message}</p>}
        </div>
    );
};

export default Home;
