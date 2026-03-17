"use client";

import { useState, useEffect } from "react";
import Filters from "./WareContents/Filters";

const Wares = () => {

    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState("");

    async function fetchWares() {
        try {
            setLoading(true);

            const res = await fetch(`/api/wares?search=${search}`);
            if (!res.ok) throw new Error("Failed to fetch the wares!");

            const data = await res.json();

            setFiles(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    }

    useEffect(() => {
        fetchWares();
    }, [search])

    if (error) {
        return (
            <div>
                <p>{error}</p>
            </div>
        )
    }


    return (
        <div className="w-full">
            <Filters handleSearchChange={handleSearchChange} value={search} />
            {files.length < 1 ? (
                <div>No files :(</div>
            ) : (
                <ul>
                    {loading === true ? (
                        <div>
                            <p>Luding...</p>
                        </div>
                    ) :
                        files.map((ware) => (
                            <li key={ware.id}>{ware.filename}</li>
                        ))
                    }
                </ul>
            )}

        </div>
    )
}

export default Wares;