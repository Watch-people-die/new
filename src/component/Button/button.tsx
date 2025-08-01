import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

export function Button({ children, onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className="bg-black text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-200"
        >
            {children}
        </button>
    );
}


