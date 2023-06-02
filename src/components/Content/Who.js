import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

/* eslint-disable @next/next/no-img-element */
export default function Who() {
    const invitationOpening = { __html: process.env.INVITATION_OPENING };
    const maleFamilyInfo = { __html: process.env.MALE_FAMILY_INFO };
    const femaleFamilyInfo = { __html: process.env.FEMALE_FAMILY_INFO };

    return (
        <div className="who-bg relative" style={{ background: process.env.BG_WHO }}>
            <div className="h-screen">
                <div className="flex items-center justify-center flex-col w-full h-full">
                    <div
                        className="font-Rubik text-white text-center mx-8 md:mx-32" 
                        dangerouslySetInnerHTML={invitationOpening} />

                    <div className="container md:flex justify-center md:space-x-16 mt-8">
                        <div className="text-white flex-col items-center justify-center flex space-y-3">
                            <img
                                src={process.env.MALE_IMG}
                                className="w-36"
                                alt={process.env.MALE_NAME} />
                            <div>
                                <h1 className="text-2xl font-Rubik my-2 text-center">
                                    {process.env.MALE_NAME}
                                </h1>
                                <h3 className="text-md font-Rubik">
                                    <div dangerouslySetInnerHTML={maleFamilyInfo}></div>
                                    <br />
                                    <Link 
                                        href="{process.env.MALE_INSTA_URL}"
                                        passHref
                                        target="_blank"
                                        rel="noreferer"
                                        className="hover:underline"
                                    >
                                        <FontAwesomeIcon className="mr-1" icon={faInstagram}/>
                                        {process.env.MALE_INSTA_NAME}
                                    </Link>
                                    </h3>
                            </div>
                        </div>

                        <div className="text-white flex-col items-center justify-center flex py-4">
                            <h1 className="text-white font-Flamenco text-9xl">&</h1>
                        </div>

                        <div className="text-white flex-col items-center justify-center flex space-y-3">
                            <img
                                src={process.env.FEMALE_IMG}
                                className="w-36"
                                alt={process.env.FEMALE_NAME} />
                            <div>
                                <h1 className="text-2xl font-Rubik my-2 text-center">
                                    {process.env.FEMALE_NAME}
                                </h1>
                                <h3 className="text-md font-Rubik">
                                    <div dangerouslySetInnerHTML={femaleFamilyInfo}></div>
                                    <br />
                                    <Link 
                                        href="{process.env.FEMALE_INSTA_URL}"
                                        passHref
                                        target="_blank"
                                        rel="noreferer"
                                        className="hover:underline"
                                    >
                                        <FontAwesomeIcon className="mr-1" icon={faInstagram}/>
                                        {process.env.FEMALE_INSTA_NAME}
                                    </Link>
                                    </h3>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}