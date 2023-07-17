import Image from "next/image";
import { Inter } from "next/font/google";

import Dropzone from "@/components/Dropzone";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      Hello World!
      <div>
        <Dropzone />
      </div>
    </main>
  );
}
