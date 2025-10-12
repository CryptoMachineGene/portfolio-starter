// src/pages/AMM.tsx
import { useMemo, useState } from "react";
import RepoButton from "../components/RepoButton";

function num(v: string) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function format(n: number) {
  return Number.isFinite(n) ? n.toLocaleString(undefined, { maximumFractionDigits: 6 }) : "—";
}

export default function AMM() {
  return (
    <div className="container-nwc py-10">
      <h1 className="text-3xl font-bold">AMM Prototype (Constant-Product DEX)</h1>

      <div className="flex flex-wrap gap-2 text-xs mt-3">
        <span className="px-2 py-1 bg-neutral-900 border border-neutral-700 rounded">Solidity</span>
        <span className="px-2 py-1 bg-neutral-900 border border-neutral-700 rounded">Foundry</span>
        <span className="px-2 py-1 bg-neutral-900 border border-neutral-700 rounded">React</span>
        <span className="px-2 py-1 bg-neutral-900 border border-neutral-700 rounded">Tailwind</span>
      </div>

      <p className="opacity-80 mt-4 max-w-2xl">
        A minimal constant-product AMM (<code>x&nbsp;·&nbsp;y&nbsp;=&nbsp;k</code>) with mint/burn liquidity and swap
        functions. Below is a <strong>front-end simulator</strong> to visualize swap math, price impact, and
        post-trade reserves (for portfolio/demo purposes only).
      </p>

      <div className="mt-6 flex gap-3">
        <RepoButton to="https://github.com/CryptoMachineGene/amm-prototype" />
      </div>

      <SwapSimulator />
    </div>
  );
}

function SwapSimulator() {
  const [reserveA, setReserveA] = useState("1000");
  const [reserveB, setReserveB] = useState("1000");
  const [amountIn, setAmountIn] = useState("10");
  const [dir, setDir] = useState<"A2B" | "B2A">("A2B");
  const [feeBps, setFeeBps] = useState(30); // 0.30%

  const {
    valid,
    k,
    priceBefore,
    priceAfter,
    out,
    effIn,
    newResA,
    newResB,
    priceImpactPct,
  } = useMemo(() => {
    const x = num(reserveA);
    const y = num(reserveB);
    const dxRaw = num(amountIn);
    const fee = Math.max(0, Math.min(10000, feeBps)) / 10_000;

    if (x <= 0 || y <= 0 || dxRaw <= 0) {
      return {
        valid: false,
        k: NaN,
        priceBefore: NaN,
        priceAfter: NaN,
        out: NaN,
        effIn: NaN,
        newResA: NaN,
        newResB: NaN,
        priceImpactPct: NaN,
      };
    }

    const k = x * y;
    const priceBefore = y / x; // price of A in terms of B

    const dxNet = dxRaw * (1 - fee); // effective input after fee
    let out = 0;
    let newA = x;
    let newB = y;

    if (dir === "A2B") {
      // dy = (y * dxNet) / (x + dxNet)
      out = (y * dxNet) / (x + dxNet);
      newA = x + dxNet;
      newB = y - out;
    } else {
      // A out when swapping B->A: dx=dxNet on B side
      // da = (x * dxNet) / (y + dxNet)
      out = (x * dxNet) / (y + dxNet);
      newA = x - out;
      newB = y + dxNet;
    }

    const priceAfter = newB / newA;
    const priceImpactPct = ((priceAfter - priceBefore) / priceBefore) * 100;

    return {
      valid: true,
      k,
      priceBefore,
      priceAfter,
      out,
      effIn: dxNet,
      newResA: newA,
      newResB: newB,
      priceImpactPct,
    };
  }, [reserveA, reserveB, amountIn, dir, feeBps]);

  return (
    <section className="mt-10 grid lg:grid-cols-2 gap-6">
      {/* Controls */}
      <div className="p-6 rounded-2xl border bg-black text-white space-y-5">
        <h2 className="text-xl font-semibold">Swap Controls</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="text-sm">
            <span className="block opacity-80 mb-1">Reserve A</span>
            <input
              inputMode="decimal"
              value={reserveA}
              onChange={(e) => setReserveA(e.target.value)}
              className="w-full rounded-xl px-3 py-2 bg-neutral-900 border border-neutral-700 outline-none"
            />
          </label>

          <label className="text-sm">
            <span className="block opacity-80 mb-1">Reserve B</span>
            <input
              inputMode="decimal"
              value={reserveB}
              onChange={(e) => setReserveB(e.target.value)}
              className="w-full rounded-xl px-3 py-2 bg-neutral-900 border border-neutral-700 outline-none"
            />
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="text-sm">
            <span className="block opacity-80 mb-1">Amount In</span>
            <input
              inputMode="decimal"
              value={amountIn}
              onChange={(e) => setAmountIn(e.target.value)}
              className="w-full rounded-xl px-3 py-2 bg-neutral-900 border border-neutral-700 outline-none"
            />
          </label>

          <div className="text-sm">
            <span className="block opacity-80 mb-1">Direction</span>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="dir"
                  checked={dir === "A2B"}
                  onChange={() => setDir("A2B")}
                />
                <span>A → B</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="dir"
                  checked={dir === "B2A"}
                  onChange={() => setDir("B2A")}
                />
                <span>B → A</span>
              </label>
            </div>
          </div>
        </div>

        <label className="text-sm block">
          <div className="flex justify-between mb-1">
            <span className="opacity-80">Fee (bps)</span>
            <span className="font-mono">{feeBps} bps</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={feeBps}
            onChange={(e) => setFeeBps(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-xs opacity-70 mt-1">
            {feeBps / 100}% fee applied to input (e.g., 30 bps = 0.30%).
          </p>
        </label>
      </div>

      {/* Preview */}
      <div className="p-6 rounded-2xl border bg-white">
        <h2 className="text-xl font-semibold">Trade Preview</h2>

        {!valid ? (
          <p className="mt-4 text-sm">Enter positive reserves and a non-zero amount.</p>
        ) : (
          <div className="mt-4 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Stat label="k (x·y)" value={format(k)} />
              <Stat
                label="Price (B per A)"
                value={`${format(priceBefore)} → ${format(priceAfter)}`}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Stat
                label={dir === "A2B" ? "Input A (net)" : "Input B (net)"}
                value={format(effIn)}
              />
              <Stat
                label={dir === "A2B" ? "Output B (est.)" : "Output A (est.)"}
                value={format(out)}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Stat
                label="Price Impact"
                value={`${(priceImpactPct >= 0 ? "+" : "")}${format(priceImpactPct)}%`}
              />
              <Stat
                label="New Reserves"
                value={`A: ${format(newResA)} | B: ${format(newResB)}`}
              />
            </div>

            <p className="text-xs opacity-70">
              This is an educational preview of constant-product math; rounding, gas, and safety checks are simplified.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border px-4 py-3 bg-neutral-50">
      <div className="text-xs opacity-60">{label}</div>
      <div className="text-base font-semibold">{value}</div>
    </div>
  );
}
