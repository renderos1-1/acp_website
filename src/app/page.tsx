// src/app/page.tsx (Replace existing content)
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaBuilding, FaBalanceScale, FaSearchDollar,
  FaHandHoldingWater, FaExchangeAlt, FaBookOpen, FaLaptopCode, FaStamp, FaSyncAlt,
  FaUsersCog, FaIndustry, FaBullseye, FaEye, FaShieldAlt, FaArrowRight// Added icons
} from 'react-icons/fa';
// You might need Next Image component for optimized images
// import Image from 'next/image';

// Metadata export (App Router convention for SEO)


const HomePage = () => {
  const currentYear = new Date().getFullYear();

  // Animation Variants
  const fadeInProps = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut", delay }
  });

  const cardHoverEffect = "hover:shadow-xl hover:-translate-y-1";
  const transitionEffect = "transition-all duration-300 ease-out";

  const services = [
    { name: "Auditoria Financiera", icon: FaBalanceScale, shortDesc: "Análisis exhaustivo de estados financieros." },
    { name: "Auditoria Fiscal", icon: FaBuilding, shortDesc: "Cumplimiento y optimización tributaria." },
    { name: "Auditoria Forense", icon: FaSearchDollar, shortDesc: "Investigación de fraudes e irregularidades." },
    { name: "Auditoria Cumplimiento Lavado Dinero", icon: FaHandHoldingWater, shortDesc: "Verificación de normativas ALA/CFT." },
    { name: "Precios de Transferencia", icon: FaExchangeAlt, shortDesc: "Estudios y documentación para partes relacionadas." },
    { name: "Manuales Ley Lavado Dinero", icon: FaBookOpen, shortDesc: "Elaboración de políticas y procedimientos." },
    { name: "Sistemas Contables", icon: FaLaptopCode, shortDesc: "Implementación y asesoría tecnológica contable." },
    { name: "Legalización Libros", icon: FaStamp, shortDesc: "Formalización de registros contables y de IVA." },
    { name: "Conversión a NIIF", icon: FaSyncAlt, shortDesc: "Adaptación a Normas Internacionales." },
    { name: "Asesoría y Consultoría", icon: FaUsersCog, shortDesc: "Soporte estratégico para su negocio." },
    { name: "Outsourcing Contable", icon: FaIndustry, shortDesc: "Externalización de procesos contables." },
  ];

  const partners = [
    {
      name: "Lic. Luis Armando Escobar Anzora",
      title: "Socio Principal / Auditor Autorizado",
      photoUrl: "/placeholder-person-gray.png", // Replace with actual path
      quote: "+25 años de experiencia en auditoría financiera, fiscal, forense y consultoría empresarial. Especialista en Ley de Lavado de Dinero.",
    },
    {
      name: "Lic. Dore Alexander Perez Pablo",
      title: "Socio Principal / Contador y Auditor Autorizado",
      photoUrl: "/placeholder-person-gray.png", // Replace with actual path
      quote: "+30 años de experiencia en contabilidad, impuestos, auditoría financiera y fiscal. Especialista en Ley de Lavado de Dinero.",
    },
    {
      name: "Lic. Enrique Cañas Jimenez",
      title: "Asesor",
      photoUrl: "/placeholder-person-gray.png", // Replace with actual path
      quote: "+35 años exp. internacional (BM, BID, etc.). CPA, experto en cumplimiento, banca de inversión. Amplia experiencia en Juntas Directivas.",
    },
  ];

  // Placeholder for dot pattern background
  const DotPattern = ({ className = "" }: { className?: string }) => (
      <div aria-hidden="true" className={`absolute inset-0 opacity-10 mix-blend-multiply ${className}`} style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
  );

  return (
      <div className="bg-white text-gray-800 font-sans antialiased">

        {/* === Header (Simplified Example) === */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">
              {/* Replace with actual Logo component if available */}
              {/* <Image src="/logo-placeholder-gray.png" alt="CAÑAS Logo" width={150} height={40} /> */}
              CAÑAS Auditores
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#quienes-somos" className="text-gray-600 hover:text-gray-900">Quiénes Somos</a>
              <a href="#servicios" className="text-gray-600 hover:text-gray-900">Servicios</a>
              <a href="#socios" className="text-gray-600 hover:text-gray-900">Socios</a>
              <a href="#contacto" className="text-gray-600 hover:text-gray-900">Contacto</a>
            </nav>
            {/* Optional: Contact shortcut */}
            <div className="hidden lg:flex items-center text-sm">
              <FaPhone className="mr-2 text-gray-500"/>
              <span>2263-3115</span>
            </div>
            {/* Add Mobile Menu Toggle Here if needed */}
          </div>
        </header>

        {/* === Hero Section === */}
        <section className="relative bg-gray-800 text-white overflow-hidden">
          {/* Replace with a real grayscale background image */}
          <div className="absolute inset-0">
            {/* Example using solid color overlay on image */}
            {/* <Image src="/hero-background-gray.jpg" alt="Oficina Profesional" layout="fill" objectFit="cover" className="opacity-30"/> */}
            {/* Placeholder: */}
            <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-black h-full w-full"></div>
          </div>
          <div className="relative container mx-auto px-6 pt-28 pb-16 md:pt-40 md:pb-24 text-center z-10">
            <motion.h1 {...fadeInProps(0.1)} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
              CAÑAS AUDITORES Y CONSULTORES
            </motion.h1>
            <motion.p {...fadeInProps(0.3)} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Compromiso, Ética y Resultados de Alta Calidad para el Éxito de su Negocio.
            </motion.p>
            <motion.div {...fadeInProps(0.5)}>
              <a href="#contacto" className="inline-block bg-white text-gray-900 font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition duration-300">
                Contáctenos
              </a>
            </motion.div>
          </div>
          {/* Boxes Below Hero (Optional - Adapt from Prestige Design) */}
          {/* <div className="relative z-10 container mx-auto px-6 -mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
                    {[
                        { title: "Auditoría Experta", link: "#servicios" },
                        { title: "Consultoría Estratégica", link: "#servicios" },
                        { title: "Cumplimiento Normativo", link: "#servicios" },
                    ].map((item, i) => (
                        <motion.a key={item.title} href={item.link} {...fadeInProps(0.6 + i * 0.1)} className={`block bg-gray-100 p-6 rounded-md shadow-md text-gray-800 ${cardHoverEffect} ${transitionEffect}`}>
                           <h3 className="font-semibold mb-2">{item.title}</h3>
                            <span className="text-sm text-gray-600 flex items-center">Ver más <FaArrowRight className="ml-2" /></span>
                        </motion.a>
                    ))}
                </div> */}
        </section>

        {/* === Quiénes Somos Section === */}
        <section id="quienes-somos" className="py-20 md:py-28 bg-white relative overflow-hidden">
          {/* <DotPattern className="left-0 top-0"/> */}
          <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div {...fadeInProps(0.1)}>
              {/* Replace with a relevant grayscale image */}
              {/* <Image src="/team-meeting-gray.jpg" alt="Equipo trabajando" width={600} height={400} className="rounded-lg shadow-lg" /> */}
              <div className="w-full h-64 md:h-80 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center text-gray-500">Imagen Profesional (Grayscale)</div>
            </motion.div>
            <motion.div {...fadeInProps(0.2)}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quiénes Somos</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Somos una firma de Contadores Públicos autorizados, comprometidos con brindar servicios de alta calidad. Nuestra constante capacitación aporta herramientas fundamentales para el éxito de nuestros clientes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Operamos siempre manteniendo la ética profesional, independencia y confidencialidad.
              </p>
              {/* <a href="#contacto" className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium">
                            Más Información <FaArrowRight className="ml-2" />
                        </a> */}
            </motion.div>
          </div>
        </section>


        {/* === Services Section === */}
        <section id="servicios" className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
          <DotPattern className="right-0 bottom-0" />
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <motion.h2 {...fadeInProps()} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              Nuestros Servicios Integrales
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service, index) => ( // Display first 6 initially maybe?
                  <motion.div
                      key={service.name}
                      {...fadeInProps(0.1 + (index % 3) * 0.1)}
                      className={`bg-white p-6 rounded-lg border border-gray-200 flex items-start space-x-4 ${cardHoverEffect} ${transitionEffect} shadow-sm`}
                  >
                    <service.icon className="text-3xl text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{service.name}</h3>
                      <p className="text-sm text-gray-500">{service.shortDesc}</p>
                      {/* <a href="#contacto" className="text-sm text-gray-700 hover:text-black font-medium mt-3 inline-block">Saber más →</a> */}
                    </div>
                  </motion.div>
              ))}
            </div>
            {/* Add button to reveal more services or link to a dedicated page if needed */}
          </div>
        </section>


        {/* === Vision/Mission Section === */}
        <section id="mision-vision-valores" className="py-20 md:py-28 bg-gray-700 text-white relative overflow-hidden">
          {/* Background Image */}
          {/* <Image src="/cityscape-gray.jpg" alt="Ciudad" layout="fill" objectFit="cover" className="opacity-20"/> */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 opacity-80"></div>
          <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-10 relative z-10">
            <motion.div {...fadeInProps(0.1)} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-600">
              <FaBullseye className="text-5xl text-white mx-auto mb-4 opacity-80"/>
              <h3 className="text-2xl font-semibold mb-3">Misión</h3>
              <p className="text-gray-300 leading-relaxed">
                Brindar servicios de calidad y excelencia en Auditoría, Finanzas, Laboral, Contable y áreas afines.
              </p>
            </motion.div>
            <motion.div {...fadeInProps(0.2)} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-600">
              <FaEye className="text-5xl text-white mx-auto mb-4 opacity-80"/>
              <h3 className="text-2xl font-semibold mb-3">Visión</h3>
              <p className="text-gray-300 leading-relaxed">
                Ser firma líder reconocida por profesionalismo, responsabilidad y calidad, con personal altamente capacitado.
              </p>
            </motion.div>
            <motion.div {...fadeInProps(0.3)} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-600">
              <FaShieldAlt className="text-5xl text-white mx-auto mb-4 opacity-80"/>
              <h3 className="text-2xl font-semibold mb-3">Valores</h3>
              <ul className="list-none text-gray-300 leading-relaxed space-y-1">
                <li>Integridad</li>
                <li>Independencia</li>
                <li>Honestidad</li>
                <li>Profesionalismo</li>
                <li>Confidencialidad</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* === Partners ("Experts") Section === */}
        <section id="socios" className="py-20 md:py-28 bg-white relative overflow-hidden">
          {/* <DotPattern className="left-0 bottom-0"/> */}
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <motion.h2 {...fadeInProps()} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
              Nuestro Equipo Directivo y Asesor
            </motion.h2>
            <motion.p {...fadeInProps(0.1)} className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
              Conozca a los profesionales experimentados que lideran nuestra firma y guían a nuestros clientes hacia el éxito.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                  <motion.div
                      key={partner.name}
                      {...fadeInProps(0.2 + index * 0.1)}
                      className={`bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm ${cardHoverEffect} ${transitionEffect}`}
                  >
                    <div className="flex items-start space-x-4">
                      {/* Replace with actual Image component */}
                      {/* <Image src={partner.photoUrl} alt={partner.name} width={64} height={64} className="rounded-full flex-shrink-0" /> */}
                      <div className="w-16 h-16 bg-gray-400 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">FOTO</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{partner.name}</h3>
                        <p className="text-sm text-gray-500 mb-3">{partner.title}</p>
                      </div>
                    </div>
                    <blockquote className="mt-4 pl-5 border-l-4 border-gray-300 text-gray-600 italic leading-relaxed">
                      {partner.quote}
                    </blockquote>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* === News Section (Placeholder) === */}
        <section id="noticias" className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.h2 {...fadeInProps()} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              Noticias y Actualidad (Próximamente)
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => ( // Placeholder cards
                  <motion.div
                      key={item}
                      {...fadeInProps(0.1 + (item - 1) * 0.1)}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                  >
                    {/* Placeholder for Image */}
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">Imagen Noticia</div>
                    <div className="p-6">
                      <p className="text-sm text-gray-500 mb-2">Fecha • Categoría</p>
                      <h3 className="font-semibold text-lg text-gray-800 mb-3">Título de la Noticia o Artículo</h3>
                      <p className="text-sm text-gray-600 mb-4">Breve descripción del contenido del artículo o noticia...</p>
                      <span className="text-gray-700 hover:text-black font-medium text-sm inline-flex items-center cursor-pointer">
                                        Leer más (próx.) <FaArrowRight className="ml-1" />
                                    </span>
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* === Contact Section === */}
        <section id="contacto" className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.h2 {...fadeInProps()} className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Póngase en Contacto</motion.h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-200 shadow-sm">
              <motion.div {...fadeInProps(0.1)}>
                <h3 className="text-xl font-semibold text-gray-800 mb-5">Nuestra Ubicación</h3>
                <div className="flex items-start mb-4">
                  <FaMapMarkerAlt className="text-xl text-gray-500 mr-4 mt-1 flex-shrink-0"/>
                  <address className="text-gray-600 not-italic leading-relaxed">
                    87 Avenida Norte No. 705,<br />
                    Colonia Escalón, San Salvador,<br />
                    El Salvador.
                  </address>
                </div>
                {/* Optional Map Placeholder */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded mt-6 flex items-center justify-center text-gray-500">
                  (Google Map Placeholder)
                </div>
              </motion.div>
              <motion.div {...fadeInProps(0.2)} className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Teléfonos</h3>
                  <div className="flex items-center text-gray-700 mb-2">
                    <FaPhone className="mr-3 text-gray-500"/>
                    <a href="tel:+50322633115" className="hover:text-black">2263-3115</a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaPhone className="mr-3 text-gray-500"/>
                    <a href="tel:+50322633263" className="hover:text-black">2263-3263</a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Correos Electrónicos</h3>
                  <div className="flex items-center text-gray-700 mb-2">
                    <FaEnvelope className="mr-3 text-gray-500"/>
                    <a href="mailto:info@acp-audicon.com" className="text-indigo-600 hover:text-indigo-800">info@acp-audicon.com</a> {/* Kept indigo for primary emails */}
                  </div>
                  <div className="flex items-center text-gray-700 mb-2">
                    <FaEnvelope className="mr-3 text-gray-500"/>
                    <a href="mailto:facturacion@acp-audicon.com" className="text-gray-600 hover:text-black">facturacion@acp-audicon.com</a>
                  </div>
                </div>
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Oportunidades Laborales</h3>
                  <p className="text-gray-600 mb-3">Envíenos su CV si desea formar parte de nuestro equipo:</p>
                  <div className="flex items-center text-gray-700">
                    <FaEnvelope className="mr-3 text-gray-500"/>
                    <a href="mailto:empleos@acp-audicon.com" className="text-gray-600 hover:text-black">empleos@acp-audicon.com</a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* === Footer === */}
        <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
          <div className="container mx-auto px-6 lg:px-8">
            {/* Footer Links (Simplified example) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-sm">
              <div>
                <h4 className="font-semibold text-white mb-3">Navegación</h4>
                <ul className="space-y-2">
                  <li><a href="#quienes-somos" className="hover:text-white">Quiénes Somos</a></li>
                  <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
                  <li><a href="#socios" className="hover:text-white">Socios</a></li>
                  <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
                  {/* <li><a href="#noticias" className="hover:text-white">Noticias</a></li> */}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Servicios Clave</h4>
                <ul className="space-y-2">
                  {/* List a few key services */}
                  <li><a href="#servicios" className="hover:text-white">Auditoría Financiera</a></li>
                  <li><a href="#servicios" className="hover:text-white">Auditoría Fiscal</a></li>
                  <li><a href="#servicios" className="hover:text-white">Consultoría</a></li>
                  <li><a href="#servicios" className="hover:text-white">Precios de Transferencia</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Contacto Rápido</h4>
                <ul className="space-y-2">
                  <li className="flex items-center"><FaPhone className="mr-2 text-xs"/> 2263-3115</li>
                  <li className="flex items-center"><FaEnvelope className="mr-2 text-xs"/> info@acp-audicon.com</li>
                  {/* Add Address */}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Únase al Equipo</h4>
                <ul className="space-y-2">
                  <li><a href="mailto:empleos@acp-audicon.com" className="hover:text-white">Enviar CV</a></li>
                </ul>
                {/* Optional Social Links Placeholder */}
                {/* <div className="mt-4 flex space-x-3"> ... </div> */}
              </div>
            </div>
            {/* Bottom Bar */}
            <div className="mt-10 pt-8 border-t border-gray-700 text-center text-xs">
              © {currentYear} CAÑAS AUDITORES Y CONSULTORES, S.A. DE C.V. Todos los derechos reservados.
              {/* Optional Privacy/Terms links */}
            </div>
          </div>
        </footer>

      </div>
  );
};

export default HomePage;