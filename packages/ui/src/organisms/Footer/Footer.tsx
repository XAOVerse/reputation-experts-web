"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { NavItem, SocialLink } from "../../types";

export interface FooterProps {
  logo?: { src: string; alt: string; width?: number; height?: number };
  brandName?: string;
  copyright?: string;
  offices?: { city: string; address: string }[];
  navItems?: NavItem[];
  socialLinks?: SocialLink[];
  moreServicesLinks?: { label: string; href: string }[];
}

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const DEFAULT_OFFICES = [
  { city: "London", address: "167-169 Great Portland Street, 5th Floor, London W1W 5PF" },
];

const DEFAULT_NAV: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const DEFAULT_SOCIALS: SocialLink[] = [];

export function Footer({
  logo,
  brandName = "Reputation Experts",
  copyright,
  offices = DEFAULT_OFFICES,
  navItems = DEFAULT_NAV,
  socialLinks = DEFAULT_SOCIALS,
}: FooterProps) {
