import * as React from 'react'
import { twMerge } from 'tailwind-merge'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          'flex h-9 w-full rounded-md border border-wgray-200 dark:border-wgray-800 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-wgray-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-wgray-950 disabled:cursor-not-allowed disabled:opacity-50  dark:placeholder:text-wgray-400 dark:focus-visible:ring-wgray-400',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'
