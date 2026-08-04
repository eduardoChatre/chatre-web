import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Aviso de privacidad | Chatre",
  description: "Política de privacidad de Chatre para el sitio, sus servicios de automatización y sus integraciones de mensajería.",
  alternates: { canonical: "/aviso-de-privacidad" },
};

export default function PrivacyPage() {
  return <LegalPage eyebrow="Legal" title="Aviso de privacidad">
    <p>Última actualización: {siteConfig.lastLegalUpdateDisplay}.</p>
    <p>{siteConfig.companyName}, disponible en <a href={siteConfig.domain}>chatre.io</a>, opera servicios de automatización de mensajes, agentes digitales e integraciones. Este aviso explica cómo puede tratar información en el sitio, en sus servicios y mediante la aplicación de Meta <strong>{siteConfig.metaAppName}</strong>.</p>

    <h2>Información que puede procesarse</h2>
    <p>Dependiendo de la integración y de los servicios utilizados, Chatre puede procesar:</p>
    <ul>
      <li>Datos de contacto proporcionados voluntariamente.</li>
      <li>Identificadores de Facebook e Instagram.</li>
      <li>Identificadores de cuentas profesionales, páginas y canales conectados.</li>
      <li>Nombre de usuario y datos básicos del perfil recibidos mediante Meta.</li>
      <li>Contenido de mensajes, así como sus fechas, horas y metadatos de conversación.</li>
      <li>Respuestas generadas o sugeridas, clasificaciones de intención, estados de conversación y de prospectos.</li>
      <li>Configuraciones de automatización.</li>
      <li>Registros técnicos, de auditoría, errores y seguridad.</li>
      <li>Tokens de acceso o autorizaciones de cuentas conectadas.</li>
    </ul>

    <h2>Finalidades del tratamiento</h2>
    <p>La información puede utilizarse para conectar cuentas y canales autorizados; recibir, clasificar y responder mensajes; proporcionar agentes digitales; dar seguimiento a conversaciones; transferir conversaciones a una persona; generar métricas y reportes; detectar errores, abuso o incidentes; y mejorar la calidad de las automatizaciones.</p>

    <h2>Inteligencia artificial y supervisión</h2>
    <p>Determinados mensajes pueden ser procesados por sistemas automatizados o proveedores tecnológicos para generar respuestas, sugerencias, clasificaciones o resúmenes. Las respuestas automatizadas pueden ser inexactas y requerir supervisión humana, especialmente en situaciones sensibles. Chatre no declara que adopte decisiones legalmente significativas exclusivamente mediante inteligencia artificial.</p>

    <h2>Proveedores de servicio</h2>
    <p>Chatre puede utilizar proveedores de alojamiento, bases de datos, automatización, mensajería, seguridad e inteligencia artificial. Estos proveedores reciben únicamente la información necesaria para prestar sus servicios y deben tratarla conforme a las instrucciones y medidas aplicables de Chatre.</p>

    <h2>Venta de información</h2>
    <p>Chatre no vende los datos personales recibidos mediante sus integraciones.</p>

    <h2>Retención</h2>
    <p>Los datos se conservan mientras sean necesarios para mantener la integración, operar los servicios, proteger su seguridad o cumplir obligaciones legales. Pueden eliminarse o anonimizarse cuando dejan de ser necesarios o al atender una solicitud válida, salvo que exista una necesidad legítima de conservación.</p>

    <h2>Seguridad</h2>
    <p>Chatre utiliza controles razonables de acceso, separación de datos, gestión de credenciales, registros y otras medidas técnicas y organizativas proporcionales al servicio. Ningún sistema puede garantizar seguridad absoluta.</p>

    <h2>Derechos y eliminación de datos</h2>
    <p>Para consultar, corregir o solicitar la eliminación de información razonablemente asociada contigo, escribe a <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>. Consulta las <Link href="/eliminacion-de-datos"><strong>instrucciones de eliminación de datos</strong></Link> para conocer el procedimiento y la información necesaria.</p>

    <h2>Cambios a esta política</h2>
    <p>Los cambios relevantes se publicarán en esta misma URL y se indicará una nueva fecha de actualización.</p>

    <h2>Contacto y enlaces</h2>
    <p>Correo: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.</p>
    <p><Link href="/">Inicio de Chatre</Link> · <Link href="/terminos">Términos del servicio</Link> · <Link href="/eliminacion-de-datos">Eliminación de datos</Link></p>
  </LegalPage>;
}
