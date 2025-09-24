'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  asChild = false,
  ...props 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
      const variants = {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 shadow-lg',
        secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-secondary-500 shadow-sm',
        outline: 'bg-transparent text-secondary-500 border border-secondary-500 hover:bg-secondary-50 hover:text-secondary-600 focus:ring-secondary-500'
      }
  
  const sizes = {
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-md',
    lg: 'px-6 py-3 text-base rounded-lg'
  }
  
  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  )
  
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: cn(classes, (children as React.ReactElement).props.className)
    })
  }
  
  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}
