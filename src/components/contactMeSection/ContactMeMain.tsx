import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div className="mt-10 mx-10 max-w-[1200px]">
      <h1 className="text-center text-4xl font-bold text-cyan mb-5">
        Contact Me
      </h1>

      <div className="bg-lightBrown p-6 rounded-xl flex flex-col items-center md:flex-row md:justify-between gap-14">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
