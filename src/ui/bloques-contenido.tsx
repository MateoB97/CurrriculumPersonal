import clsx from 'clsx';
import {
  Titulo,
  Texto
} from "@/src/ui/typografia";
import { Link } from "react-router-dom";
import { EnlaceContacto } from "@/src/ui/botones";

import { ListaLogros } from "@/src/ui/tarjetas";

import ImgPerfil from "../assets/curriculum/Perfil1_1x1_big.jpg";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import * as LinkedinLogo from './assets/logos/outline/linkedin.tsx';
// import * as MetaLogo from './assets/logos/outline/meta.tsx';
import * as GithubLogo from './assets/logos/outline/github-mark.tsx';


export function Contenido({
  children
}:
  {
    children: React.ReactNode
  }) {
  return (
    <section className={clsx(
      'overscroll-y-contain snap-center',
      'px-4 py-4 h-[90vh]',
      'bg-slate-50/50 backdrop-blur border-white border-4 rounded-3xl',
      'tablet:sticky tablet:top-5 tablet:max-ultrawide:mt-0',
      'contTrajeta',
      'flex flex-col tablet:max-ultrawide:shrink tablet:max-ultrawide:grow tablet:max-ultrawide:basis-[100%]'
    )}>
      {children}
    </section>
  );
}

export function Header({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header className={clsx(
      'h-full w-[26%] flex min-h-[90px] min-w-[100vw] relative',
      'bg-slate-50/50 backdrop-blur border-white border-4 rounded-3xl',
      'grow-0 tablet:max-ultrawide:hidden'
    )}>
      {children}
    </header>
  );
}

export function AsideNav({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <aside className={clsx(
      'tablet:max-ultrawide:w-[26%] tablet:max-ultrawide:h-[90vh] tablet:max-ultrawide:flex tablet:max-ultrawide:flex-col min-w-[360px]',
      'bg-slate-50/50 backdrop-blur border-white border-4 rounded-3xl',
      'tablet:max-ultrawide:grow-0 px-4'
    )}>
      {children}
    </aside>
  );
}

export function Navegacion({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <nav className={clsx(
      className,
      'py-4 w-full grow'
    )}>
      {children}
    </nav>
  );
}

export function Logo() {
  return (
    <figure className={clsx(
      "py-4 relative overflow-hidden contPerfil",
    )}>
      <Link
        className={clsx(
          'cursor-pointer flex flex-nowrap justify-around ',
        )}
        to='/'
      >
        <img
          className={clsx(
            'ml-2 w-[35%] h-[95%]',
            'relative -z-1',
            "rounded-full object-cover object-center",
            'imagenPerfil'
          )}
          src={ImgPerfil}
          alt="Imagen personal representativa de Mateo Bustamante, autor del presente curriculum."
        />
        <figcaption className="tablet:max-ultrawide:w-2/5 grow pl-2 text-pretty basis-[55%] text-center">
          <Texto className="font-serif">

            <Titulo className='hover:text-[#3B55DF] hover:underline'>Mateo Bustamante</Titulo>
            <p className="text-base italic">
              Desarrollador web fullstack
            </p>
          </Texto>
        </figcaption>
      </Link>
    </figure>
  );
}

export function Slogan() {
  return (
    <section className='text-center'>
      <p className="text-xl font-bold">Creativo, Apasionado, Estratégico</p>
      <p >
        Me especializo en crear soluciones de software unicas y personalizadas.
      </p>

    </section>
  );
}

export function ImagenCoorporativo() {
  return (
    <Texto className="pb-4 text-pretty grow-0">
      <Logo />
      <Slogan />
    </Texto>
  );
}

