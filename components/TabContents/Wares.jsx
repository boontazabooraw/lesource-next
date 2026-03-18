"use client";

import { useState, useEffect } from "react";
import Filters from "./WareContents/Filters";
import WareCards from "./WareContents/WareCards";

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    if (error) {
        return (
            <div>
                <p>{error}</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-2 flex-wrap">
            <Filters handleSearchChange={handleSearchChange} value={search} />
            {files.length < 1 ? (
                <div>No files :(</div>
            ) : (
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {loading === true ? (
                        <div>
                            <p>Luding...</p>
                        </div>
                    ) :
                        files.map((ware) => (
                            <WareCards 
                            key={ware.id} 
                            id={ware.id} 
                            filename={ware.filename} 
                            category={ware.category}
                            download_link={ware.download_link} />
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default Wares;