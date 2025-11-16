'use client'

import Head from 'next/head';
import { useSectionToggle } from '../context/SectionToggleContext';

export default function Home() {
  const { openSection, toggleSection } = useSectionToggle();

  const handleClickBtn = (section) => (event) => {
    event.stopPropagation();
    toggleSection(section);
  };

  return (
    <div className="min-h-screen place-items-center dark:bg-grey-100">
      <div className="max-w-md mx-auto py-8 px-4 text-center">
        <Head>
          <title>thekbsareinsidethecomputer</title>
          <meta name="description" content="what is this, a website for ants?" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        <header>
          <h1 className="text-4xl font-bold text-blue-500">kb</h1>
          <p className="text-lg text-gray-700">Software Engineer</p>
        </header>

        {/* Blurb */}
        <section>
          <p className="text-lg text-gray-600">
            i come from space for your nachos
          </p>
        </section>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="flex space-x-4 justify-center">
            <li>
              <button
                type="button"
                className="text-blue-500 hover:underline nav-btn"
                aria-expanded={openSection === 'about'}
                onClick={handleClickBtn('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-blue-500 hover:underline nav-btn"
                aria-expanded={openSection === 'projects'}
                onClick={handleClickBtn('projects')}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-blue-500 hover:underline nav-btn"
                aria-expanded={openSection === 'contact'}
                onClick={handleClickBtn('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Sections */}
        <div className="mt-8">
          {/* About Me Section */}
          {openSection === 'about' && (
            <div className="rounded-md p-4 bg-gray-50 dark:bg-gray-900">
              <h2 className="text-lg font-bold mb-2">About Me</h2>
              <p>
                I&apos;m an incessantly curious, tenacious, deliberate, and whimsical dude who likes to build the things that live in-between. Full stack Engineer in disciplina with a burning interest for the middleware, microservices, APIs and frameworks that empower developers.
              </p>
            </div>
          )}

          {/* Projects Section */}
          {openSection === 'projects' && (
            <div className="p-4 rounded-md bg-gray-50 dark:bg-gray-900">
              <h2 className="text-lg font-bold mb-2">Projects and Skills</h2>
              <div className="space-y-2">
                <a
                  href="https://skillsoft.digitalbadges.skillsoft.com/profile/kylebutcher440290/wallet#gs.9wuh1h"
                  className="block text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded bg-gray-800 hover:bg-gray-900">
                    My Badges and Certificates
                  </div>
                </a>
                <a
                  href="https://github.com/kbinreallife/github-pages-next-tailwind-boilerplate"
                  className="block text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded bg-gray-800 hover:bg-gray-900">
                    Boilerplate project to make websites like this one
                  </div>
                </a>
                <a
                  href="https://github.com/kbinreallife/kbinreallife-Github_Activity_Visualizer"
                  className="block text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded bg-gray-800 hover:bg-gray-900">
                    A Github Organization Activity Visualizer
                  </div>
                </a>
                <a
                  href="https://comcode.org"
                  className="block text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded bg-gray-800 hover:bg-gray-900">
                    The Organization I Volunteer for
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Contact Section */}
          {openSection === 'contact' && (
            <div className="p-4 rounded-md bg-gray-50 dark:bg-gray-900">
              <h2 className="text-lg font-bold mb-2">Contact</h2>
              <div className="flex flex-col space-y-4">
                {/* LinkedIn */}
                <div>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/kyle-butcher-67424040"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
                {/* Bluesky */}
                <div>
                  <p>
                    <a
                      href="https://bsky.app/profile/kbinreallife.bsky.social"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Bluesky
                    </a>
                  </p>
                </div>
                {/* Discord */}
                <div>
                  <p>
                    <span className="text-blue-500 hover:underline">
                      <a href="https://discordapp.com/users/233443821940113408">Discord</a>
                    </span>
                  </p>
                </div>
                <p>
                  <a
                    href="https://discord.gg/hackmud"
                    className="text-blue-500 hover:underline"
                  >
                    hackmud discord
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
