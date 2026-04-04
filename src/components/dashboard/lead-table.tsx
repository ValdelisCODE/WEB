"use client";

import { updateLeadStatus } from "@/lib/actions";
import { cn } from "@/lib/cn";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  business: string;
  service: string;
  message: string;
  status: string;
  createdAt: Date;
  site: { name: string };
}

const STATUS_COLORS: Record<string, string> = {
  new: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  contacted: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  qualified: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  closed: "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400",
};

export function LeadTable({ leads }: { leads: Lead[] }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-800">
            <th className="whitespace-nowrap px-4 py-3 font-medium text-zinc-500">Name</th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-zinc-500">Contact</th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-zinc-500">Business</th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-zinc-500">Service</th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-zinc-500">Site</th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-zinc-500">Status</th>
            <th className="whitespace-nowrap px-4 py-3 font-medium text-zinc-500">Date</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr
              key={lead.id}
              className="border-b border-zinc-100 hover:bg-zinc-50 dark:border-zinc-800/50 dark:hover:bg-zinc-900"
            >
              <td className="px-4 py-3 font-medium">{lead.name}</td>
              <td className="px-4 py-3">
                <div>{lead.email}</div>
                <div className="text-zinc-500">{lead.phone}</div>
              </td>
              <td className="px-4 py-3">{lead.business}</td>
              <td className="px-4 py-3 text-zinc-500">{lead.service || "—"}</td>
              <td className="px-4 py-3 text-zinc-500">{lead.site.name}</td>
              <td className="px-4 py-3">
                <select
                  defaultValue={lead.status}
                  onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                  className={cn(
                    "rounded-full border-0 px-2.5 py-0.5 text-xs font-medium",
                    STATUS_COLORS[lead.status] ?? STATUS_COLORS.new,
                  )}
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="qualified">Qualified</option>
                  <option value="closed">Closed</option>
                </select>
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-zinc-500">
                {new Date(lead.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
