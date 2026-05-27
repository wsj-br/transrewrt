import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '@/lib/utils'

/** Mode-accent checked track; pair with {@link Switch} (see workspace footer toggles). */
export const switchAccentClassName = 'switch-accent'

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer inline-flex h-4 w-7 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none',
        'data-[state=unchecked]:bg-[var(--switch-track-off)]',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pointer-events-none block size-3.5 rounded-full bg-[var(--switch-thumb)] shadow-sm ring-0',
          'transition-transform duration-200 ease-in-out',
          'data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-[calc(100%-2px)]',
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
