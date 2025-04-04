"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { DollarSign } from "lucide-react"

const DonateButton = () => {
  const router = useRouter()

  const handleDonate = () => {
    router.push("/donations")
  }

  return (
    <Button
      variant="outline"
      className="bg-brand-50 border-brand-200 text-brand-700 hover:bg-brand-100 hover:text-brand-800 dark:bg-gray-800 dark:border-gray-700 dark:text-brand-300 dark:hover:bg-gray-700"
      onClick={handleDonate}
    >
      <DollarSign className="mr-1 h-4 w-4" />
      Donate
    </Button>
  )
}

export default DonateButton

