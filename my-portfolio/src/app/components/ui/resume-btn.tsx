"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/app/lib/utils"
import { gsap } from "gsap"

export default function ResumeBtn() {
  const topTween = useRef(null)
  const rightTween = useRef(null)
  const bottomTween = useRef(null)
  const leftTween = useRef(null)
  gsap.registerPlugin()
  useEffect(() => {
    if (topTween && rightTween && bottomTween && leftTween) {
      gsap.fromTo(
        topTween.current,
        {
          left: "-100%",
        },
        {
          left: "100%",
          repeat: -1,
          duration: 2,
        }
      )
      gsap.fromTo(
        rightTween.current,
        {
          top: "-100%",
        },
        {
          top: "100%",
          delay: 0.5,
          repeat: -1,
          duration: 2,
        }
      )

      gsap.fromTo(
        bottomTween.current,
        {
          right: "-100%",
        },
        {
          right: "100%",
          delay: 1,
          repeat: -1,
          duration: 2,
        }
      )

      gsap.fromTo(
        leftTween.current,
        {
          bottom: "-100%",
        },
        {
          bottom: "100%",
          delay: 1.5,
          repeat: -1,
          duration: 2,
        }
      )
    }
  }, [])

  return (
    <a
      role="button"
      href="https://bronze-petronilla-20.tiiny.site/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Resume"
      className="group hidden duration-150 lg:flex md:justify-center md:items-center relative h-10 w-28 overflow-hidden border-[.01px] border-gray-800 hover:border-none hover:bg-emerald-500 hover:text-white hover:shadow-[0_20px_50px_rgba(0,_128,_0,_0.7)] hover:webkit-reflect"
    >
      <span className="sr-only">Resume</span>
      <div
        ref={topTween}
        className="absolute left-[-100px] top-0 h-[1px] w-full bg-[linear-gradient(90deg,transparent,hsl(var(--accent-color)))]"
      />
      <span
        ref={rightTween}
        className="absolute right-0 top-[-100%] h-full w-[1px] bg-[linear-gradient(180deg,transparent,hsl(var(--accent-color)))]"
      />
      <span
        ref={bottomTween}
        className="absolute bottom-0 right-[-100%] h-[1px] w-full bg-[linear-gradient(270deg,transparent,hsl(var(--accent-color)))]"
      />
      <span
        ref={leftTween}
        className="absolute bottom-[-100%] left-0 h-full w-[1px] bg-[linear-gradient(360deg,transparent,hsl(var(--accent-color)))]"
      />
      <div
        className={cn(
          "text-xs group-hover:text-white text-emerald-500 dark:text-gray-300",
        )}
      >
        Resume
      </div>
    </a>
  )
}