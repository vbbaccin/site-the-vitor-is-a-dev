import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from './ui/button'
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'Assunto deve ter no mínimo 3 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter no mínimo 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

interface ContactFormDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactFormDialog({ isOpen, onClose }: ContactFormDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      const webFormKey = (import.meta.env as unknown as Record<string, string>).VITE_WEB3FORMS_KEY

      if (!webFormKey) {
        console.error('VITE_WEB3FORMS_KEY não configurada. Criar .env.local com a chave.')
        setSubmitStatus('error')
        setIsSubmitting(false)
        return
      }

      // Integração com Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: webFormKey,
          ...data,
          // Configuração de redirecionamento opcional
          from_name: 'Vitor Baccin - Portfólio',
          reply_to: data.email,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
        setTimeout(() => {
          onClose()
          setSubmitStatus('idle')
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-dark-900 border border-dark-700/50 rounded-xl shadow-2xl w-full max-w-lg backdrop-blur">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-dark-700/50">
                <h2 className="text-2xl font-bold text-white">Envie uma Mensagem</h2>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-dark-800 rounded-lg transition-colors"
                >
                  <X size={24} className="text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-neon-green mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Enviado com Sucesso!</h3>
                    <p className="text-gray-400 text-center">
                      Obrigado pela sua mensagem. Responderei em breve!
                    </p>
                  </motion.div>
                ) : submitStatus === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-8"
                  >
                    <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Erro ao Enviar</h3>
                    <p className="text-gray-400 text-center mb-4">
                      Algo deu errado. Por favor, tente novamente.
                    </p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="text-neon-green hover:underline"
                    >
                      Tentar Novamente
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                      <input
                        {...register('name')}
                        type="text"
                        placeholder="Seu nome"
                        className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="seu.email@example.com"
                        className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Assunto</label>
                      <input
                        {...register('subject')}
                        type="text"
                        placeholder="Assunto da mensagem"
                        className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                      <textarea
                        {...register('message')}
                        placeholder="Sua mensagem..."
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-gray-500 focus:outline-none focus:border-neon-green transition-colors resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-neon-green hover:bg-neon-green/80 text-dark-950 font-semibold glow-green disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-dark-950/30 border-t-dark-950 rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
