"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const router = useRouter();

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  alert("handleSubmit اجرا شد");
  console.log("اطلاعات ورود:", formData);

  router.push(
    `/verify-email?email=${encodeURIComponent(formData.email)}`
  );
};


  return (
    <main
  dir="rtl"
  className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#02040d] px-4 py-12"
  style={{
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(2, 4, 13, 0.12),
        rgba(2, 4, 13, 0.38)
      ),
      url("/images/login-circuit-bg.png")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>



      {/* دکمه بازگشت به خانه - با جهت اصلاح شده آیکون */}
      <div className="absolute top-6 right-6 z-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/5 backdrop-blur-md text-sm font-medium"
        >
          <span>بازگشت به خانه</span>
          <ArrowLeft size={16} />
        </Link>
      </div>

      {/* کارت ورود - ابعاد اصلاح شده و پدینگ متقارن */}
      <section className="w-full max-w-[420px] min-h-[620px] relative z-10 px-8 py-10 bg-[#071126]/5 border border-[#2d7dff]/60 rounded-[28px] backdrop-blur-sm shadow-[0_0_18px_rgba(0,102,255,0.8),0_0_60px_rgba(10,60,255,0.3)] flex flex-col justify-between"
>
        
        {/* هدر کارت کاملاً در بالا */}
        <header className="text-center mt-10 mb-8">
          <h1 className="mb-2 text-4xl font-black text-white mb-2 tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
           <br /> ثبت نام در Velora 
          </h1>
          <p className="text-xs text-[#b8c1d1]/70">
            برای عضویت در جمع ما، ثبت نام کنید
          </p>
        </header>

        {/* فرم با ساختار وسط‌چین شده و عرض‌های یکپارچه */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5 w-full">

          {/* فیلد ایمیل */}
          <div className="flex flex-col gap-2 w-full max-w-[320px]">
            <label htmlFor="email" className="block text-xs font-bold text-[#bce9ff] pr-1 tracking-tight">
              ایمیل یا نام کاربری
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="       ایمیل خود را وارد کنید     "
              required
              dir="rtl"
              className="w-full h-[48px] px-4 rounded-xl border border-[#2d7dff]/30 bg-[#070b19]/90 text-white placeholder-gray-600 font-medium text-sm focus:outline-none focus:border-[#00aaff] focus:ring-1 focus:ring-[#00aaff] transition-all shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* فیلد رمز عبور */}
          <div className="flex flex-col gap-2 w-full max-w-[320px]">
            <label htmlFor="password" className="block text-xs font-bold text-[#bce9ff] pr-1 tracking-tight">
              رمز عبور
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="       • • • • • • • •"
              required
              dir="rtl" /* برای نمایش صحیح کاراکترهای رمز عبور */
              className="w-full h-[48px] px-4 rounded-xl border border-[#2d7dff]/30 bg-[#070b19]/90 text-white placeholder-gray-600 font-medium text-sm focus:outline-none focus:border-[#00aaff] focus:ring-1 focus:ring-[#00aaff] transition-all shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] text-right"
            />
          </div>

          {/* گزینه‌ها - تراز با عرض فیلدها */}
          <div className="flex items-center justify-between w-full max-w-[320px] text-[11px] font-bold text-[#b8c1d1] mt-1">
            <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="rounded border-gray-600 bg-[#0b1023] text-[#00aaff] focus:ring-[#00aaff]/50"
              />
              <span>مرا به خاطر بسپار</span>
            </label>
            <Link href="/forgot-password" className="text-[#00aaff] hover:text-[#00d0ff] transition-all">
              فراموشی رمز عبور؟
            </Link>
          </div>

          {/* دکمه ثبت نام - کاملاً تراز با فیلدها */}
          <button
            type="submit"
            className="w-full max-w-[320px] h-[48px] rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#00aaff] to-[#0066ff] hover:opacity-95 hover:scale-[1.01] shadow-[0_0_15px_rgba(0,102,255,0.3)] cursor-pointer mt-4"
          >
            ثبت نام
          </button>
        </form>

        {/* جداکننده */}
        <div className="flex w-full max-w-[320px] items-center gap-3 self-center my-8 text-xs text-[#b8c1d1]/30">
  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2d7dff]" />
  <span className="shrink-0">یا</span>
  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2d7dff]" />
</div>


        {/* لینک ورود/ثبت نام پایین کارت */}
        <p className="text-center text-sm text-[#b8c1d1]/80 mb-2">
          حساب کاربری دارید؟{" "}
          <Link href="/login" className="text-[#00aaff] hover:text-[#00d0ff] font-bold underline underline-offset-4">
            ورود به حساب
          </Link>
        </p><br />
      </section>
    </main>
  );
}
