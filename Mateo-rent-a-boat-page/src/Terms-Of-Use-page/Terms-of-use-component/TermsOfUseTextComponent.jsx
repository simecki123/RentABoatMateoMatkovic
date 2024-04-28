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
                <h2 className='terms-of-use-title2'>{t("termsOfUseTitle1")}</h2>
                <p className="terms-of-use-text">
                    {t("termsOfUseText1")}
                </p>
                <h2 className='terms-of-use-title2'>{t("termsOfUseTitle2")}</h2>
                <p className="terms-of-use-text">
                    {t("termsOfUseText2")}
                </p>
                <h2 className='terms-of-use-title2'>{t("termsOfUseTitle3")}</h2>
                <p className="terms-of-use-text">
                    {t("termsOfUseText3")}
                </p>
                
            </div>
        </div>

        </>
    );
}

export default TermsOfUseTextComponent;