import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, X, MessageCircle } from 'lucide-react';

export default function ContactSidebar({ openFromHeader = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const openTimerRef = useRef(null);
    const suppressOpenRef = useRef(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        // If header requests open and we are not suppressed (user recently closed), open after a short delay
        if (openFromHeader) {
            if (suppressOpenRef.current) return;
            if (openTimerRef.current) clearTimeout(openTimerRef.current);
            openTimerRef.current = setTimeout(() => {
                setIsOpen(true);
                openTimerRef.current = null;
            }, 200);
        } else {
            // header not hovered -> clear any pending open and reset suppression
            if (openTimerRef.current) {
                clearTimeout(openTimerRef.current);
                openTimerRef.current = null;
            }
            suppressOpenRef.current = false;
        }

        return () => {
            if (openTimerRef.current) {
                clearTimeout(openTimerRef.current);
                openTimerRef.current = null;
            }
        };
    }, [openFromHeader]);

    const finalOpen = isOpen;

    return (
        <>
            <button
                onClick={toggleSidebar}
                className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
                aria-label="Contact Us"
            >
                <div className="relative">
                    <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
                    <span className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full animate-pulse"></span>
                </div>
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Contact Us
                </span>
            </button>

            {finalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                ></div>
            )}

          <div
                className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-gradient-to-br from-orange-700 via-orange-600 to-blue-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${finalOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <button
                    onClick={() => {
                        if (isOpen && openFromHeader) suppressOpenRef.current = true;
                        toggleSidebar();
                    }}
                    className="absolute top-4 right-4 bg-inherit text-white  rounded-full p-2 transition-all duration-200"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                <div className="h-full flex flex-col justify-center items-center px-6 py-8">
                    {/* Phone Section */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-3 shadow-lg">
                            <Phone size={26} className="text-blue-900" />
                        </div>
                        <h3 className="text-white text-lg font-bold mb-2">Phone number</h3>
                        <a href="tel:+919849334969" className="text-white text-base block hover:text-orange-300 transition-colors">
                            98493 34969
                        </a>
                        <a href="tel:+919391000657" className="text-white text-base block hover:text-orange-300 transition-colors">
                            93910 00657
                        </a>
                    </div>

                    {/* Email Section */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-3 shadow-lg">
                            <Mail size={26} className="text-blue-900" />
                        </div>
                        <h3 className="text-white text-lg font-bold mb-2">Email address</h3>
                        <a
                            href="mailto:vishnugroupindia@gmail.com"
                            className="text-white text-base hover:text-orange-300 transition-colors break-all"
                        >
                            amrenovators@gmail.com
                        </a>
                    </div>

                    {/* Address Section */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-full mb-3 shadow-lg">
                            <MapPin size={26} className="text-blue-900" />
                        </div>
                        <h3 className="text-white text-lg font-bold mb-2">Address info</h3>
                        <p className="text-white text-sm leading-relaxed">
                            Plot No. A/34, First Floor,<br />
                            Road No. 5, HUDA Colony, Kothapet,<br />
                            Saroornagar, Hyderabad, Telangana.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        <a
                            href="https://www.linkedin.com/company/am-renovators"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-orange-500 rounded-lg p-2.5 transition-all duration-200 group"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com/amrenovators"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-orange-500 rounded-lg p-2.5 transition-all duration-200 group"
                            aria-label="Facebook"
                        >
                            <svg className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/amrenovators"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-orange-500 rounded-lg p-2.5 transition-all duration-200 group"
                            aria-label="Instagram"
                        >
                            <svg className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white hover:bg-orange-500 rounded-lg p-2.5 transition-all duration-200 group"
                            aria-label="WhatsApp"
                        >
                            <svg className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}