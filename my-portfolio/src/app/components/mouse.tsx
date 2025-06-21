"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function MouseSection() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        delay: 0,
        overwrite: "auto", // utile si les mouvements sont rapides
      })
    }

    const hideCursor = () => {
      gsap.to(cursorRef.current, { opacity: 0 })
    }

    const showCursor = () => {
      gsap.to(cursorRef.current, { opacity: 1 })
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", hideCursor)
    document.addEventListener("mousedown", hideCursor)
    document.addEventListener("mouseup", showCursor)

    // ⚠️ Cleanup des événements au démontage
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", hideCursor)
      document.removeEventListener("mousedown", hideCursor)
      document.removeEventListener("mouseup", showCursor)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="hidden lg:block w-4 h-4 opacity-0 pointer-events-none rounded-full border-2 border-green-500 dark:border-accentColor z-[9999] fixed -translate-x-1/2 -translate-y-1/2"
    />
  )
}
