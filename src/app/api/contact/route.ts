import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, contactReason, message } = await request.json();

    // Validate required fields
    if (!name || !email || !service || !contactReason) {
      return NextResponse.json(
        { error: 'Los campos nombre, email, servicio y motivo de contacto son requeridos' },
        { status: 400 }
      );
    }

    // Create transporter - Using Gmail SMTP as default, can be configured via env vars
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Get service label for display
    const serviceOptions: { [key: string]: string } = {
      'auditoria-financiera': 'Auditoría Financiera',
      'auditoria-fiscal': 'Auditoría Fiscal',
      'auditoria-forense': 'Auditoría Forense',
      'auditoria-lav': 'Auditoría para Cumplimiento de LAV',
      'precios-transferencia': 'Estudios de Precios de Transferencia',
      'consultoria': 'Asesoría y Consultoría Empresarial',
      'outsourcing': 'Outsourcing Contable',
      'otros': 'Otros Servicios'
    };

    const contactReasons: { [key: string]: string } = {
      'cotizacion': 'Solicitar Cotización',
      'informacion': 'Información General',
      'reunion': 'Programar Reunión',
      'consulta': 'Consulta Técnica',
      'otro': 'Otro Motivo'
    };

    const serviceLabel = serviceOptions[service] || service;
    const contactReasonLabel = contactReasons[contactReason] || contactReason;

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1f2937; color: white; padding: 20px; text-align: center;">
          <h1>Nueva Solicitud de Contacto</h1>
          <p>ACP - Cañas Auditores y Consultores</p>
        </div>
        
        <div style="padding: 20px; background-color: #f9fafb;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">Información del Cliente</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Nombre:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${email}</td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Teléfono:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${phone}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Servicio de Interés:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${serviceLabel}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Motivo de Contacto:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${contactReasonLabel}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; vertical-align: top;">Mensaje:</td>
              <td style="padding: 8px; border-bottom: 1px solid #e5e7eb; color: #6b7280;">${message}</td>
            </tr>
            ` : ''}
          </table>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Fecha de envío:</strong> ${new Date().toLocaleString('es-ES', { 
                timeZone: 'America/El_Salvador',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
        
        <div style="padding: 20px; background-color: #1f2937; color: #9ca3af; text-align: center; font-size: 12px;">
          <p>Este mensaje fue enviado desde el formulario de contacto del sitio web de ACP.</p>
          <p>© ${new Date().getFullYear()} Cañas Auditores y Consultores, S.A. de C.V.</p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'info@acp-audicon.com',
      subject: `Nueva solicitud de contacto - ${contactReasonLabel}`,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json(
      { message: 'Email enviado exitosamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor al enviar el email' },
      { status: 500 }
    );
  }
}