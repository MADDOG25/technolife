import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate bg-blue px-6 py-44 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-white to-white opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Contacto
        </h2>
        <p className="mt-2 text-lg text-white">
          Si estas interesado en nuestros servicios o tienes alguna duda, contáctanos.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-white"
            >
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-black placeholder:text-blue focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-white"
            >
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-black placeholder:text-blue focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-white"
            >
              Empresa
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-black placeholder:text-blue focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white"
            >
              Correo electrónico
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-black placeholder:text-blue focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold text-white"
            >
              Numero telefónico
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-black has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-pink">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-black placeholder:text-blue focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink sm:text-sm"
                  >
                    <option>PA</option>
                    <option>US</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-pink sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="6848-9201"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-black placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white"
            >
              Mensaje
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-black placeholder:text-blue focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-pink"
                defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-pink p-px ring-1 ring-inset ring-pink transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink data-[checked]:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-white transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm text-white">
              Al seleccionar esta opción, acepta la{" "}
              <a href="#" className="font-semibold text-pink">
              política de privacidad.
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-blue shadow-sm hover:bg-pink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contáctanos
          </button>
        </div>
      </form>
    </div>
  );
}