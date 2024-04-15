import './PrivateTours.css'
import { useTranslation } from 'react-i18next';

function PrivateToursText() {
    const { t } = useTranslation();

    return(
        <>
            <div className="private-tours-text-container">
            <div className="private-tours-text-small-container">
                <h1 className="private-tours-title">
                    {t("option2")}
                </h1>
                <p className="private-tours-text">
                    {t("privateToursText")}
                </p>
            </div>
        </div>
        </>
    );
}

export default PrivateToursText;