# Longshot Security privacy and support site

Static website source for Longshot Security, published by zzholdoshev using GitHub Pages from main / root. The project uses the provider address https://zzholdoshev.github.io/longshot-security-site/ with privacy.html and support.html for browser-store listings. No paid domain or hosting plan is required for this public repository setup.

This repository contains the public landing page, privacy/support pages, a full general tutorial under docs/, local presentation JavaScript, fonts and campaign artwork. There is no backend, analytics script, remote JavaScript, form or assessment upload service. GitHub Pages logs visitor IP addresses for security purposes, as explained in the policy. Questions can be submitted as public repository issues; never attach credentials, private targets or sensitive evidence.

To update: edit the static files on main. Settings → Pages must use Deploy from a branch, main / root. Wait for the Pages build/deployment to succeed, then verify the public HTTPS pages before using their URLs in store dashboards. Website deployment does not mean either extension marketplace has approved the extension.

Official hosting instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site


## Presentation and documentation

The design follows Longshot’s default Dark palette: teal surfaces, red accents, Rajdhani headings and IBM Plex Mono labels. Campaign pictures were supplied by the publisher; they are compositions from an earlier interface. Scout is an original arrow-shaped SVG mascot created for this site, with local animation and feature tips. It does not use another product’s mascot artwork. Motion can be paused and honors reduced-motion preferences; the mascot can be collapsed. There are no analytics scripts, remote fonts or external JavaScript.

The docs page adapts the full general tutorial to the web and includes Chrome edition/setup differences for 2.18.1. The original local Obsidian note is unchanged. The matching extension source is attached to the GitHub release as longshot-2.18.1-source.zip; GitHub’s automatically generated source archives contain this website only.

## Layered motion upgrade

The landing page adds an original local canvas particle network (42 nodes on larger screens, 18 on mobile), hero orbits and floating badges, word-level headline entry, sequential workflow accents, feature scan sweeps and packet traces, download rings, button highlights, scroll progress, and Scout reactions/sparks. The canvas draws at a capped 30 frames per second with device-pixel ratio capped at 1.5. Its loop stops while motion is paused, reduced motion is requested, or the document is hidden. All visual effects are decorative and preserve the existing navigation, downloads and full tutorial.

## Languages and extracted artwork

The landing page, privacy policy, support page and full web tutorial are provided in 20 languages: English, Russian, German, French, Simplified Chinese, Japanese, Spanish, Hindi, Portuguese, Arabic, Bengali, Urdu, Indonesian, Turkish, Korean, Italian, Vietnamese, Tamil, Telugu and Marathi. Use the native-language selector on any page. Arabic and Urdu use right-to-left layouts; code, commands, URLs and screenshots retain their original text. The downloadable Markdown tutorial remains English and is marked accordingly.

Translations are machine-generated from public website prose at build time; English is the reference. The hosted pages do not call a translation service or install a third-party widget. The language is encoded in the page URL; no cookie or language-tracking service is required.

The new `*-cutout.webp` assets isolate browser-window foregrounds from the supplied campaign images. They were derived with the built-in image-editing tool, then encoded as transparent WebP; CSS clips trim remaining outer scenery. Original publisher images and the older website assets are preserved. Screenshots are illustrative views from an earlier extension interface.

## Context-aware marketing localization

The 19 translated editions use authored locale overrides for complete headlines, landing-page descriptions, feature messages, Scout tips, campaign captions, short promotional text and assessment-limit guidance. Headlines are rendered as whole messages with intentional line breaks and emphasis, rather than assembled from separately translated English fragments. Product names and technical identifiers stay intact. The overrides are maintained in the website authoring source under editorial-locales/ and applied by build_languages.py, so rebuilding preserves them. These are AI-assisted editorial adaptations, not a claim of professional human translation. The remaining detailed technical and policy text retains the machine-translated baseline; English remains the reference.
