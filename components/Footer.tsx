"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200/50 dark:border-neutral-800/50 bg-white/50 dark:bg-neutral-900/50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold text-warm-900 dark:text-warm-50 mb-3">
              Site Map
            </h4>
            <ul className="space-y-2 text-sm text-warm-600 dark:text-warm-400">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tools/word-counter" className="hover:text-accent transition-colors">
                  Word Counter
                </Link>
              </li>
              <li>
                <Link href="/tools/case-converter" className="hover:text-accent transition-colors">
                  Case Converter
                </Link>
              </li>
              <li>
                <Link href="/tools/text-sorter" className="hover:text-accent transition-colors">
                  Text Sorter
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  More Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-warm-900 dark:text-warm-50 mb-3">
              Tools
            </h4>
            <ul className="space-y-2 text-sm text-warm-600 dark:text-warm-400">
              <li>
                <Link href="/tools/remove-duplicate-lines" className="hover:text-accent transition-colors">
                  Remove Duplicates
                </Link>
              </li>
              <li>
                <Link href="/tools/remove-extra-spaces" className="hover:text-accent transition-colors">
                  Remove Extra Spaces
                </Link>
              </li>
              <li>
                <Link href="/tools/slug-generator" className="hover:text-accent transition-colors">
                  Slug Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/lorem-ipsum" className="hover:text-accent transition-colors">
                  Lorem Ipsum
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-warm-900 dark:text-warm-50 mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-warm-600 dark:text-warm-400">
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL && (
                <li>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                    className="hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email
                  </a>
                </li>
              )}
              {process.env.NEXT_PUBLIC_TWITTER_URL && (
                <li>
                  <a
                    href={process.env.NEXT_PUBLIC_TWITTER_URL}
                    className="hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X (Twitter)
                  </a>
                </li>
              )}
              {process.env.NEXT_PUBLIC_INSTAGRAM_URL && (
                <li>
                  <a
                    href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                    className="hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {process.env.NEXT_PUBLIC_INDIEHACKERS_URL && (
                <li>
                  <a
                    href={process.env.NEXT_PUBLIC_INDIEHACKERS_URL}
                    className="hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Indie Hackers
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-warm-900 dark:text-warm-50 mb-3">
              TextTools
            </h4>
            <p className="text-sm text-warm-600 dark:text-warm-400">
              Free online text tools for writers, marketers, and students.
              No sign-in required.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-warm-200 dark:border-warm-800 text-center text-sm text-warm-500 dark:text-warm-400">
          &copy; {new Date().getFullYear()} TextTools. All tools are free to use.
          {process.env.NEXT_PUBLIC_GITHUB_URL && (
            <>
              {" · "}
              <a
                href={process.env.NEXT_PUBLIC_GITHUB_URL}
                className="hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
