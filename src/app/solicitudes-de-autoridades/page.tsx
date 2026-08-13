import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Solicitudes de Autoridades | Chatre",
  description: "Conoce cómo Chatre revisa y responde solicitudes legales de autoridades públicas relacionadas con datos personales y datos de clientes.",
  alternates: { canonical: "/solicitudes-de-autoridades" },
};

export default function PublicAuthorityRequestsPage() {
  return <LegalPage eyebrow="Legal" title="Política de Atención a Solicitudes de Autoridades Públicas">
    <p>Fecha de entrada en vigor: 12 de agosto de 2026.</p>
    <p>Última actualización: 12 de agosto de 2026.</p>

    <h2>Objetivo</h2>
    <p>Chatre está comprometido con la protección de los datos personales y la información confiada a su plataforma.</p>
    <p>Esta política establece los principios y procedimientos que Chatre aplica cuando recibe solicitudes de acceso, conservación, entrega o divulgación de información por parte de autoridades públicas, organismos gubernamentales, autoridades regulatorias, judiciales o de procuración de justicia.</p>
    <p>La política aplica a los datos bajo custodia o control de Chatre, incluidos, cuando corresponda, datos recibidos mediante plataformas integradas como WhatsApp Business Platform y otros servicios utilizados por nuestros clientes.</p>

    <h2>Principios generales</h2>
    <p>Chatre no proporcionará datos personales o información de clientes a una autoridad pública únicamente a partir de una solicitud informal.</p>
    <p>Antes de realizar cualquier divulgación, Chatre evaluará que la solicitud tenga una base jurídica válida, provenga de una autoridad competente y cumpla con los requisitos legales aplicables.</p>
    <p>Toda solicitud será tratada bajo los principios de:</p>
    <ul>
      <li>legalidad;</li>
      <li>necesidad;</li>
      <li>proporcionalidad;</li>
      <li>minimización de datos;</li>
      <li>seguridad;</li>
      <li>confidencialidad; y</li>
      <li>documentación.</li>
    </ul>
    <p>Cuando resulte necesario, Chatre podrá solicitar asesoría jurídica antes de responder.</p>

    <h2>Revisión de legalidad</h2>
    <p>Toda solicitud de una autoridad pública deberá ser revisada antes de proporcionar información.</p>
    <p>La revisión deberá considerar, según corresponda:</p>
    <ul>
      <li>identidad de la autoridad solicitante;</li>
      <li>competencia y jurisdicción;</li>
      <li>autenticidad de la solicitud;</li>
      <li>fundamento jurídico invocado;</li>
      <li>tipo de procedimiento utilizado;</li>
      <li>personas, cuentas o datos solicitados;</li>
      <li>periodo de tiempo solicitado; y</li>
      <li>restricciones legales aplicables.</li>
    </ul>
    <p>Si Chatre no puede verificar suficientemente la validez o alcance de una solicitud, no realizará la divulgación hasta obtener la información necesaria para evaluarla.</p>

    <h2>Solicitudes inválidas, excesivas o improcedentes</h2>
    <p>Cuando una solicitud sea jurídicamente inválida, excesivamente amplia, ambigua, desproporcionada o exceda la competencia de la autoridad solicitante, Chatre podrá:</p>
    <ul>
      <li>solicitar aclaraciones;</li>
      <li>solicitar reducción de alcance;</li>
      <li>rechazar total o parcialmente la solicitud;</li>
      <li>formular una objeción; o</li>
      <li>buscar su impugnación mediante los mecanismos legales disponibles.</li>
    </ul>
    <p>Chatre no proporcionará voluntariamente información que exceda aquello que esté legalmente obligado a entregar.</p>

    <h2>Minimización de datos</h2>
    <p>Cuando Chatre determine que una solicitud es válida y que existe una obligación de responder, proporcionará únicamente la información razonablemente necesaria para cumplir con la solicitud legal.</p>
    <p>Antes de cualquier divulgación se revisará el conjunto de datos solicitado con el objetivo de excluir información que:</p>
    <ul>
      <li>no corresponda a las personas o cuentas identificadas;</li>
      <li>esté fuera del periodo autorizado;</li>
      <li>no sea relevante para la solicitud; o</li>
      <li>exceda el alcance jurídicamente exigible.</li>
    </ul>
    <p>Cuando sea posible, Chatre favorecerá respuestas limitadas y específicas sobre divulgaciones amplias o indiscriminadas.</p>

    <h2>Documentación y registro</h2>
    <p>Chatre mantendrá un registro interno de las solicitudes de autoridades públicas que reciba.</p>
    <p>El registro podrá incluir:</p>
    <ul>
      <li>fecha de recepción;</li>
      <li>autoridad y jurisdicción;</li>
      <li>fundamento legal;</li>
      <li>alcance de la solicitud;</li>
      <li>categorías de datos solicitadas;</li>
      <li>resultado de la revisión;</li>
      <li>aclaraciones, objeciones o impugnaciones;</li>
      <li>decisión final;</li>
      <li>información proporcionada, cuando corresponda;</li>
      <li>fundamento de la decisión; y</li>
      <li>fecha de cierre.</li>
    </ul>
    <p>Los registros serán protegidos frente a accesos no autorizados.</p>

    <h2>Notificación a clientes o personas afectadas</h2>
    <p>Cuando sea legalmente permitido y razonablemente posible, Chatre podrá informar al cliente correspondiente acerca de una solicitud relacionada con sus datos.</p>
    <p>Chatre podrá omitir o retrasar dicha notificación cuando exista una prohibición legal válida, una orden que impida notificar o cuando hacerlo pudiera afectar legítimamente una investigación o procedimiento.</p>

    <h2>Solicitudes de emergencia</h2>
    <p>Las solicitudes presentadas como urgentes o de emergencia serán evaluadas individualmente.</p>
    <p>La existencia de una emergencia no elimina la obligación de verificar, en la medida razonablemente posible, la identidad de la autoridad, su competencia, el alcance de la información solicitada y la base jurídica aplicable.</p>
    <p>Chatre limitará cualquier respuesta a la información estrictamente necesaria conforme a las circunstancias y legislación aplicable.</p>

    <h2>Seguridad de la información</h2>
    <p>Cuando una divulgación sea legalmente procedente, Chatre utilizará medios razonablemente seguros para transmitir la información.</p>
    <p>No se proporcionarán credenciales, contraseñas, tokens de acceso, llaves de API u otros mecanismos que permitan acceso permanente o indiscriminado a los sistemas de Chatre, salvo que exista una obligación legal específica que deba evaluarse conforme a esta política.</p>

    <h2>Responsabilidad</h2>
    <p>La revisión y autorización de solicitudes de autoridades públicas deberá ser realizada o supervisada por la persona responsable de protección y manejo de datos en Chatre.</p>
    <p>Ningún empleado, colaborador, sistema automatizado o proveedor podrá responder por cuenta propia a una solicitud de una autoridad que implique divulgación de datos personales o información de clientes.</p>

    <h2>Proveedores de servicios</h2>
    <p>Cuando una solicitud involucre información procesada por un proveedor de servicios de Chatre, Chatre evaluará la solicitud conforme a esta política y coordinará, cuando corresponda, las acciones necesarias con dicho proveedor.</p>
    <p>El uso de proveedores externos no modifica los principios de revisión de legalidad, minimización y documentación establecidos en esta política.</p>

    <h2>Revisión de la política</h2>
    <p>Chatre revisará esta política periódicamente y podrá actualizarla cuando cambien la legislación aplicable, las operaciones de la plataforma, sus proveedores o sus obligaciones de privacidad y protección de datos.</p>

    <h2>Contacto</h2>
    <p>Las consultas relacionadas con privacidad, protección de datos o esta política podrán realizarse en <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.</p>
    <p>Consulta también el <Link href="/aviso-de-privacidad">Aviso de privacidad de Chatre</Link>.</p>
  </LegalPage>;
}
