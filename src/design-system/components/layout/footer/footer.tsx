import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ReactSVG } from 'react-svg';
import '../../../../scss/components/layout/footer.scss';

const Footer = () => {
    const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 860 });
    const isTabletOrMobile = useMediaQuery({ maxWidth: 860 });
    const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 860 });

    return (
        <footer className="footer__container">
            <div className="footer__content">
                {isDesktopOrLaptop && (
                    <div className="footer__content__desktop">
                        <div className="footer__content__desktop__content">
                            <span>SUPPORT</span>
                        </div>
                        <div className="footer__content__desktop__content">
                            <span>NEW VISION</span>
                        </div>
                        <div className="footer__content__desktop__socials">
                            <div className="footer__content__desktop__socials__inner">
                                <a href={'twitterU'} target="_blank" rel="noopener noreferrer">
                                    <img src={'InstaLogo'} width={40} height={40} alt="Insta"></img>
                                </a>
                                <a href={'twitterU'} target="_blank" rel="noopener noreferrer">
                                    <img src={'TwitterLogo'} width={40} height={40} alt="Twitter"></img>
                                </a>
                                <a href={'twitterUrl'} target="_blank" rel="noopener noreferrer">
                                    <img src={'YouTubeLogo'} width={45} height={45} alt="YT"></img>
                                </a>
                                <a href={'twitterUrl'} target="_blank" rel="noopener noreferrer">
                                    <img src={'EmailLogo'} width={45} height={45} alt="Email"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {(isTabletOrMobileDevice || isTabletOrMobile) && (
                    <div className="footer__content__mobile">
                        <ReactSVG
                            src={'NewVisionLogo'}
                            fallback={() => <span>Error!</span>}
                            loading={() => <span>Logo</span>}
                        />
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;