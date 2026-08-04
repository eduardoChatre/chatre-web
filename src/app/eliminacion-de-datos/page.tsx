import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Eliminación de datos de usuario | Chatre",
  description: `Instrucciones para solicitar la eliminación de información asociada con ${siteConfig.metaAppName}, la aplicación de Meta operada por Chatre.`,
  alternates: { canonical: "/eliminacion-de-datos" },
};

const deletionSubject = `Solicitud de eliminación de datos — ${siteConfig.metaAppName}`;
const deletionBody = `Hola, solicito la eliminación de mis datos asociados con ${siteConfig.metaAppName}.

Nombre:
Correo utilizado en la solicitud o integración:
Usuario de Facebook o Instagram relacionado:
Descripción breve de la información que deseo eliminar:
Identificador de solicitud proporcionado por Chatre, si existe:`;
const deletionMailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(deletionSubject)}&body=${encodeURIComponent(deletionBody)}`;

export default function DataDeletionPage() {
  return <LegalPage eyebrow="Privacidad" title="Eliminación de datos de usuario">
    <p>Esta página contiene las instrucciones para solicitar la eliminación de información asociada con la aplicación de Meta <strong>{siteConfig.metaAppName}</strong>, operada por {siteConfig.companyName}.</p>

    <h2>1. Cómo solicitar la eliminación</h2>
    <p>Envía tu solicitud desde un correo al que tengas acceso a <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>. Puedes usar el siguiente enlace, que prepara un mensaje en tu aplicación de correo:</p>
    <a className="button button-primary" href={deletionMailto}>Solicitar eliminación por correo</a>
    <p>Incluye, cuando esté disponible:</p>
    <ul>
      <li>Tu nombre.</li>
      <li>El correo utilizado en la solicitud o integración.</li>
      <li>El usuario de Facebook o Instagram relacionado.</li>
      <li>Una descripción breve de la información que deseas eliminar.</li>
      <li>Cualquier identificador de solicitud proporcionado por Chatre.</li>
    </ul>
    <p><strong>No envíes contraseñas, códigos de autenticación, tokens ni claves privadas.</strong> Chatre puede pedir información adicional únicamente para comprobar que estás autorizado para realizar la solicitud.</p>

    <h2>2. Retirar el acceso desde Meta</h2>
    <p>También puedes retirar el acceso de la aplicación desde la configuración de Facebook o Instagram. Busca la sección correspondiente a aplicaciones, sitios web o integraciones comerciales, localiza <strong>{siteConfig.metaAppName}</strong> y utiliza la opción disponible para retirar o eliminar su acceso.</p>
    <p>Retirar el acceso detiene futuras autorizaciones, pero no constituye por sí solo una solicitud para eliminar información ya procesada. Para solicitar esa eliminación, sigue las instrucciones de esta página.</p>

    <h2>3. Datos incluidos en una solicitud</h2>
    <p>Dependiendo de la integración y de los servicios utilizados, cuando correspondan y puedan asociarse razonablemente con la persona solicitante, la eliminación puede comprender:</p>
    <ul>
      <li>Identificadores de usuario proporcionados por Meta.</li>
      <li>Identificadores de cuentas, páginas o perfiles profesionales.</li>
      <li>Nombres de usuario e información básica del perfil recibida mediante la integración.</li>
      <li>Contenido de mensajes procesado por la automatización.</li>
      <li>Fechas, horas y metadatos asociados con conversaciones.</li>
      <li>Historial de conversación almacenado por Chatre.</li>
      <li>Clasificaciones de intención.</li>
      <li>Etiquetas o estados de prospectos.</li>
      <li>Resúmenes generados mediante inteligencia artificial.</li>
      <li>Configuraciones relacionadas con la conversación.</li>
      <li>Registros de autorización o conexión.</li>
      <li>Tokens activos administrados por Chatre, cuando la solicitud corresponda al titular autorizado de la integración.</li>
      <li>Registros técnicos directamente vinculados con la identidad solicitante.</li>
    </ul>

    <h2>4. Proceso de la solicitud</h2>
    <ol>
      <li>Chatre recibe la solicitud.</li>
      <li>Se verifica la identidad o autoridad de quien solicita.</li>
      <li>Se localiza la información razonablemente asociada.</li>
      <li>La información se elimina, desvincula o anonimiza, según corresponda.</li>
      <li>Se revocan accesos o tokens bajo control de Chatre, cuando aplique.</li>
      <li>Se envía una confirmación al correo utilizado en la solicitud.</li>
    </ol>
    <p>Las solicitudes normalmente se procesan dentro de los 30 días posteriores a la verificación de identidad, salvo que la legislación aplicable permita o requiera otro periodo.</p>

    <h2>5. Información que puede conservarse</h2>
    <p>Chatre puede conservar temporalmente información necesaria para:</p>
    <ul>
      <li>Seguridad.</li>
      <li>Prevención de fraude o abuso.</li>
      <li>Cumplimiento de obligaciones legales.</li>
      <li>Mantener registros mínimos que acrediten que una solicitud fue atendida.</li>
      <li>Completar ciclos normales de retención de copias de respaldo.</li>
    </ul>
    <p>La información conservada por estas razones no se utilizará nuevamente para la operación comercial ordinaria.</p>

    <h2>6. Confirmación y contacto</h2>
    <div className="legal-details">
      <p><strong>Contacto:</strong> <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></p>
      <p><strong>Aplicación de Meta:</strong> {siteConfig.metaAppName}</p>
      <p><strong>Dominio:</strong> <a href={siteConfig.domain}>chatre.io</a></p>
      <p><strong>Última actualización:</strong> {siteConfig.lastLegalUpdateDisplay}</p>
      <p><Link href="/aviso-de-privacidad">Aviso de privacidad</Link> · <Link href="/terminos">Términos del servicio</Link></p>
    </div>
  </LegalPage>;
}
