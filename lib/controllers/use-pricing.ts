"use client";

import { useMemo, useState } from "react";
import type { Plan } from "@/lib/models";
import { peso, perMonth, savingsPercent } from "@/lib/utils";

export type BillingTerm = "monthly" | "yearly";

export type PricedPlan = Plan & {
  /** "₱299" / "Free" — the big number on the card. */
  price: string;
  /** "per month", "per year", or "forever". */
  cadence: string;
  /** Yearly only: "₱167 / month, billed yearly". */
  note?: string;
};

/**
 * The paywall's logic, same as the app's: yearly is shown first because it is
 * the better deal, and the saving is computed from the two real prices rather
 * than written into the copy where it could drift.
 */
export function usePricing(plans: Plan[]) {
  const [term, setTerm] = useState<BillingTerm>("yearly");

  const pro = plans.find((p) => p.id === "pro");
  const savings = pro && pro.monthly > 0 ? savingsPercent(pro.monthly, pro.yearly) : 0;

  const priced = useMemo<PricedPlan[]>(
    () =>
      plans.map((plan) => {
        if (plan.monthly === 0 && plan.yearly === 0) {
          return { ...plan, price: "Free", cadence: "forever" };
        }
        if (term === "monthly") {
          return { ...plan, price: peso(plan.monthly), cadence: "per month" };
        }
        return {
          ...plan,
          price: peso(plan.yearly),
          cadence: "per year",
          note: `${perMonth(plan.yearly)} a month, billed yearly`,
        };
      }),
    [plans, term],
  );

  return { term, setTerm, plans: priced, savings };
}
