import ContactInfo from "./ContactInfo";
import Socials from "./Socials";

let year = new Date().getFullYear();

function Footer() {
    return (
        <>
        <div className="flex flex-row justify-between pl-20 pr-20 bg-gray-200">

            <div className="flex flex-col justify-between">
                    <ContactInfo />
            </div>

            <div className="hidden sm:block">
            </div>

            <div className="flex flex-col items-center">
                <h3>Follow me on socials</h3>
                <div className="pt-1">
                    <Socials flexDirection="row"/>
                </div>
            </div>
        </div>
        <div className="pb-2 text-center bg-gray-200">
            <p>Copyright Aevra ©{year}</p>
        </div>
        </>
    )
}

export default Footer;