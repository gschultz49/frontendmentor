import sharedStyles from "./shared-styles";
export default function Button({ label, py = 3, px = 8 }) {
  const classGenerated = `text-white hover:opacity-75 duration-300 py-${py} px-${px} rounded-full gradient-shift`;
  return (
    <>
      <button className={classGenerated}>{label}</button>
      <style jsx>
        {`
          button {
            font-size: calc(${sharedStyles.mainFontSize} - 2px);
          }
          .gradient-shift {
            background-image: linear-gradient(
              to right,
              hsl(136, 65%, 51%),
              hsl(192, 70%, 51%)
            );
          }
        `}
      </style>
    </>
  );
}
