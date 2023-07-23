import { createPortal } from 'react-dom';

import {
    ButtonClose,
    ModalContainer,
    ModalLink,
    ModalTitle,
    ModalWrapper,
} from './Modal.styled';
import { useEffect } from 'react';

export function Modal({ closeModal }) {
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal]);

    const ModalElement = (
        <>
            <ModalWrapper>
                <ButtonClose type="button" onClick={closeModal}>
                    Close
                </ButtonClose>
                <ModalTitle>
                    First, you should download MetaMask to connect your wallet
                </ModalTitle>
                <ModalLink
                    href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                    target="_blank"
                    rel="noreferrer"
                >
                    Download MetaMask
                </ModalLink>
            </ModalWrapper>
            <ModalContainer onClick={closeModal} />
        </>
    );

    return createPortal(ModalElement, document.getElementById('modal-root'));
}
