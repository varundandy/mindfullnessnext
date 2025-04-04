"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { DollarSign, Coins, Copy, Check, CreditCard } from "lucide-react"
import { useState } from "react"

// Mock wallet addresses - in a real app, these would be securely stored
const cryptoWallets = {
  XRP: "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh",
  USDT: "TKTcfBJPFKdCYgJpRQeheaqzwPkQRKzPJK",
  RLUSD: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  USDC: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
}

const DonationsContent = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedCrypto, setSelectedCrypto] = useState("")
  const [copied, setCopied] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const handlePaymentMethod = async (method: string, amount?: number) => {
    if (method === "Credit Card" || method === "PayPal") {
      try {
        setIsProcessing(true)

        // In a real app, this would call the Stripe API route
        // For demo purposes, we'll just simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 1500))

        toast.success(`Thank you for your donation of ${amount ? `$${amount}` : ""}!`, {
          description: "Your support helps us continue creating mindfulness content.",
        })

        setIsProcessing(false)
      } catch (error) {
        setIsProcessing(false);
        console.log(error);
        toast.error("Payment processing failed", {
          description: "There was an error connecting to the payment processor. Please try again.",
        })
      }
    } else if (Object.keys(cryptoWallets).includes(method)) {
      setSelectedCrypto(method)
      setDialogOpen(true)
    }
  }

  const copyToClipboard = () => {
    if (selectedCrypto && cryptoWallets[selectedCrypto as keyof typeof cryptoWallets]) {
      navigator.clipboard.writeText(cryptoWallets[selectedCrypto as keyof typeof cryptoWallets])
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const donationAmounts = [10, 25, 50, 100]

  return (
    <>
      <div className="bg-brand-50 dark:bg-gray-900 py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">Support Our Work</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Your donations help us continue creating mindfulness content and resources for the community. Choose your
            preferred donation method below.
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <Tabs defaultValue="traditional" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="traditional">
                <CreditCard className="mr-2 h-4 w-4" />
                Card & PayPal
              </TabsTrigger>
              <TabsTrigger value="crypto">
                <Coins className="mr-2 h-4 w-4" />
                Cryptocurrency
              </TabsTrigger>
            </TabsList>

            <TabsContent value="traditional" className="space-y-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {donationAmounts.map((amount) => (
                  <Card
                    key={amount}
                    className="border border-gray-200 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-700 transition-all cursor-pointer"
                  >
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-2xl text-center dark:text-white">${amount}</CardTitle>
                    </CardHeader>
                    <CardFooter className="p-4 pt-2">
                      <Button
                        onClick={() => handlePaymentMethod("Credit Card", amount)}
                        variant="default"
                        className="w-full"
                        disabled={isProcessing}
                      >
                        {isProcessing ? "Processing..." : "Donate"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <Card className="border border-gray-200 dark:border-gray-700 mt-8">
                <CardHeader>
                  <CardTitle className="dark:text-white">Choose Payment Method</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Select your preferred payment method for your donation
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="h-16 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
                    onClick={() => handlePaymentMethod("Credit Card")}
                    disabled={isProcessing}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Credit Card
                  </Button>
                  <Button
                    variant="outline"
                    className="h-16 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
                    onClick={() => handlePaymentMethod("PayPal")}
                    disabled={isProcessing}
                  >
                    <DollarSign className="mr-2 h-4 w-4" />
                    PayPal
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="crypto" className="space-y-4">
              <Card className="border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-white">Donate with Cryptocurrency</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Choose your preferred cryptocurrency for donation
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.keys(cryptoWallets).map((crypto) => (
                    <Button
                      key={crypto}
                      variant="outline"
                      className="h-16 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
                      onClick={() => handlePaymentMethod(crypto)}
                    >
                      <Coins className="mr-2 h-4 w-4" />
                      {crypto}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                After sending your crypto donation, please contact us with your transaction ID for acknowledgment.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Donate with {selectedCrypto}</DialogTitle>
            <DialogDescription className="dark:text-gray-400">
              Send your donation to the following wallet address:
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 mt-2 bg-slate-100 dark:bg-slate-800 rounded-md flex items-center justify-between">
            <code className="text-sm font-mono break-all dark:text-gray-300">
              {selectedCrypto && cryptoWallets[selectedCrypto as keyof typeof cryptoWallets]}
            </code>
            <Button variant="ghost" size="icon" onClick={copyToClipboard} className="flex h-8 w-8 p-0 ml-2">
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">Copy</span>
            </Button>
          </div>
          <div className="mt-4 text-sm text-center text-muted-foreground dark:text-gray-400">
            <p>After sending your donation, please contact us with your transaction ID for acknowledgment.</p>
          </div>
          <div className="flex justify-end mt-4">
            <DialogClose asChild>
              <Button variant="default">Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DonationsContent

