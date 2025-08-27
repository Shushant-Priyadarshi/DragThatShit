
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          <span className="dts">Drag</span> is Free
        </h2>
        <p className="mt-4 text-slate-600">
          Start free, scale as you grow. Pay only for the slots you need.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-slate-900">Free</h3>
            <p className="mt-2 text-slate-600">Perfect to get started</p>
            <p className="mt-6 text-4xl font-bold text-slate-900">$0</p>

            <ul className="mt-6 space-y-3 text-left">
              <li className="flex items-center gap-2 text-slate-700">
                <Check className="h-5 w-5 text-blue-600" />
                Only <b>1 Resume Slot</b>
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <Check className="h-5 w-5 text-blue-600" />
                Drag it anywhere
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <Check className="h-5 w-5 text-blue-600" />
                Highly secure
              </li>
            </ul>

            <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="rounded-2xl border border-blue-200 shadow-lg hover:shadow-2xl transition p-8 flex flex-col bg-gradient-to-b from-blue-50 to-white">
            <h3 className="text-2xl font-semibold text-slate-900">Pro</h3>
            <p className="mt-2 text-slate-600">For active job seekers</p>
            <p className="mt-6 text-4xl font-bold text-slate-900">
              $3 <span className="text-lg font-medium text-slate-600">/ slot</span>
            </p>

            <ul className="mt-6 space-y-3 text-left">
              <li className="flex items-center gap-2 text-slate-700">
                <Check className="h-5 w-5 text-blue-600" />
                Unlimited resumes – pay per slot
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <Check className="h-5 w-5 text-blue-600" />
                Drag & drop anywhere instantly
              </li>
              <li className="flex items-center gap-2 text-slate-700">
                <Check className="h-5 w-5 text-blue-600" />
                Same strong security & privacy
              </li>
            </ul>

            <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