export function Contacto() {

  const DATOS_ICONOS = {
    linkedin: {
      viewBox: "0 0 50 50",
      className: "w-[8%] mr-2 inline",
    },
    meta: {
      viewBox: "0 0 50 50",
      className: "w-[8%] mr-2 inline",
    },
    github: {
      viewBox: "0 0 110 90",
      className: "w-[8%] mr-2 inline",
    },
  };

  return (
    <Texto className="laptop:max-ultrawide:pb-4 text-pretty grow-0">
      <Titulo>Contacto</Titulo>
      <hr className="mb-4" />
      <ul>
        <li>
          <EnlaceContacto to="https://www.linkedin.com/in/mateo-bustamante-89b7952b0/">
            <LinkedinLogo.ReactComponent {...DATOS_ICONOS.linkedin} />
            <p>mateo-bustamante-89b7952b0</p>
          </EnlaceContacto>
        </li>
        <li>
          <EnlaceContacto to="https://github.com/MateoB97">
            <GithubLogo.ReactComponent {...DATOS_ICONOS.github} />
            <p>MateoB97</p>
          </EnlaceContacto>
        </li>
        <li>
          <EnlaceContacto to="mailto:mateo.bustamante9730@gmail.com">
            <EnvelopeIcon className="w-6 mr-2 inline" />
            <p>mateo.bustamante9730@gmail.com</p>
          </EnlaceContacto>
        </li>
        {/* <li>
          <EnlaceContacto to="">
            <MetaLogo.ReactComponent {...DATOS_ICONOS.meta} />
            <p>Mateo Posada Bustamante</p>
          </EnlaceContacto>
        </li> */}
        <li>
          <Texto className='flex flex-row justify-start'>
            <DevicePhoneMobileIcon className="w-6 mr-2 inline" />
            <p>+57 304 384 10 15</p>
          </Texto>
        </li>
      </ul>
    </Texto>
  );
}

export function PerfilProfesional() {
  return (
    <Texto>
      <p>En mi rol como programador he aportado de diversas maneras a los equipos con los que he trabajado, manteniendo buenas relaciones interpersonales y respeto mutuo, una de ellas fue apoyando en la creación desde cero de un sistema de cotizaciones lo cual incremento la productividad y eficiencia del equipo de ventas y llevo en ese mismo mes de implementación al cumplimiento de metas de ventas en la compañía. Otra manera fue dando una capacitación de ciberseguridad para los empleados, muchos de ellos entraron con muchas dudas acerca de las nuevas modalidades de estafas cibernéticas que se presentan hoy en día, luego de la charla la mayoría tuvo claridad y lograron detector varios intentos de ataques en los meses siguientes.</p>
      <br />
      <p>
        Soy consciente que todavía tengo un largo camino por recorrer, pero siempre afronto los nuevos retos con una actitud positiva, siempre pensando en sobrepasarlos y salir triunfador al lado de mi equipo de trabajo, y aprendiendo proactivamente de cada situación.
      </p>
    </Texto>
  )
}

export function ExperienciaLaboral() {
  return (

    <Texto>

      <Texto className="text-pretty">
        <Titulo>Super Carnes J.H</Titulo>
        <p>
          Soporte, arreglo de bugs y desarrollo de funciones básicas en el
          sistema de gestión cárnico (SGC), software creado a medida para
          la organización Super Carnes JH, el cual se hace cargo de la
          gestión de compras de mercancía, manejo de almacén e
          inventarios, salidas de mercancía con generación de etiquetas y
          guías de transporte, facturación física e integración con
          facturación electrónica mediante un proveedor de API (soenac).
          Implementación del web service de dispositivos de basculas e
          impresoras para los cuales se hace diseño de etiquetas para
          productos conservados en congelación y tiquetes de bascula para
          facturación en puntos de venta. El software SGC fue construido a
          partir de las tecnologías SQL server, Laravel para el manejo del
          backend y Vue.js con Quasar para el manejo del frontend.
          <br />
        </p>
        <details>
          <summary>Contacto</summary>
          Jefe Inmediato: Esteban Gonzales <br />
          Teléfono: 3042400042 <br />
          e-mail: aux.dinamica@gmail.com <br />
          Afiliación 13-AGO-2021 / 16-ABR-2022.
        </details>
      </Texto>

      <Texto className="text-pretty">
        <Titulo>Virtual Llantas S.A.S</Titulo>
        <p>
          Desarrollo de nuevas características y funcionalidades para los
          dos e-commerce pertenecientes a la empresa y varios (4)
          proyectos de intranet donde se manejan áreas de logística,
          facturación, inventarios y reportes, soporte y reparación de
          errores, atención al usuario interno (trabajadores de la
          empresa) sobre el manejo de las aplicaciones, toma de
          requerimientos, manejo del panel administrativo de las páginas
          de ventas. Se utiliza PHP como lenguaje backend principal con
          diferentes frameworks Codeigniter3, Codeigniter4, Laravel9, y
          ZendFramework con Magento 1.9. Se utiliza JavaScript vanilla
          para desarrollo frontend con tecnología ECMASCRIPT 6 y superior.
          Se utiliza MySQL para el manejo y administración de bases de
          datos.
          <br />
        </p>
        <details>
          <summary>Contacto</summary>
          Jefe Inmediato: Harold Castañeda <br />
          Teléfono: 3117036986 <br />
          e-mail: hcastaneda@virtualllantas.com <br />
          Afiliación 25-ABR-2022 / 27-Nov-2023.
        </details>
      </Texto>
    </Texto>
  );
}

