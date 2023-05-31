import { faEnvelope, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

import Button from "../Shared/Button";

export default function Envelope() {
    return (
        <div className="envelope-bg relative" style={{ background: process.env.BG_ENVELOPE }}>
            <div className="h-screen">
                <div className="flex items-center justify-items-center justify-center content-center flex-col w-full h-full">
                    <h1 className="font-Flamenco text-7xl text-white mb-5">{process.env.COUPLE_NAME}</h1>

                    <Button 
                        href="/main"
                        text="Buka Undangan"
                        iconDefault={faEnvelope}
                        iconHovered={faEnvelopeOpen} />

                    <div className="mb-32"></div>
                </div>
            </div>
        </div>
    );
}