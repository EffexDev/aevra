import ContactInfo from "./ContactInfo";
import Socials from "./Socials";

let year = new Date().getFullYear();

function Footer() {
    return (
        <>
        <div className="flex flex-row justify-evenly pl-10 pr-10 mt-10 bg-gray-200 dark:bg-gray-900">

            <div className="flex flex-col justify-between">
                <ContactInfo />
            </div>

            <div className="hidden sm:block">
            </div>

            <div className="flex flex-col items-center">
                <div className="pt-1">
                    <Socials flexDirection="row"/>
                </div>
            </div>
        </div>
        <div className="pb-1 text-center bg-gray-200 dark:bg-gray-900">
            <p>Copyright Aevra ©{year}</p>
        </div>
        </>
    )
}

export default Footer;