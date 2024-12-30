import { useState } from "react";
import { Switch } from "@headlessui/react";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      setResult("Debes aceptar la política de privacidad.");
      return;
    }
    setIsLoading(true);
    setResult("Enviando...");
    const formToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      formToSend.append(key, value)
    );
    formToSend.append("access_key", "b6a739ef-4a74-4b7f-b4e6-343257205976");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formToSend,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Formulario enviado exitosamente.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error); // Útil para depuración
      setResult("Hubo un error al enviar el formulario: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="isolate bg-blue px-6 py-44 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Contacto
        </h2>
        <p className="mt-2 text-lg text-white">
          Si estás interesado en nuestros servicios o tienes alguna duda,
          contáctanos.
        </p>
      </div>
      <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {[
            { id: "firstName", label: "Nombre", type: "text" },
            { id: "lastName", label: "Apellido", type: "text" },
            {
              id: "email",
              label: "Correo electrónico",
              type: "email",
              colSpan: 2,
            },
            {
              id: "phoneNumber",
              label: "Número telefónico",
              type: "tel",
              colSpan: 2,
            },
          ].map(({ id, label, type, colSpan }) => (
            <div key={id} className={colSpan ? "sm:col-span-2" : ""}>
              <label
                htmlFor={id}
                className="block text-sm font-semibold text-white"
              >
                {label}
              </label>
              <div className="mt-2.5">
                <input
                  id={id}
                  name={id}
                  type={type}
                  value={formData[id]}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 -outline-offset-1 outline-black placeholder:text-blue focus:outline-pink"
                />
              </div>
            </div>
          ))}
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
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-gray-900 outline outline-1 -outline-offset-1 outline-black placeholder:text-blue focus:outline-pink"
              />
            </div>
          </div>
          <div className="flex items-center sm:col-span-2">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              aria-checked={agreed}
              className={`${
                agreed ? "bg-pink" : "bg-gray-400"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Aceptar política de privacidad</span>
              <span
                className={`${
                  agreed ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <label className="ml-4 text-sm text-white">
              Acepto la{" "}
              <a href="#" className="text-pink underline">
                política de privacidad
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={isLoading}
            className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-blue shadow-sm ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-pink hover:text-white"
            }`}
          >
            {isLoading ? "Enviando..." : "Contáctanos"}
          </button>
        </div>
      </form>
      <p className="mt-4 text-center text-sm text-white">{result}</p>
    </div>
  );
}

export default Contact;
