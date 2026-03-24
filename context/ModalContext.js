import GuideModal from '@/components/TabContents/GuideContents/GuideModal';
import { createContext, useState } from 'react'

export const ModalContext = createContext();

export function ModalProvider({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);

    const openModal = (modalTitle, modalContent) => {
        setTitle(modalTitle);
        setContent(modalContent);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setTitle(null);
        setContent(null);
    }

    return (
        <ModalContext.Provider value={{ isOpen, title, content, openModal, closeModal }}>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✕
                        </button>
                        {content}
                    </div>
                </div>
            )}
            {children}
        </ModalContext.Provider>
    )
}