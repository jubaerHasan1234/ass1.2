export default function ButtonAndAnchor({ children, style, ...props }) {
  return (
    <a className={style} {...props}>
      {children}
    </a>
  );
}
