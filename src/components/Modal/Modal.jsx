import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { UAParser } from 'ua-parser-js';

import {
    ButtonClose,
    ModalContainer,
    ModalLink,
    ModalTitle,
    ModalWrapper,
} from './Modal.styled';

export function Modal({ closeModal }) {
    const [link, setLink] = useState(null);

    useEffect(() => {
        let parser = new UAParser(navigator.userAgent);
        let parserResults = parser.getOS();

        switch (parserResults.name) {
            case 'Windows':
                setLink(
                    'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'
                );
                break;
            case 'Android':
                setLink(
                    'https://play.google.com/store/apps/details?id=io.metamask'
                );
                break;
            case 'iOS' || 'Mac OS':
                setLink(
                    'https://apps.apple.com/ru/app/metamask-blockchain-wallet/id1438144202'
                );
                break;
            default:
                setLink(
                    'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn'
                );
        }
    }, []);

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
                <ModalLink href={link} target="_blank" rel="noreferrer">
                    Download MetaMask
                </ModalLink>
            </ModalWrapper>
            <ModalContainer onClick={closeModal} />
        </>
    );

    return createPortal(ModalElement, document.getElementById('modal-root'));
}
