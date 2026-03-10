import FooterNavbar from "./FooterNavbar"
import FooterBody from "./FooterBody"
import FooterSocial from "./FooterSocial"

export default function AppFooter({ footerNavbar }) {


    return (
        <footer>
            <FooterNavbar footerNavbar={footerNavbar} />
            <FooterBody />
            <FooterSocial />
        </footer>
    )
}