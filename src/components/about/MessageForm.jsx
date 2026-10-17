import { useState } from "react";

// Messages are emailed privately to the site owner through Web3Forms
// (https://web3forms.com). Nothing is shown publicly or stored in the browser.
// The access key lives in the VITE_WEB3FORMS_KEY environment variable.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const inputClass =
  "w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder:text-zinc-600 outline-none transition-colors duration-300 focus:border-[#6F93BF]";
const labelClass =
  "block font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2";

export default function MessageForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real people never see or tick this box, bots often do.
    if (data.get("botcheck")) return;

    if (!ACCESS_KEY) {
      console.warn("VITE_WEB3FORMS_KEY is not set, so messages can't be sent.");
      setError("The message form isn't set up yet. Please email me directly.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const type = data.get("type");
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio: new ${type} from ${data.get("name")}`,
          from_name: "Portfolio website",
          name: data.get("name"),
          email: data.get("email"),
          type,
          message: data.get("message"),
        }),
      });
      const json = await res.json();

      if (json.success) {
        form.reset();
        setStatus("success");
      } else {
        setError(json.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-white/10 bg-white/[0.03] p-12 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#6F93BF]">
          Message sent
        </p>
        <h3 className="mt-6 text-4xl font-black tracking-tight">Thank you!</h3>
        <p className="mt-4 text-zinc-400 leading-8">
          Your message reached me directly. I'll reply as soon as I can.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/10 bg-white/[0.03] p-8 md:p-12"
    >
      {/* Honeypot (hidden from people) */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
        <div>
          <label htmlFor="mf-name" className={labelClass}>Your name</label>
          <input id="mf-name" name="name" type="text" required maxLength={80}
            placeholder="Jane Doe" className={inputClass} />
        </div>

        <div>
          <label htmlFor="mf-email" className={labelClass}>Your email</label>
          <input id="mf-email" name="email" type="email" required maxLength={120}
            placeholder="jane@example.com" className={inputClass} />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="mf-type" className={labelClass}>This is a</label>
          <select id="mf-type" name="type" defaultValue="message"
            className={`${inputClass} bg-black cursor-pointer`}>
            <option value="message">General message</option>
            <option value="project idea">Project idea / suggestion</option>
            <option value="collaboration">Collaboration or job opportunity</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="mf-message" className={labelClass}>Your message</label>
          <textarea id="mf-message" name="message" required minLength={10}
            maxLength={2000} rows={5}
            placeholder="Tell me about your idea, project or question..."
            className={`${inputClass} resize-none`} />
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-8 text-sm text-red-400">{error}</p>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
          Only I can read this
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group px-12 py-5 rounded-full border border-white text-white font-semibold transition-all duration-500 hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="flex items-center gap-4">
            {status === "sending" ? "Sending..." : "Send Message"}
            <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
          </span>
        </button>
      </div>
    </form>
  );
}
