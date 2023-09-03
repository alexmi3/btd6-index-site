import { useEffect, useState } from "react";

export default function ImageOrVideo({url}) {
    const [isVideo, setIsVideo] = useState(null);

    useEffect(() => {
        fetch(url, { method: 'head' })
        .then(resp => {
            setIsVideo(resp.headers.get('Content-Type')?.startsWith('video') ?? false);
        });
    }, [url]);

    return <>
        {
            isVideo !== null && (
                isVideo ? <video controls src={url} /> : <img src={url} />
            )
        }
    </>
}