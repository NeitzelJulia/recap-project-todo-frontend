// src/components/Modal.tsx
import React from "react";
import styles from "./Modal.module.css";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
};

export default function Modal({ open, onClose, title, children }: ModalProps) {
    if (!open) return null;

    function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
        // Schließt nur, wenn wirklich der Backdrop (und nicht der Dialog) geklickt wurde
        if (e.target === e.currentTarget) onClose();
    }

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div
                className={styles.dialog}
                role="dialog"
                aria-modal="true"
                aria-label={title ?? "Dialog"}
            >
                {children}
                <div className={styles.actions}>
                    <button type="button" className={styles.closeBtn} onClick={onClose}>
                        Schließen
                    </button>
                </div>
            </div>
        </div>
    );
}
