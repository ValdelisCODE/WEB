import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TenantSite } from "@/components/tenant/tenant-site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const site = await db.site.findUnique({
    where: { slug },
    select: { name: true, heroText: true },
  });

  if (!site) return {};

  return {
    title: `${site.name} | Get a Free Quote`,
    description: site.heroText,
  };
}

export default async function TenantPage({ params }: Props) {
  const { slug } = await params;

  const site = await db.site.findUnique({
    where: { slug },
    include: {
      services: { orderBy: { order: "asc" } },
    },
  });

  if (!site) notFound();

  return <TenantSite site={site} />;
}
