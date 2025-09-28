import AnimatedInfoCard from "./AnimatedInfoCard";

export default function Services() {
    return (
        <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:align-top lg:pl-30 lg:pr-30">
            <AnimatedInfoCard title="Website Development – $450" content='Beautiful – A modern, responsive 1–3 page website tailored to your brand. Perfect for showcasing your business online.'>
                <ul>
                    <li className="text-xl pb-2">What's Included:</li>
                    <li>- Up to 3 site pages</li>
                    <li>- Branding (colors, fonts, logo placement)</li>
                    <li>- Mobile-friendly design</li>
                    <li>- 3 Revisions</li>
                    <li className="text-xl pb-2 pt-2">Optional Extras:</li>
                    <li>- More pages</li>
                </ul>
            </AnimatedInfoCard>
            <AnimatedInfoCard title="Hosting - $30/mo" content='Secure, high-performance hosting that keeps your website online and fast. Enjoy consistent uptime and optimized load speeds so your business is always accessible'>
                <ul>
                    <li className="text-xl pb-2">What's Included:</li>
                    <li>- Fast, secure hosting</li>
                    <li>- Stable uptime</li>
                    <li>- SSL certificate for security</li>
                    <li>- Easy domain integration</li>
                </ul>    
                </AnimatedInfoCard>
        </div>
    )
}