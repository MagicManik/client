import { useEffect, useState } from "react"

const useVideo = (id) => {
    const [video, setVideo] = useState({});

    useEffect(() => {
        fetch(`https://infinite-island-65121.herokuapp.com/video/${id}`)
            .then(res => res.json())
            .then(data => setVideo(data))
    }, [id, video]);

    return [video, setVideo];
}

export default useVideo;