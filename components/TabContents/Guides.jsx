"use client";

import { useState, useEffect } from "react";
import GuideModal from "./GuideContents/GuideModal";

const Guides = () => {

    const [guides, setGuides] = useState([]);
    const [currentGuide, setCurrentGuide] = useState({ title: null, content: null });
    const [modalOpen, setModalOpen] = useState(false);

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
        <>
            {
                modalOpen && (
                    <div className="absolute -z-10 min-h-screen">
                        <GuideModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                            <h1>{currentGuide.title}</h1>
                            <p>{currentGuide.content}</p>
                        </GuideModal>
                    </div>
                )
            }
            <div className="flex flex-col gap-2 flex-wrap">
                {guides.length < 1 ? (
                    <div>No Guides :(</div>
                ) : (
                    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                        {loading === true ? (
                            <div>
                                <p>Luding...</p>
                            </div>
                        ) :
                            guides.map((guide) =>
                            (
                                <li key={guide.id}>
                                    <span
                                        onClick={() => {
                                            setCurrentGuide({ title: guide.title, content: guide.content });
                                            setModalOpen(!modalOpen);
                                        }}
                                    >{guide.title}</span>

                                </li>
                            )
                            )
                        }
                    </ul>
                )}
            </div>
        </>
    )
}

export default Guides;