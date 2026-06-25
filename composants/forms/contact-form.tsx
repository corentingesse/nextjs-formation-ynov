import contactAction from "@/actions/contact";

export default function ContactForm() {
  return (
    <form action={contactAction}>
      <input type="email" name="email" placeholder="Email" />
      <textarea name="message" placeholder="Message"></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
}
