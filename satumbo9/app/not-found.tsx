import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { BiSolidPlanet } from "react-icons/bi";

export default function Custom404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <div className="animate-fade-in-up">
        <h1 className="text-7xl font-bold tracking-tight text-purple-500 mb-4">
          404
        </h1>
        <p className="text-2xl font-semibold mb-2">Lost in space?</p>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          But hey — maybe that&apos;s a sign to build something new.
        </p>

        <Link href="/" passHref>
          <Button className="bg-pink-600 cursor-pointer hover:bg-pink-700 transition-colors">
            <Sparkles className="mr-2 h-4 w-4" />
            Take me home
          </Button>
        </Link>
      </div>

      <div className="mt-10 text-4xl text-yellow-500 animate-bounce">
        <BiSolidPlanet />
      </div>
    </div>
  );
}
