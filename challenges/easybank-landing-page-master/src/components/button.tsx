export default function Button({ label, py = 3, px = 8 }) {
  const classGenerated = `text-white hover:opacity-75 duration-300 py-${py} px-${px} rounded-full gradient-shift`;
  return <button className={classGenerated}>{label}</button>;
}