export function ProyectosPersonales() {
  return (


    <Texto>
      <p>
        Actualmente trabajo en un proyecto de gestión de tiempos y
        actividades que se coordina con su calendario preferido (Google,
        Outlook).
      </p>
    </Texto>
  );
}

export function Habilidades() {
  return (

    <Texto>
      <dl className="laptop:max-ultrawide:flex laptop:max-ultrawide:justify-around">
        <div>
          <dt className="mt-3">
            <Titulo>PHP</Titulo>
          </dt>
          <dd>Laravel 10</dd>
          <dd>Codeigniter 4</dd>
          <dd>Magento 1.9</dd>
        </div>
        <div>
          <dt className="mt-3">
            <Titulo>NODEJS</Titulo>
          </dt>
          <dd>ExpressJS</dd>
          <dd>NextJs</dd>
        </div>
        <div>
          <dt className="mt-3">
            <Titulo>SQL</Titulo>
          </dt>
          <dd>SQLSERVER</dd>
          <dd>MYSQL</dd>
          <dd>POSTGRESSQL</dd>
        </div>
        <div>
          <dt className="mt-3">
            <Titulo>GIT/GITHUB</Titulo>
          </dt>
          <dd>GITSHELL</dd>
          <dd>GITHUBACTIONS</dd>
        </div>
        <div>
          <dt className="mt-3">
            <Titulo>CSS</Titulo>
          </dt>
          <dd>BOOTSTRAP</dd>
          <dd>TAILWIND</dd>
          <dd>CSS3</dd>
          <dd>POSTCSS</dd>
          <dd>OOCSS</dd>
        </div>
        <div>
          <dt className="mt-3">
            <Titulo>ECMASCRIPT</Titulo>
          </dt>
          <dd>REACT.JS</dd>
          <dd>JQuery</dd>
          <dd></dd>
          <dd>Vue.Js(2)</dd>
        </div>
      </dl>
    </Texto>
  );
}

export function Logros() {

  const SECCIONES: string[] = ['tecnologico', 'cursos'];
  return (
    <article
      className='flex flex-col h-full'
    >
      {SECCIONES.map((seccion, index) => (

        <section key={index} className="flex flex-col w-full max-w-full h-[45%] max-h-[50%] laptop:px-3 laptop:py-4 px-2 py-3 desktop:max-w-7xl desktop:px-7">
          <Texto className='grow-0'>
            <Titulo>Grado Tecnologico</Titulo>
            <hr className="mb-4" />
          </Texto>

          <ListaLogros sectionName={seccion} />
        </section>
      ))}

    </article >
  );
}

export function Bienvenida() {
  return (
    <div className='flex flex-col justify-center items-center h-full'>

      <p className='font-serif text-display text-center block h-[15vmin]'>Bienvenido(a)</p>
    </div>

  )
}

export function Idiomas() {
  return (
    <select className='mb-4' name="Idiomas" id="">
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  );
}