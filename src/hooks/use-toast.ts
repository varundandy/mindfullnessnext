"use client"

import type React from "react"

import { toast as sonnerToast } from "sonner"

type ToastProps = {
  title: string
  description?: string
  action?: React.ReactNode
}

export function useToast() {
  const toast = ({ title, description, action }: ToastProps) => {
    sonnerToast(title, {
      description,
      action,
    })
  }

  return { toast }
}

