export default function Quote() {
    return (
        <div className="quote-bg relative" style={{ background: process.env.BG_QUOTE }}>
            <div className="h-screen flex items-center justify-center content-center flex-col">
                <div className="w-3/4 bg-white opacity-80 p-8">
                    <p className="font-Rubik text-lg text-center">
                        {process.env.QUOTE_CONTENT}
                    </p>
                    <p className="font-Rubik text-sm text-center">
                        {process.env.QUOTE_SOURCE}
                    </p>
                </div>
            </div>
        </div>
    );
}