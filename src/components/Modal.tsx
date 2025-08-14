import React from "react";
import styles from "./Modal.module.css";

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
    if (!open) return null;

    function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
        if (e.target === e.currentTarget) onClose();
    }

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div
                className={styles.dialog}
                role="dialog"
                aria-modal="true"
            >
                <button
                    type="button"
                    className={styles.closeIcon}
                    onClick={onClose}
                    aria-label="Dialog schließen"
                >
                    ×
                </button>

                {children}
            </div>
        </div>
    );
}
