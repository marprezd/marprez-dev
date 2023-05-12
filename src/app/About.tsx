import { Container } from '@/components/Container'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandStackoverflow,
  IconFileDownload,
} from '@tabler/icons-react'
import { server } from 'config'
import fs, { promises as ps } from 'fs'
import Image from 'next/image'
import Link from 'next/link'

// get about from local file
async function getAbout(): Promise<any> {
  if (fs.existsSync('public/content/about.json')) {
    const res = await ps.readFile('public/content/about.json', 'utf-8')
    const about: any = JSON.parse(res)
    return about
  }

  const about = fetch(`${server}/content/about.json`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })

  return about
}

function SocialLink({ icon: Icon, ...props }: { [key: string]: any }): JSX.Element {
  return (
    <Link
      href={''}
      className="mx-1 inline-flex items-center justify-center gap-2 rounded-full border border-transparent p-2.5 text-sm font-semibold text-secondary-600 transition-all hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 dark:text-secondary-200 dark:hover:bg-secondary-600 dark:focus:ring-offset-gray-800"
      target={'_blank'}
      {...props}
    >
      <Icon className="h-6 w-6" />
    </Link>
  )
}

export default async function About() {
  const about = await getAbout()
  return (
    <Container className="mt-20">
      <div className="flex justify-center">
        <div className="mx-auto w-full max-w-md break-words rounded-xl bg-white px-6 shadow-lg dark:bg-gray-800 md:max-w-2xl">
          <div className="flex flex-wrap justify-center">
            <div className="flex w-full justify-center">
              <div className="relative w-full">
                <Image
                  src="https://res.cloudinary.com/dieoeaoiy/image/upload/c_fill,f_auto,q_auto,h_700,w_700/r_max/c_scale,w_144/v1662047991/profile_uezzbj.jpg"
                  alt="Mario Perez's Avatar"
                  width={144}
                  height={144}
                  className="absolute -top-16 left-1/2 right-0 h-36 w-36 -translate-x-1/2 transform rounded-full grayscale bg-white/90 p-0.5 shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/5 dark:bg-gray-800/90 dark:ring-white/10"
                />
              </div>
            </div>
            <div className="mt-20 w-full text-center">
              <div className="flex justify-center pb-0 pt-8 lg:pt-4">
                <div className="p-3 text-center">
                  <span className="block text-xl font-bold uppercase tracking-wide text-secondary-600 dark:text-secondary-200">
                    {about.twitterTweets}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-200">Tweets</span>
                </div>
                <div className="p-3 text-center">
                  <span className="block text-xl font-bold uppercase tracking-wide text-secondary-600 dark:text-secondary-200">
                    {about.twitterFollowers}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-200">Followers</span>
                </div>
                <div className="p-3 text-center">
                  <span className="block text-xl font-bold uppercase tracking-wide text-secondary-600 dark:text-secondary-200">
                    {about.twitterFollowing}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-200">Following</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-center">
            <h3 className="text-3xl font-bold">{about.name}</h3>
            <p className="mb-4 text-sm tracking-tighter text-gray-600 dark:text-gray-300">
              {about.designation} at <br />
              <Link
                className="font-medium text-primary-700 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-400"
                href={about.company.url}
                target={'_blank'}
              >
                {about.company.name}
              </Link>
            </p>
            <div className="mb-2 mt-0 text-xs font-bold uppercase text-gray-600 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-map-pin -mt-1 mr-1 inline-flex h-5 w-5"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 0h24v24H0z" stroke="none" />
                <path d="M9 11a3 3 0 106 0 3 3 0 00-6 0" />
                <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              {about.location}
            </div>
          </div>
          <div className="mt-6 space-y-4 border-t border-gray-200 py-6 text-center dark:border-gray-600">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="leading-relaxed">{about.bio}</p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center">
              {about.socialLinks.map((socialLink: any, index: any) => (
                <SocialLink
                  key={index}
                  href={socialLink.url}
                  icon={
                    socialLink.name === 'github'
                      ? IconBrandGithub
                      : socialLink.name === 'linkedin'
                      ? IconBrandLinkedin
                      : socialLink.name === 'twitter'
                      ? IconBrandTwitter
                      : socialLink.name === 'stackoverflow'
                      ? IconBrandStackoverflow
                      : null
                  }
                  title={
                    socialLink.name === 'github'
                      ? 'GitHub Profile'
                      : socialLink.name === 'linkedin'
                      ? 'LinkedIn Profile'
                      : socialLink.name === 'twitter'
                      ? 'Twitter Profile'
                      : socialLink.name === 'stackoverflow'
                      ? 'Stackoverflow Profile'
                      : null
                  }
                />
              ))}
              <SocialLink
                href={about.resume}
                title="Download Resume"
                icon={IconFileDownload}
                download
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
