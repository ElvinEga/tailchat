import { Toaster } from "react-hot-toast";
import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chatbot
        title="Tail Chatbot"
        subtitle="Online Chatbot"
        botName="Tail Chatbot"
        welcomeMessage="Hi, I'm Tail Chatbot. How can I help you today?"
      />
      <Toaster />
    </main>
  );
}
