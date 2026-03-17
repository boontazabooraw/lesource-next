"use client";

import { useState, useEffect } from "react";

const Wares = () => {

    const [files, setFiles] = useState([]);

    useEffect(() => {
        async function fetchWares() {
            const res = await fetch("/api/wares");
            const data = await res.json();
            setFiles(data);
        }
        fetchWares();
    }, [])


    return (
        <div className="w-full">
            <ul>
                {
                    files.map((ware) => (
                        <li key={ware.id}>{ware.filename}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Wares;