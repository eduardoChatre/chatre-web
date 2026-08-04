import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Términos del servicio | Chatre",
  description: "Términos aplicables al sitio y a los servicios de automatización e inteligencia artificial de Chatre.",
  alternates: { canonical: "/terminos" },
};

export default function TermsPage() {
  return <LegalPage eyebrow="Legal" title="Términos del servicio">
    <p>Última actualización: {siteConfig.lastLegalUpdateDisplay}.</p>
    <p>{siteConfig.companyName} proporciona automatizaciones, agentes digitales, integraciones de mensajería y herramientas de inteligencia artificial mediante chatre.io y servicios relacionados. El alcance, entregables y condiciones comerciales de una implementación pueden complementarse mediante acuerdos escritos con cada cliente.</p>

    <h2>Uso autorizado y cuentas conectadas</h2>
    <p>Debes utilizar Chatre únicamente para fines lícitos y autorizados. Eres responsable de contar con permisos sobre las cuentas, páginas, canales, datos y sistemas que conectes, así como de la actividad realizada por las personas a quienes autorices el acceso.</p>

    <h2>Usos prohibidos</h2>
    <p>No puedes utilizar el servicio para enviar spam, cometer fraude, suplantar identidades, realizar actividades ilegales, evadir controles de una plataforma, introducir código malicioso ni vulnerar la privacidad, propiedad intelectual u otros derechos de terceros.</p>

    <h2>Automatización y supervisión humana</h2>
    <p>Algunas respuestas, clasificaciones y acciones pueden generarse automáticamente y contener errores. El cliente debe definir controles y supervisión humana adecuados, especialmente cuando una conversación sea sensible, implique compromisos importantes o requiera criterio profesional. Chatre no garantiza resultados comerciales específicos.</p>

    <h2>Disponibilidad</h2>
    <p>Chatre procura mantener una operación confiable, pero el servicio puede sufrir interrupciones por mantenimiento, fallos, cambios en integraciones de terceros o causas fuera de su control. Las funciones dependientes de plataformas externas pueden cambiar o dejar de estar disponibles.</p>

    <h2>Propiedad intelectual</h2>
    <p>Chatre conserva los derechos sobre su marca, sitio, diseños, software y materiales propios. El cliente conserva los derechos que le correspondan sobre su información y contenido. Estos términos no transfieren derechos salvo los necesarios para prestar y utilizar el servicio acordado.</p>

    <h2>Privacidad</h2>
    <p>El tratamiento de información se describe en el <Link href="/aviso-de-privacidad">aviso de privacidad</Link>. Las solicitudes para eliminar información se atienden conforme a las <Link href="/eliminacion-de-datos">instrucciones de eliminación de datos</Link>.</p>

    <h2>Suspensión por abuso</h2>
    <p>Chatre puede limitar o suspender el acceso cuando sea razonablemente necesario para investigar abuso, proteger la seguridad, evitar daños, atender obligaciones aplicables o responder a un incumplimiento de estos términos.</p>

    <h2>Limitaciones del servicio</h2>
    <p>El servicio se proporciona con las capacidades y disponibilidad acordadas. En la medida permitida, Chatre no responde por resultados derivados de instrucciones incorrectas, contenido del cliente, decisiones tomadas sin supervisión adecuada o fallos de servicios de terceros fuera de su control.</p>

    <h2>Contacto</h2>
    <p>Para preguntas sobre estos términos, escribe a <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>. También puedes volver al <Link href="/">inicio de Chatre</Link>.</p>
  </LegalPage>;
}
