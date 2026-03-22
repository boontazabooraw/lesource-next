"use client";

import { useState, useEffect } from "react";

const Guides = () => {

    const [guides, setGuides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState("");

    async function fetchWares() {
        try {
            setLoading(true);

            const res = await fetch(`/api/guides?search=${search}`);
            if (!res.ok) throw new Error("Failed to fetch the guides!");

            const data = await res.json();

            setGuides(data);
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
            {guides.length < 1 ? (
                <div>No files :(</div>
            ) : (
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {loading === true ? (
                        <div>
                            <p>Luding...</p>
                        </div>
                    ) :
                        guides.map((guide) => (
                            <li key={guide.id}>
                                <span>{guide.title}</span>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    )
}

export default Guides;