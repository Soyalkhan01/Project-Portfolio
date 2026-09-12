import { FaRobot, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";


function AIChatbot() {

    const [isOpen, setIsOpen] = useState(false);
    
    const [message, setMessage] = useState("");

    const [messages, setMessages] = useState([
    {
        role: "assistant",
        text: "👋 Hi! I'm Soyal's AI Assistant. Ask me about his skills, projects, experience, education, or certifications.",
    },
]);

    const API_URL = import.meta.env.VITE_API_URL;

    const [isLoading, setIsLoading] = useState(false)

    const messagesEndRef = useRef(null);

    useEffect (() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);


    const clearChat = () => {
    setMessages([
        {
            role: "assistant",
            text: "👋 Hi! I'm Soyal's AI Assistant. Ask me about his skills, projects, experience, education, or certifications.",
        },
    ]);
};

const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message;

    setMessages((prevMessages) => [
        ...prevMessages,
        {
            role: "user",
            text: userMessage,
        },
    ]);

    setMessage("");
    setIsLoading(true);

    try {
        const response = await fetch(`${API_URL}/chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: userMessage,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
let aiResponse = "";
let displayedResponse = "";
let assistantMessageAdded = false;


while (true) {
    const { value, done } = await reader.read();

    if (done) break;

    const chunk = decoder.decode(value, {
        stream: true,
    });

    if (!chunk) continue;

    aiResponse += chunk;

    if (!assistantMessageAdded) {
        assistantMessageAdded = true;
        setIsLoading(false);

        setMessages((prevMessages) => [
            ...prevMessages,
            {
                role: "assistant",
                text: "",
            },
        ]);
    }

    const words = aiResponse.slice(displayedResponse.length).split(/(\s+)/);

    for (const part of words) {
        displayedResponse += part;

        setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];

            updatedMessages[updatedMessages.length - 1] = {
                role: "assistant",
                text: displayedResponse,
            };

            return updatedMessages;
        });

        await new Promise((resolve) => setTimeout(resolve, 25));
    }
}

    } catch (error) {
        console.log("Chat API Error:", error);

        setMessages((prevMessages) => [
            ...prevMessages,
            {
                role: "assistant",
                text: "Sorry, I couldn't connect to the AI server.",
            },
        ]);
    } finally {
        setIsLoading(false);
    }
};

    return(

        <div>

           {/* AI Assistant Floating Button */}
<div className="fixed bottom-4 right-6 z-50">

    {/* Animated Robot */}
    {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="ai-robot">
            <FaRobot className="text-4xl text-indigo-900 drop-shadow-lg" />
        </div>
    </div> */}

    {/* Button */}
    <button
        onClick={() => setIsOpen(true)}
        className="relative flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-950 text-white font-semibold shadow-lg cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
    >
        <FaRobot />
        <span>AI Assistant</span>
    </button>

</div>

            {isOpen && (
            
              <div className="fixed bottom-32 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-32 z-50 w-auto sm:w-80 h-[60vh] sm:h-96 max-h-125 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">

                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">

                    <div className="flex items-center gap-2">

                         <FaRobot className="text-indigo-600"/>

                        <h3 className="font-bold text-gray-900">
                            AI Assistant
                        </h3>

                    </div>

            <div className="flex items-center gap-1">

                <button
                    onClick={clearChat}
                    disabled={messages.length <= 1}
                    className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-900 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    Clear
                </button>

                <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition cursor-pointer"
                >
                    <FaTimes />
                </button>

            </div>

                </div>

                <div className="flex-1 p-4 overflow-auto">

                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex mb-2 ${
                                msg.role === "user"
                                    ? "justify-end"
                                    : "justify-start"
                            }`}
                        >
                            <div
                                className={`max-w-[80%] px-4 py-3 rounded-xl text-sm ${
                                    msg.role === "user"
                                        ? "bg-indigo-950 text-white rounded-br-none"
                                        : "bg-indigo-50 text-gray-800 rounded-bl-none"
                                }`}
                            >
                               <ReactMarkdown
                    components={{
                        p: ({ children }) => (
                            <p className="mb-2 last:mb-0">
                                {children}
                            </p>
                        ),
                        ul: ({ children }) => (
                            <ul className="list-disc ml-4 mb-2">
                                {children}
                            </ul>
                        ),
                        ol: ({ children }) => (
                            <ol className="list-decimal ml-4 mb-2">
                                {children}
                            </ol>
                        ),
                        li: ({ children }) => (
                            <li className="mb-1">
                                {children}
                            </li>
                        ),
                        strong: ({ children }) => (
                            <strong className="font-semibold">
                                {children}
                            </strong>
                        ),
                        code: ({ children }) => (
                            <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">
                                {children}
                            </code>
                        ),
                    }}
                >
                    {msg.text}
                </ReactMarkdown>
                            </div>
                        </div>
                    ))}

                    {isLoading && (
                        <div className="flex justify-start mb-2 ">
                            <div className="bg-indigo-50 text-gray-600 px-4 py-3 rounded-xl rounded-bl-none text-sm">
                                <span className="animate-pulse">
                                    🤖 AI is thinking...
                                </span>
                            </div>
                        </div>
                    )}
                      <div ref={messagesEndRef} />
                </div>

            <div className="p-3 border-t border-gray-200">

                <div className="flex items-center gap-2">

                <input
                    type="text"
                    placeholder="Ask me something..."
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    disabled={isLoading}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            handleSend();
                        }
                    }}
                    className="flex-1 px-3 py-2.5 rounded-xl border border-gray-300 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
                />

                    <button
                    type="button"
                    onClick={handleSend}
                    disabled={isLoading || !message.trim()}
                    className={`shrink-0 px-4 py-2 rounded-full text-white transition-transform duration-200 hover:scale-[1.03] ${
                        isLoading || !message.trim()
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-indigo-950 hover:bg-indigo-900 cursor-pointer"
                    }`}
                >
                    ↑
                </button>
                </div>
              </div>

             </div>

            )}

       </div> 
    )
};

export default AIChatbot