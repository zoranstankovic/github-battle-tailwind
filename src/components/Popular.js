function Popular() {
  const languages = ["All", "Javascript", "Ruby", "Java", "Rust", "Python"];
  return (
    <ul className="flex justify-center items-center">
      {languages.map((language) => (
        <li key={language}>
          <button className="btn btn-ghost">{language}</button>
        </li>
      ))}
    </ul>
  );
}
export default Popular;
