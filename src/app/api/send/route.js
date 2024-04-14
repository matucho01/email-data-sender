import { Resend } from 'resend'
import { EmailTemplate } from '@/components/email-template'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
    try {
        const body = await request.json()
        console.log('This is the received data from the POST request: ', body)
        const { empresa, programa, fechaEmision, fechaVencimiento, fechaVencimientoClase, monto, clase, plazo } = body

        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [process.env.EMAIL],
            subject: 'Vencimientos: ' + empresa,
            react: EmailTemplate({ empresa, programa, fechaEmision, fechaVencimiento, fechaVencimientoClase, monto, clase, plazo }),
        })
        console.log(data)

        return NextResponse.json(
            {
                message: 'Email sent'
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: 'Error sending email'
            },
            {
                status: 500
            }
        )
    }
}