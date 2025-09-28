import { useCallback } from "react"
import { useToast } from "@/components/ui/use-toast"

export function useNotify() {
  const { toast } = useToast()

  const success = useCallback(
    (message: string) => {
      toast({
        title: "Succès",
        description: message,
        variant: "default",
      })
    },
    [toast]
  )

  const error = useCallback(
    (message: string) => {
      toast({
        title: "Erreur",
        description: message,
        variant: "destructive",
      })
    },
    [toast]
  )

  const info = useCallback(
    (message: string) => {
      toast({
        title: "Information",
        description: message,
      })
    },
    [toast]
  )

  return { success, error, info }
}