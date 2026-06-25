/**
 * 字体配置 — Brutalist Terminal 美学
 * 全站等宽 JetBrains Mono + 标题 Space Grotesk
 */
import type { FontDefinition, FontSelectionConfig } from "@/types/fontConfig";

export const fontsList: FontDefinition[] = [
	{
		name: "JetBrains Mono",
		cssVariable: "--font-jetbrains-mono",
		provider: "fontsource",
		weights: ["400", "500", "700", "800"],
		styles: ["normal"],
		subsets: ["latin", "cyrillic"],
		fallbacks: [
			"ui-monospace",
			"SFMono-Regular",
			"Menlo",
			"Monaco",
			"Consolas",
			"Liberation Mono",
			"Courier New",
			"monospace",
		],
	},
	{
		name: "Space Grotesk",
		cssVariable: "--font-space-grotesk",
		provider: "fontsource",
		weights: ["400", "500", "700"],
		styles: ["normal"],
		subsets: ["latin"],
		fallbacks: ["sans-serif"],
	},
];

export const fontConfig: FontSelectionConfig = {
	enable: true,
	selected: ["--font-jetbrains-mono"],

	bannerTitleFont: "--font-space-grotesk",
	bannerSubtitleFont: "--font-jetbrains-mono",
	navbarTitleFont: "--font-space-grotesk",
	codeFont: "--font-jetbrains-mono",

	subsetFonts: {},
};
