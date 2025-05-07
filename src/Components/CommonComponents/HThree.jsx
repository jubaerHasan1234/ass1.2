export default function HThree({ style, children, ...props }) {
  return (
    <h3 className={style} {...props}>
      {children}
    </h3>
  );
}
