import { motion } from "framer-motion";
import Image from "next/image";

const AutobiographyPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {/* Header section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center w-full h-96 bg-gray-800"
            >
                <div className="relative w-40 h-40 rounded-full overflow-hidden">
                    <Image
                        src="/profile-picture.jpg"
                        alt="Profile picture"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h1 className="mt-4 text-4xl font-bold text-white">John Doe</h1>
                <p className="mt-2 text-xl text-gray-400">
                    Software Developer | Photographer
                </p>
            </motion.div>

            {/* Image gallery section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center w-full py-16 bg-gray-100"
            >
                <h2 className="text-3xl font-bold text-gray-800">My Gallery</h2>
                <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/gallery-image-1.jpg"
                            alt="Gallery image 1"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-900 bg-opacity-50">
                            <h3 className="text-2xl font-bold text-white">Image 1</h3>
                            <p className="mt-2 text-lg text-white">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/gallery-image-2.jpg"
                            alt="Gallery image 2"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-900 bg-opacity-50">
                            <h3 className="text-2xl font-bold text-white">Image 2</h3>
                            <p className="mt-2 text-lg text-white">
                                Sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-80 overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src="/gallery-image-3.jpg"
                            alt="Gallery image 3"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-900 bg-opacity-50">
                            <h3 className="text-2xl font-bold text-white">Image 3</h3>
                            <p className="mt-2 text-lg text-white">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AutobiographyPage;
