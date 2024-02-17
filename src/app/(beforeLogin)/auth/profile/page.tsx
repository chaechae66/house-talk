import AddrProvider from "../../_components/AddrProvider";
import ProfileForm from "../../_components/ProfileForm";

export default function Profile() {
  return (
    <div className="flex-center w-full flex-col">
      <div className="w-1/2">
        <h2 className="my-8 h-auto text-center text-2xl">추가정보 기입</h2>
        <h3 className="mb-2">동의서</h3>
        <div className="border-standard mb-2 h-64 overflow-y-scroll p-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          temporibus veniam autem eaque, doloremque repudiandae, eos eligendi
          atque minima sapiente iusto perspiciatis. Dolorem expedita
          necessitatibus quaerat vel error mollitia a. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Numquam temporibus veniam autem
          eaque, doloremque repudiandae, eos eligendi atque minima sapiente
          iusto perspiciatis. Dolorem expedita necessitatibus quaerat vel error
          mollitia a.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam temporibus veniam autem eaque, doloremque repudiandae, eos
          eligendi atque minima sapiente iusto perspiciatis. Dolorem expedita
          necessitatibus quaerat vel error mollitia a. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Numquam temporibus veniam autem
          eaque, doloremque repudiandae, eos eligendi atque minima sapiente
          iusto perspiciatis. Dolorem expedita necessitatibus quaerat vel error
          mollitia a. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam temporibus veniam autem eaque, doloremque repudiandae, eos
          eligendi atque minima sapiente iusto perspiciatis. Dolorem expedita
          necessitatibus quaerat vel error mollitia a. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Numquam temporibus veniam autem
          eaque, doloremque repudiandae, eos eligendi atque minima sapiente
          iusto perspiciatis. Dolorem expedita necessitatibus quaerat vel error
          mollitia a.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam temporibus veniam autem eaque, doloremque repudiandae, eos
          eligendi atque minima sapiente iusto perspiciatis. Dolorem expedita
          necessitatibus quaerat vel error mollitia a. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Numquam temporibus veniam autem
          eaque, doloremque repudiandae, eos eligendi atque minima sapiente
          iusto perspiciatis. Dolorem expedita necessitatibus quaerat vel error
          mollitia a.
        </div>
        <AddrProvider>
          <ProfileForm />
        </AddrProvider>
      </div>
    </div>
  );
}
