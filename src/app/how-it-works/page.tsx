import { Metadata } from "next";
import { FaCogs } from "react-icons/fa";

export const metadata: Metadata = {
  title: "How it works",
};

export default function HowItWorks() {
  return (
    <main className="flex flex-col min-h-[35rem] items-center justify-center">
      <span className="mb-4">
        <FaCogs size={55} />
      </span>
      A página ainda não está pronta.
    </main>
  );
}
