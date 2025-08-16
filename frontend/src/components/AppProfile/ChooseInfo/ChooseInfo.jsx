export default function ChooseInfo({onClick, children}) {
  return (
    <li >
      <button
        onClick={onClick}
        className="cursor-pointer hover:bg-gray-700 w-full"
      >{children}</button>
    </li>
  );
}
