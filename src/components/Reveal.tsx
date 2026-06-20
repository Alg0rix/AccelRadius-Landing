import AnimatedContent from "@/components/AnimatedContent"
import type { ComponentProps } from "react"

type RevealProps = ComponentProps<typeof AnimatedContent>

export default function Reveal({
  distance = 48,
  duration = 0.85,
  ease = "power3.out",
  ...props
}: RevealProps) {
  return <AnimatedContent distance={distance} duration={duration} ease={ease} {...props} />
}