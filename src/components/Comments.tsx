"use client";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Comments(): JSX.Element {
  const { theme } = useTheme();
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
        Comments
      </h2>
      <p className="mt-2 text-base text-gray-600 dark:text-gray-400 mb-4">
        Do you have a problem, want to share feedback, or discuss further ideas?
        Feel free to leave a comment here! Please stick to English. This comment
        thread directly maps to a{" "}
        <Link
          href="https://github.com/marprezd/marprez-dev/discussions/"
          target="blank"
        >
          <em className="text-primary-40 dark:text-primary-80">discussion on GitHub</em>
        </Link>
        , so you can also comment there if you prefer.
      </p>
      <Giscus
        id="comments"
        repo="marprezd/marprez-dev"
        repoId="R_kgDOJZAsxA"
        category="Announcements"
        categoryId="DIC_kwDOJZAsxM4CV7Yo"
        mapping="pathname"
        data-strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme}
        lang="en"
        loading="lazy"
      />
      <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
        Instead of authenticating the{" "}
        <Link
          href="https://giscus.app"
          target="blank"
          className="text-primary-40 dark:text-primary-80"
        >
          giscus
        </Link>{" "}
        application, you can also comment directly{" "}
        <Link
          href="https://github.com/marprezd/marprez-dev/discussions?discussions"
          target="blank"
        >
          <em className="text-teal-500">on GitHub</em>
        </Link>
        .
      </p>
    </div>
  );
}
