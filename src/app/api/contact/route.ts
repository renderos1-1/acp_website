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

    // Debug: Log environment variables (without password)
    console.log('SMTP Configuration:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      from: process.env.SMTP_FROM,
      hasPassword: !!process.env.SMTP_PASS
    });

    // Check if environment variables are missing
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing required environment variables');
      return NextResponse.json(
        { error: 'Configuración de email no disponible' },
        { status: 500 }
      );
    }

    // Create transporter - Using cPanel SMTP configuration
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.acp-audicon.com',
      port: smtpPort,
      secure: smtpPort === 465, // true for 465 (SSL), false for 587 (STARTTLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // TLS configuration for cPanel
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
      // Shorter timeouts to fail faster
      connectionTimeout: 30000, // 30 seconds
      greetingTimeout: 10000,   // 10 seconds
      socketTimeout: 30000      // 30 seconds
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

    // Test connection first
    console.log('Testing SMTP connection...');
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Send email
    console.log('Sending email...');
    const result = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'info@acp-audicon.com',
      subject: `Nueva solicitud de contacto - ${contactReasonLabel}`,
      html: htmlContent,
      replyTo: email,
    });
    
    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json(
      { message: 'Email enviado exitosamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Error interno del servidor al enviar el email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}