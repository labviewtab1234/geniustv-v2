import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => (
    <div className="min-h-screen bg-background flex flex-col ">
        <Header/>
        <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">GeniusTV Privacy Policy</h1>
            <p className="text-lg text-gray-600">
                <span className="font-semibold">Last Updated:</span> August 2, 2025
            </p>
        </header>
        <section className="mb-10 bg-white rounded-lg shadow-md p-8">
            <p className="text-lg mb-4">
                Your privacy and anonymity are <strong className="text-blue-700">fundamental to how we operate</strong>.
                At GeniusTV, we are built on a foundation of minimal data collection to ensure your identity remains
                protected.
                This Privacy Policy outlines the limited information we process and how we manage it. When you choose
                our
                IPTV streaming service, you agree to the practices described below.
            </p>
        </section>

        <section className="mb-10 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Privacy-First Commitment: What We Don't Collect</h2>
            <p className="mb-4">
                In a digital world where data collection is the norm, we have taken a different path. Our core business model
                is to avoid the collection of sensitive personal data. We do <strong className="text-red-600">not collect or store</strong> the following:
            </p>
            <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Full Names or Addresses
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Credit Card or Banking Details
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    IP Addresses
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Device Identifiers
                </li>
                <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    Viewing History or Usage Patterns
                </li>
            </ul>
        </section>

        <Footer/>
    </div>
);

export default PrivacyPolicy;