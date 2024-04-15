import './TermsOfUseTextsStyle.css';
import { useTranslation } from 'react-i18next';

function TermsOfUseTextComponent(){
    const { t } = useTranslation();

    return(
        <>
        <div className="terms-of-use-text-container">
            <div className="terms-of-use-text-small-container">
                <h1 className="terms-of-use-title">
                    {t("option3")}
                </h1>
                <p className="terms-of-use-text">
                    {t("termsOfUseText")}
                </p>
            </div>
        </div>

        </>
    );
}

export default TermsOfUseTextComponent;