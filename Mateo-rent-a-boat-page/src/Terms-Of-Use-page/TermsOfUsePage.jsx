import FooterComponent from "../FooterComponent/FooterComponent";
import HeaderComponent from "../HeaderComponents/HeaderComponent";
import TermsOfUseTextComponent from "./Terms-of-use-component/TermsOfUseTextComponent";


function TermsOfUsePage() {
    return(
        <>
            <HeaderComponent />
            <TermsOfUseTextComponent />
            <FooterComponent />
        </>
    );
}

export default TermsOfUsePage;