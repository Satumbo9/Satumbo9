import React from "react";
import { ImageGallery } from "@/lib/gallery";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const ArtWork = () => {
    return (
        <section className="min-h-screen w-full py-12 px-4 sm:px-6 md:px-8 ">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {ImageGallery.map((item) => (
                        <Dialog key={item.id}>
                            <DialogTrigger asChild>
                                <button className="cursor-pointer focus:outline-none">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={400}
                                        height={400}
                                        className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                                    />
                                </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl bg-black dark:bg-gray-900 p-6 rounded-lg shadow-2xl">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl hidden text-pink-500 mb-2">
                                        {item.description}
                                    </DialogTitle>
                                    <DialogDescription className="text-gray-100 hidden dark:text-gray-300">
                                        {item.description}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="mt-6">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        width={800}
                                        height={800}
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArtWork;