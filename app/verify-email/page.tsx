"use client";

import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, RotateCw } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "ایمیل شما";

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (code.length !== 6) {
      setError("کد تایید باید ۶ رقم باشد.");
      return;
    }

    router.push("/");
  };

  const handleResendCode = () => {
    if (countdown > 0 || isResending) return;

    setIsResending(true);

    setTimeout(() => {
      setIsResending(false);
      setCountdown(59);
    }, 600);
  };

  return (
    <section className="relative z-10 flex min-h-[540px] w-full max-w-[420px] flex-col justify-between rounded-[28px] border border-[#2d7dff]/60 bg-[#071126]/55 px-8 py-10 shadow-[0_0_18px_rgba(0,102,255,0.8),0_0_60px_rgba(10,60,255,0.3)] backdrop-blur-sm">
      <header className="mt-8 text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-[#2d7dff]/50 bg-[#0b1834]/60 text-[#31d6ff] shadow-[0_0_20px_rgba(0,170,255,0.35)]">
          <Mail size={30} />
        </div>
        <h1 className="text-3xl font-black text-white">تایید ایمیل</h1>
        <p className="mt-4 text-sm leading-7 text-[#b8c1d1]/80">
          کد تایید ۶ رقمی به ایمیل زیر ارسال شد:
        </p>
        <p dir="ltr" className="mt-2 break-all text-sm font-bold text-[#40c9ff]">
          {email}
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex w-full flex-col items-center gap-5">
        <div className="w-full max-w-[320px]">
          <label
            htmlFor="verification-code"
            className="mb-2 block pr-1 text-xs font-bold text-[#bce9ff]"
          >
            کد تایید
          </label>

          <input
            id="verification-code"
            type="text"
            inputMode="numeric"
            maxLength={6}
            value={code}
            onChange={(e) => {
              setCode(e.target.value.replace(/\D/g, ""));
              setError("");
            }}
            placeholder="000000"
            className="h-[54px] w-full rounded-xl border border-[#2d7dff]/40 bg-[#070b19]/85 px-4 text-center text-xl font-bold tracking-[0.45em] text-white focus:border-[#00d9ff] focus:outline-none"
          />

          {error && (
            <p className="mt-2 pr-1 text-xs text-red-300">{error}</p>
          )}
        </div>

        {countdown > 0 && (
          <div className="flex w-full max-w-[320px] flex-col items-center justify-center rounded-2xl border border-[#2d7dff]/30 bg-[#0b1834]/40 py-4">
            <span className="text-4xl font-black text-[#40c9ff] tabular-nums">
              {countdown}
            </span>
            <span className="mt-1 text-xs font-medium text-[#b8c1d1]/80">
              ثانیه تا امکان ارسال مجدد
            </span>
          </div>
        )}

        <button
          type="submit"
          className="mt-2 h-[48px] w-full max-w-[320px] rounded-xl bg-gradient-to-r from-[#00aaff] to-[#0066ff] font-bold text-white shadow-[0_0_15px_rgba(0,102,255,0.4)] transition-all hover:scale-[1.01]"
        >
          تایید و تکمیل ثبت نام
        </button>
      </form>

      <div className="mb-4 text-center">
        <button
          type="button"
          onClick={handleResendCode}
          disabled={isResending || countdown > 0}
          className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#00bfff] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <RotateCw size={16} className={isResending ? "animate-spin" : ""} />
          {isResending
            ? "در حال آماده‌سازی..."
            : countdown > 0
            ? "ارسال دوباره غیرفعال است"
            : "ارسال دوباره کد"}
        </button>
      </div>
    </section>
  );
}

export default function VerifyEmailPage() {
  return (
    <main
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#02040d] px-4 py-12"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(2, 4, 13, 0.12), rgba(2, 4, 13, 0.38)), url("/images/login-circuit-bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute right-6 top-6 z-20">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 backdrop-blur-md transition-all hover:bg-white/10 hover:text-white"
        >
          <span>بازگشت به خانه</span>
          <ArrowLeft size={16} />
        </Link>
      </div>

      <Suspense fallback={<div className="text-white">در حال بارگذاری...</div>}>
        <VerifyContent />
      </Suspense>
    </main>
  );
}
