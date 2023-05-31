import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
    return (
        <div className="hero-bg relative" style={{ background: process.env.BG_HERO }}>
            <div className="h-screen">
                <div className="flex items-center justify-center flex-col w-full h-full">
                    <h1 className="font-Flamenco text-7xl text-white mb-3 mt-16">
                        {process.env.COUPLE_NAME}
                    </h1>

                    <div className="w-16 h-1 bg-white"></div>

                    <h3 className="font-Rubik text-xl text-white mt-3 mb-2">
                        WEDDING
                    </h3>

                    <h3 className="font-Rubik text-2xl text-white mt-3">
                        <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                        12.3.2022
                    </h3>
                </div>
            </div>
        </div>
    );
}