'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import Button from './Button'

import Link from 'next/link'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import { useInstructions } from '@/hooks/useInstructions'

interface ChallengeSideBarProps {
  title: string
}

const ChallengeSideBar = ({ title }: ChallengeSideBarProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const { instructions } = useInstructions()

  return (
    <aside
      className={clsx(
        'relative flex h-full w-8 flex-col items-center overflow-hidden bg-dark p-4 transition-all duration-500',
        {
          'w-[30rem] overflow-y-auto overflow-x-hidden': isOpen,
        },
      )}
    >
      {!isOpen ? (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="border-none bg-none text-lg text-title transition-colors hover:bg-light hover:text-primary"
        >
          <BsFillArrowLeftSquareFill />
        </button>
      ) : (
        <section
          className={clsx('w-full flex-1 opacity-0 transition-opacity', {
            'opacity-100': isOpen,
          })}
        >
          <header className="flex flex-col">
            <div className="mb-4 flex w-full justify-end gap-2 self-end border-b border-solid border-light pb-4 ">
              <Link href="/" passHref>
                <Button>back to home</Button>
              </Link>

              <Button onClick={() => setIsOpen((prev) => !prev)}>
                hide panel
              </Button>
            </div>

            <h1 className="text-2xl font-bold text-title">{title}</h1>
          </header>

          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className="mt-4 flex  flex-col gap-4  text-base"
            components={{
              img: ({ src, alt }) => (
                <img src={src} alt={alt} className="w-full object-cover" />
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-primary">
                  {children}
                </a>
              ),
              h2: ({ children }) => (
                <h1 className="text-xl font-bold">{children}</h1>
              ),
              li: ({ children }) => (
                <ol className="list-inside pl-4">{children}</ol>
              ),
            }}
          >
            {instructions}
          </ReactMarkdown>
        </section>
      )}
    </aside>
  )
}

export default ChallengeSideBar
