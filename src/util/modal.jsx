import React, { useState, useImperativeHandle, forwardRef, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import "../modal.css";

const ModalElement = document.getElementById('modal-root');

export function Modal({ children, fade = false, defaultOpened = false }, ref) {
    const [isOpen, setIsOpen] = useState(defaultOpened);
    const close = useCallback(() => setIsOpen(false), []);

    useImperativeHandle(ref, () => ({
            open: (() => setIsOpen(true)),
            close,
        }), [close] );

    const handleEscape = useCallback((event) => {
            if (event.keyCode === 27) close()
        }, [close] );

    useEffect(() => {
        if (isOpen) document.addEventListener("keydown", handleEscape, false);
        return () => {
            document.removeEventListener("keydown", handleEscape, false);
        };
    }, [handleEscape, isOpen]);

    return createPortal(
        isOpen ? (
            <div role="dialog" className={`modal ${fade ? "modal-fade" : ""}`}>
                <div className="modal-overlay" onClick={close} />
                <div className="modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title">Rules</h1>
                            <button className="btn-close" onClick={close}>❌</button>
                        </div>
                        <div className='modal-body'>
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button className="btn-close" onClick={close}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : null,
        ModalElement
    );
}

export default forwardRef(Modal);
