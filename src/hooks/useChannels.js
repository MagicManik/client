import { useEffect, useState } from 'react';

const useChannels = () => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        fetch('https://server-production-b237.up.railway.app/channels')
            .then(res => res.json())
            .then(data => setChannels(data))
    }, [])
    return [channels, setChannels]
};

export default useChannels;