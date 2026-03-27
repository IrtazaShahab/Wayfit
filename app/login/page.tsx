"use client";
import { useState } from "react";
import Image from "next/image";
import Leftsection from "@/public/login-left-section.png";

const EyeIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

const EyeOffIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-7-10-7a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="2" y1="2" x2="22" y2="22" />
    </svg>
);

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};
        if (!email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!password.trim()) {
            newErrors.password = "Password is required.";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        console.log("Form submitted", { email, password });
    };


    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-[#C4FFDD] via-[#FFFFFF] to-[#B2B4F4] px-4 py-8">
            <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[5px] px-6 lg:px-[30px] py-10 lg:py-[31px] justify-center w-full max-w-[1200px] bg-[#FFFFFF] rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.1)]">

                {/* left sectino */}
                <div className="hidden lg:flex lg:w-[45%]">
                    <Image className="w-full" src={Leftsection} width={494} height={425} alt="left-section-image" />
                </div>

                {/* right sectino */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center">
                    <div className="w-full max-w-[576px] mx-auto">
                        <h1 className="text-2xl lg:text-[30px] font-bold text-[#131515] leading-tight lg:leading-[36px]">
                            Super Admin Login
                        </h1>
                        <p className="text-[15px] lg:text-[16px] text-[#515252] mt-1 mb-5 lg:mb-[21px]">
                            Welcome back! Please sign in to continue
                        </p>

                        
                        {/* Email */}
                        <div className="mb-[10px]">
                            <label className="block text-[14px] font-medium text-[#000000] mb-[8px] leading-[18px]">
                                Your full name <span className="text-[#FB2C36]">*</span>
                            </label>
                            <div className="relative">
                                <span className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#A0A0B8]">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                                    }}
                                    className={`w-full px-[20px] py-[13px] rounded-[14px] border-[1.48px] bg-[#F3F5F6] text-[15px] text-[#45556C] placeholder-[#45556C] outline-none transition-all duration-200 ${errors.email ? "border-[#FB2C36] bg-[#FFF5F5]" : "border-[#DDE3E9]"}`}
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-[6px] text-[12px] text-[#FB2C36] leading-[16px]">{errors.email}</p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="mb-[8px]">
                            <label className="block text-[14px] font-medium text-[#000000] mb-[8px] leading-[18px]">
                                Password <span className="text-[#FB2C36]">*</span>
                            </label>
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(prev => !prev)}
                                    className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[#A0A0B8] hover:text-[#45556C] transition-colors duration-200 cursor-pointer"
                                >
                                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                                </button>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (errors.password) setErrors(prev => ({ ...prev, password: undefined }));
                                    }}
                                    className={`w-full px-[20px] py-[13px] rounded-[14px] border-[1.48px] bg-[#F3F5F6] text-[15px] text-[#45556C] placeholder-[#45556C] tracking-[1px] outline-none transition-all duration-200 ${errors.password ? "border-[#FB2C36] bg-[#FFF5F5]" : "border-[#DDE3E9]"}`}
                                />
                            </div>
                            {errors.password && (
                                <p className="mt-[6px] text-[12px] text-[#FB2C36] leading-[16px]">{errors.password}</p>
                            )}
                        </div>

                        {/* Forgot Password + Remember me */}
                        <div className="flex items-center justify-between mb-[23px] mt-3">
                            <div className="flex items-center gap-[8px]">
                                <input
                                    id="notifications"
                                    type="checkbox"
                                    className="h-[20px] w-[20px] rounded border-[1.48px] bg-[#FFFFFF] border-1 border-[#B8BCCA] accent-[#777ADA] cursor-pointer transition duration-150 ease-in-out"
                                />
                                <label htmlFor="notifications" className="text-[14px] leading-[20px] text-[#515252] cursor-pointer select-none">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-[14px] leading-[20px] text-[#777ADA] font-bold hover:underline">
                                Forgot password?
                            </a>
                        </div>


                        {/* Sign in */}
                        <button
                            type="submit"
                            className="w-full mb-[33px] py-[13px] px-[20px] rounded-[5px] bg-gradient-to-r from-[#6CFEB7] to-[#47E6EB] font-bold text-[16px] leading-[24px] text-black active:scale-[0.98] transition-all duration-200"
                        >
                            Sign In
                        </button>

                        <div className="flex items-center gap-[12px] mb-[15px]">
                            <div className="flex-1 h-px bg-[#E8E8F0]" />
                            <div className="flex-1 h-px bg-[#E8E8F0]" />
                        </div>

                        {/* Contact + Copywrites */}
                        <p className="text-[14px] leading-[20px] text-[#45556C] mb-[10px]">
                            Need access? Contact your system administrator
                        </p>
                        <p className="text-[14px] leading-[20px] text-[#8A929E]">
                            © 2026 Wayfit Co. Admin. All rights reserved.
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
}